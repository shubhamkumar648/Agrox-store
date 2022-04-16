
 const TotalItem = (item) => {

    return item.reduce((acc,curr) => acc + curr.qunatity,0)
}

export {TotalItem}
