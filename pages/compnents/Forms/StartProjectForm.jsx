import React, { useEffect, useState } from 'react'
// import "./ContactUs.css";
import axios, { isCancel, AxiosError } from 'axios'
import Heading from '../Heading/Heading'
import Button from '../Buttons/Button/Button'
// import emailjs from "@emailjs/browser";

const StartProject = () => {
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
      // first_name !== "" &&
      // last_name !== "" &&
      // phone_number !== "" &&
      // email !== "" &&
      // project_description !== "" &&
      // option.length
      true
    ) {
      postOrder()
    } else {
      alert('kindly fill alll the required fields')
    }
  }

  

  const postOrder = async () => {
    try {
      const Response = await axios.post('http://localhost:1337/api/my-users', {
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
          name: name,
          email: 'sameer.asad@dipixels.com',
          message:
            'Thanks for approaching us. We are hopeful so that we will wonder you with our services',
        }

        // };

        console.log(Response, 'Response', 'email', email)
      }
    } catch (error) {
      alert(error?.response?.data?.error?.message)
    }
  }
  return (
    <>
      <div
        style={{ backgroundColor: 'black' }}
        className='contact-form-container'
      >
        <div
          className='contact-form-wrapper'
          style={{ justifyContent: 'center' }}
        >
          <div id='form' method='post'>
            <Heading>start a project</Heading>
            <h4 className='formDes'>
              Thanks for your interest in working with us. Please complete the
              details below and we’ll get back to you within one or two business
              days.
            </h4>
            <div className='projectForm'>
              <div className='field50'>
                <div className='inputField'>
                  <input
                    type='text'
                    name='first_name'
                    placeholder='First Name *'
                    value={state.first_name}
                    onChange={handleInputChange}
                    id=''
                  />
                </div>
                <div className='inputField '>
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
              <div className='inputField'>
                <input
                  type='text'
                  name='company'
                  value={state.company}
                  onChange={handleInputChange}
                  placeholder='Your Company '
                  id=''
                />
              </div>
              <div className='inputField'>
                <input
                  type='text'
                  name='existing_website_url'
                  value={state.existing_website_url}
                  onChange={handleInputChange}
                  placeholder='Existing Website URL'
                  id=''
                />
              </div>
              <div className='inputField'>
                <input
                  type='email'
                  name='email'
                  placeholder='Email Address *'
                  onChange={handleInputChange}
                  id=''
                />
              </div>
              <div className='inputField'>
                <input
                  type='phone'
                  name='phone_number'
                  value={state.phone_number}
                  onChange={handleInputChange}
                  placeholder='Phone Number *'
                  id=''
                />
              </div>
            </div>
            <Heading> what can we help you with?</Heading>
            <div className='checkBoxesSection'>
              <div className='checkBoxLft'>
                <div className='checkbox'>
                  <input
                    type='checkbox'
                    value='Website Design'
                    onChange={(e) => handleCheckBox(e)}
                  />
                  <label htmlFor='Website Design'>Website Design</label>
                </div>
                <div className='checkbox'>
                  <input
                    type='checkbox'
                    value=' Website Development'
                    onChange={(e) => handleCheckBox(e)}
                  />
                  <label htmlFor='Website Development'>
                    Website Development
                  </label>
                </div>
                <div className='checkbox'>
                  <input
                    type='checkbox'
                    value='Video animation'
                    onChange={(e) => {
                      handleCheckBox(e)
                    }}
                  />
                  <label htmlFor='Video Animation'>Video Animation</label>
                </div>
                <div className='checkbox'>
                  <input
                    type='checkbox'
                    value='Marketing'
                    onChange={(e) => {
                      handleCheckBox(e)
                    }}
                  />
                  <label htmlFor='Marketing'>Marketing</label>
                </div>
                <div className='checkbox'>
                  <input
                    type='checkbox'
                    value='Ecommerce Website'
                    onChange={(e) => {
                      handleCheckBox(e)
                    }}
                  />
                  <label htmlFor='Ecommerce Website'>Ecommerce Website</label>
                </div>
              </div>

              <div className='checkBoxRht'>
                <div className='checkbox'>
                  <input
                    type='checkbox'
                    value=' User Experience (UX) Design'
                    onChange={(e) => {
                      handleCheckBox(e)
                    }}
                  />
                  <label htmlFor='User Experience (UX) Design'>
                    User Experience (UX) Design
                  </label>
                </div>
                <div className='checkbox'>
                  <input
                    type='checkbox'
                    value='Application Development'
                    onChange={(e) => handleCheckBox(e)}
                  />
                  <label htmlFor='Application Development'>
                    Application Development
                  </label>
                </div>
                <div className='checkbox'>
                  <input
                    type='checkbox'
                    value='SEO'
                    onChange={(e) => handleCheckBox(e)}
                  />
                  <label htmlFor='SEO'>SEO</label>
                </div>
                <div className='checkbox'>
                  <input
                    type='checkbox'
                    value='Branding'
                    onChange={(e) => handleCheckBox(e)}
                  />
                  <label htmlFor='Branding'>Branding</label>
                </div>
                <div className='checkbox'>
                  <input
                    type='checkbox'
                    value='other'
                    onChange={(e) => handleCheckBox(e)}
                  />
                  <label htmlFor='Other'>Other</label>
                </div>
              </div>
            </div>
            <Heading> tell us about the project</Heading>
            <div className='formTextarea'>
              <div className='inputField'>
                <input
                  type='text'
                  name='project_description'
                  onChange={handleInputChange}
                  value={state.project_description}
                  placeholder='Requirements, goals, intentions, target audience etc *'
                />
              </div>
            </div>
            <div style={{ marginTop: '2em' }} 
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
