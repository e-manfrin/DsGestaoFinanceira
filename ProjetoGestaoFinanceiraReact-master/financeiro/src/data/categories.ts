import { Category } from '../types/Category';

//Inserir as categorias 
//Category é um objeto e não um array

export const categories: Category = {
  food: { title: 'Alimentação', color: 'yellow', expense: true },
  rent: { title: 'Aluguel', color: 'pink', expense: true },
  salary: { title: 'Salário', color: 'green', expense: false },
  cheers: {title: 'Saúde', color: 'blue', expense: true },
  school: {title: 'Educação', color: 'brown', expense: true },
  car: {title: 'Automóvel', color: 'orange', expense: true },
  others: {title: 'Outros', color: 'red', expense: true },
  extra: {title: 'Extras', color: 'purple', expense: false },
};
