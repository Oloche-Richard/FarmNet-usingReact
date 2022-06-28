import {useState} from 'react'
import Button from "./Button";
import "./Item.css";
import Card from "../UI/Card.js"
export default function Item(props) {


  return (
    <Card className="item">
      <h5 className="item-img">Random image</h5>
      <div className="item-details">
        <h5 className="item-name">{props.name}</h5>
        <p>
          Price: <span>${props.price}</span>
        </p>
        <p>
          Weight: <span>{props.weight}kg</span>
        </p>
      </div>
      <Button text="add to cart"/>
    </Card>
  );
}
