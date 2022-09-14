import styled from 'styled-components';

export const Table = styled.table`
    width: 100%;
    background-color: #FFF;
    padding: 20px;
    box-shadow: 0px 0px 5px pink;
    border-radius: 10px;
    margin-top: 20px;
`;

//Passa-se um props : tipa na linha 15 { width?: number } 
// a ? é a respeito da sobrecarga devido antes ser obrigatória
//Linha 16 verifica se possui props caso contrário um auto
export const TableHeadColumn = styled.th<{ width?: number }>`
    width: ${props => props.width ? `${props.width}px` : 'auto'};
    padding: 10px 0;
    text-align: left;
`;