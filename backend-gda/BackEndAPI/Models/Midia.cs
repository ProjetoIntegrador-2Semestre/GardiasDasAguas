namespace BackEndAPI.Models;

public class Midia
{
    public int Id { get; set; }
    public required string Url { get; set; }
    public required string Tipo { get; set; }

    public int GaleriaId { get; set; }
    public Galeria? Galeria { get; set; }
}
