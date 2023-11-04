import React, { useState } from 'react'
import Navbar from './comp/Navbar'
import'./app.css'
import Body from './comp/Body'
import db from './db'


const Main = () => {
const [base ,baseSet] = useState(db)

const cards = base.map((element)=>{return(
<div key={element.id}>
<Body 
resim = {element.resim}
ülke = {element.ülke}
isim = {element.isim}
k_baslik = {element.k_baslik}
icerik = {element.icerik}
/>
</div>
)})

  return (
    <div>
<Navbar/>
{cards}


    </div>
  )
}

export default Main