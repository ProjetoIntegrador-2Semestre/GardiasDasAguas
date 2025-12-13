using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackEndAPI.Data;
using BackEndAPI.Models;

namespace BackEndAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MidiasController : ControllerBase
    {
        private readonly BackEndAPIContext _context;

        public MidiasController(BackEndAPIContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Midia>>> GetMidias()
        {
            return await _context.Midias.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Midia>> GetMidia(int id)
        {
            var midia = await _context.Midias.FindAsync(id);

            if (midia == null)
            {
                return NotFound();
            }

            return midia;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutMidia(int id, Midia midia)
        {
            if (id != midia.Id)
            {
                return BadRequest();
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

        [HttpPost]
        public async Task<ActionResult<Midia>> PostMidia(Midia midia)
        {
            _context.Midias.Add(midia);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMidia", new { id = midia.Id }, midia);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMidia(int id)
        {
            var midia = await _context.Midias.FindAsync(id);
            if (midia == null)
            {
                return NotFound();
            }

            _context.Midias.Remove(midia);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MidiaExists(int id)
        {
            return _context.Midias.Any(e => e.Id == id);
        }
    }
}
