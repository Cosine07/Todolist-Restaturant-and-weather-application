import React,{useState, useEffect} from 'react'
import './style.css'

const getlocalStorage=()=>{
  const lists=localStorage.getItem("mytodolist")
  if(lists){
    return JSON.parse(lists) 
  }
  return []
}

const Todo = () => {
  const [inputData, setinputData] = useState("")
  const [items, setitems] = useState(getlocalStorage()) 
  const [IsEditItem, setIsEditItem] = useState("")
  const [toggleButton, settoggleButton] = useState(false)

  // add the item function
  const addItem=()=>{ 
    if(!inputData){  
      alert('fill the data')
    }     
    else if(inputData && toggleButton){
      setitems( 
        items.map((currElem)=>{
          if(currElem.id===IsEditItem){
            return {...currElem,name:inputData} 
          } 
          return currElem
        })   
               
      ) 
      setinputData("")
      setIsEditItem() 
      settoggleButton(false) 
    }      
    else{
      const myInputData={
        id:new Date().getTime().toString(),
        name:inputData
      }   
      console.log(myInputData.id) 
      setitems([...items,myInputData])   
      setinputData('')  
    }   
  } 

  // Edit the item
  const editItem=(index)=>{
    const item_todo_edited=items.find((currElem)=>{
      return currElem.id===index;
    })  
    setinputData(item_todo_edited.name) 
    setIsEditItem(index) 
    settoggleButton(true)  
  }

  // delete the item
  const deleteItem=(index)=>{
    const updatedList=items.filter((currElem)=>{
      return currElem.id!==index
    }) 
    setitems(updatedList);
  }
  
  // remove all items
  const removeAll=()=>{
    setitems([]);
  }
  
  // storing at local storage
  useEffect(() => { 
    localStorage.setItem("mytodolist",JSON.stringify(items))
  }, [items])
  
  return (
    <> 
    <div className="main-div">
        <div className="child-div">
            <figure> 
                <img src="./images/todo.svg" alt="todo logo" />
                <figcaption>Add your list here 🤞</figcaption> 

                <div className="addItems"> 
                  <input type="text" 
                  placeholder='✍️ Add Item' 
                  className='form-control'
                  value={inputData}   
                  onChange={(e)=>{setinputData(e.target.value)}}  
                  />    
                  {toggleButton?(
                  <i className="fa fa-edit add-btn" onClick={addItem}></i>
                  ): 
                  (<i className="fa fa-plus add-btn" onClick={addItem}></i> 
                  )} 
                </div>  
 
                {/* show our items */}
                <div className="showItems">
 
                  {items.map((currElem)=>{
                    return (    
                      <div className="eachItem" key={currElem.id}> 
                      <h3>{currElem.name}</h3>
                      <div className="todo-btn"> 
                      <i className="fa fa-edit add-btn" onClick={()=>editItem(currElem.id)}></i>
                      <i className="fa fa-trash add-btn" onClick={()=>deleteItem(currElem.id)} ></i>   
                      </div>   
                    </div>
                    )  
                  })
                  }

                </div>


                {/* remove all items */}
                <div className="showItems"><button className="btn effect04" data-sm-link-text='Remove All' onClick={removeAll}><span>CHECK LIST</span></button></div>
            </figure>  
        </div>
    </div> 
    </>
  )
}

export default Todo