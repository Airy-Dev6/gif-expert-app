import React from 'react'
import { Card, CardBody, CardImg, CardTitle} from 'reactstrap'

function GifGridItem({id, url, title}) {
  
  console.log(  url )
  
  return (
    <>
    
        

        <Card color="dark" className="card mb-4 text-white">
          <CardImg src={url} alt={title}/>
          <CardBody>
           <CardTitle>{title}</CardTitle>
          </CardBody>
       </Card>
      
      
    </>
  )
}

export default GifGridItem
