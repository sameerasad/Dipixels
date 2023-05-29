import React,{useState} from 'react'
import Button from '../Buttons/Button/Button'
import styles from '../../../styles/OrderForm.module.css'
import Heading from '../Heading/Heading'
import axios from 'axios'
const OrderForm = ({orderPackage,closeModal}) => {



  const [state, setState] = useState({
    first_name: '',
    last_name: '', 
    email: '',
    phone_number: '',
    package_type:orderPackage
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }))
  }
  const handleSubmit = () => {
    const {
      first_name,
      last_name,
      phone_number,
      email,
     message,
    } = state
    if (
      // first_name !== "" &&
      // last_name !== "" &&
      // phone_number !== "" &&
      // email !== "" &&
      // project_description !== "" &&
      // option.length
      true
    ) {
      postOrders()
    } else {
      alert('kindly fill alll the required fields')
    }
  }

  const postOrders = async () => {
    try {
      const Response = await axios.post('http://localhost:1337/api/my-orders', {
        data: state,
      })
      if (Response.status == 200) {
        setState({
          first_name: '',
          last_name: '',
          email: '',
          phone_number: '',
          package_type: ''
        })
        document.getElementById("form").reset()
        closeModal()
        const { email, name } = Response?.data?.data?.attributes
      
        // };

        console.log(Response, 'Response', 'email', email)
      }
    } catch (error) {
      alert(error?.response?.data?.error?.message)
    }
  }
  return (
    <>
      {/* <div className={styles.order_form_content_right_section}> */}
        <Heading>start a project</Heading>
        <p className={styles.orderform_Des}>
          Thanks for your interest in working with us. Please complete the
          details below and we’ll get back to you within one or two business
          days.
        </p>
        <form  id="form">
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
                <input type='text' name='first_name' placeholder='First Name *' onChange={handleInputChange} id='' />
              </div>
              <div
                className={
                  styles.order_form_content_right_section_projectForm_fields_inputField
                }
              >
                <input type='text' name='last_name' placeholder='Last Name *'
                onChange={handleInputChange}
                id='' />
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
                  type='phone'
                  name='phone_number'
                  placeholder='Phone Number *'
                  onChange={handleInputChange}
                  id=''
                />
              </div>
            </div>
          </div>
          <div
           onClick={(e)=>{
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
