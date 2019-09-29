import React, { useEffect, useState } from "react"; 
import axios from "axios"; 
import CatCard from "./CatCard"; 

// did not add reactstrap bootstrap or styled-components yet

function CatGrid() {
  useEffect(() => {
    axios
    .get(`https://thecatapi.com/v1/images?api_key=30b4c83d-1a82-43b5-aed1-d0b7c10ec304`)
    .then(result => {
      const kats = results.data;
      console.log(kats); 
    })
  })
}