import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import ListPage from "./Page/ListPage";
import CreatePage from "./Page/CreatePage";

const Routes = () => {

    return(
        <Switch>
            <Route path="/create" element={<CreatePage/>}/>
            <Route path="/" element={<ListPage/>}/>
        </Switch>
    )
}

export default Routes