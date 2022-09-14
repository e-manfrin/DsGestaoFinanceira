using AutoMapper;
using GestaoFinanceira.API.Data;
using GestaoFinanceira.API.Dtos;
using GestaoFinanceira.API.Models;
using Microsoft.EntityFrameworkCore;

namespace GestaoFinanceira.API.Services
{
    public class CadastarContaService
    {
        public readonly IRepository _repo;
        public readonly IServico _iServico;
        private IMapper _mapper;

        public CadastarContaService(IRepository repo, IServico iServico, IMapper mapper)
        {
            _repo = repo;
            _iServico = iServico;
            _mapper = mapper;
        }

        public ReadContaDto AdicionarConta(CreateContaDto createContaDto)
        {
            try
            {
                Conta conta = _mapper.Map<Conta>(createContaDto);
                _repo.Add(conta);
                ReadContaDto readContaDto = _mapper.Map<ReadContaDto>(conta);
                _repo.SaveChanges();
                return readContaDto;
            }
            catch(DbUpdateException erro)
            {
                erro.GetBaseException();
                return null;
            }
        }
    }
}
