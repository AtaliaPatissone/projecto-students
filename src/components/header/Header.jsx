import { NavBar } from "./NavBar"

const Header = () => {
    return ( 
        <header className="bg-violet-100 flex justify-between shadow-sm p-4">
        <div>
            <h1> <strong>Best School</strong></h1>
        </div>
    <NavBar/>
    </header>
     );
}
 
export default Header;