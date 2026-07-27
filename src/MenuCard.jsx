import React from 'react'
import Button from './Button';

const MenuCard = ({ img, menu, description, price }) => {
    return (
        <>
            
                <div className="card w-25 h-100" >
                    <img src={img} className="card-img-top h-25" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Menu : {menu}</h5>
                        <p className="card-text">Description : {description}</p>
                        <small >Price : {price}</small>
                        <Button name="Order Now" />
                    </div>
                </div>
           
        </>
    )
}

export default MenuCard