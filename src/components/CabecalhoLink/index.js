import { Link } from 'react-router-dom';
import styles from './CabecalhoLink.module.css';

function CabecalhoLink({ url, children, active }) {
    
    return (
        <Link to={url} className={active ? styles.linkActive : styles.link}>
            {children}
        </Link>
    )
}

export default CabecalhoLink;