import { Link } from "react-router-dom"
import './Navbar.css'

export const Navbar = () => {
    return (
        <>
            <nav>
                <div className="main-nav">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                       
                    </ul>
                </div>
                <div className="right-nav">
                    <ul>
                        <li>
                            
                        </li>
                    </ul>
                </div>
            </nav>
            <hr id="hr-nav" />
        </>
    )
}