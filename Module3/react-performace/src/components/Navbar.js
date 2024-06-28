import { Link } from "react-router-dom";



const Navbar=({loadAboutPage, loadContactPage})=>{

    return (

        <nav>
            <ul>

                <li>
                    <Link to="/"> Home </Link>
                </li>

                  <li>
                    <Link to="/about" onClick={loadAboutPage} > About </Link>
                </li>

                  <li>
                    <Link to="/contact" onClick={loadContactPage} > Contact </Link>
                </li>

            </ul>

        </nav>

    )

}

export default Navbar;