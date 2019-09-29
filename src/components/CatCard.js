import React from "react"; 

const CatCard = props => {
  return (
    <div className="cat-card" key={props.id}>
      <img className="cat-image" alt="random cat" src={props.imgUrl} />
    </div>
  );
};

export default CatCard; 