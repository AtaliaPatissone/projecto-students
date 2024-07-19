import { useState } from "react"
import Header from "../components/header/Header"
import { Footer } from "../components/foter"

export const Contact = () =>{
    const [isVisible, setIsVisible] = useState(true)

    const handleSetIsVisible = () =>{
        setIsVisible(!isVisible)
    }
    
    return(
        <>
        <Header/>
        <div className='h-96 w-full flex items-center justify-center'>
       {(isVisible) ? <div className='shadow-2xl p-5 w-fit '>
            <form className='flex flex-col space-y-5 items-end'>
            <input placeholder="Name" 
                className='p-3 w-96 outline-none border-r-0 border-l-0 border-t-0 border-b-2'/>

            <input placeholder="Age" 
                className='p-3 w-96 outline-none border-r-0 border-l-0 border-t-0 border-b-2'/>
            
            <button onClick={handleSetIsVisible} className="w-fit h-10  text-white px-5 rounded-md bg-black-700">send</button>
            </form>
        </div>  :

        <div className="h-64 w-64 p-3 shadow-xl">
            <div className='w-full text-end'><button onClick={handleSetIsVisible}>X</button></div>
            <p>Name: nome</p>
            <p>Age: 25</p>
        </div>
         
        }
        </div>
        <Footer/>
        </>
    )
} 