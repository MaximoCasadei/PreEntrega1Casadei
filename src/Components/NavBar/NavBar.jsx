import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="DivMayor ContentMayor">
            <div className="DivMayor divImgH1">
                <img src="./img/logoMate.png" alt="" className="Logo" />
                <h1>Mi Mate - Tienda</h1>
            </div>
            <div className="DivMayor DivUl">
                <ul className="DivMayor Ul">

                        <li className="li">
                            <Link to={'/category/electronics'}>
                                Electronicos
                            </Link>
                        </li>
                    
                    
                        <li className="li">
                            <Link to={'/category/jewerly'}>
                                Joyería
                            </Link>
                        </li>
                    
                    
                        <li className="li">
                            <Link to={"/category/men's-clothing"}>
                            Ropa de Hombre
                            </Link>
                        </li>
                    
                   
                        <li className="li">
                            <Link to={"/category/women's-clothing"}>
                                Ropa de Mujer
                            </Link>
                        </li>
                    
                                 
                        <CartWidget/>
                   
                
                </ul>
                
            </div>
        </div>
    )
};

export default NavBar;