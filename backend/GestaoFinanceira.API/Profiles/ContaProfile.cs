using AutoMapper;
using GestaoFinanceira.API.Dtos;
using GestaoFinanceira.API.Models;

namespace GestaoFinanceira.API.Profiles
{
    public class ContaProfile : Profile
    {
        public ContaProfile()
        {
            CreateMap<CreateContaDto, Conta>();
            CreateMap<Conta, ReadContaDto>();
            CreateMap<UpdateContaDto, Conta>();
        }

    }
}
