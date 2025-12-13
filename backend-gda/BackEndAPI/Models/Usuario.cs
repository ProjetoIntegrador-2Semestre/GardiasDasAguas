namespace BackEndAPI.Models;

public class Usuario
{
    public int Id { get; set; }
    public required string Nome { get; set; } = string.Empty;
    public required string Apelido { get; set; } = string.Empty;
    public required string Email { get; set; } = string.Empty;
    public required string Senha { get; set; } = string.Empty;
    public string? Bio { get; set; }
}
