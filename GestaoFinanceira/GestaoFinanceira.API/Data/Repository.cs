using GestaoFinanceira.API.Dtos;
using GestaoFinanceira.API.Models;
using Microsoft.EntityFrameworkCore;

namespace GestaoFinanceira.API.Data
{
    public class Repository : IRepository
    {
        public readonly ContaContext _contaContext;
        public Repository(ContaContext contaContext)
        {
            _contaContext = contaContext;
        }
        public void Add<T>(T entity) where T : class
        {
            _contaContext.Add(entity);
        }
        public void Delete<T>(T entity) where T : class
        {
            _contaContext.Remove(entity);
        }
        public bool SaveChanges()
        {
            return(_contaContext.SaveChanges() > 0);
        }
        public void Update<T>(T entity) where T : class
        {
            _contaContext.Update(entity);
        }
        public List<Conta> GetAllContas(int mes, int ano)
        {
            IQueryable<Conta> query = _contaContext.Contas;

            query = query.AsNoTracking()
                .Where(conta => conta.Data.Month == mes && conta.Data.Year == ano)
                .OrderBy(conta => conta.Data);

            return query.ToList();
        }

        public Conta GetContaById(int id)
        {
            IQueryable<Conta> query = _contaContext.Contas;

            query = query.AsNoTracking()
                         .Where(conta => conta.Id == id);

            return query.FirstOrDefault();
        }
    }
}
