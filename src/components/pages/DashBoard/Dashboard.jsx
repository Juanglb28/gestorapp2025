import React from "react"
import "./Dashboard.css"
import Calendar from "../../common/Calendar/Calendar"
import { calendar, zones } from "../../../data/data"

const Dashboard=()=>{

    return(
        <>
            <div className="dashboard" > 
                
                {
                    zones.map((zone)=>{
                        return<Calendar zoneObject={zone}/>
                    })
                }
            </div>
        </>
    )
}

export default Dashboard