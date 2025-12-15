using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackEndAPI.Data;
using BackEndAPI.Models;
using BackEndAPI.DTOs;

namespace BackEndAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private readonly BackEndAPIContext _context;

        public UsuariosController(BackEndAPIContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<UsuarioResponseDto>>> GetUsuarios()
        {
            return await _context.Usuarios
                .Select(u => new UsuarioResponseDto
                {
                    Id = u.Id,
                    Nome = u.Nome,
                    Apelido = u.Apelido,
                    Email = u.Email,
                    Bio = u.Bio,
                    TipoUsuario = u.TipoUsuario
                })
                .ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<UsuarioResponseDto>> GetUsuario(int id)
        {
            var usuario = await _context.Usuarios.FindAsync(id);

            if (usuario == null)
            {
                return NotFound();
            }

            return new UsuarioResponseDto
            {
                Id = usuario.Id,
                Nome = usuario.Nome,
                Apelido = usuario.Apelido,
                Email = usuario.Email,
                Bio = usuario.Bio,
                TipoUsuario = usuario.TipoUsuario
            };
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutUsuario(int id, Usuario usuario)
        {
            if (id != usuario.Id)
            {
                return BadRequest();
            }

            _context.Entry(usuario).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UsuarioExists(id))
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
        public async Task<ActionResult<UsuarioResponseDto>> PostUsuario(CreateUsuarioDto usuarioDto)
        {
            var usuario = new Usuario
            {
                Nome = usuarioDto.Nome,
                Apelido = usuarioDto.Apelido,
                Email = usuarioDto.Email,
                Senha = usuarioDto.Senha,
                Bio = usuarioDto.Bio
            };
            
            _context.Usuarios.Add(usuario);
            await _context.SaveChangesAsync();

            var responseDto = new UsuarioResponseDto
            {
                Id = usuario.Id,
                Nome = usuario.Nome,
                Apelido = usuario.Apelido,
                Email = usuario.Email,
                Bio = usuario.Bio,
                TipoUsuario = usuario.TipoUsuario
            };

            return CreatedAtAction("GetUsuario", new { id = usuario.Id }, responseDto);
        }

        [HttpPost("login")]
        public async Task<ActionResult<UsuarioResponseDto>> Login(LoginDto loginDto)
        {
            var usuario = await _context.Usuarios
                .FirstOrDefaultAsync(u => u.Email == loginDto.Email && u.Senha == loginDto.Senha);

            if (usuario == null)
            {
                return Unauthorized("Email ou senha inválidos.");
            }

            var responseDto = new UsuarioResponseDto
            {
                Id = usuario.Id,
                Nome = usuario.Nome,
                Apelido = usuario.Apelido,
                Email = usuario.Email,
                Bio = usuario.Bio,
                TipoUsuario = usuario.TipoUsuario
            };

            return Ok(responseDto);
        }

        [HttpPost("alterar-senha")]
        public async Task<IActionResult> AlterarSenha(AlterarSenhaDto alterarSenhaDto)
        {
            var usuario = await _context.Usuarios
                .FirstOrDefaultAsync(u => u.Email == alterarSenhaDto.Email && u.Senha == alterarSenhaDto.SenhaAtual);

            if (usuario == null)
            {
                return Unauthorized("Email ou senha atual inválidos.");
            }

            usuario.Senha = alterarSenhaDto.NovaSenha;
            await _context.SaveChangesAsync();

            return Ok(new { message = "Senha alterada com sucesso!" });
        }

        [HttpPost("recuperar-senha")]
        public async Task<IActionResult> RecuperarSenha(RecuperarSenhaDto recuperarSenhaDto)
        {
            var usuario = await _context.Usuarios
                .FirstOrDefaultAsync(u => u.Email == recuperarSenhaDto.Email);

            if (usuario == null)
            {
                return Ok(new { message = "Se o email existir, você receberá instruções para recuperação." });
            }

            return Ok(new { message = "Email de recuperação enviado com sucesso!" });
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUsuario(int id)
        {
            var usuario = await _context.Usuarios.FindAsync(id);
            if (usuario == null)
            {
                return NotFound();
            }

            _context.Usuarios.Remove(usuario);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPut("{id}/promover-admin")]
        public async Task<IActionResult> PromoverAdmin(int id)
        {
            var usuario = await _context.Usuarios.FindAsync(id);
            if (usuario == null) return NotFound();

            usuario.TipoUsuario = "Admin";
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UsuarioExists(int id)
        {
            return _context.Usuarios.Any(e => e.Id == id);
        }
    }
}
