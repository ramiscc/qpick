import styles from './product.module.scss'
import icons from "../../assets/icons";
import {useCallback, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../hooks/redux";
import IPhone from "../../models/product-types/phone";


export default function ProductPage() {

    const [like, setLike] = useState(false)
    const [product, setProduct] = useState<IPhone>()
    const {id, type} = useParams()
    const {phones, covers, headphones} = useAppSelector(s => s.product)

    useEffect(() => {
        setProduct(phones.find(el => el.id === id))
    }, [])
    console.log(product)
    return (
        <div className={styles.product}>
            <p className={styles.typeDevice}>Наушники</p>
            <div className={styles.card}>
                {like &&
                    <svg onClick={() => setLike(!like)} className={styles.icon} width="20" height="19"
                         viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.001 1.52898C12.35 -0.58002 15.98 -0.51002 18.243 1.75698C20.505 4.02498 20.583 7.63698 18.479 9.99298L9.99901 18.485L1.52101 9.99298C-0.582994 7.63698 -0.503994 4.01898 1.75701 1.75698C4.02201 -0.50702 7.64501 -0.58302 10.001 1.52898Z"
                            fill="#1C1C27"/>
                    </svg>}
                {!like &&
                    <svg onClick={() => setLike(!like)} className={styles.icon} width="20" height="19"
                         viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.001 1.52898C12.35 -0.58002 15.98 -0.51002 18.243 1.75698C20.505 4.02498 20.583 7.63698 18.479 9.99298L9.99901 18.485L1.52101 9.99298C-0.582994 7.63698 -0.503994 4.01898 1.75701 1.75698C4.02201 -0.50702 7.64501 -0.58302 10.001 1.52898ZM16.827 3.16998C15.327 1.66798 12.907 1.60698 11.337 3.01698L10.002 4.21498L8.66601 3.01798C7.09101 1.60598 4.67601 1.66798 3.17201 3.17198C1.68201 4.66198 1.60701 7.04698 2.98001 8.62298L10 15.654L17.02 8.62398C18.394 7.04698 18.319 4.66498 16.827 3.16998Z"
                            fill="#1C1C27"/>
                    </svg>}
                <div className={styles.imgBlock}>
                    <img className={styles.img} src={icons.product} alt='Apple BYZ S852I'/>
                </div>
                <div className={styles.description}>
                    <div className={styles.block}>
                        <p className={styles.title}>{product?.brandName}</p>
                        <div>
                            <p className={styles.price}>{product?.newPrice} сом</p>
                            <p className={styles.oldPrice}>{product?.oldPrice} сом</p>
                        </div>
                    </div>
                    <div className={styles.rating}>
                        <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.627 18.2497L5.41636 22.6079L7.37665 14.4742L0.960938 9.03564L9.38233 8.36796L12.627 0.647087L15.8716 8.36796L24.2943 9.03564L17.8773 14.4742L19.8376 22.6079L12.627 18.2497Z"
                                fill="#FFCE7F"/>
                        </svg>
                        <span>4.7</span>
                    </div>
                </div>
            </div>
            <div className={styles.block2}>
                <div className={styles.descriptionProduct}>
                    <div className={styles.descriptionTitle}>
                        <p>Описание и характеристики</p>
                    </div>
                    <ul className={styles.productDescription}>
                        <li><b>Выходная мощность:</b> 25W</li>
                        <li><b>Кабель:</b> Нет</li>
                        <li><b>Разъемы:</b> USB-C/ USB</li>
                        <li><b>Тип:</b> Кабель</li>
                        <li><b>Тип подключения:</b> От сети</li>
                        <li><b>Функциональность:</b> Для нескольких устройств</li>
                    </ul>
                </div>
                <div className={styles.buttons}>
                    <button className={'btn'}>Купить!</button>
                    <button className={'btn'}>
                        <svg width="20" height="20" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.105 5.42582L0.163574 1.6486L1.88332 0L5.82353 3.77839H24.3481C24.5376 3.77837 24.7244 3.82081 24.8937 3.90231C25.0629 3.98381 25.21 4.10212 25.3231 4.2478C25.4362 4.39347 25.5123 4.56247 25.5451 4.74132C25.578 4.92016 25.5668 5.1039 25.5124 5.27786L22.5956 14.5986C22.5205 14.8387 22.3667 15.0492 22.157 15.1988C21.9472 15.3485 21.6927 15.4293 21.4312 15.4293H6.53573V17.7595H19.9047V20.0896H5.32037C4.99803 20.0896 4.6889 19.9669 4.46098 19.7484C4.23305 19.5299 4.105 19.2336 4.105 18.9246V5.42582ZM6.53573 6.10857V13.0991H20.527L22.7147 6.10857H6.53573ZM5.92805 24.75C5.44455 24.75 4.98085 24.5659 4.63896 24.2381C4.29707 23.9104 4.105 23.4659 4.105 23.0024C4.105 22.5389 4.29707 22.0943 4.63896 21.7666C4.98085 21.4389 5.44455 21.2547 5.92805 21.2547C6.41155 21.2547 6.87525 21.4389 7.21714 21.7666C7.55903 22.0943 7.7511 22.5389 7.7511 23.0024C7.7511 23.4659 7.55903 23.9104 7.21714 24.2381C6.87525 24.5659 6.41155 24.75 5.92805 24.75ZM20.5124 24.75C20.0289 24.75 19.5652 24.5659 19.2233 24.2381C18.8815 23.9104 18.6894 23.4659 18.6894 23.0024C18.6894 22.5389 18.8815 22.0943 19.2233 21.7666C19.5652 21.4389 20.0289 21.2547 20.5124 21.2547C20.9959 21.2547 21.4596 21.4389 21.8015 21.7666C22.1434 22.0943 22.3355 22.5389 22.3355 23.0024C22.3355 23.4659 22.1434 23.9104 21.8015 24.2381C21.4596 24.5659 20.9959 24.75 20.5124 24.75Z"
                                fill="white"/>
                        </svg>
                        <p>Добавить в корзину</p>
                    </button>
                </div>
            </div>
        </div>
    )
}