using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Models;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OwnerController : ControllerBase
    {
        private readonly BienesRaicesContext _dbcontex;

        public OwnerController(BienesRaicesContext context)
        {
            _dbcontex = context;
        }

        [HttpGet]
        [Route("Lista")]

        public async Task<IActionResult> Lista() 
        {
            List<Owner> lista = await _dbcontex.Owners.OrderByDescending(c => c.IdOwner).ToListAsync();

            return StatusCode(StatusCodes.Status200OK, lista);
        }

        [HttpPost]
        [Route("Guardar")]

        public async Task<IActionResult> Guardar([FromBody] Owner request)
        {
            await _dbcontex.Owners.AddAsync(request);
            await _dbcontex.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpPut]
        [Route("Editar")]

        public async Task<IActionResult> Editar([FromBody] Owner request)
        {
             _dbcontex.Owners.Update(request);
            await _dbcontex.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpDelete]
        [Route("Eliminar/{idowner}")]

        public async Task<IActionResult> Eliminar(int idowner)
        {
            Owner owner = _dbcontex.Owners.Find(idowner);

            _dbcontex.Owners.Remove(owner);
            await _dbcontex.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }
    }
}
