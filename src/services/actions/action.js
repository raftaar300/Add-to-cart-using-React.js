
export const show_hide=(data)=>{
    return{
        type: "show_hide" ,
        data:data
    } 
}

export const ADD_TO_CART=(data)=>{
    console.log("data in cart" , data)
    return{
        type : "ADD_TO_CART"
        , data:data
    }
}