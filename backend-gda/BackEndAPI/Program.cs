using BackEndAPI.Data;
using BackEndAPI.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddOpenApi();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<BackEndAPIContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("BackEndAPIContext"))
);

builder.Services.AddCors(options =>
{
    options.AddPolicy(
        name: "FrontendPolicy",
        builder =>
        {
            builder.WithOrigins("http://localhost:3000").AllowAnyMethod().AllowAnyHeader();
        }
    );
});

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    try
    {
        var context = services.GetRequiredService<BackEndAPIContext>();
        context.Database.Migrate();

        // 1. Seed Users
        if (!context.Usuarios.Any())
        {
            var sistema = new Usuario
            {
                Nome = "Sistema",
                Apelido = "sistema",
                Email = "noreply@local",
                Senha = "changeme",
                Bio = "Conta de sistema",
                TipoUsuario = "Admin",
            };
            context.Usuarios.Add(sistema);
            context.SaveChanges();
        }

        var sistemaUser = context.Usuarios.FirstOrDefault(u => u.Apelido == "sistema");

        // 2. Seed Galleries (Fixes FK Violation)
        if (!context.Galerias.Any())
        {
            var galeriaGeral = new Galeria { Titulo = "Geral" };
            context.Galerias.Add(galeriaGeral);
            context.SaveChanges();
        }

        // 3. Seed Posts
        if (!context.Postagens.Any() && sistemaUser != null)
        {
            var seedPosts = new List<Postagem>
            {
                new Postagem
                {
                    Titulo = "Bem-vindo ao Guardiãs das Águas",
                    Descricao = "Este é um post de boas-vindas para preencher os cards do feed.",
                    ImagemUrl = "https://picsum.photos/seed/p1/800/400",
                    TextoBotao = "Ler mais",
                    LinkBotao = "#",
                    UsuarioId = sistemaUser.Id,
                },
                new Postagem
                {
                    Titulo = "Ação de Limpeza Praia",
                    Descricao = "Participe da ação de limpeza na praia neste sábado.",
                    ImagemUrl = "https://picsum.photos/seed/p2/800/400",
                    TextoBotao = "Inscreva-se",
                    LinkBotao = "#",
                    UsuarioId = sistemaUser.Id,
                },
                new Postagem
                {
                    Titulo = "Galeria: Momentos do Projeto",
                    Descricao = "Confira algumas fotos do nosso trabalho recente.",
                    ImagemUrl = "https://picsum.photos/seed/p3/800/400",
                    TextoBotao = "Ver Galeria",
                    LinkBotao = "#",
                    UsuarioId = sistemaUser.Id,
                },
                new Postagem
                {
                    Titulo = "Proteja Nossas Águas",
                    Descricao =
                        "Campanha de limpeza das praias e rios locais. Junte-se a nós no próximo sábado.",
                    ImagemUrl = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
                    TextoBotao = "Saiba Mais",
                    LinkBotao = "https://example.com/acao",
                    UsuarioId = sistemaUser.Id,
                },
                new Postagem
                {
                    Titulo = "Evento de Educação Ambiental",
                    Descricao = "Palestras e oficinas sobre conservação marinha para estudantes.",
                    ImagemUrl = "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
                    TextoBotao = "Inscreva-se",
                    LinkBotao = "https://example.com/evento",
                    UsuarioId = sistemaUser.Id,
                },
                new Postagem
                {
                    Titulo = "Galeria: Vida Marinha",
                    Descricao =
                        "Confira fotos enviadas pela comunidade sobre a vida marinha local.",
                    ImagemUrl = "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
                    TextoBotao = "Ver Galeria",
                    LinkBotao = "/Galeria",
                    UsuarioId = sistemaUser.Id,
                },
            };

            context.Postagens.AddRange(seedPosts);
            context.SaveChanges();
        }
    }
    catch (Exception ex)
    {
        var logger = services.GetRequiredService<ILogger<Program>>();
        logger.LogError(ex, "An error occurred creating/seeding the DB.");
    }
}

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("FrontendPolicy");

app.UseAuthorization();

app.MapControllers();

app.Run();
