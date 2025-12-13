namespace BackEndAPI.Models;

public class Evento : Postagem
{
    public required string Local { get; set; }
    public DateTime DataHora { get; set; }
}
