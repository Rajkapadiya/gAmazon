import React from 'react';
import './Cart.css';
import {connect} from 'react-redux';
import { Popover } from "antd";

const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const Cart = (props)=>{
    return (
      <div className="cart">
        <Popover
          placement="leftBottom"
          title={text}
          content={content}
          trigger="click"
        >
          <div className="button fire">
            <div style={{ float: "left" }}>
              <i className="fa fa-shopping-cart fa-2x"></i>
            </div>
            <div style={{ marginLeft: "7%" }}>
              {props.cartData.length === 0 ? "" : props.cartData.length}
            </div>
          </div>
        </Popover>
      </div>
    );
}

const mapState = (state) => ({
  cartData: state.gameReducer,
});

export default connect(mapState,"")(Cart);
