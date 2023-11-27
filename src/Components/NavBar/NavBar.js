import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './Nav.css'
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import {CartContext} from "../../context/CartContext";

const NavBar = () => {
    const { setTheme, theme } = useContext(ThemeContext);
    const { productsQuantity } = useContext(CartContext);

    return (
        <div className="DivMayor ContentMayor">
            <div className="DivMayor divImgH1">
                <img src="./img/logoMate.png" alt="" className="Logo" />
                <Link to='/' className="LinkLogo">
                    <h1>Mi Mate - Tienda</h1>
                    <button onClick={ () => setTheme(theme === 'light' ? 'dark' : 'light') }>Cambia el tema</button>
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
                    <h1>{productsQuantity}</h1>
                </ul>

            </div>
        </div>
    )
};

export default NavBar;