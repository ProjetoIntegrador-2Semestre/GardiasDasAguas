namespace BackEndAPI.DTOs
{
    public class AlterarSenhaDto
    {
        public required string Email { get; set; }
        public required string SenhaAtual { get; set; }
        public required string NovaSenha { get; set; }
    }
}
