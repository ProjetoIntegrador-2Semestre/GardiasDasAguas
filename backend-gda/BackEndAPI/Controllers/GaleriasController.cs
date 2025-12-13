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
    public class GaleriasController : ControllerBase
    {
        private readonly BackEndAPIContext _context;

        public GaleriasController(BackEndAPIContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Galeria>>> GetGalerias()
        {
            return await _context.Galerias.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Galeria>> GetGaleria(int id)
        {
            var galeria = await _context.Galerias.FindAsync(id);

            if (galeria == null)
            {
                return NotFound();
            }

            return galeria;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutGaleria(int id, Galeria galeria)
        {
            if (id != galeria.Id)
            {
                return BadRequest();
            }

            _context.Entry(galeria).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GaleriaExists(id))
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
        public async Task<ActionResult<Galeria>> PostGaleria(Galeria galeria)
        {
            _context.Galerias.Add(galeria);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGaleria", new { id = galeria.Id }, galeria);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGaleria(int id)
        {
            var galeria = await _context.Galerias.FindAsync(id);
            if (galeria == null)
            {
                return NotFound();
            }

            _context.Galerias.Remove(galeria);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool GaleriaExists(int id)
        {
            return _context.Galerias.Any(e => e.Id == id);
        }
    }
}
