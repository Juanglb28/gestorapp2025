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
                        return <div className=""  key={zone.id}>
                            <h2 className="zone-name">{zone.nombre}</h2>
                            <Calendar zoneObject={zone}/>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Dashboard