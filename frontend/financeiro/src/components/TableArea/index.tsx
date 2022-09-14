import * as C from './styles';
import { Item } from '../../types/Item';
import { TableItem } from '../TableItem/index';



type Props = {
    list: Item[]
    onExcluir: (index: number) => void
}

export const TableArea = ({ list, onExcluir }: Props) => {

  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
          <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
          <C.TableHeadColumn>Título</C.TableHeadColumn>
          <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
          <C.TableHeadColumn width={150}>Excluir</C.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableItem key={index} index={index} item={item} onExcluir={onExcluir}/>
        ))}
      </tbody>
    </C.Table>
  );
}; 