import React from "react";
import { useParams } from "react-router-dom";

export default function Detail({ datas }) {
  const { id } = useParams();
  console.log(id);
  const product = datas.filter((shoe, idx) => {
    return shoe.id === Number(id);
  });
  console.log(product);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              product[0].id + 1
            }.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{product[0].title}</h4>
          <p>{product[0].content}</p>
          <p>{product[0].price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}
