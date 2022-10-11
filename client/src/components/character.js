import React from "react";
import { useHistory } from "react-router-dom";


const character = () => {

    const history = new useHistory();

    function handleOnClick(){
        history.push("/table");
    }

return(
<div>
<div  className="Header-text"><h1>CHARACTER SELECTION </h1></div>
    <div className="char-main">
    
        <div className="char-card">
        <div>WARRIOR</div>
        <div>Job: Knight</div>
        <div>Level: 1</div>

        <div className="table-main">
        <div className="header-wrapper">
         <span>Stats</span>
         <span>Attribute</span>
         </div>
         <div className="row-wrapper">
         <span>Str</span>
         <span>10</span>
         </div>
         <div className="row-wrapper">
         <span>Vit</span>
         <span>15</span>
         </div>
         <div className="row-wrapper">
         <span>Agi</span>
         <span>5</span>
         </div>
         <div className="row-wrapper">
         <span>Int</span>
         <span>5</span>
         </div>
        </div>
        <div><button onClick={handleOnClick} type="button" id="btnLink" name="btnLink">choose</button></div>
        </div>

        <div className="char-card">
        <div>Magician</div>
        <div>Job: Wizard</div>
        <div>Level: 1</div>

        <div className="table-main">
        <div className="header-wrapper">
         <span>Stats</span>
         <span>Attribute</span>
         </div>
         <div className="row-wrapper">
         <span>Str</span>
         <span>10</span>
         </div>
         <div className="row-wrapper">
         <span>Vit</span>
         <span>15</span>
         </div>
         <div className="row-wrapper">
         <span>Agi</span>
         <span>5</span>
         </div>
         <div className="row-wrapper">
         <span>Int</span>
         <span>5</span>
         </div>
        </div>
        <div><button onClick={handleOnClick} type="button" id="btnLink" name="btnLink">choose</button></div>
        </div> 

        <div className="char-card">
        <div>THIEF</div>
        <div>Job: Assassin</div>
        <div>Level: 1</div>
        <div className="table-main">
        <div className="header-wrapper">
         <span>Stats</span>
         <span>Attribute</span>
         </div>
         <div className="row-wrapper">
         <span>Str</span>
         <span>10</span>
         </div>
         <div className="row-wrapper">
         <span>Vit</span>
         <span>15</span>
         </div>
         <div className="row-wrapper">
         <span>Agi</span>
         <span>5</span>
         </div>
         <div className="row-wrapper">
         <span>Int</span>
         <span>5</span>
         </div>
        </div>
        <div><button onClick={handleOnClick} type="button" id="btnLink" name="btnLink">choose</button></div>
        </div> 

        <div className="char-card">
        <div>MERCHANT</div>
        <div>Job: Blacksmith</div>
        <div>Level: 1</div>

        <div className="table-main">
        <div className="header-wrapper">
         <span>Stats</span>
         <span>Attribute</span>
         </div>
         <div className="row-wrapper">
         <span>Str</span>
         <span>10</span>
         </div>
         <div className="row-wrapper">
         <span>Vit</span>
         <span>15</span>
         </div>
         <div className="row-wrapper">
         <span>Agi</span>
         <span>5</span>
         </div>
         <div className="row-wrapper">
         <span>Int</span>
         <span>5</span>
         </div>
        </div>

        <div><button onClick={handleOnClick} type="button" id="btnLink" name="btnLink">choose</button></div>
        </div> 

    </div>

</div>

)
}

export default character