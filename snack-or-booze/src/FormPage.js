import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const FormPage = ({collectFormData})=>{
    const INITIAL_STATE = {type: "",name : "", description : "",
                            recipe: "", serve : ""}
    const history = useHistory();
    
    const [formData, seFormData] = useState(INITIAL_STATE);

    const handleChange = (e) =>{
        const {name, value} = e.target;
        seFormData(data => ({...data, 
        [name] : value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        collectFormData({...formData});
        history.push("/");

    }

    return(
        <Form onSubmit={handleSubmit}>
            
        <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="type" id="exampleSelect"
        value={formData.type} onChange={handleChange}>
          <option>None</option>
          <option>Snacks</option>
          <option>Drinks</option>
        </Input>
      </FormGroup>

      <FormGroup>
        <Label for="typeName">Name</Label>
        <Input type="text" name="name" id="typeName" 
        value = {formData.name} onChange={handleChange}
        placeholder="Name" />
      </FormGroup>

      <FormGroup>
        <Label for="typeDescription">Description</Label>
        <Input type="text" name="description" id="typeDescription" 
        value = {formData.description} onChange={handleChange}
        placeholder="Description" />
      </FormGroup>

      <FormGroup>
        <Label for="recipe">Recipe</Label>
        <Input type="text" name="recipe" 
        value={formData.recipe} onChange={handleChange}
        id="recipe" placeholder="Recipe" />
      </FormGroup>

      <FormGroup>
        <Label for="serve">Serve</Label>
        <Input type="textarea" name="serve" 
        value={formData.serve} onChange = {handleChange}
        id="serve" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
    )
}


export default FormPage;