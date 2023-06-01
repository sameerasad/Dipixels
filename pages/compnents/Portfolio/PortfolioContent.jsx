import React from "react";
import Button from "../Buttons/Button/Button";
import styles from '../../../styles/portfolio.module.css'

const PortfolioContent = ({ PortfolioData }) => {
  return (
    <>
      <div className={styles.portfolio_section_content_images}>
        {PortfolioData?.map((item) => {
          return (
            <>
              <div className={styles.portfolio_section_content_images_img}>
                <img src={item.image} alt="" />
              </div>
            </>
          );
        })}
      </div>
      <div
        style={{
          marginTop: "8em",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* <Button>view more</Button> */}
      </div>
    </>
  );
};

export default PortfolioContent;
