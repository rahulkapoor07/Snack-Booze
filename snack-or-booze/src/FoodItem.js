import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function FoodItem({ snacksItems, drinksItems, cantFind }) {
  const { id } = useParams();
  
  let snack, drink;
  if (snacksItems){
    snack = snacksItems.find(snack => snack.id === id);
  }else{
    drink = drinksItems.find(drink => drink.id === id);
  
  if (!snack) return <Redirect to={cantFind} />;
  

  if (!drink) return <Redirect to={cantFind} />;
  }
  

  return (
    <section>
      <Card>
      {snack ? <CardBody>
        <CardTitle className="font-weight-bold text-center">
            {snack.name}
          </CardTitle>
          <CardText className="font-italic">{snack.description}</CardText>
          <p>
            <b>Recipe:</b> {snack.recipe}
          </p>
          <p>
            <b>Serve:</b> {snack.serve}
          </p>
        </CardBody> : <CardBody>
        <CardTitle className="font-weight-bold text-center">
            {drink.name}
          </CardTitle>
          <CardText className="font-italic">{drink.description}</CardText>
          <p>
            <b>Recipe:</b> {drink.recipe}
          </p>
          <p>
            <b>Serve:</b> {drink.serve}
          </p>
        </CardBody>}
        
      </Card>
    </section>
  );
}

export default FoodItem;
