import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './style.css'
import email from './../../email.json'
import Lottie from 'lottie-react'

export default function ContactMe() {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_riq49tl',
      'template_fz9bxbc',
      form.current,
      'nFp7Lnevg5C2469Qo',
    )
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="textarea">
            <form ref={form} onSubmit={sendEmail}>
              <div className="row">
                <label>Name</label>
                <input type="text" name="user_name" />
              </div>
              <div className="row">
                <label>Email</label>
                <input type="email" name="user_email" />
              </div>
              <div className="row">
                <label>Message</label>
                <br />
                <textarea name="message" />
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-6 contactMe">
          <Lottie animationData={email} loop={true} />
        </div>
      </div>
    </div>
  )
}
