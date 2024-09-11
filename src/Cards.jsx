import React from "react";

const Cards = ({ dataArray, setDataArray }) => {

    const handleDelete = (id)=>{
        setDataArray(dataArray?.filter((_, index) => index !== id));
    }


  return (
    <div className="allCardsWrap">
      {dataArray?.map((item, index) => (
        <div key={index} className="cardMainCon">
          <div className="circleCon">
            <div className="circle">
              <span className="circleText">{item?.name[0]}</span>
            </div>
            <p className="name">{item?.name}</p>
          </div>
          <p className="fontSize">
            <span className="fontWeight">Role: </span>{item?.role}
          </p>
          <p className="fontSize">
            <span className="fontWeight">Email: </span>{item?.email}
          </p>
          <p className="fontSize">
            <span className="fontWeight">Phone Number: </span>{item?.phoneNumber}
          </p>
          <p className="fontSize">
            <span className="fontWeight">Course: </span>{item?.courses}
          </p>
          <p className="fontSize">
            <span className="fontWeight">Status: </span>{item?.status}
          </p>
          <button onClick={()=>handleDelete(index)} className="button">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
