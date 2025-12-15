using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackEndAPI.Data;
using BackEndAPI.DTOs;
using BackEndAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BackEndAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MidiasController : ControllerBase
    {
        // ... (start of class)

        [HttpPost]
        public async Task<ActionResult<Midia>> PostMidia(
            [FromForm] CreateMidiaDto dto,
            [FromHeader(Name = "X-Usuario-Id")] int? usuarioId
        )
        {
            if (dto.Arquivo == null && string.IsNullOrEmpty(dto.Url))
            {
                return BadRequest("É necessário fornecer um arquivo ou uma URL.");
            }

            var midia = new Midia
            {
                Tipo = dto.Tipo,
                Titulo = dto.Titulo,
                GaleriaId = dto.GaleriaId,
                UsuarioId = usuarioId,
                DataCriacao = DateTime.UtcNow,
                Url = dto.Url ?? "temp", // Será atualizado se for arquivo
            };

            if (dto.Arquivo != null)
            {
                using var memoryStream = new MemoryStream();
                await dto.Arquivo.CopyToAsync(memoryStream);
                midia.DadosImagem = memoryStream.ToArray();
            }

            _context.Midias.Add(midia);
            await _context.SaveChangesAsync();

            if (dto.Arquivo != null)
            {
                midia.Url = $"api/Midias/{midia.Id}/imagem";
                _context.Entry(midia).State = EntityState.Modified;
                await _context.SaveChangesAsync();
            }

            return CreatedAtAction("GetMidia", new { id = midia.Id }, midia);
        }

        private readonly BackEndAPIContext _context;

        public MidiasController(BackEndAPIContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Midia>>> GetMidias()
        {
            return await _context.Midias.Include(m => m.Usuario).ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Midia>> GetMidia(int id)
        {
            var midia = await _context
                .Midias.Include(m => m.Usuario)
                .FirstOrDefaultAsync(m => m.Id == id);

            if (midia == null)
            {
                return NotFound();
            }

            return midia;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutMidia(
            int id,
            Midia midia,
            [FromHeader(Name = "X-Usuario-Id")] int? usuarioId,
            [FromHeader(Name = "X-Usuario-Tipo")] string? tipoUsuario
        )
        {
            if (id != midia.Id)
            {
                return BadRequest();
            }

            var midiaExistente = await _context.Midias.FindAsync(id);
            if (midiaExistente == null)
            {
                return NotFound();
            }

            // Validar permissões: apenas Admin ou criador pode editar
            if (!PodeEditarMidia(midiaExistente, usuarioId, tipoUsuario))
            {
                return StatusCode(
                    403,
                    new { message = "Você não tem permissão para editar esta mídia" }
                );
            }

            _context.Entry(midia).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MidiaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpGet("{id}/imagem")]
        public async Task<IActionResult> GetImagem(int id)
        {
            var midia = await _context.Midias.FindAsync(id);
            if (midia == null || midia.DadosImagem == null)
            {
                return NotFound();
            }
            return File(midia.DadosImagem, "image/jpeg");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMidia(
            int id,
            [FromHeader(Name = "X-Usuario-Id")] int? usuarioId,
            [FromHeader(Name = "X-Usuario-Tipo")] string? tipoUsuario
        )
        {
            var midia = await _context.Midias.FindAsync(id);
            if (midia == null)
            {
                return NotFound();
            }

            // Validar permissões: Admin pode excluir todas, Escritor apenas as próprias
            if (!PodeExcluirMidia(midia, usuarioId, tipoUsuario))
            {
                return StatusCode(
                    403,
                    new { message = "Você não tem permissão para excluir esta mídia" }
                );
            }

            _context.Midias.Remove(midia);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MidiaExists(int id)
        {
            return _context.Midias.Any(e => e.Id == id);
        }

        private bool PodeEditarMidia(Midia midia, int? usuarioId, string? tipoUsuario)
        {
            // Admin pode editar qualquer mídia
            if (tipoUsuario == "Admin")
                return true;

            // Criador pode editar sua própria mídia
            if (usuarioId.HasValue && midia.UsuarioId == usuarioId.Value)
                return true;

            return false;
        }

        private bool PodeExcluirMidia(Midia midia, int? usuarioId, string? tipoUsuario)
        {
            // Admin pode excluir qualquer mídia
            if (tipoUsuario == "Admin")
                return true;

            // Escritor pode excluir apenas suas próprias mídias
            if (
                tipoUsuario == "Escritor"
                && usuarioId.HasValue
                && midia.UsuarioId == usuarioId.Value
            )
                return true;

            return false;
        }
    }
}
