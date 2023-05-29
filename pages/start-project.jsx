import React from 'react'
import ScrollHeadings from './compnents/Scroll/ScrollHeadings'
import Layout from './compnents/Layout/Layout'

import StartProjectForm from './compnents/Forms/StartProjectForm'

const startProject = () => {
  return (
    <>
      <Layout>
        <StartProjectForm />
        <ScrollHeadings />
      </Layout>
    </>
  )
}

export default startProject