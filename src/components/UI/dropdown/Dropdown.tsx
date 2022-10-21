import styles from './dropdown.module.scss'
import {useEffect, useRef, useState} from "react";

export default function Dropdown() {

    const [active, setActive] = useState(false)

    return (
        <>
            <div className={styles.dropdown}>
                <div className={styles.title} onClick={() => setActive(!active)}>
                    <svg width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.14286 2.1V18.9H12.8571V2.1H2.14286ZM1.07143 0H13.9286C14.2127 0 14.4853 0.110625 14.6862 0.307538C14.8871 0.504451 15 0.771523 15 1.05V19.95C15 20.2285 14.8871 20.4955 14.6862 20.6925C14.4853 20.8894 14.2127 21 13.9286 21H1.07143C0.787268 21 0.514746 20.8894 0.313814 20.6925C0.112883 20.4955 0 20.2285 0 19.95V1.05C0 0.771523 0.112883 0.504451 0.313814 0.307538C0.514746 0.110625 0.787268 0 1.07143 0ZM7.5 15.75C7.78416 15.75 8.05668 15.8606 8.25761 16.0575C8.45855 16.2544 8.57143 16.5215 8.57143 16.8C8.57143 17.0785 8.45855 17.3455 8.25761 17.5425C8.05668 17.7394 7.78416 17.85 7.5 17.85C7.21584 17.85 6.94332 17.7394 6.74239 17.5425C6.54145 17.3455 6.42857 17.0785 6.42857 16.8C6.42857 16.5215 6.54145 16.2544 6.74239 16.0575C6.94332 15.8606 7.21584 15.75 7.5 15.75V15.75Z" fill="#838383"/>
                    </svg>
                    <span>Выбрать модель телефона</span>
                    <svg style={active ? {transform: 'rotate(180deg)'}: {}} width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 5L0 1.24978L1.33396 0L4 2.50044L6.66604 0L8 1.24978L4 5Z" fill="#101010"/>
                    </svg>
                </div>
                {active &&
                    <div className={styles.content}>
                        <details>
                            <summary className={styles.phoneBrandTitle}>
                                <p>iPhone</p>
                                <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 5L0 1.24978L1.33396 0L4 2.50044L6.66604 0L8 1.24978L4 5Z" fill="#101010"/>
                                </svg>
                            </summary>
                            <p className={styles.phoneTitle}>iPhone 14</p>
                            <p className={styles.phoneTitle}>iPhone 14 Pro</p>
                            <p className={styles.phoneTitle}>iPhone 14 Pro Max</p>
                        </details>
                        <details>
                            <summary className={styles.phoneBrandTitle}>
                                <p>Samsung</p>
                                <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 5L0 1.24978L1.33396 0L4 2.50044L6.66604 0L8 1.24978L4 5Z" fill="#101010"/>
                                </svg>
                            </summary>
                            <p className={styles.phoneTitle}>Samsung</p>
                            <p className={styles.phoneTitle}>Samsung Note</p>
                            <p className={styles.phoneTitle}>Samsung Note 11</p>
                            <p className={styles.phoneTitle}>Samsung Note 12</p>
                        </details>
                        <details>
                            <summary className={styles.phoneBrandTitle}>
                                <p>Xiaomi</p>
                                <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 5L0 1.24978L1.33396 0L4 2.50044L6.66604 0L8 1.24978L4 5Z" fill="#101010"/>
                                </svg>
                            </summary>
                            <p className={styles.phoneTitle}>Xiaomi</p>
                            <p className={styles.phoneTitle}>Xiaomi Note</p>
                            <p className={styles.phoneTitle}>Xiaomi Note Pro</p>
                            <p className={styles.phoneTitle}>Xiaomi Note Pro Max</p>
                        </details>
                    </div>}
            </div>
            {active &&
                <div onClick={() => setActive(!active)} className={styles.block}></div>}
        </>
    )
}