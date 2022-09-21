using GestaoFinanceira.API.Models;
using System.ComponentModel.DataAnnotations;

namespace GestaoFinanceira.API.Dtos
{
    public class ReadContaDto
    {
        [Key]
        [Required]
        public int Id { get; set; }
        public DateOnly Data { get; set; }

        [Required(ErrorMessage = "O Campo Descricao é obrigatório")]
        [StringLength(100, ErrorMessage = "O limite do campo Descricao é de 100 caracteries")]
        public string Descricao { get; set; }

        [Required(ErrorMessage = "O Campo Valor é obrigatório")]
        public double Valor { get; set; }
        public int CategoriaId { get; set; }
    }
}