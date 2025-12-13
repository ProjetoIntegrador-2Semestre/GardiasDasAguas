namespace BackEndAPI.Models;

public class Evento : Postagem
{
    public required string Local { get; set; }
    public DateTime DataHora { get; set; }
    
    // Simplification: In the future, this could be a list of User IDs or Objects
    // public List<Usuario> Participantes { get; set; } = new();
}
