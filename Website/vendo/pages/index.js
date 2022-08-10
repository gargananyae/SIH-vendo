import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faApple, faGooglePlay} from "@fortawesome/fontawesome-free-brands"

export default function Home() {
  return (
    <div className={styles.container}>
        <Navbar />
        <div className={styles.headline}>“Impacting” the lives of 10 million vendors</div>
        <div className="download-btn app-store">
        <FontAwesomeIcon icon={faApple} size="2x" /> <div >  Download</div>
        </div>
        <div className="download-btn google-play">
        <FontAwesomeIcon icon={faGooglePlay} size="2x"/> <div >  Download</div>
        </div>
        
    </div>
  )
}
