using System.ComponentModel.DataAnnotations;

namespace GestaoFinanceira.API.Models
{
    public class Conta
    {
        public Conta() { }
        public Conta(int id, DateTime data, string descricao, double valor, int categoriaID)
        {
            this.Id = id;
            this.Data = data;
            this.Descricao = descricao;
            this.Valor = valor;
            this.CategoriaID = categoriaID;
        }

        [Key]
        [Required]
        public int Id { get; set; }
        [Required(ErrorMessage = "O Campo Data é obrigatório")]
        public DateTime Data { get; set; }

        [Required(ErrorMessage = "O Campo Descricao é obrigatório")]
        [StringLength(50, ErrorMessage = "O limite do campo Descricao é de 50 caracteries")]
        public string Descricao { get; set; }

        [Required(ErrorMessage = "O Campo Valor é obrigatório")]
        public double Valor { get; set; }
        public int CategoriaID { get; set; }
        public Categoria Categorias { get; set; }
    }
}
