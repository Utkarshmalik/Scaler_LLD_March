import { Link } from "react-router-dom";
import Logo from "../../assets/MovieLogo.png"

function Navbar(){

    return <div className="flex space-x-7 items-center py-4 pl-3">


        <Link to="/">
            <img className="w-[50px]" src={Logo} />
        </Link>

        <Link className="text-blue-500 font-bold text-3xl" to="/">
            Movies
        </Link>

        <Link className="text-blue-500 font-bold text-3xl"  to="/watchlist">
            WatchList
        </Link>


    </div>


}

export default Navbar;