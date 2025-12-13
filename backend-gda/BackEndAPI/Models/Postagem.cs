namespace BackEndAPI.Models;

public class Postagem
{
    public int Id { get; set; }
    public required string Titulo { get; set; }
    public required string Descricao { get; set; }
    public string? ImagemUrl { get; set; }
    public string? TextoBotao { get; set; }
    public string? LinkBotao { get; set; }
    
    // Relations
    // Usuario relation? Diagram says Usuario --> Postagem.
    public int? UsuarioId { get; set; }
    public Usuario? Usuario { get; set; }
}
