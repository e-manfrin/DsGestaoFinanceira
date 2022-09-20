using GestaoFinanceira.API.Dtos;
using GestaoFinanceira.API.Models;

namespace GestaoFinanceira.API.Data
{
    public interface IRepository
    {
        void Add<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        bool SaveChanges();
        public List<Conta> GetAllContas(int mes, int ano);
        public Conta GetContaById(int id);
    }
}