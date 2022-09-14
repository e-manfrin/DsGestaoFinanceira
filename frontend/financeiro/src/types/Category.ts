//Nescessita tipar por ser Typescript as 03 informações
//Insiro um nome que irá aceitar qualquer string e que terá dentro desta string um objeto com 3 informações.

export type Category = {
    [tag: string]: {
        title: string;
        color: string;
        expense: boolean;
    }
}