import React from 'react'

const MenuCard = ({ menuData }) => {
    return (
        <> 
        <section className="main-card--cointainer">
            {     
                menuData.map((currElem) => {
                    const {id,image,name,category,description}=currElem; 
                    return (   
                        <>   
                        <div className="card-container" key={currElem.id}>
                                <div className="card"> 
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{id}</span>
                                        <span className="card-author subtle" >{category}</span>
                                        <h2 className="card-title">{name}</h2>
                                        <span className="card-description subtle">
                                        {description}
                                        </span>
                                        <div className="card-read">Read</div>
                                    </div>  
                                    <img src={image} alt="" className="cards-media" /> 
                                    <span className="card-tag subtle">Order Now</span>
                                </div>
                                </div>
                        </>
                    )
                })
            }
            </section> 
        </>
    )
}

export default MenuCard
