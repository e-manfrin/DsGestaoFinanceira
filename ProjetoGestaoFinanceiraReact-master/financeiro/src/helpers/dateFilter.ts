//LIsta de funções que filtra baseado em datas 
//Como filtra pela minha lista pelo mês?
//Todas as funções (manipulação) com datas para facilitar a manutenção do código
//ESta função pega o mês atual e retorna no padrão escrito na linha 9

import { Item } from '../types/Item';

export const getCurrentMonth = () => {
  const now = new Date(); //pega a data atual 
  //retorna o seguinte um templante typescript 
  return `${now.getFullYear()}-${now.getMonth()+1}`;
};

//Filtrar a lista pelo mês
//dentro do parâmetro receberei a lista pura e a date a data naquele padrão ano -mês
//O retorno será um [] de lista que é = a Item[] que já é uma lista

export const filterListByMonth = (list: Item[], date: string): Item[] => {
  //newList passa um [] vazio
  const newList: Item[] = [];
  //pegar o ano e mês através do split
  const [year, month] = date.split('-');

  //fazer a filtragem preciso fazer um loop em minha lista geral e adicionar dentro da minha lista
  for(const i in list) {
    if(
      list[i].date.getFullYear() === parseInt(year) && 
            (list[i].date.getMonth() + 1) === parseInt(month)
    ) {
      newList.push(list[i]);
    }
  }

  //retorna uma nova lista
  return newList;
};

//Formatar uma data passando por parâmetro o date que é uma data e retornar uma string
export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
};

//Adiconar quando nescessário o 0 antes do dia
const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`;

//Formatar o mês atual
//Passaremos no parâmetro o o mês atual currentMonth e retorna uma string
export const formatCurrentMonth = (currentMonth: string): string => {

  // parâmetro mes e ano e realiza um split -
  const [year, month] = currentMonth.split('-');
  //um lista com os meses em português
  const months = ['Janeiro', 'fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  //Pega o mes em string e o mes em número -1 para dar o mês correto
  return `${months[parseInt(month) - 1]} de ${year}`;
};

//Data nova contendo o ano , mês e dia.
export const newDateAdjusted = (dateField: string) => {
  const [year, month, day] = dateField.split('-');
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
};