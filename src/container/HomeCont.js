import Comb from '../component/Comb'
import {connect} from'react-redux'
import {show_hide , ADD_TO_CART} from '../services/actions/action' 
 
const matchStateToProps = state=>({
    cardData:state.cardItems,
    cardData2 : state.cardItems2

})

const matchDispatchToProps = dispatch=>({
    togglebar : data=>dispatch(show_hide(data)) ,
    carthandler : data=>dispatch(ADD_TO_CART(data))
})

export default connect( matchStateToProps,matchDispatchToProps)(Comb)