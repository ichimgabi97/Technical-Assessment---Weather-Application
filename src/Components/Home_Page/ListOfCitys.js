import styles from './ListOfCitys.module.css';

const ListOfCitys = (props) =>{
    return(
        <section className={styles.list_container}>
            <ul>
                {props.list.map(city =>  (
                        <li 
                          key={city.id}
                          onClick={() => props.clickHandle(city)}
                        >
                            {`${city.name}, ${city.country}`}
                        </li>))}
            </ul>
        </section>
    );
}

export default ListOfCitys;