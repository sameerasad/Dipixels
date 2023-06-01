import React, { useState } from "react";
import Button from "../Buttons/Button/Button";
import OrderForm from "../Forms/OrderForm";

const WebsitePackagesCard = ({ dataPackage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [packageType, setPackageType] = useState("");

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="packagesCards">
        {dataPackage?.map((item) => {
          return (
            <div className="card">
              <div className="packagetitle">
                <h2>
                  {item.title}
                  <span className="colorBlue"> {item.packageBlue}</span>
                </h2>
              </div>
              <div className="packagePrice">
                <h4 className="salePrice">{item.regularPrice}</h4>
                <p className="regularPrice">{item.salePrice}</p>
              </div>

              <div className="packageListing">
                <ul>
                  <li>{item.listItem1}</li>
                  <li>{item.listItem2}</li>
                  <li>{item.listItem3}</li>
                  <li>{item.listItem4}</li>
                  <li>{item.listItem5}</li>

                  {item?.listItem6 && <li>{item?.listItem6}</li>}
                  {item?.listItem7 && <li>{item?.listItem7}</li>}
                </ul>
              </div>

              <div className="packagecontact">
                <div className="speakWithUS">
                  <h3>{item.speakWithUs}</h3>
                  <a href={item.contactNumberLink}>{item.contactNumber}</a>
                </div>
                <div className="chatNow">
                  <a href={item.chatNowLink}></a>
                </div>
                <div
                  className="packagebtn"
                  onClick={() => {
                    setIsModalOpen(true);
                    setPackageType(item.title);
                  }}
                >
                  <button>{item.btnTxt}</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {isModalOpen && (
        <div className="overlay">
          <div className="modal">
            <div onClick={closeModal} className="modal_close">
              <img src="/assets/CloseIcon.svg" alt="" />
            </div>
            <OrderForm closeModal={closeModal} orderPackage={packageType} />
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
