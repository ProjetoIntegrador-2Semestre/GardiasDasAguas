namespace BackEndAPI.Models;

public class Galeria
{
    public int Id { get; set; }
    public required string Titulo { get; set; }
    public List<Midia> Midias { get; set; } = new();
}
