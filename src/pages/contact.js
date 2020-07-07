import React from "react"
import Layout from "../components/Layout"
import SEO from '../components/SEO'


const contact = () => {
  return (
    <Layout>
      <SEO title='Contact Me' description='any questions! contact me' />
      <section className='contact-page'>
        <article className='contact-form'>
          <h3>get in touch</h3>
          <form action="https://formspree.io/mdowgoez" method="POST">
              <div className='form-group'>
                <input type='text' 
                placeholder='name' 
                name='name' 
                className='form-control'
                required
                />
                <input type='email' 
                placeholder='email' 
                name='email' 
                className='form-control'
                required
                />
                <textarea name='message' 
                rows='5' 
                placeholder='message' 
                className='form-control' required></textarea>
              </div>
              <button type='submit' className='submit-btn btn'>Submit</button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
