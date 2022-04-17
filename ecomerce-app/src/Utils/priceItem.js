const PriceItem = (list) => {
    return list.reduce((acc,curr) => acc + curr.qunatity * curr.discountPrice,0)

}

export {PriceItem}