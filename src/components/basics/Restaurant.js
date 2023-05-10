import React from 'react'
import './style.css'
import Menu from './menuApi'
import { useState } from 'react'
import MenuCard from './MenuCard'
import Navbar from './Navbar'

const uniqueList= [
    ...new Set( //"... is a spread operator"
    Menu.map((currelem)=>{
    return currelem.category 
    })
    ),'All',
]

const Restaurant = () => {  
    const [menuData, setmenuData] = useState(Menu)
    const [menuList, setmenuList] = useState(uniqueList)
    console.log(menuList) 

    console.log(menuData);   
    
    const filterdata=(category)=>{   
         
            if(category==='All'){
                return setmenuData(Menu); 
            }

            const updatedList = Menu.filter((currdata)=>{
                return currdata.category===category
            });    
            setmenuData(updatedList); 
    }     
    
    return (    
    <>    
    <Navbar filterdata={filterdata} menuList={menuList}/>
    <MenuCard menuData={menuData}/> 
    </>
  )
}

export default Restaurant
