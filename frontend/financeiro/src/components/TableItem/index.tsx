import * as C from './styles';
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';
import { useState } from 'react';

type Props = {
  index: number;
  item: Item;
  onExcluir: (index: number) => void
}
export const TableItem = ({ index, item, onExcluir }: Props) => {
  return (
    <C.TableLine>
      <C.TableColumn>{formatDate(new Date(item.date))}</C.TableColumn>

      <C.TableColumn>
        
        <C.Category color={categories[item.categoriaId - 1].color}>
          {categories[item.categoriaId].title}
        </C.Category>
      </C.TableColumn>

      <C.TableColumn>{item.descricao}</C.TableColumn>

      <C.TableColumn>
        <C.Value color={categories[item.categoriaId].expense ? 'red' : 'green'}>
          R$ {item.value}
        </C.Value>
      </C.TableColumn>

      <C.TableColumn>
        <button onClick={(e) => onExcluir(index)}>Excluir</button>
      </C.TableColumn>

      <C.TableColumn>
        <button>SMS</button>
      </C.TableColumn>

    </C.TableLine>
  );
};