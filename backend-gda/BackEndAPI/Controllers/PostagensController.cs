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
    public class PostagensController : ControllerBase
    {
        private readonly BackEndAPIContext _context;

        public PostagensController(BackEndAPIContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Postagem>>> GetPostagens()
        {
            return await _context.Postagens.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Postagem>> GetPostagem(int id)
        {
            var postagem = await _context.Postagens.FindAsync(id);

            if (postagem == null)
            {
                return NotFound();
            }

            return postagem;
        }

        [HttpGet("usuario/{usuarioId}")]
        public async Task<ActionResult<IEnumerable<Postagem>>> GetPostagensByUsuario(int usuarioId)
        {
            return await _context.Postagens.Where(p => p.UsuarioId == usuarioId).ToListAsync();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutPostagem(int id, Postagem postagem)
        {
            if (id != postagem.Id)
            {
                return BadRequest();
            }

            _context.Entry(postagem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PostagemExists(id))
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
            var postagem = await _context.Postagens.FindAsync(id);
            if (postagem == null || postagem.DadosImagem == null)
            {
                return NotFound();
            }
            return File(postagem.DadosImagem, "image/jpeg");
        }

        [HttpPost]
        public async Task<ActionResult<Postagem>> PostPostagem(
            [FromForm] CreatePostagemDto dto,
            [FromHeader(Name = "X-Usuario-Id")] int? usuarioId
        )
        {
            var postagem = new Postagem
            {
                Titulo = dto.Titulo,
                Descricao = dto.Descricao,
                ImagemUrl = dto.ImagemUrl,
                TextoBotao = dto.TextoBotao,
                LinkBotao = dto.LinkBotao,
                UsuarioId = dto.UsuarioId ?? usuarioId,
            };

            if (dto.Arquivo != null)
            {
                using var memoryStream = new MemoryStream();
                await dto.Arquivo.CopyToAsync(memoryStream);
                postagem.DadosImagem = memoryStream.ToArray();
            }

            _context.Postagens.Add(postagem);
            await _context.SaveChangesAsync();

            if (dto.Arquivo != null)
            {
                postagem.ImagemUrl = $"api/Postagens/{postagem.Id}/imagem";
                _context.Entry(postagem).State = EntityState.Modified;
                await _context.SaveChangesAsync();
            }

            return CreatedAtAction("GetPostagem", new { id = postagem.Id }, postagem);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePostagem(int id)
        {
            var postagem = await _context.Postagens.FindAsync(id);
            if (postagem == null)
            {
                return NotFound();
            }

            _context.Postagens.Remove(postagem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PostagemExists(int id)
        {
            return _context.Postagens.Any(e => e.Id == id);
        }
    }
}
