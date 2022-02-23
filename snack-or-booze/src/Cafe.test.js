import React from "react";
import {MemoryRouter} from "react-router-dom";
import { render } from '@testing-library/react';
import Cafe from './Cafe';


describe("Testing Cafe component", ()=>{
test("render", ()=>{
    render(<MemoryRouter><Cafe /></MemoryRouter>)
});

test("SnapShot test", ()=>{
    const {asFragment}= render(<MemoryRouter><Cafe /></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
});
});