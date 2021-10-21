import React from 'react'
import { Card, CardImg } from 'reactstrap'

function GifGridItem({id, url, title}) {
  
  console.log(  url )
  
  return (
    <>
      <Card>
        <CardImg src={url} alt={title}/>
      </Card>
    </>
  )
}

export default GifGridItem
