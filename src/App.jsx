import { RouterProvider } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./pages/Home"
import { routes } from "./routes"



function App() {
 

  return (
    <>

    <RouterProvider router={routes} />
    </>
  )
}

export default App
