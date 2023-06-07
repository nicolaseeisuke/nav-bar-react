import {Link} from 'react-router-dom'
import styles from './layouts/Navbar.module.css'

function Navbar(){

  return (
    <div>
       <ul className={styles.container}>
         <li className={styles.list}><Link to="/" className={styles.item}>Home</Link></li>
         <li className={styles.list}><Link to="/empresa" className={styles.item}>Empresa</Link></li>
         <li className={styles.list}><Link to="/contato" className={styles.item}>Contato</Link></li>
       </ul>
    </div>
  )

}

export default Navbar