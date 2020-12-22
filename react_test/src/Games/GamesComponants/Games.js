import React, { useState } from "react";
import "./Games.css";
import ItemDetails from "./Details/ItemDetails";

const Games = (props) => {
  const [selectedItem, setSelectedItem] = useState(false);
  const [openPopup, setOpenpopup] = useState(false);

  const togglePopup = (data) =>{
    setSelectedItem(data)
    setOpenpopup(!openPopup);
  }
  return (
    <div>
      <div className="wrapper">
        <h1 style={{ textAlign: "center" }}>
          <strong>All Games</strong>
        </h1>
        <div className="cards">
          <Game sDataList={props.sDataList} handleOpen={togglePopup} />
        </div>
      </div>
      {openPopup && (
        <ItemDetails
          handleClose={togglePopup}
          sData={selectedItem}
          addToCart={props.addToCartHandler}
          data={props.gameData}
        ></ItemDetails>
      )}
    </div>
  );
}

const Game = (props) =>{
  const listItems = props.sDataList.map((data, index) => {
    return (
      <figure
        key={index}
        id={index}
        className="card"
        onClick={() => {
          props.handleOpen(data);
        }}
      >
        <img alt={"img" + index} src={data.imgsrc} />
        <figcaption>{data.title}</figcaption>
      </figure>
    );
  });
  return listItems;
}

export default Games;