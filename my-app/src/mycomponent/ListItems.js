import React from 'react';
import './ListItems.css'
import FlipMove from 'react-flip-move'

const ListItems = (props) => {
console.log(props.items)
    const showItems =props.items.map((itemMethod) => {
        return (
            <div key={itemMethod.id} >
                <p className="listDesign bg-secondary">
                  
                    <li className="text-light">{itemMethod.Name}</li>                                       
                    <span onClick={()=>{props.deleteItems(itemMethod.id)}} className="iconDesign">
                        <i className="fas fa-trash float-right  pr-2"></i>
                    </span> 
                    <li className="text-light">{itemMethod.Email}</li>
                     
                </p>
            </div>
        )
    });

    return (
        <div>
            <FlipMove duration={300} easing="ease-in-out">
                {showItems}
            </FlipMove>            
        </div>
    );
};

export default ListItems;