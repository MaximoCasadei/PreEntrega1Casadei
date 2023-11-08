import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './Nav.css'

const NavBar = () => {
    return (
        <div className="DivMayor ContentMayor">
            <div className="DivMayor divImgH1">
                <img src="./img/logoMate.png" alt="" className="Logo" />
                <Link to='/' className="LinkLogo">
                    <h1>Mi Mate - Tienda</h1>
                </Link>  
            </div>
            <div className="DivMayor DivUl">
                <ul className="DivMayor Ul">
                <Link to={`/category/Mates`} className="LinkNav">Mates</Link>
                <Link to={'/category/Bombillas'} className="LinkNav">Bombillas</Link>
                <Link to={'/category/Yerbas'} className="LinkNav">Yerbas</Link>
                    <button className="btn">              
                            <CartWidget/>
                    </button>
                </ul>

            </div>
        </div>
    )
};

export default NavBar;