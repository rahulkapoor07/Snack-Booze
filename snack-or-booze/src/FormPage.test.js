import React from "react";
import {MemoryRouter} from "react-router-dom";
import { render, fireEvent } from '@testing-library/react';
import FormPage from "./FormPage";

describe("App page testing", ()=>{
    test("rendering", ()=>{
        render(<MemoryRouter><FormPage /></MemoryRouter>);
    });

    test("snapshot", ()=>{
        const {asFragment} = render((<MemoryRouter><FormPage /></MemoryRouter>));
        expect(asFragment()).toMatchSnapshot();
    });

    test("Testing form", ()=>{
        const {getByText, getByLabelText} = render((<MemoryRouter initialEntries={["/add-new"]}><FormPage /></MemoryRouter>));
        expect(getByLabelText("Name")).toBeInTheDocument();
        const btn = getByText("Submit");
        expect(btn).toBeInTheDocument();
    });
});