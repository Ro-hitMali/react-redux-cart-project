/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
/*eslint no-unused-vars: "error"*/
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cardsdata from "./CardsData";
import "./styles.css"

const Cards = () => {
  const [data, setData] = useState(Cardsdata);
  //console.log(data)

  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to cart project</h2>
      <div className="row d-flex justify-content-centre align-items-center" >

        {
        data.map((element, id) => {
          return (
            <>
              <Card style={{ width: "22rem", border:"none" }} className="mx-2 mt-4 card_style" >
                <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className="mt-3" />
                <Card.Body>
                  <Card.Title>{element.rname}</Card.Title>
                  <Card.Text>
                    Price = ₹ {element.price}
                  </Card.Text>
                  <div className="button_div d-flex justify-content-center">
                    <Button variant="primary" className="col-lg-12">Add to Cart</Button>
                  </div>
                </Card.Body>
              </Card>
            </>
          );
        })
        }
      </div>
    </div>
  );
};

export default Cards;
