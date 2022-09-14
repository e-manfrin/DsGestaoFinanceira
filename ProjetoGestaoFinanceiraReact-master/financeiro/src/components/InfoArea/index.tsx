import * as C from './styles';
import { formatCurrentMonth } from '../../helpers/dateFilter';
import { ResumeItem } from '../ResumeItem/index';

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}


export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {
  const handlePrevMonth = () => {
    const [year, month] = currentMonth.split('-');
    //Date passa o ano,mes,dia
    //Essa função e as linhas abaixos pega o mês atual e dimiuni e volta tbm o ano 
    const currentDate = new Date(parseInt(year), parseInt(month) -1,1);
    currentDate.setMonth( currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };
    
  //Date passa o ano,mes,dia
  //Essa função e as linhas abaixos pega o mês atual e aumenta e adiciona tbm o ano 
  const handleNextMonth = () => {
    const [year, month] = currentMonth.split('-');
    const currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };
    
    
  return(
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
        <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
        <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
      </C.MonthArea>
      <ResumeItem title='Receitas' value={income}/>
      <ResumeItem title='Despesas' value={expense}/>
      <ResumeItem 
        title='Balanço' 
        value={income - expense}
        color={income-expense < 0 ? 'red' : 'green'}
      />
      <C.ResumeArea>

      </C.ResumeArea>
    </C.Container>
  );
};