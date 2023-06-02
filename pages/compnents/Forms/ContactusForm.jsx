<<<<<<< HEAD
import React, { useState } from 'react'
import Image from 'next/image'
import Button from '../Buttons/Button/Button'
import axios from 'axios'
import toast from 'react-hot-toast'
=======
import React, { useState } from "react";
import Image from "next/image";
import Button from "../Buttons/Button/Button";
import axios from "axios";
import toast from "react-hot-toast";
import { baseUrl } from "../../../api/config";

>>>>>>> c4e2891116a2ae8a13461ef539c90eb216b79ef8
// import Pin from '/public/assets/icon-location-address.png'
// import Email from '/public/assets/icon-email.png'
import styles from '../../../styles/ContactForm.module.css'
const ContactusForm = () => {
  const [state, setState] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    message: '',
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }))
  }
  const handleSubmit = () => {
    const { first_name, last_name, phone_number, email, message } = state
    if (
      first_name !== '' &&
      last_name !== '' &&
      phone_number !== '' &&
      email !== ''
    ) {
      postContact()
    } else {
      toast.error('kindly fill all the required fields')
    }
  }

  const postContact = async () => {
    try {
<<<<<<< HEAD
      const Response = await axios.post(
        'htttps://api.dipixels.com/api/contactedusers',
        {
          data: state,
        }
      )
=======
      const Response = await axios.post(`${baseUrl}/contactedusers`, {
        data: state,
      });
>>>>>>> c4e2891116a2ae8a13461ef539c90eb216b79ef8
      if (Response.status == 200) {
        setState({
          first_name: '',
          last_name: '',
          email: '',
          phone_number: '',
          message: '',
        })
        document.getElementById('form').reset()
        toast.success('Thanks for contacting us')
        const { email, name } = Response?.data?.data?.attributes
        const templateParams = {
          to: email,
          subject: `Best wishes to you from Dipixels`,
          text: 'Thanks for approaching Dipixels. We are hopeful so that we will wonder you with our services. For more information visit www.dipixels.com',
        }
        await axios.post('https://dipixels.com/api/sendEmail', templateParams)
        // };
        // sendMail(email, templateParams.subject, templateParams.text);

        console.log(Response, 'Response', 'email', email)
      }
    } catch (error) {
      toast.error(error?.response?.data?.error?.message)
    }
  }

  return (
    <>
      <div className={styles.contactus_form_section}>
        <div className={styles.contactus_form_wrapper}>
          <div className={styles.contactus_form_content}>
            <div className={styles.contactus_form_content_left_section}>
              <div
                className={styles.contactus_form_content_left_section_heading}
              >
                <h1>
                  Allow us to transform your Ideas into Reality!
                  <span> We Look forward to hearing from You. </span>
                </h1>
              </div>
              <div className={styles.contactus_form_content_left_section_icons}>
                <div
                  className={
                    styles.contactus_form_content_left_section_icons_left
                  }
                >
                  <div
                    className={
                      styles.contactus_form_content_left_section_icons_left_image
                    }
                  >
                    <img src='/assets/icon-location-address.svg' alt='' />
                  </div>
                  <div
                    className={
                      styles.contactus_form_content_left_section_icons_left_content
                    }
                  >
                    <h1>Address</h1>
                    <p>
                      Dipixels LLC P.O. Box 1, Hales Corners, WI, 53130, USA
                    </p>
                  </div>
                </div>

                <div
                  className={
                    styles.contactus_form_content_left_section_icons_left
                  }
                >
                  <div
                    className={
                      styles.contactus_form_content_left_section_icons_left_image
                    }
                    style={{ padding: '19px 17px' }}
                  >
                    <img src='/assets/icon-email.png' alt='' />
                  </div>
                  <div
                    className={
                      styles.contactus_form_content_left_section_icons_left_content
                    }
                  >
                    <h1>Email</h1>
                    <p>info@dipixels.com</p>
                  </div>
                </div>
              </div>
              <p className={styles.para}>
                For Immediate Support, Feel Free To Call Us On
              </p>
              <h2 className={styles.number}>4144003996</h2>
              <hr className={styles.horizontal_line} />
              <p className={styles.social_media}>social media</p>
              <div
                className={
                  styles.contactus_form_content_left_section_social_media
                }
              >
                <div
                  className={
                    styles.contactus_form_content_left_section_social_media_icon
                  }
                  style={{ padding: '15px 20px' }}
                >
                  <img src='/assets/white-facebook-f.png' alt='' />
                </div>
                <div
                  className={
                    styles.contactus_form_content_left_section_social_media_icon
                  }
                >
                  <img src='/assets/whitetwitter.svg' alt='' />
                </div>
                <div
                  className={
                    styles.contactus_form_content_left_section_social_media_icon
                  }
                >
                  <img src='/assets/white-instagram.png' alt='' />
                </div>
                <div
                  className={
                    styles.contactus_form_content_left_section_social_media_icon
                  }
                >
                  <img src='/assets/white-linkedin-in.png' alt='' />
                </div>
              </div>
            </div>
            <div className={styles.contactus_form_content_right_section}>
              <form id='form' action='' autocomplete='off'>
                <div
                  className={
                    styles.contactus_form_content_right_section_projectForm
                  }
                >
                  <div
                    className={
                      styles.contactus_form_content_right_section_projectForm_fields
                    }
                  >
                    <div
                      className={
                        styles.contactus_form_content_right_section_projectForm_fields_inputField
                      }
                    >
                      <input
                        name='first_name'
                        type='text'
                        placeholder='First Name *'
                        onChange={handleInputChange}
                        id=''
                      />
                    </div>
                    <div
                      className={
                        styles.contactus_form_content_right_section_projectForm_fields_inputField
                      }
                    >
                      <input
                        type='text'
                        name='last_name'
                        placeholder='Last Name *'
                        id=''
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div
                    className={
                      styles.contactus_form_content_right_section_projectForm_fields
                    }
                  >
                    <div
                      className={
                        styles.contactus_form_content_right_section_projectForm_fields_inputField
                      }
                    >
                      <input
                        type='email'
                        name='email'
                        placeholder='Email Address *'
                        id=''
                        onChange={handleInputChange}
                      />
                    </div>
                    <div
                      className={
                        styles.contactus_form_content_right_section_projectForm_fields_inputField
                      }
                    >
                      <input
                        type="tel"
                        name="phone_number"
                        placeholder="Phone Number *"
                        id=""
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div
                    className={
                      styles.contactus_form_content_right_section_projectForm_fields_inputField_message
                    }
                  >
                    <input
                      type='text'
                      name='message'
                      placeholder='Your Message here...'
                      id=''
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </form>
              <div
                onClick={() => {
                  handleSubmit()
                }}
                style={{ marginTop: '2em' }}
              >
                <Button>send</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactusForm
