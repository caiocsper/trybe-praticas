const productCost       = 5;
const productSale       = 20;
const taxValue          = 0.2;

if( productCost >= 0 &&
    productCost >= 0  )
{
    let productFinalCost    = productCost + (productCost * taxValue);
    let productSaleProfit   = productSale - productFinalCost;

    console.log("O lucro ao vender 1000 unidades do produto é de: R$",productSaleProfit * 1000);
}
else
{
    console.log("Erro, os valores informados são inválidos.");
}