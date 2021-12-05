import Image from '../../Image/error-404.jpg';
import styles from '../styles/styles.css';

function NotFound() {
    return (
        <>
            <div className="NotFound">
                <img src={Image} alt="Not Found" />
            </div>
        </>
    )
}

export default NotFound;