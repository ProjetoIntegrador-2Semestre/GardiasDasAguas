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
    public class EventosController : ControllerBase
    {
        private readonly BackEndAPIContext _context;

        public EventosController(BackEndAPIContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Evento>>> GetEventos()
        {
            return await _context.Eventos.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Evento>> GetEvento(int id)
        {
            var evento = await _context.Eventos.FindAsync(id);

            if (evento == null)
            {
                return NotFound();
            }

            return evento;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutEvento(int id, Evento evento)
        {
            if (id != evento.Id)
            {
                return BadRequest();
            }

            _context.Entry(evento).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EventoExists(id))
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

        [HttpPost]
        public async Task<ActionResult<Evento>> PostEvento(
            [FromForm] CreateEventoDto dto,
            [FromHeader(Name = "X-Usuario-Id")] int? usuarioId
        )
        {
            var evento = new Evento
            {
                Titulo = dto.Titulo,
                Descricao = dto.Descricao,
                Local = dto.Local,
                DataHora = dto.DataHora.ToUniversalTime(), // Ensure UTC
                ImagemUrl = dto.ImagemUrl,
                TextoBotao = dto.TextoBotao,
                LinkBotao = dto.LinkBotao,
                UsuarioId = dto.UsuarioId ?? usuarioId,
            };

            if (dto.Arquivo != null)
            {
                using var memoryStream = new MemoryStream();
                await dto.Arquivo.CopyToAsync(memoryStream);
                evento.DadosImagem = memoryStream.ToArray();
            }

            _context.Eventos.Add(evento);
            await _context.SaveChangesAsync();

            if (dto.Arquivo != null)
            {
                evento.ImagemUrl = $"api/Eventos/{evento.Id}/imagem";
                _context.Entry(evento).State = EntityState.Modified;
                await _context.SaveChangesAsync();
            }

            return CreatedAtAction("GetEvento", new { id = evento.Id }, evento);
        }

        [HttpGet("{id}/imagem")]
        public async Task<IActionResult> GetImagem(int id)
        {
            var evento = await _context.Eventos.FindAsync(id);
            if (evento == null || evento.DadosImagem == null)
            {
                return NotFound();
            }
            return File(evento.DadosImagem, "image/jpeg");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEvento(int id)
        {
            var evento = await _context.Eventos.FindAsync(id);
            if (evento == null)
            {
                return NotFound();
            }

            _context.Eventos.Remove(evento);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EventoExists(int id)
        {
            return _context.Eventos.Any(e => e.Id == id);
        }
    }
}
