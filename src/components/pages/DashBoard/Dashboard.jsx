import React from "react"
import "./Dashboard.css"
import Calendar from "../../common/Calendar/Calendar"
import { zones } from "../../../data/data"

const Dashboard=()=>{

    return(
        <>
            <div className="dashboard"> 
                <Calendar/>
            </div>
        </>
    )
}

export default Dashboard