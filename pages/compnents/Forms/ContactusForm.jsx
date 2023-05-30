import React, { useState } from "react";
import Image from "next/image";
import Button from "../Buttons/Button/Button";
import axios from "axios";
import toast from "react-hot-toast";
// import Pin from '/public/assets/icon-location-address.png'
// import Email from '/public/assets/icon-email.png'
const ContactusForm = () => {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    const { first_name, last_name, phone_number, email, message } = state;
    if (
      first_name !== "" &&
      last_name !== "" &&
      phone_number !== "" &&
      email !== ""
    ) {
      postContact();
    } else {
      toast.error("kindly fill all the required fields");
    }
  };

  const postContact = async () => {
    try {
      const Response = await axios.post(
        "http://localhost:1337/api/contactedusers",
        {
          data: state,
        }
      );
      if (Response.status == 200) {
        setState({
          first_name: "",
          last_name: "",
          email: "",
          phone_number: "",
          message: "",
        });
        document.getElementById("form").reset();
        toast.success("Thanks for contacting us");
        const { email, name } = Response?.data?.data?.attributes;
        const templateParams = {
          to: email,
          subject: `Best wishes to you from Dipixels`,
          text: "Thanks for approaching Dipixels. We are hopeful so that we will wonder you with our services. For more information visit www.dipixels.com",
        };
        await axios.post("http://localhost:3000/api/sendEmail", templateParams);
        // };

        console.log(Response, "Response", "email", email);
      }
    } catch (error) {
      toast.error(error?.response?.data?.error?.message);
    }
  };

  return (
    <>
      <div className="contactus-form-section">
        <div className="contactus-form-wrapper">
          <div className="contactus-form-content">
            <div className="contactus-form-content-left-section">
              <div className="contactus-form-content-left-section-heading">
                <h1>
                  Allow us to transform your Ideas into Reality!
                  <span> We Look forward to hearing from You. </span>
                </h1>
              </div>
              <div className="contactus-form-content-left-section-icons">
                <div className="contactus-form-content-left-section-icons-left">
                  <div className="contactus-form-content-left-section-icons-left-image">
                    <img src="/assets/icon-location-address.svg" alt="" />
                  </div>
                  <div className="contactus-form-content-left-section-icons-left-content">
                    <h1>Address</h1>
                    <p>
                      Dipixels LLC P.O. Box 1, Hales Corners, WI, 53130, USA
                    </p>
                  </div>
                </div>

                <div className="contactus-form-content-left-section-icons-left">
                  <div
                    className="contactus-form-content-left-section-icons-left-image"
                    style={{ padding: "19px 17px" }}
                  >
                    <img src="/assets/icon-email.png" alt="" />
                  </div>
                  <div className="contactus-form-content-left-section-icons-left-content">
                    <h1>Email</h1>
                    <p>info@dipixels.com</p>
                  </div>
                </div>
              </div>
              <p className="para">
                For Immediate Support, Feel Free To Call Us On
              </p>
              <h2 className="number">4144003996</h2>
              <hr className="horizontal-line" />
              <p className="social-media">social media</p>
              <div className="contactus-form-content-left-section-social-media">
                <div
                  className="contactus-form-content-left-section-social-media-icon"
                  style={{ padding: "15px 20px" }}
                >
                  <img src="/assets/white-facebook-f.png" alt="" />
                </div>
                <div className="contactus-form-content-left-section-social-media-icon">
                  <img src="/assets/whitetwitter.svg" alt="" />
                </div>
                <div className="contactus-form-content-left-section-social-media-icon">
                  <img src="/assets/white-instagram.png" alt="" />
                </div>
                <div className="contactus-form-content-left-section-social-media-icon">
                  <img src="/assets/white-linkedin-in.png" alt="" />
                </div>
              </div>
            </div>
            <div className="contactus-form-content-right-section">
              <form id="form" action="" autocomplete="off">
                <div className="contactus-form-content-right-section-projectForm">
                  <div className="contactus-form-content-right-section-projectForm-fields">
                    <div className="contactus-form-content-right-section-projectForm-fields-inputField">
                      <input
                        name="first_name"
                        type="text"
                        placeholder="First Name *"
                        onChange={handleInputChange}
                        id=""
                      />
                    </div>
                    <div className="contactus-form-content-right-section-projectForm-fields-inputField">
                      <input
                        type="text"
                        name="last_name"
                        placeholder="Last Name *"
                        id=""
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="contactus-form-content-right-section-projectForm-fields">
                    <div className="contactus-form-content-right-section-projectForm-fields-inputField">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address *"
                        id=""
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="contactus-form-content-right-section-projectForm-fields-inputField">
                      <input
                        type="phone"
                        name="phone_number"
                        placeholder="Phone Number *"
                        id=""
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="contactus-form-content-right-section-projectForm-fields-inputField-message">
                    <input
                      type="text"
                      name="message"
                      placeholder="Your Message here..."
                      id=""
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </form>
              <div
                onClick={() => {
                  handleSubmit();
                }}
                style={{ marginTop: "2em" }}
              >
                <Button>send</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactusForm;
