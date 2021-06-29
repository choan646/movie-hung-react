import React from "react";
import { Card, CardBody } from "reactstrap";

export default function Main({ content }) {
  return (
    <div className="content__main">
      <Card id="cardMain">
        <CardBody id="cardBodyMain">{content}</CardBody>
      </Card>
    </div>
  );
}
