import { Link } from "react-router-dom"
import './Navbar.css'
import {RiMessage3Fill} from 'react-icons/ri'

export const Navbar = () => {
    return (
        <>
            <nav>
                <div className="main-nav">
                    <ul>
                        <li>
                            <Link to="/"><RiMessage3Fill/></Link>
                        </li>
                       
                    </ul>
                </div>
            </nav>
            <hr id="hr-nav" />
        </>
    )
}