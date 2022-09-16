import { Category } from '../types/Category';

//Inserir as categorias 
//Category é um objeto e não um array

export const categories: Category = [
  {category: 'food', title: 'Alimentação', color: 'yellow', expense: true,},
  {category: 'rent', title: 'Aluguel', color: 'pink', expense: true,},
  {category: 'salary', title: 'Salário', color: 'green', expense: false,},
  {category: 'cheers', title: 'Saúde', color: 'blue', expense: true,},
  {category: 'school', title: 'Educação', color: 'brown', expense: true,},
  {category: 'car', title: 'Automóvel', color: 'orange', expense: true,},
  {category: 'others', title: 'Outros', color: 'red', expense: true,},
  {category: 'extra', title: 'Extras', color: 'purple', expense: false,}
];
