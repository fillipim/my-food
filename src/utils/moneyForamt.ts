export const moneyFormat = (value: number) => 
    value.toLocaleString("pt-br",{style: "currency", currency: "BRL"});