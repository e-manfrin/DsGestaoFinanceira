using AutoMapper;
using GestaoFinanceira.API.Data;
using GestaoFinanceira.API.Dtos;
using GestaoFinanceira.API.Models;
using Microsoft.EntityFrameworkCore;

namespace GestaoFinanceira.API.Services
{
    public class ExcluirContaService
    {
        public readonly IRepository _repo;
        public readonly IServico _iServico;
        private IMapper _mapper;

        public ExcluirContaService(IRepository repo, IServico iServico, IMapper mapper)
        {
            _repo = repo;
            _iServico = iServico;
            _mapper = mapper;
        }

        public bool ExcluirConta(int id)
        {
           var delete = _repo.GetContaById(id);
             if (delete == null)
             {
                throw new Exception("Conta não encontrada");
             }
             _repo.Delete(delete);

            return _repo.SaveChanges();
        }
    }
}
