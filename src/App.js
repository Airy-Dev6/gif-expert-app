import './App.css';

import React, { useState } from 'react'
import AddCategory from "./Components/AddCategory/AddCategory"
import { Container } from 'reactstrap';
import GifGrid from './Components/GifGrid';

export default function App() {

  const [categories, setCategories] = useState(['Pokemon'])
  


  

  return (
    <>
      <Container>
        <h1>Gif Expert App</h1>
        
        <AddCategory
        setCategories= {setCategories}
        categories = {categories}
        />

        <hr/>


        <ol>
          {
            categories.map(category  => (
              <GifGrid
                key={category}
                category = {category}
              />
            ))
          }
        </ol>
      </Container>
      
    </>
  )
}

