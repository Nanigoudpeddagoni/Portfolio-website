import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Footer.css'
function Footer() {
  return (
    <div className='footer'>
         <div className="social">
     <Link href="#"><i class='bx bxl-facebook' ></i></Link>
     <Link href="#"><i class='bx bxl-linkedin' ></i></Link>
     <Link href="#"><i class='bx bxl-instagram' ></i></Link>
     <Link href="#"><i class='bx bxl-twitter' ></i></Link>
 </div>
 <div>
   <p className='fname'> this is nani goud </p>
   <p className='fname' style={{fontSize:".9em"}}>...this is my portfolio website</p>
 </div>

    </div>
  )
}

export default Footer