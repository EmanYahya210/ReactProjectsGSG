import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactMe() {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_riq49tl',
        'template_fz9bxbc',
        form.current,
        'nFp7Lnevg5C2469Qo',
      )
      .then(
        (result) => {
          console.log(result.text)
          console.log('sent')
        },
        (error) => {
          console.log(error.text)
        },
      )
  }

  return (
    <div className="App">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  )
}
