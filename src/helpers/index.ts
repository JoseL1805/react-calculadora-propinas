
export const formatCurrency = ( cuantity : number) => {
    return new Intl.NumberFormat('en-US',{
        style: 'currency', currency: 'USD'
    }).format(cuantity)
}
