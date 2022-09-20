using GestaoFinanceira.API.Models;
using Microsoft.EntityFrameworkCore;

namespace GestaoFinanceira.API.Data
{
    public class ContaContext : DbContext
    {
        public ContaContext(DbContextOptions<ContaContext> opt) : base(opt)
        {

        }
        public DbSet<Conta> Contas { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Categoria>()
                .HasData(new List<Categoria>()
                {
                    new Categoria(3,"Alimentação"),
                    new Categoria(4,"Salário"),
                });

            builder.Entity<Conta>()
                .HasData(new List<Conta>()
                {
                    new Conta(10,new DateTime(2022, 7, 5), "Conta de luz", 190.9, 3),
                    new Conta(11,new DateTime(2022, 8, 5), "Conta de Água",90.6,4),
                    new Conta(12,new DateTime(2022, 8, 5), "Conta de Gás", 100.1,4),
                });
        }
    }
}