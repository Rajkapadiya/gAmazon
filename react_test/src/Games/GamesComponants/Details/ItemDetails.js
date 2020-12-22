import React from 'react';
import "./ItemDetails.css";

const ItemDetails = (props) => {
    return (
      <div id="popup1" className="overlay">
        <div className="popup">
          <h3 className="header">{props.sData.title}</h3>
          <button className="close" onClick={props.handleClose}>
            &times;
          </button>
          <div className="grid-container">
            <div className="content">
              <img src={props.sData.imgsrc} alt="img1" />
            </div>
            <div className="text-content">
              {props.sData.details}
              <div style={{ float: "right" }}>
                <button
                  onClick={() => {
                    props.addToCart(props.sData);
                  }}
                >
                  <i className="fa fa-shopping-cart"></i> Add To cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ItemDetails;