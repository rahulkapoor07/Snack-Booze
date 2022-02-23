import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import SnackOrBoozeApi from "./Api";
import cafeContext from "./cafeContext";

//I have created a seperate component with name Cafe to store all the snacks state and
// drinks states.


function Cafe({children}) {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);

  useEffect(() => {
    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false);
    }
    getDrinks();
  }, []);

  //This function will collect data from Form and add that data into snacks state or drinks state depends
  // upon the type/
  const collectFormData = ({type, name, description, recipe, serve})=>{
    type === "Snacks" ? setSnacks(data => ([...data, {id : name, name, description, recipe, serve}])) :
      setDrinks(data => ([...data, {id : name, name, description, recipe, serve}]))
  }

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  // I have create a context with name cafeContext get pass some values of drinks, snacks and
  // collectData function to Route component where I have put all the routes with thier 
  // respective components.
  return(
    <BrowserRouter>
    <cafeContext.Provider value={{drinks, snacks, collectFormData}}>

    {children}

  </cafeContext.Provider>
  </BrowserRouter>
  )
}

export default Cafe;