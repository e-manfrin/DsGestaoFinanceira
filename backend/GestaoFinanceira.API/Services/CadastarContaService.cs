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
                Conta conta = new Conta();
                conta.Descricao = createContaDto.Descricao;
                conta.CategoriaID = createContaDto.CategoriaId;
                int day = Int32.Parse(createContaDto.Data.Substring(0,2));
                int month = Int32.Parse(createContaDto.Data.Substring(3, 2));
                int year = Int32.Parse(createContaDto.Data.Substring(6, 4));
                DateOnly date = new DateOnly(year, month, day);
                conta.Data = date;
                conta.Valor = createContaDto.Valor;
                _repo.Add(conta);
                _repo.SaveChanges();
                ReadContaDto readContaDto = _mapper.Map<ReadContaDto>(conta);                
                return readContaDto;
            }
            catch (DbUpdateException erro)
            {
                erro.GetBaseException();
                return null;
            }
        }
    }
}