using GestaoFinanceira.API.Dtos;
using GestaoFinanceira.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace GestaoFinanceira.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContasController : ControllerBase
    {
        private readonly ListarContaService _listarContaService;
        private readonly CadastarContaService _cadastarContaService;
        private readonly ExcluirContaService _excluirContaService;
        private readonly IServico _iServico;
        public ContasController(ListarContaService listarContaService, IServico iServico,
            CadastarContaService cadastarContaService, ExcluirContaService excluirContaService)
        {
            _listarContaService = listarContaService;
            _iServico = iServico;
            _cadastarContaService = cadastarContaService;
            _excluirContaService = excluirContaService;
        }

        [HttpGet]
        public IActionResult BuscarContas([FromQuery] FiltroMesAnoDto filtroMesAnoDto)
        {
            var result = _listarContaService.listarContas(filtroMesAnoDto.Mes, filtroMesAnoDto.Ano);
            return Ok(result);
        }

        [HttpPost]
        public IActionResult CadastarConta([FromBody] CreateContaDto createContaDto)
        {
            var result = _cadastarContaService.AdicionarConta(createContaDto);
            if(result == null)
            {
                return BadRequest();
            }
            return Ok(result);
        }

        [HttpDelete("{id}")]
        public IActionResult DeletarConta(int id)
        {
            bool verificar = _excluirContaService.ExcluirConta(id);
            if(verificar == true)
            {
                return Ok();
            }
            return BadRequest("Conta não excluída");
        }
    }
}