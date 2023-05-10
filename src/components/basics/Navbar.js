import React from 'react'

const Navbar = ({filterdata,menuList}) => {
    console.log('data') 
    console.log(menuList);
 
  return ( 
    <>  
    <nav className="navbar">
        <div className="btn-group">  
            {menuList.map((currelem)=>{  
                return (     
                    <button className="btn-group__item" onClick={()=>filterdata(currelem)}>{currelem}</button>
                ) 
            })} 
        </div> 
    </nav> 
    </>
  )
}

export default Navbar
