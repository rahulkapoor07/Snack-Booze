import React, {useContext} from "react";
import cafeContext from "./cafeContext";
import Home from "./Home";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";
import FormPage from "./FormPage";
import { Route, Switch } from "react-router-dom";


// This component contains all the Route and thier respective
// components.
const Routes = ()=>{
    const {drinks, snacks, collectFormData} = useContext(cafeContext);
    return(
        <main>
        <Switch>
        
        <Route exact path="/"><Home snacks={snacks} drinks={drinks}/></Route>
        <Route exact path="/snacks"><Menu snacks={snacks} drinks={drinks}/></Route>
        <Route exact path="/snacks/:id"><Snack snacksItems={snacks} cantFind="/snacks" /></Route>
        <Route exact path="/drinks"><Menu drinks={drinks} /></Route>
        <Route exact path="/drinks/:id"><Snack drinksItems={drinks} cantFind="/drinks" /></Route>
        <Route exact path = "/add-new"><FormPage collectFormData={collectFormData}/></Route>

        <Route><h1>Page Not Found</h1></Route>

      </Switch>
      </main>
    )
}

export default Routes;