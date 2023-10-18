import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <div className="DivMayor ContentMayor">
            <div className="DivMayor divImgH1">
                <img src="./img/logoMate.png" alt="" className="Logo" />
                <h1>Mi Mate - Tienda</h1>
            </div>
            <div className="DivMayor DivUl">
                <ul className="DivMayor Ul">
                    <button className="btn">
                        <li className="li">Mates</li>
                    </button>
                    <button className="btn">
                        <li className="li">Bombillas</li>
                    </button>
                    <button className="btn">
                        <li className="li">Yerbas</li>
                    </button>
                    <button className="btn">
                        <li className="li">Sobre Nosotros</li>
                    </button>  
                    <button className="btn">              
                            <CartWidget/>
                    </button>
                </ul>
                
            </div>
        </div>
    )
};

export default NavBar;