using System.ComponentModel.DataAnnotations;

namespace GestaoFinanceira.API.Models
{
    public class Categoria
    {
        public Categoria() { }
        public Categoria(int id, String nomeCategoria)
        {
            this.Id = id;
            this.NomeCatergoria = nomeCategoria;
        }

        [Key]
        [Required]
        public int Id { get; set; }

        [Required(ErrorMessage = "O Campo categorias é obrigatório")]
        [StringLength(50, ErrorMessage = "O limite do campo categoria é de 100 caracteries")]
        public String NomeCatergoria { get; set; }
        public IEnumerable<Conta> Conta { get; set; }
    }
}
