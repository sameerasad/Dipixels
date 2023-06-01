import React, { useState } from 'react'
import Button from '../Buttons/Button/Button'
import OrderForm from '../Forms/OrderForm'
import styles from '../../../styles/WebsitePackagesCard.module.css'
const WebsitePackagesCard = ({ dataPackage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [packageType, setPackageType] = useState("");

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.packagesCards}>
        {dataPackage?.map((item) => {
          return (
            <div key={item.id} className={styles.card}>
              <div className={styles.packagetitle}>
                <h2>
                  {item.title}
                  <span className={styles.colorBlue}> {item.packageBlue}</span>
                </h2>
              </div>
              <div className={styles.packagePrice}>
                <h4 className={styles.salePrice}>{item.regularPrice}</h4>
                <p className={styles.regularPrice}>{item.salePrice}</p>
              </div>

              <div className={styles.packageListing}>
                <ul>
                  <li>{item.listItem1}</li>
                  <li>{item.listItem2}</li>
                  <li>{item.listItem3}</li>
                  <li>{item.listItem4}</li>
                  <li>{item.listItem5}</li>
                </ul>
              </div>

              <div className={styles.packagecontact}>
                <div className={styles.speakWithUS}>
                  <h3>{item.speakWithUs}</h3>
                  <a href={item.contactNumberLink}>{item.contactNumber}</a>
                </div>
                {/* <div className={styles.chatNow}>
                  <a href={item.chatNowLink}>{item.chatNow}</a>
                </div> */}
                <div
                  className={styles.packagebtn}
                  onClick={() =>{ setIsModalOpen(true);setPackageType(item.title)}}
                >
                  <button>{item.btnTxt}</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {isModalOpen && (
        <div className={styles.overlay}>
        <div className={styles.modal}>
          <div onClick={closeModal} className={styles.modal_close}>
            <img src='/assets/CloseIcon.svg' alt='' />
          </div>
          <OrderForm
          closeModal={closeModal}
          orderPackage={packageType} />
          </div>
        </div>
      )}

      <div
        style={{
          marginTop: "8em",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* <Button>view more packages</Button> */}
      </div>
    </>
  );
};

export default WebsitePackagesCard;
