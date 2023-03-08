import { useEffect, useState } from "react"
import resume from '../images/resume.jpg'

export default function Resume() {
    
    const [isLoading , setIsLoading] = useState(true)

    useEffect( () => {
        setTimeout( ()=> setIsLoading(false) , 500)
    })


    if (isLoading) {
        return (
            <div className="content-container">
                <div className="loader"/>
            </div>
        )
    }
    else {
        return (
            <div className="content-container">
                <img className="pdf" src={resume} alt='resume'/>
            </div>
    
        )
    }
}