import styles from './Background.module.css';

const Background = (props) =>{
    return(
        <main className={styles.container}>
            {props.children}
        </main>
    );
}

export default Background;