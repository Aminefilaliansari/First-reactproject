import viteLogo from '/vite.svg'
import {Link} from "react-router-dom";



export default function headerMenu() {
    return (

        <header className='p-5'>
            <nav className='flex items-center justify-center w-full gap-10'>
                <img src={viteLogo} className="logo" alt="Vite logo" />
        
                <Link to={``}>Home</Link>
                <Link to={`About`}>About</Link>
                <Link to={`Contact`}>Contact</Link>
            </nav>
        </header>
    
    
    )
}
