import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Welcome from './components/welcome'
import Character from './components/character'
import Inventory from './components/table'
import './style/welcome.css'

const App = () => {
return(

    <div >
        <Switch>

        <Route path="/welcome">
            <Welcome/>
        </Route>
        <Route path="/character">
            <Character/>
        </Route>
        <Route path="/table">
            <Inventory/>
        </Route>
        <Route path="">
            <Welcome/>
        </Route>
        </Switch>




    </div> 

)
}

export default App