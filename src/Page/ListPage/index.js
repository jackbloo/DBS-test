import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import TableComponent from "../../components/Table";
import SubHeading from "../../components/SubHeading";

const ListPage = () => {
const userData = useSelector((state) => state.data.userData)
return(
    <div>
        <Header/>
        <SubHeading/>
        <TableComponent data={userData}/>
    </div>

)
}

export default ListPage