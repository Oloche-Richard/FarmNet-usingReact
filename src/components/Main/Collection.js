import Item from "./Item";
import "./Collection.css"
import Card from "../UI/Card.js"
function Collection(props) {
  return (

    <Card className="collection">
      <Item
        name={props.pro[0].name}
        price={props.pro[0].price}
        weight={props.pro[0].weight}
      />
      <Item
        name={props.pro[1].name}
        price={props.pro[1].price}
        weight={props.pro[1].weight}
      />
      <Item
        name={props.pro[2].name}
        price={props.pro[2].price}
        weight={props.pro[2].weight}
      />
      <Item
        name={props.pro[3].name}
        price={props.pro[3].price}
        weight={props.pro[3].weight}
      />
    </Card>

  );
}

export default Collection;
