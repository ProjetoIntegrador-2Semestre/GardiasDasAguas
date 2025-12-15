namespace BackEndAPI.DTOs;

public class UpdateUsuarioProfileDto
{
    public required string Nome { get; set; }
    public required string Apelido { get; set; }
    public string? Bio { get; set; }
    public string? FotoPerfil { get; set; }
}
