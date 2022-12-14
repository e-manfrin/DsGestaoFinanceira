import * as C from './styles';
import { useEffect, useState } from 'react';
import { Item } from '../../types/Item';
import { categories } from '../../data/categories';
import { newDateAdjusted } from '../../helpers/dateFilter';
import { items } from '../../data/items';

type Props = {
    onAdd: (item: Item) => void;
}

export const InputArea = ({ onAdd }: Props) => {

  const [id, setId] = useState(0);
  const [dateField, setDateField] = useState('');
  const [categoryField, setCategoryField] = useState(0);
  const [titleField, setTitleField] = useState('');
  const [valueField, setValueField] = useState(0);

  //Object. keys() retorna um array cujo os elementos 
  //são strings correspondentes para a propriedade enumerável encontrada diretamento sobre o objeto.
  const categoryKeys: string[] = Object.keys(categories);

  const handleAddEvent = () => {
    const errors: string[] = [];
    //Função isNaN()
    //Função getTime() retorna o horário
    if(isNaN(new Date(dateField).getTime())) {
      errors.push('Data inválida!');
    }
    if(!categoryKeys.includes(String(categoryField))) {
      errors.push('Categoria inválida!');
    }
    if(titleField === '') {
      errors.push('Título vazio!');
    }
    if(valueField <= 0) {
      errors.push('Valor inválido!');
    }
    
    if(errors.length > 0) {
      alert(errors.join('\n'));
    } else {
      onAdd({
        id: id,
        data: newDateAdjusted(dateField),
        categoriaId: categoryField,
        descricao: titleField,
        valor: valueField
      });
      clearFields();
    }
  };
  
  //Função limpa após as mudanças
  const clearFields = () => {
    setDateField('');
    setCategoryField(0);
    setTitleField('');
    setValueField(0);
  };

  useEffect(() => {
    localStorage.setItem('categoriaId',String(categoryField));
  },[]);

  return(
    <C.Container>
      <C.InputLabel>
        <C.InputTitle>Data</C.InputTitle>
        <C.Input type="date" value={dateField} onChange={e => setDateField(e.target.value)} />
      </C.InputLabel>

      <C.InputLabel>
        <C.InputTitle>Categoria</C.InputTitle>
        <C.Select value={categoryField} onChange={(e) => { 
          setCategoryField(Number(e.target.value));
          localStorage.setItem('categoriaId',String(e.target.value));
        } }>
          <>
            
            {categoryKeys.map((key, index) => (
              <option key={index} value={key}>{categories[Number(key)].title}</option>
            ))}
          </>
        </C.Select>
      </C.InputLabel>

      <C.InputLabel>
        <C.InputTitle>Título</C.InputTitle>
        <C.Input type="text" value={titleField} onChange={e => setTitleField(e.target.value)} />
      </C.InputLabel>

      <C.InputLabel>
        <C.InputTitle>Valor</C.InputTitle>
        <C.Input type="number" value={valueField} onChange={e => setValueField(parseFloat(e.target.value))} />
      </C.InputLabel>
        
      <C.InputLabel>
        <C.InputTitle>&nbsp;</C.InputTitle>
        <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
      </C.InputLabel>
        
    </C.Container>
  );
};

