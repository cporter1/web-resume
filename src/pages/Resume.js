import { useEffect, useState } from "react"
import docu from '../images/resume.pdf'

export default function Resume() {
    
    const [isLoading , setIsLoading] = useState(true)

    useEffect( () => {
        setTimeout( ()=> setIsLoading(false) , 500)
    })


    if (isLoading) {
        return (
            <div className="content-container">
                <div className="loading-icon"/>
            </div>
        )
    }
    else {
        return (
            <div className="content-container">
                <object className="pdf" data={docu} />
            </div>
    
        )
    }
}