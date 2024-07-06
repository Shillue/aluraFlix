import styles from './Cabecalho.module.css';
import { Link, useLocation } from "react-router-dom";
import CabecalhoLink from "components/CabecalhoLink";
import Logo from 'components/Logo';


function Cabecalho(){
    const location = useLocation();
    return(
        <header className={styles.cabecalho}>
            <Link to="/">
                <Logo/>
            </Link>
            <nav>
                <CabecalhoLink url="/" active={location.pathname === '/'}>
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="/novovideo" active={location.pathname === '/novovideo'}>
                    Novo Vídeo
                </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho;