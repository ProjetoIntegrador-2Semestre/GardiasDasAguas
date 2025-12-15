using Microsoft.AspNetCore.Http;

namespace BackEndAPI.DTOs;

public class CreateMidiaDto
{
    public IFormFile? Arquivo { get; set; }
    public string? Url { get; set; }
    public required string Tipo { get; set; }
    public string? Titulo { get; set; }
    public int GaleriaId { get; set; }
}
