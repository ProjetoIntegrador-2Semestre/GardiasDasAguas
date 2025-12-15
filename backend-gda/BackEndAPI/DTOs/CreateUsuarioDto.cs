using System.ComponentModel.DataAnnotations;

namespace BackEndAPI.DTOs;

public class CreateUsuarioDto
{
    [Required]
    public string Nome { get; set; } = string.Empty;
    
    [Required]
    public string Apelido { get; set; } = string.Empty;
    
    [Required]
    [EmailAddress]
    public string Email { get; set; } = string.Empty;
    
    [Required]
    [MinLength(6)]
    public string Senha { get; set; } = string.Empty;
    
    public string? Bio { get; set; }
}
