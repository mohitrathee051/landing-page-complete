import React, { useState } from 'react';
import uparrow from '../assets/uparrow.png';
import downarrow from '../assets/downarrow.png';
import styles from './Faq.module.css';

function Faq() {
    const [expanded, setExpanded] = useState({});

    const toggleExpand = (index) => {
        setExpanded(prevExpanded => ({
            ...prevExpanded,
            [index]: !prevExpanded[index]
        }));
    };

    const faqs = [
        {
            question: 'How does the 60-day money back guarantee work?',
            answer: 'If for any reason you are not completely satisfied with the number of reviews your business gets, cancel within the first 60 days and we’ll refund your money, no questions asked. To cancel, text CARDHELP to 900900 or call us at (800) 845-8928.'
        },
        {
            question: 'Can I change the review website linked to my cards?',
            answer: 'If for any reason you are not completely satisfied with the number of reviews your business gets, cancel within the first 60 days and we’ll refund your money, no questions asked. To cancel, text CARDHELP to 900900 or call us at (800) 845-8928.'
        },
        {
            question: 'Are card refills really free and unlimited?',
            answer: 'If for any reason you are not completely satisfied with the number of reviews your business gets, cancel within the first 60 days and we’ll refund your money, no questions asked. To cancel, text CARDHELP to 900900 or call us at (800) 845-8928.'
        },
        {
            question: 'Can I cancel any time?',
            answer: 'If for any reason you are not completely satisfied with the number of reviews your business gets, cancel within the first 60 days and we’ll refund your money, no questions asked. To cancel, text CARDHELP to 900900 or call us at (800) 845-8928.'
        },
        {
            question: 'What are starter cards?',
            answer: 'If for any reason you are not completely satisfied with the number of reviews your business gets, cancel within the first 60 days and we’ll refund your money, no questions asked. To cancel, text CARDHELP to 900900 or call us at (800) 845-8928.'
        },
        {
            question: 'How will I know if this is working for my business?',
            answer: 'If for any reason you are not completely satisfied with the number of reviews your business gets, cancel within the first 60 days and we’ll refund your money, no questions asked. To cancel, text CARDHELP to 900900 or call us at (800) 845-8928.'
        },
        {
            question: 'Will I get any negative reviews?',
            answer: 'If for any reason you are not completely satisfied with the number of reviews your business gets, cancel within the first 60 days and we’ll refund your money, no questions asked. To cancel, text CARDHELP to 900900 or call us at (800) 845-8928.'
        },
        {
            question: 'What forms of payment do you accept?',
            answer: 'If for any reason you are not completely satisfied with the number of reviews your business gets, cancel within the first 60 days and we’ll refund your money, no questions asked. To cancel, text CARDHELP to 900900 or call us at (800) 845-8928.'
        },
        {
            question: 'Still have questions?',
            answer: 'If for any reason you are not completely satisfied with the number of reviews your business gets, cancel within the first 60 days and we’ll refund your money, no questions asked. To cancel, text CARDHELP to 900900 or call us at (800) 845-8928.'
        }
    ];

    return (
        <div className={styles.FAQsec}>
            <div className={styles.FaqHead}>
                <h3>
                    Frequently Asked Questions.
                </h3>
                <div className={styles.line}></div>
                <p>
                    Risus ultricies viverra sed risus egestas pretium commodo nisl.
                </p>
            </div>
            {faqs.map((faq, index) => (
                <div key={index} className={styles.FaqItem}>
                    <div className={styles.Question} onClick={() => toggleExpand(index)}>
                        <p>{faq.question}</p>
                        <img src={expanded[index] ? uparrow : downarrow} alt="" />
                    </div>
                    {expanded[index] && (
                        <div className={styles.Answer}>
                            <p>{faq.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Faq;
