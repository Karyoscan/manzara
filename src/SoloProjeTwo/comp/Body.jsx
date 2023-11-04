import React from 'react'

const Body = (props) => {
 
 
 
  return (
    <div className=' main-body'>
<img src={props.resim}/>
<div className='main-body-div'>
<h5>
<span><i className="fa fa-map-marker" aria-hidden="true"></i> </span>
<span> {props.ülke} </span>
 <a className='main-body-a' href="#"> View on Google Maps</a>
 
 
 </h5>
<h1>{props.isim}</h1>
<h5>{props.b_baslik}</h5>
<p>{props.icerik}</p>
</div>





    </div>
  )
}

export default Body