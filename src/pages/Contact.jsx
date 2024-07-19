import { useState } from "react"
import Header from "../components/header/Header"
import { Footer } from "../components/foter"
import { Form } from "../pages/form"


export const Contact = () =>{
    const [isVisible, setIsVisible] = useState(true)

    const handleSetIsVisible = () =>{
        setIsVisible(!isVisible)
    }
    
    return(
        <>
        <Header/>
        

        <Form/>
        <Footer/>
        </>
    )
} 