import { useState, useEffect } from 'react';
import * as C from './styles';
import { Item } from '../../types/Item';
import { items } from '../../data/items';
import { categories } from '../../data/categories';
import { getCurrentMonth, filterListByMonth } from '../../helpers/dateFilter';
import { TableArea } from '../../components/TableArea';
import { InfoArea } from '../../components/InfoArea';
import { InputArea } from '../../components/InputArea';
import axios from 'axios';
import http from '../../utils/request';
import { type } from 'os';


const Financial = () => {

  //Lista completa
  const [list, setList] = useState<Item[]>(items);

  //fazer a filtragem para saber qual é o mês atual 
  //Dentro do parametro passa um [] vazio => após a tipagem passa ser um array de Item
  //E tipa o Item[]
  const [filteredList, setFilteredList] = useState<Item[]>([]);

  //mês que está rodando as informações no parâmetro passar a informação do mês atual: através da função
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  //GET
  const getData = async () => {
    await http.get('/contas?mes=8&ano=2022').then((response) => {
      setFilteredList(response.data);
    });
  };

  //Excluir
  const handleExcluir = (index: number, id: number) => {
    const newRemoved = [...filteredList];
    axios.delete(`http://localhost:5001/api/contas/${id}`).then(response => {
      newRemoved.splice(index, 1);
      setFilteredList(newRemoved);
    });
  };

  const handleAddItem = (item: Item) => {
    // console.log(item);
    const newList = [...filteredList];
    
    axios({
      method: 'post',
      url: 'http://localhost:5001/api/contas',
      data: {
        data: String(item.data).replace(' (Hora padrão de Brasília)', ''),
        categoriaId: Number(localStorage.getItem('categoriaId')),
        descricao: String(item.descricao),
        valor: Number(item.valor)
      },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      console.log(response.data);
    }).catch((error)=>{
      console.log(error.data);
      console.log(error.status);
      console.log(error.headers);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  //UseEffect monitora determinada circunstância e sempre que algo modificar executa  a função que criamos
  //O array irá monitorar duas variáveis list,currentMonth -> se a lista ou o currentMonth modificar(alterar)
  //tenho que filtar novamente  
  // useEffect(() => {
  //   setFilteredList(filterListByMonth(list, currentMonth));
  // }, [list, currentMonth]);

  //UseEffect monitora determinada circunstância e sempre que algo modificar executa  a função que criamos
  //Verifica se é uma receita ou despesa
  //Quando o filteredList perceber uma modificação 
  useEffect(() => {

    //Zera todos para iniciar um contagem
    let incomeCount = 0;
    let expenseCount = 0;

    //Filtra por filteredList
    for (const i in filteredList) {
      if (categories[filteredList[i].categoriaId].expense) {
        expenseCount += filteredList[i].valor;
      } else {
        incomeCount += filteredList[i].valor;
      }
    }

    //DEpois do for ele seta a mudança
    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  //Dentro do parâmetro insiro meu novo mês e modifica o mes com o setCurrentMonth
  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  return (
    <C.Container>

      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>

      <C.Body>
        {/* área de informações */}
        <InfoArea
          currentMonth={currentMonth}
          //Quando o mes trocar obedece a função
          onMonthChange={handleMonthChange}
          //Troca as informações atrvés da função UseEffect
          income={income}
          expense={expense}
        />

        {/* área de inserções */}
        <InputArea onAdd={handleAddItem} />

        {/* tabela de itens */}
        <TableArea list={filteredList} onExcluir={handleExcluir} />

      </C.Body>
    </C.Container>
  );
};

export default Financial;
