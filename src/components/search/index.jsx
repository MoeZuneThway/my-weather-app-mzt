import React from 'react'

export default function Search({search,setSearch,handleClick}) {
  return (
    <div className='container my-5'>
       <div className="row">
        <div className="col-lg-6 mx-auto">
        <div class="mb-3 d-flex justify-content-between">
            <input
                type="text"
                class="form-control"
                placeholder="City Name"
                value={search}
                onChange={(event)=>{setSearch(event.target.value)}}
            />
            
            <button className='ms-3 border-1 border-dark btn bg-dark text-white' onClick={handleClick}>Search</button>
        </div>
        </div>
       </div>
        
    </div>
  )
}
