import React from 'react'
import midimg from '../assets/midimg.png'
import midimgrectangle from '../assets/midimgrectangle.png'
import styles from './page1End.module.css';



function Page1End() {
    return (
        <div className={styles.page1foot}>
            <div className={styles.leftpage1}>
                <p>Keep getting</p>
                <p>more reviews</p>
            </div>
            <div className={styles.midpage1}>
                <div className={styles.bgimagee}>
                    <img src={midimg} alt="" />
                </div>
                <div className={styles.topimagee}>
                    <img src={midimgrectangle} alt="" />
                </div>
            </div>
            <div className={styles.rightpage1}>
                <p>and stay their</p>
                <p className={styles.stayfoot}>top choice</p>
            </div>
        </div>
    )
}

export default Page1End
