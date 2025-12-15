using Microsoft.AspNetCore.Http;

namespace BackEndAPI.DTOs;

public class CreatePostagemDto
{
    public IFormFile? Arquivo { get; set; }
    public required string Titulo { get; set; }
    public required string Descricao { get; set; }
    public string? ImagemUrl { get; set; }
    public string? TextoBotao { get; set; }
    public string? LinkBotao { get; set; }
    public int? UsuarioId { get; set; }
}
