
const ItemWishlist = (id,list) => {

return list.some((item) => item._id === id)
}

export {ItemWishlist}