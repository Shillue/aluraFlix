import styles from './Logo.module.css';
import logo from './Logo.svg';

function Logo(){
    return(
        <img src={logo} alt="Logo do AluraFlix" className={styles.logo}></img>
    )
}

export default Logo;