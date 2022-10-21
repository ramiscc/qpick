import CardProduct from "../../components/card-product/CardProduct";
import styles from './home.module.scss'
import {useAppSelector} from "../../hooks/redux";

export default function HomePage() {

    const {headphones, covers, phones} = useAppSelector(s => s.product)

    return (
        <div>
            <p className={styles.product}>Наушники</p>
            <div className={styles.cards}>
                {phones.map(phone => {
                    return (
                        <div key={phone.id} className={styles.cardBlock}>
                            <CardProduct product={phone}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
