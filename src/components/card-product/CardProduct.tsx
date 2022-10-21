import styles from './card-product.module.scss'
import icons from "../../assets/icons";
import {Link} from "react-router-dom";
import {FC, useState} from "react";
import IPhone from "../../models/product-types/phone";
import ICover from "../../models/product-types/cover";
import IHeadphone from "../../models/product-types/headphone";

interface CardProductProps{
    product: IPhone | ICover | IHeadphone
}


const CardProduct: FC<CardProductProps> = ({product}) => {

    const [like, setLike] = useState(false)

    return (
        <Link to={`/${product.type}/${product.id}`} className={styles.card}>
            {like &&
                <svg onClick={() => setLike(!like)} className={styles.icon} width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.001 1.52898C12.35 -0.58002 15.98 -0.51002 18.243 1.75698C20.505 4.02498 20.583 7.63698 18.479 9.99298L9.99901 18.485L1.52101 9.99298C-0.582994 7.63698 -0.503994 4.01898 1.75701 1.75698C4.02201 -0.50702 7.64501 -0.58302 10.001 1.52898Z" fill="#1C1C27"/>
                </svg>}
            {!like &&
                <svg onClick={() => setLike(!like)} className={styles.icon} width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.001 1.52898C12.35 -0.58002 15.98 -0.51002 18.243 1.75698C20.505 4.02498 20.583 7.63698 18.479 9.99298L9.99901 18.485L1.52101 9.99298C-0.582994 7.63698 -0.503994 4.01898 1.75701 1.75698C4.02201 -0.50702 7.64501 -0.58302 10.001 1.52898ZM16.827 3.16998C15.327 1.66798 12.907 1.60698 11.337 3.01698L10.002 4.21498L8.66601 3.01798C7.09101 1.60598 4.67601 1.66798 3.17201 3.17198C1.68201 4.66198 1.60701 7.04698 2.98001 8.62298L10 15.654L17.02 8.62398C18.394 7.04698 18.319 4.66498 16.827 3.16998Z" fill="#1C1C27"/>
                </svg>}

            <div className={styles.imgBlock}>
                <img className={styles.img} src={icons.product} alt='Apple BYZ S852I'/>
            </div>
            <div className={styles.description}>
                <div className={styles.block}>
                    <p className={styles.title}>{product.brandName}</p>
                    <div>
                        <p className={styles.price}>{product.newPrice} сом</p>
                        <p className={styles.oldPrice}>{product.oldPrice} сом</p>
                    </div>
                </div>
                <div className={styles.rating}>
                    <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.627 18.2497L5.41636 22.6079L7.37665 14.4742L0.960938 9.03564L9.38233 8.36796L12.627 0.647087L15.8716 8.36796L24.2943 9.03564L17.8773 14.4742L19.8376 22.6079L12.627 18.2497Z" fill="#FFCE7F"/>
                    </svg>
                    <span>4.7</span>
                </div>
            </div>
        </Link>
    )
}

export default CardProduct