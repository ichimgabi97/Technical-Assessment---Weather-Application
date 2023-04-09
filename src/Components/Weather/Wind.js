import Compass from "./Compass";

import windy_img from '../../assets/windy.png';
import styles from './Wind.module.css';

const Wind = (props) =>{
    return (
        <div className={styles.container}>
            <div className={styles.card_name}>
                <img src={windy_img} alt='windy icon'/>
                <h3>Wind</h3>
            </div>
            <Compass speed={props.speed} direction={props.direction}/>
        </div>
    );
}

export default Wind;