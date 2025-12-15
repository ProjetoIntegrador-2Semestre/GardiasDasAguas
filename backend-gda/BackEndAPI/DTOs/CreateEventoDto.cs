using Microsoft.AspNetCore.Http;

namespace BackEndAPI.DTOs;

public class CreateEventoDto
{
    public IFormFile? Arquivo { get; set; }
    public required string Titulo { get; set; }
    public required string Descricao { get; set; }
    public required string Local { get; set; }
    public DateTime DataHora { get; set; }
    public string? ImagemUrl { get; set; }
    public string? TextoBotao { get; set; }
    public string? LinkBotao { get; set; }
    public int? UsuarioId { get; set; }
}
