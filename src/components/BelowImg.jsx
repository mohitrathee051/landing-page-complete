import React from 'react'
import iicon from '../assets/iicon.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import icon5 from '../assets/icon5.png'
import icon6 from '../assets/icon6.png'
import icon7 from '../assets/icon7.png'
import icon8 from '../assets/icon8.png'
import styles from './BelowImg.module.css';


function Belowimg() {
    return (
        <div className={styles.bottomimgpage1}>
            <div className={styles.fullbelowimg}>
                <div className={styles.belowimgleft}>
                    <p className={styles.belowimgleftpara1}>Everything you’ll need to grow your review count as quickly as possible</p>
                    <div class={styles.line}></div>
                    <p className={styles.belowimgleftpara2}>If for any reason you are not completely satisfied with the number of reviews you get, we’ll refund your money in full.</p>
                </div>
                <div className={styles.fbelowimgright}>
                    <div className={styles.iconone}>
                        <img src={icon1} alt="icon1" />
                        <p>2000 Starter cards in your chosen style</p>
                        <img src={iicon} alt="iicon" />
                    </div>
                    <div className={styles.icontwo}>
                        <img src={icon2} alt="icon2" />
                        <p>Unlimited customer visits to your review portal</p>
                        <img src={iicon} alt="iicon" />
                    </div>
                    <div className={styles.iconthree}>
                        <img src={icon3} alt="icon3" />
                        <p>Unlimited free card refills (text REFILL to 900900)</p>
                        <img src={iicon} alt="iicon" />
                    </div>
                    <div className={styles.iconfour}>
                        <img src={icon4} alt="icon4" />
                        <p>Dedicated QR code for your business</p>
                        <img src={iicon} alt="iicon" />
                    </div>
                    <div className={styles.iconfive}>
                        <img src={icon5} alt="icon5" />
                        <p>Negative review blocking technology</p>
                        <img src={iicon} alt="iicon" />
                    </div>
                    <div className={styles.iconsix}>
                        <img src={icon6} alt="icon6" />
                        <p>Change the review site linked to your cards at any time</p>
                        <img src={iicon} alt="iicon" />
                    </div>
                    <div className={styles.iconseven}>
                        <img src={icon7} alt="icon7" />
                        <p>Dedicated phone & email support</p>
                        <img src={iicon} alt="iicon" />
                    </div>
                    <div className={styles.iconeight}>
                        <img src={icon8} alt="icon8" />
                        <p>Cancel anytime</p>
                        <img src={iicon} alt="iicon" />
                    </div>
                </div>
            </div>
            <div className={styles.endlinepage1}>
                <p>Still have questions? Call us at 800 - 845 - 8928</p>
            </div>
        </div>
    )
}

export default Belowimg
