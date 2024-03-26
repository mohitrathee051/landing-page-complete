import React, { useState, useRef } from 'react';
import faqaboveimg from '../assets/faqaboveimg.png'
import faqabovebg from '../assets/faqabovebg.png'
import styles from './FaqAbove.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FaqAbove() {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const next = () => {
        sliderRef.current.slickNext(); // Access slickNext via sliderRef.current
    };

    const previous = () => {
        sliderRef.current.slickPrev(); // Access slickPrev via sliderRef.current
    };

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        speed: 700,
        afterChange: (current) => setCurrentSlide(current)
    };
    return (
        <>
            <Slider {...settings} ref={sliderRef}>
                <div>
                    <div className={styles.Faqabove}>
                        <div className={styles.imgFaqAbove}>
                            <div className={styles.topimgabove}>
                                <img src={faqaboveimg} alt="" />
                            </div>
                            <div className={styles.bgimgabove}>
                                <img src={faqabovebg} alt="" />
                            </div>
                        </div>
                        <div className={styles.rightFaqabove}>
                            <div className={styles.toprightfaqabove}>
                                <h3>Join
                                    <span>
                                        8,000 business
                                    </span>
                                    <br />
                                    using TRC to get reviews
                                </h3>
                                <p>
                                    Eget at imperdiet vel sodales aliquam. Sed sapien diam orci ipsum neque est egestas.
                                    Morbi faucibus odio nunc, egestas nec sit rutrum suscipit.
                                </p>
                            </div>
                            <div className={styles.bottomrightfaqabove}>
                                <p>
                                    “ Morbi quam pellentesque blandit tellus duis placerat pellentesque ultrices. Risus pulvinar enim, id in morbi tortor elementum aliquam! ”
                                </p>
                                <div className={styles.namefaqabove}>
                                    <div className={styles.Namee}>
                                        <h6>
                                            - Ahmad Dokidis
                                        </h6>
                                        <p>
                                            FLORIST’S OWNER
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className={styles.Faqabove}>
                        <div className={styles.imgFaqAbove}>
                            <div className={styles.topimgabove}>
                                <img src={faqaboveimg} alt="" />
                            </div>
                            <div className={styles.bgimgabove}>
                                <img src={faqabovebg} alt="" />
                            </div>
                        </div>
                        <div className={styles.rightFaqabove}>
                            <div className={styles.toprightfaqabove}>
                                <h3>Join
                                    <span>
                                        8,000 business
                                    </span>
                                    <br />
                                    using TRC to get reviews
                                </h3>
                                <p>
                                    Eget at imperdiet vel sodales aliquam. Sed sapien diam orci ipsum neque est egestas.
                                    Morbi faucibus odio nunc, egestas nec sit rutrum suscipit.
                                </p>
                            </div>
                            <div className={styles.bottomrightfaqabove}>
                                <p>
                                    “ Morbi quam pellentesque blandit tellus duis placerat pellentesque ultrices. Risus pulvinar enim, id in morbi tortor elementum aliquam! ”
                                </p>
                                <div className={styles.namefaqabove}>
                                    <div className={styles.Namee}>
                                        <h6>
                                            - Ahmad Dokidis
                                        </h6>
                                        <p>
                                            FLORIST’S OWNER
                                        </p>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className={styles.Faqabove}>
                        <div className={styles.imgFaqAbove}>
                            <div className={styles.topimgabove}>
                                <img src={faqaboveimg} alt="" />
                            </div>
                            <div className={styles.bgimgabove}>
                                <img src={faqabovebg} alt="" />
                            </div>
                        </div>
                        <div className={styles.rightFaqabove}>
                            <div className={styles.toprightfaqabove}>
                                <h3>Join
                                    <span>
                                        8,000 business
                                    </span>
                                    <br />
                                    using TRC to get reviews
                                </h3>
                                <p>
                                    Eget at imperdiet vel sodales aliquam. Sed sapien diam orci ipsum neque est egestas.
                                    Morbi faucibus odio nunc, egestas nec sit rutrum suscipit.
                                </p>
                            </div>
                            <div className={styles.bottomrightfaqabove}>
                                <p>
                                    “ Morbi quam pellentesque blandit tellus duis placerat pellentesque ultrices. Risus pulvinar enim, id in morbi tortor elementum aliquam! ”
                                </p>
                                <div className={styles.namefaqabove}>
                                    <div className={styles.Namee}>
                                        <h6>
                                            - Ahmad Dokidis
                                        </h6>
                                        <p>
                                            FLORIST’S OWNER
                                        </p>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>


                </div>


            </Slider>
            <div className={styles.controls}>
                <button className="button" onClick={previous}>
                    &lt;
                </button >
                <span>{`${currentSlide + 1}/3`}</span>
                <button className="button" onClick={next}>
                    &gt;
                </button>
            </div>
        </>
    )
}

export default FaqAbove
