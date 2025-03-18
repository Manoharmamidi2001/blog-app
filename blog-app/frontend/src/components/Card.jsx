import React from 'react'
import {Card, FormControl} from 'react-bootstrap'

const Mycard = () => {
  return (
    <div className='d-flex justify-content-center'>
        <Card className='w-50 mt-3'>
            <h3 style={{textAlign:'center', fontFamily:'cursive'}}>Add Your blog</h3>
            <div className='w-50'>
                <FormControl placeholder='Title'/>
            </div>
        </Card>
    </div>
  )
}

export default Mycard
