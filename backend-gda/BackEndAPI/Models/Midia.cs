namespace BackEndAPI.Models;

public class Midia
{
    public int Id { get; set; }
    public required string Url { get; set; }
    public required string Tipo { get; set; }
    public string? Titulo { get; set; }
    public DateTime? DataCriacao { get; set; }

    public int GaleriaId { get; set; }
    public Galeria? Galeria { get; set; }

    public int? UsuarioId { get; set; }
    public Usuario? Usuario { get; set; }

    public byte[]? DadosImagem { get; set; }
}
