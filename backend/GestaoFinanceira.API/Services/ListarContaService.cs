using AutoMapper;
using GestaoFinanceira.API.Data;
using GestaoFinanceira.API.Dtos;
using GestaoFinanceira.API.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Data;
using System.Drawing;

namespace GestaoFinanceira.API.Services
{
    public class ListarContaService
    {
        public readonly IRepository _repo;
        public readonly IServico _iServico;
        private IMapper _mapper;

        public ListarContaService(IRepository repo, IServico iServico, IMapper mapper)
        {
            _repo = repo;
            _iServico = iServico;
            _mapper = mapper;   
        }
        
        public List<ReadContaDto> listarContas(int mes, int ano)
        {

            List<Conta> resultConta = _repo.GetAllContas(mes, ano);
            List<ReadContaDto> novaListaDto = new List<ReadContaDto>();
            foreach (var result in resultConta)
            {
                ReadContaDto readContaDto = new ReadContaDto();
                readContaDto.Descricao = result.Descricao;
                readContaDto.Valor = result.Valor;
                readContaDto.CategoriaId = result.CategoriaID;
                readContaDto.Data = result.Data;
                novaListaDto.Add(readContaDto);
            }
            return novaListaDto;
        }

    }
}
