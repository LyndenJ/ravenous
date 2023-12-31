import React from "react";
import styles from "./Business.module.css";

// const business = {
//   src: "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
//   alt: "Pizza Image",
//   name: "MarginOtto Pizzeria",
//   address: "123 Main Street",
//   city: "Philadelphia",
//   state: "PA",
//   zipCode: "19147",
//   category: "Italian",
//   rating: 4.5,
//   reviewCount: 90,
// };

const Business = (props) => {
  const business = props.businessObject;
  return (
    <div className={styles.Business}>
      <div className={styles.imageContainer}>
        <img src={business.src} alt={business.alt} />
      </div>
      <h2>{business.name}</h2>
      <div className={styles.BusinessInformation}>
        <div className={styles.BusinessAddress}>
          <p>{business.address}</p>
          <p>{business.city}</p>
          <p>{`${business.state} ${business.zipCode}`}</p>
        </div>
        <div className={styles.BusinessReviews}>
          <h3>{business.category.toUpperCase()}</h3>
          <h3 className={styles.rating}>{`${business.rating} stars`}</h3>
          <p>{`${business.reviewCount} reviews`}</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
