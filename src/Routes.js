import React, {lazy} from "react";
import { Route, Routes as Switch } from "react-router-dom";
const ListPage = lazy(() => "./Page/ListPage");
const CreatePage = lazy(() => "./Page/CreatePage") ;

const Routes = () => {
    return(
        <Switch>
            <Route path="/create" element={<CreatePage/>}/>
            <Route path="/" element={<ListPage/>}/>
        </Switch>
    )
}

export default Routes