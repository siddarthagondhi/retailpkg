import React, {useState} from 'react'

const CreateRetail = () => {
    
    let [formData, setFormData] = useState({id: 0})
    let [list, setlist] = useState([]);

    const handleChange = (e,name) => {
      setFormData({...formData,[name]: e.target.value, id: formData.id + 1})
    }  
    const handleClick = (e) => {
            setlist([...list,formData])
    }

    console.log(list, 'formdata')
  return (
    <div>
      Name:{' '}
      <input
        type='text'
        name='name'
        onChange={(e) => handleChange(e, 'name')}
        placeholder='Enter Item name'
      />
      Quantity:{' '}
      <input
        type='text'
        name='quantity'
        onChange={(e) => handleChange(e, 'quantity')}
        placeholder='Ente quantity'
      />
      Price{' '}
      <input
        type='text'
        name='price'
        onChange={(e) => handleChange(e, 'price')}
        placeholder='Enter price'
      />
          <button type='button' onClick={handleClick}>Add</button>
          <div>
              {
                  list?.map((item,index) => {
                      return (
                          <div
                              key={index}
                          style={{
                            display: 'flex',
                              justifyContent: 'space-between',
                              marginTop: '20px',
                              border:'1px solid grey'
                            
                          }}
                        >
                              <div>{item?.name }</div>
                              <div>{item?.quantity}</div>
                              <div>{item?.price }</div>
                              <div>{ <button>Edit</button>}<button>Delete</button></div>
                        </div>
                      )
                  })
              }
          </div>
    </div>
  )
}
export default CreateRetail