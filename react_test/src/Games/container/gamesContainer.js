import { connect } from "react-redux";
import Games from "../GamesComponants/Games";
import { addToCart } from "../Action/Actions";

const mapStateToProps = (state) => ({
  gameData: state.gameReducer,
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Games);
