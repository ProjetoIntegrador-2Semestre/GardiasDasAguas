using Microsoft.EntityFrameworkCore;
using BackEndAPI.Models;

namespace BackEndAPI.Data;

public class BackEndAPIContext : DbContext
{
    public BackEndAPIContext(DbContextOptions<BackEndAPIContext> options)
        : base(options)
    {
    }

    public DbSet<Usuario> Usuarios { get; set; } = default!;
    public DbSet<Postagem> Postagens { get; set; } = default!;
    public DbSet<Evento> Eventos { get; set; } = default!;
    public DbSet<Comentario> Comentarios { get; set; } = default!;
    public DbSet<Galeria> Galerias { get; set; } = default!;
    public DbSet<Midia> Midias { get; set; } = default!;
    
     protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Enum to string conversion if needed, or other fluent config
        // Inheritance handling for Evento < Postagem (TPH is default)
        base.OnModelCreating(modelBuilder);
    }
}
