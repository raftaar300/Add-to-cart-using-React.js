
const initalState = { show: true}
export  function cardItems(state = initalState, action) {
    console.log("reducer", action.data)
    switch (action.type) {

        case "show_hide":
            return {
                ...state,
                show: !action.data.show
            }

            break;
        default:
            return state
    }
}


export  function cardItems2(state = [], action) {
    console.log("reducer", action.data)
    switch (action.type) {
        case "ADD_TO_CART":
            return[
                ...state,
                {items:action.data}
            ]
        default:
            return state
    }
}
