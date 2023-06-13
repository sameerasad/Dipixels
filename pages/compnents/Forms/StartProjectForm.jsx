import React, { useEffect, useState } from 'react'
// import "./ContactUs.css";
import axios, { isCancel, AxiosError } from 'axios'
import Heading from '../Heading/Heading'
import Button from '../Buttons/Button/Button'
import toast from 'react-hot-toast'
import { baseUrl } from '../../../api/config'
import AOS from 'aos'
import 'aos/dist/aos.css'
import styles from '../../../styles/StartProjectForm.module.css'
// import emailjs from "@emailjs/browser";

const StartProject = () => {
  useEffect(() => {
    AOS.init({ duration: 1400 })
  }, [])

  // const [firstName, setFirstname] = useState(null);
  // const [lastName, setLastName] = useState(null);
  // const [company, setCompany] = useState(null);
  // const [websiteUrl, setWebSiteUrl] = useState(null);
  // const [email, setEmail] = useState(null);
  // const [phoneNumber, setPhoneNumber] = useState(null);
  // const [options, setOptions] = useState([]);
  // const [projectDescription, setProjectDescription] = useState(null);
  const [state, setState] = useState({
    first_name: '',
    last_name: '',
    company: '',
    existing_website_url: '',
    email: '',
    phone_number: '',
    option: [],
    project_description: '',
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }))
  }

  const handleCheckBox = (e) => {
    const { value } = e.target
    const index = state.option.indexOf(value)
    if (index == -1) {
      state.option.push(value)
    } else {
      const updatedOptions = state.option.splice(index, 0)
      state.option = updatedOptions
    }
  }

  const handleSubmit = () => {
    const {
      first_name,
      last_name,
      phone_number,
      email,
      project_description,
      option,
    } = state
    if (
      first_name !== '' &&
      last_name !== '' &&
      phone_number !== '' &&
      email !== '' &&
      project_description !== '' &&
      option.length
    ) {
      postOrder()
    } else {
      // alert("kindly fill alll the required fields");
      toast.error('kindly fill all the required fields', {
        style: {
          border: '1px solid #00a621',
          padding: '16px',
          color: 'grey',
        },
        iconTheme: {
          primary: 'grey',
          opacity: 0,
          secondary: 'white',
        },
      })
    }
  }

  const postOrder = async () => {
    try {
      const Response = await axios.post(`${baseUrl}/my-users`, {
        data: state,
      })
      if (Response.status == 200) {
        setState({
          first_name: '',
          last_name: '',
          company: '',
          existing_website_url: '',
          email: '',
          phone_number: '',
          option: [],
          project_description: '',
        })
        const { email, name } = Response?.data?.data?.attributes
        const templateParams = {
          to: email,
          name,
          subject: `Best wishes to you from Dipixels`,
          text: 'Thanks for approaching Dipixels and considering our service for you. We are hopeful so that we will wonder you with our services. For more information visit www.dipixels.com',
        }
        await axios.post('https://dipixels.com/api/sendEmail', templateParams)
        // };
        toast.success('thanks for your response.')
        document.getElementById('form').reset()
        console.log(Response, 'Response', 'email', email)
      }
    } catch (error) {
      // alert(error?.response?.data?.error?.message);
      toast.error(error?.response?.data?.error?.message)
    }
  }
  return (
    <>
      <div
        style={{ backgroundColor: 'black' }}
        className={styles.contact_form_container}
      >
        <div
          className={styles.contact_form_wrapper}
          style={{ justifyContent: 'center' }}
        >
          <div id='form' method='post'>
            <Heading>start a project</Heading>
            <h4 data-aos='fade-right' className={styles.formDes}>
              Thanks for your interest in working with us. Please complete the
              details below and we’ll get back to you within one or two business
              days.
            </h4>
            <form autoComplete='no' id='form' className={styles.projectForm}>
              <div className={styles.field50}>
                <div className={styles.inputField}>
                  <input
                    type='text'
                    name='first_name'
                    placeholder='First Name *'
                    value={state.first_name}
                    onChange={handleInputChange}
                    id=''
                  />
                </div>
                <div className={styles.inputField}>
                  <input
                    autoComplete={false}
                    type='text'
                    name='last_name'
                    placeholder='Last Name *'
                    value={state.last_name}
                    onChange={handleInputChange}
                    id=''
                  />
                </div>
              </div>
              <div className={styles.inputField}>
                <input
                  type='text'
                  name='company'
                  value={state.company}
                  onChange={handleInputChange}
                  placeholder='Your Company '
                  id=''
                />
              </div>
              <div className={styles.inputField}>
                <input
                  type='text'
                  name='existing_website_url'
                  value={state.existing_website_url}
                  onChange={handleInputChange}
                  placeholder='Existing Website URL'
                  id=''
                />
              </div>
              <div className={styles.inputField}>
                <input
                  type='email'
                  name='email'
                  placeholder='Email Address *'
                  onChange={handleInputChange}
                  id=''
                />
              </div>
              <div className={styles.inputField}>
                <input
                  type='tel'
                  name='phone_number'
                  value={state.phone_number}
                  onChange={handleInputChange}
                  placeholder='Phone Number *'
                  id=''
                />
              </div>
            </form>
            <Heading> what can we help you with?</Heading>
            <div className={styles.checkBoxesSection}>
              <div className={styles.checkBoxLft}>
                <div className={styles.checkbox}>
                  <input
                    id='1'
                    type='checkbox'
                    value='Website Design'
                    onChange={(e) => handleCheckBox(e)}
                  />
                  <label htmlFor='1'>Website Design</label>
                </div>
                <div className={styles.checkbox}>
                  <input
                    id='2'
                    type='checkbox'
                    value=' Website Development'
                    onChange={(e) => handleCheckBox(e)}
                  />
                  <label htmlFor='2'>Website Development</label>
                </div>
                <div className={styles.checkbox}>
                  <input
                    id='3'
                    type='checkbox'
                    value='Video animation'
                    onChange={(e) => {
                      handleCheckBox(e)
                    }}
                  />
                  <label htmlFor='3'>Video Animation</label>
                </div>
                <div className={styles.checkbox}>
                  <input
                    id='5'
                    type='checkbox'
                    value='Marketing'
                    onChange={(e) => {
                      handleCheckBox(e)
                    }}
                  />
                  <label htmlFor='5'>Marketing</label>
                </div>
                <div className={styles.checkbox}>
                  <input
                    id='6'
                    type='checkbox'
                    value='Ecommerce Website'
                    onChange={(e) => {
                      handleCheckBox(e)
                    }}
                  />
                  <label htmlFor='6'>Ecommerce Website</label>
                </div>
              </div>

              <div className={styles.checkBoxRht}>
                <div className={styles.checkbox}>
                  <input
                    id='7'
                    type='checkbox'
                    value=' User Experience (UX) Design'
                    onChange={(e) => {
                      handleCheckBox(e)
                    }}
                  />
                  <label htmlFor='7'>User Experience (UX) Design</label>
                </div>
                <div className={styles.checkbox}>
                  <input
                    id='8'
                    type='checkbox'
                    value='Application Development'
                    onChange={(e) => handleCheckBox(e)}
                  />
                  <label htmlFor='8'>Application Development</label>
                </div>
                <div className={styles.checkbox}>
                  <input
                    id='9'
                    type='checkbox'
                    value='SEO'
                    onChange={(e) => handleCheckBox(e)}
                  />
                  <label htmlFor='9'>SEO</label>
                </div>
                <div className={styles.checkbox}>
                  <input
                    id='10'
                    type='checkbox'
                    value='Branding'
                    onChange={(e) => handleCheckBox(e)}
                  />
                  <label htmlFor='10'>Branding</label>
                </div>
                <div className={styles.checkbox}>
                  <input
                    id='11'
                    type='checkbox'
                    value='other'
                    onChange={(e) => handleCheckBox(e)}
                  />
                  <label htmlFor='11'>Other</label>
                </div>
              </div>
            </div>
            <Heading> tell us about the project</Heading>
            <div className={styles.formTextarea}>
              {/* <div className={styles.inputField}> */}
              <textarea
                type='text'
                name='project_description'
                onChange={handleInputChange}
                value={state.project_description}
                placeholder='Requirements, goals, intentions, target audience etc *'
              />
              {/* </div> */}
            </div>
            <div
              className={styles.formButton}
              // onClick={handleButtonClick}
              onClick={(e) => {
                // e.preventDefault()
                handleSubmit()
              }}
            >
              <Button>send inquiry</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StartProject
