import './App.css'


export default function navbar() {
    return (
        <>
            <nav className="Navbar">
                <a className="navHeader" href="#">react app login ;)</a>
                <div className="navLinkDiv" id="navbarText">
                    <ul className='navLinks'>
                        <li className="navItem">
                            <a className="navLink" href="#">Home</a>
                        </li>
                        <li className="navItem">
                            <a className="navLink" href="#">About</a>
                        </li>
                        <li className="navItem">
                            <a className="navLink" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}