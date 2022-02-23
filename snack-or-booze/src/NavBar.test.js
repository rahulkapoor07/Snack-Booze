import React from "react";
import {MemoryRouter} from "react-router-dom";
import { render } from '@testing-library/react';
import NavBar from './NavBar';


describe("Testing Navbar component", ()=>{
test("render", ()=>{
    render(<MemoryRouter><NavBar /></MemoryRouter>)
});

test("SnapShot test", ()=>{
    const {asFragment}= render(<MemoryRouter><NavBar /></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
});
});