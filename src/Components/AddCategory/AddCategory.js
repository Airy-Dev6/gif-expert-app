import React from 'react'
import { Form, Input } from 'reactstrap'

function AddCategory({setCategories, categories}) {

  

  const HandleInputChange = (event) => {
    const value = event.target.value
    if (event.keyCode === 13) {
      setCategories( [...categories,  value])
      event.target.value = ''
      //console.log(categories)
    }
    
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <>

      <Form onSubmit= {handleSubmit}>
        <Input placeholder='Hola mundo' className="w-25" onKeyUp={HandleInputChange} onKeyPress={HandleInputChange} type='text'
        />
      </Form>
    </>
  )
}

export default AddCategory



