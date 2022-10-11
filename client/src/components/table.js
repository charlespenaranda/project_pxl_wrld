import React from "react";
import { useState } from "react";
import Axios from "axios";

const table = () => {

    const [itemList, setItemList] = new useState([]);

    const getItems = () => {
        Axios.get("http://localhost:3001/inventory").then((response) => {
            setItemList(response.data);
            console.log(setItemList);
        });
      };


      const deleteItem = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
            setItemList(
                itemList.filter((val) => {
              return val.id !== id;
            })
          );
        });
      };
    

return(
<div className="inventory-main">
<div>INVENTORY</div>
    {getItems()}
    {itemList.map((val,key) => {

        return (
                      
            <div className="inventory-main">
             <div className="inventory-header-wrapper">
             <div className="div-items">{val.itemdesc}</div>
             <div className="div-items">{val.itemrarity}</div>
             <div className="div-items">{val.itemtype}</div>
             <div className="div-items">{val.itemamount}</div>
             <div className="div-items"><button onClick={() => {deleteItem(val.itemid);}} type="button">delete</button></div>
             </div>
            </div>

        )
    })}



</div>

)
}

export default table