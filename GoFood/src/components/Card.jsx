import React from 'react'

export default function Card() {
  return (
    <div>
        <div className="card mt-3" style={{"width" : "18rem", "maxHeight" : "360px"}}>
          <img src="https://media.istockphoto.com/id/501266025/photo/seekh-kabab-5.jpg?s=1024x1024&w=is&k=20&c=WmlJXZsTKsY5KSxKKHNCS_29jRrugw_RblQb8bA52Hg=" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Dummy text.</p>
              <div className='container w-100'>
                <select className='m-2 h-100 bg-success'>
                  {Array.from(Array(6) , (e,i) => {
                    return(
                      <option key={i+1} value={i+1} > {i+1} </option>
                    )
                  })}
                </select>

                <select className='m-2 h-100 bg-success rounded'>
                  <option value="half">Half</option>
                  <option value="full">Full</option>
                </select>

                
              </div>
            </div>
        </div>
      </div>
  )
}
