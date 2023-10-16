import React from 'react';
import styles from './Business.module.css';

const business = {
    src: "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
    alt: 'Pizza Image',
    name: 'MarginOtto Pizzeria',
    address: '123 Main Street',
    city: 'Philadelphia',
    state: 'PA',
    zipCode: '19147',
    catagory: 'Italian',
    rating: 4.5,
    reviewCount: 90,
};

function Business() {
    return (
        <div className={styles.business}>
            <div className={styles.imageContainer}>
                <img src={business.src} alt={business.alt} />
            </div>
            <h2>{business.name}</h2>
            <div className={styles.businessInformation}>
                <div className={styles.businessAddress}>
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{`${business.state} ${business.zipCode}`}</p>
                </div>
                <div className={styles.businessReviews}>
                    <h3>{business.catagory.toUpperCase()}</h3>
                    <h3 className={styles.rating}>{`${business.rating} stars`}</h3>
                    <h3>{`${business.reviewCount} reviews`}</h3>
                </div>
            </div>
        </div>
    );
};

export default Business;