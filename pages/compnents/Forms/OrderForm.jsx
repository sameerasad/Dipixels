import React, { useState } from 'react'
import Button from '../Buttons/Button/Button'
import styles from '../../../styles/OrderForm.module.css'
import Heading from '../Heading/Heading'
import axios from 'axios'
import toast from 'react-hot-toast'
import { baseUrl } from '../../../api/config'

const OrderForm = ({
  orderPackage = false,
  closeModal,
  isUserComingFromHome = false,
}) => {
  const [orderPackages, setorderPackages] = useState('')
  const [state, setState] = useState({
    name: '',
    last_name: '',
    email: '',
    phone_number: '',
    package_type: isUserComingFromHome ? orderPackages : orderPackage,
    message: '',
  })
  const [domain, setDomain] = useState('')

  const handleChange = (event) => {
    setDomain(event.target.value)
  }

  const handleOderType = (event) => {
    setorderPackages(event.target.value)
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }))
  }
  const handleSubmit = () => {
    const { name, last_name, phone_number, email, package_type } = state
    if (
      name !== '' &&
      last_name !== '' &&
      phone_number !== '' &&
      email !== ''
      // package_type !== ""
    ) {
      postOrders()
    } else {
      // alert("kindly fill alll the required fields");
      toast.error('All fields are required')
    }
  }

  const postOrders = async () => {
    try {
      const Response = await axios.post(`${baseUrl}/my-orders`, {
        data: state,
      })
      if (Response.status == 200) {
        setState({
          name: '',
          last_name: '',
          email: '',
          phone_number: '',
          package_type: '',
          message: '',
        })
        document.getElementById('form').reset()

        toast.success('Form submitted successfully.')
        closeModal()
        const { email, name } = Response?.data?.data?.attributes

        const templateParams = {
          to: email,
          name,
          subject: `Best wishes to you from Dipixels`,
          text: 'Thanks for approaching Dipixels and considering our service for you. We are hopeful so that we will wonder you with our services. For more information visit www.dipixels.com',
        }
        await axios.post('https://dipixels.com/api/sendEmail', templateParams)

        // };

        console.log(Response, 'Response', 'email', email)
      }
    } catch (error) {
      // alert(error?.response?.data?.error?.message);
      toast.error(error?.response?.data?.error?.message)
    }
  }
  return (
    <>
      {/* <div className={styles.order_form_content_right_section}> */}
      {/* <Heading>start a project</Heading> */}
      <p className={styles.orderform_Des}>
        Thanks for your interest in working with us. Please complete the details
        below and we’ll get back to you within one or two business days.
      </p>
      <form id='form'>
        <div className={styles.order_form_content_right_section_projectForm}>
          <div
            className={
              styles.order_form_content_right_section_projectForm_fields
            }
          >
            <div
              className={
                styles.order_form_content_right_section_projectForm_fields_inputField
              }
            >
              <input
                type='text'
                name='name'
                placeholder='First Name *'
                onChange={handleInputChange}
                id=''
              />
            </div>
            <div
              className={
                styles.order_form_content_right_section_projectForm_fields_inputField
              }
            >
              <input
                type='text'
                name='last_name'
                placeholder='Last Name *'
                onChange={handleInputChange}
                id=''
              />
            </div>
          </div>

          <div
            className={
              styles.order_form_content_right_section_projectForm_fields
            }
          >
            <div
              className={
                styles.order_form_content_right_section_projectForm_fields_inputField
              }
            >
              <input
                type='email'
                name='email'
                placeholder='Email Address *'
                onChange={handleInputChange}
                id=''
              />
            </div>
            <div
              className={
                styles.order_form_content_right_section_projectForm_fields_inputField
              }
            >
              <input
                type='tel'
                name='phone_number'
                placeholder='Phone Number *'
                onChange={handleInputChange}
                id=''
              />
            </div>

            {isUserComingFromHome && (
              <>
                {' '}
                <div className={styles.orderForm_select}>
                  <select
                    style={{
                      width: '100%',
                      height: '50px',
                      fontFamily: 'Monument Extended Regular',
                      background: '#000000',
                      color: '#ffffff',
                      border: '2px solid #9add3a',
                    }}
                    value={domain}
                    onChange={handleChange}
                  >
                    <option value='WEB DESIGN AND DEVELOPMENT'>
                      {' '}
                      WEB DESIGN AND DEVELOPMENT
                    </option>

                    <option value='MOBILE APPS'>MOBILE APPS</option>

                    <option value='VIDEO ANIMATIONS'>VIDEO ANIMATIONS</option>
                    <option value='LOGO DESIGNS'>LOGO DESIGNS</option>
                    <option value='SEO'>SEO</option>
                  </select>
                </div>
                <div className={styles.orderForm_select}>
                  <select
                    style={{
                      width: '100%',
                      height: '50px',
                      width: '100%',
                      height: '50px',
                      fontFamily: 'Monument Extended Regular',
                      background: '#000000',
                      color: '#ffffff',
                      border: '2px solid #9add3a',
                    }}
                    value={orderPackage}
                    onChange={handleOderType}
                  >
                    <option
                      value={`STARTER ${domain} PACKAGE`}
                    >{`STARTER ${domain} PACKAGE`}</option>

                    <option
                      value={`PROFESSIONAL ${domain} PACKAGE`}
                    >{`PROFESSIONAL  ${domain} PACKAGE`}</option>

                    <option
                      value={`PREMIUM ${domain} PACKAGE`}
                    >{`PREMIUM  ${domain} PACKAGE`}</option>
                  </select>
                </div>
              </>
            )}
            <div
              className='contactus-form-content-right-section-projectForm-fields-inputField-message'
              style={{ width: '100%' }}
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
        </div>
        <div
          onClick={(e) => {
            e.preventDefault()
            handleSubmit()
          }}
          style={{
            marginTop: '2em',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button>submit</Button>
        </div>
      </form>
      {/* </div> */}
    </>
  )
}

export default OrderForm
