import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap'
import GifGridItem from '../GifGridItem'

function GifGrid( {category}) {

  const [dataGifs, setDataGifs] = useState([])
  
  const URL = 'https://api.giphy.com/v1/gifs/search?api_key=6H5WKoWK9vExuRjQX8eg7Add75W3iXF4&q=Rick and Morty&limit=10'

  useEffect(() => {
    fetch(URL)
    .then((response) => response.json())
    .then(data => {
      setDataGifs(data.data) 
      console.log(data.data)
    })
    
  }, [])

  const gifs = dataGifs.map(item => {
    return{
      id: item.id,
      title: item.title,
      url: item.images.downsized_medium.url
    }
  })
  console.log(gifs)
  
  return (
    <>
      <h3>{category}</h3>

      <Row>
        {
          gifs.map(img => {
            return(
              <Col xs='4'>
                <GifGridItem
                key= {img.id}
                { ...img }
                />
              </Col>
            )
            
          })
        }
      </Row>
     
    </>
  )
}

export default GifGrid




