import React, { useState } from "react";
import { Row } from "react-bootstrap";
import Card from "../components/Card";

export default function Main({ datas }) {
  return (
    <>
      <div className="main-bg" />
      <div>
        <Row>
          {datas.map((shoe, idx) => {
            return <Card key={idx} shoe={shoe} idx={idx} />;
          })}
        </Row>
      </div>
    </>
  );
}
