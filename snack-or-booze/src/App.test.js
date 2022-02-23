import React from "react";
import {MemoryRouter} from "react-router-dom";
import { render } from '@testing-library/react';
import App from "./App";

describe("App page testing", ()=>{
    test("rendering", ()=>{
        render(<MemoryRouter><App /></MemoryRouter>);
    });

    test("snapshot", ()=>{
        const {asFragment} = render(<MemoryRouter><App /></MemoryRouter>);
        expect(asFragment()).toMatchSnapshot();
    });
});