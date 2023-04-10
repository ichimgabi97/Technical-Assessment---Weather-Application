import exit_img from '../../assets/Exit.png';

import styles from './FavoriteLocations.module.css';

const FavoriteLocations = (props) =>{
    //console.log(props.favoriteList);

    return(
        <div className={styles.container}>
            {props.favoriteList.map(el => (
                <div key={el.name} className={styles.element} onClick={() => props.selectedLocation(el)}>  
                    <p>{el.name}</p>
                    <div className={styles.exit} onClick={(event) => {props.removeLocation(el); event.stopPropagation()}}>
                        <img src={exit_img} alt='exit'/>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FavoriteLocations;