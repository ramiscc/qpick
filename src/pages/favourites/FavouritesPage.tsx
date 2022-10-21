import styles from './favourites.module.scss'


export default function FavouritesPage() {
    return (
        <div>
            <h1 className={styles.title}>Избранное</h1>

            <p className={styles.text}>Нет избранных товаров</p>
        </div>
    )
}