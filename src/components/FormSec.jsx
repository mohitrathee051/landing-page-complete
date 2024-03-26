import React from 'react'
import Lock from '../assets/Lock.png'
import styles from './FormSec.module.css';

function FormSec() {
    return (
        <div className={styles.FullForm}>
            <div className={styles.leftForm}>
                <p className={styles.Shipping}>Shipping</p>
                <div className={styles.businessname}>
                    <p>Businees Name</p>
                    <input type="text" placeholder='The Review Card' />
                </div>
                <div className={styles.Name}>
                    <div className={styles.firstName}>
                        <p>First Name</p>
                        <input type="text" placeholder='Dillon' />
                    </div>
                    <div className={styles.lastName}>
                        <p>Last Name</p>
                        <input type="text" placeholder='Kopf' />
                    </div>
                </div>
                <div className={styles.Adress}>
                    <p>Street Address</p>
                    <input type="text" placeholder='17 State Street' />
                    <p className={styles.AddSecondLine}>Add second line</p>
                </div>
                <div className={styles.stateZip}>
                    <div className={styles.state}>
                        <p>State</p>
                        <input type="text" placeholder='New York' />
                    </div>
                    <div className={styles.zip}>
                        <p>Zip/Postal Code</p>
                        <input type="text" placeholder='10004' />
                    </div>
                </div>
                <div className={styles.Email}>
                    <p>Your Business Email (to receive your receipt)</p>
                    <input type="text" placeholder='hello@thereviewcard.com' />
                </div>
                <div className={styles.PhoneNo}>
                    <p>Phone Number</p>
                    <input type="text" placeholder='646 - 123 4567' />
                </div>

                <div className={styles.payment}>
                    <p className={styles.paymentp}>Payment</p>
                    <div className={styles.paymentlabelswrapper}>
                        <div className={styles.label1}>
                            <input type="radio" name="paymentMethod" value="creditCard" />
                            <span>Credit Card</span>
                        </div>
                        <div className={styles.label2}>
                            <input type="radio" name="paymentMethod" value="paypal" />
                            <span>PayPal</span>
                        </div>
                    </div>
                    <div className={styles.paymentline}>
                    </div>
                </div>
                <div className={styles.cardno}>
                    <p>Card Number</p>
                    <input type="text" placeholder='1234 5678 9101 1121' />
                </div>
                <div className={styles.ExpDate}>
                    <div className={styles.expiry}>
                        <p>Expiry Date</p>
                        <input type="text" placeholder='MM/YY' />
                    </div>
                    <div className={styles.cvc}>
                        <p>CVC</p>
                        <input type="text" placeholder='CVC' />
                    </div>
                </div>
            </div>
            <div className={styles.rightForm}>
                <p className={styles.Shipping}>Order Summary</p>
                <div className={styles.plans}>
                    <div className={styles.monthplan}>
                        <div className={styles.radiowrapper}>
                            <input type="radio" name="timeperiod" value="montly" />
                            <span className={styles.ordersummarypara}>Monthly Plan</span>
                        </div>


                        <p className={styles.ordersummarypara}>$49.99</p>
                    </div>
                    <div className={styles.annualplan}>
                        <div className={styles.radiowrapper}>
                            <input type="radio" name="timeperiod" value="annual" />
                            <span className={styles.valuescsswrapper}>Annual Plan</span>

                        </div>
                        <p className={styles.valuescsswrapper}>$499.99</p>
                    </div>
                </div>
                <div className={styles.discount}>
                    <p className={styles.ordersummarypara}>Promo Code Discount</p>
                    <p className={styles.valuescsswrapper}>-$7.50</p>
                </div>
                <div className={styles.shippingmethod}>
                    <p className={styles.ordersummarypara}>Shipping Method</p>
                    <p className={styles.valuescsswrapper}>UPS Ground 3-5 business day</p>
                </div>
                <div className={styles.shippingfee}>
                    <p className={styles.ordersummarypara}>Shipping Fee</p>
                    <p className={styles.valuescsswrapper}>$0.00</p>
                </div>
                <div className={styles.totalpayment}>
                    <p className={styles.ordersummarypara}>Total Payment</p>
                    <p className={styles.ordersummarypara}><span className={styles.cuthrough}>$49.99/mo</span>$42.49</p>
                </div>
                <button>
                    <span>Complete Order</span><img src={Lock} alt="" />
                </button>
                <p className={styles.buttonknicheline}>All plans are no commitment, cancel anytime</p>
                <p className={styles.moneyback}>100% Money Back Guarantee</p>
                <p>
                    If for any reason you are not completely satisfied with the number of reviews your business receives, cancel within the first 60 days by texting CARDCANCEL to 900900 or calling us at (800) 845-8928 and we will refund your money, no questions asked. By clicking "Complete Order” you agree to our <span className={styles.termsandconditions}>Terms & Conditions</span>  and are enrolling in a recurring subscription that will continue until you cancel. You can cancel any time.
                </p>
            </div>

        </div >
    )
}

export default FormSec
