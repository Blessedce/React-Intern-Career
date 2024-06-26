import React from "react";
import './NewCollections.css'
import new_collection from '../Assets/new_collection'
import Item from "../Items/Item";


const NewCollections =() => {

    
    return(
        <div className="newcollections">
                <h1>NEW COLLECTIONS</h1>
                <hr />
                <div className="collections">
                {new_collection.map((item,i)=>{
                        return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
                })}
                </div>
        </div>
    )
}

export default NewCollections