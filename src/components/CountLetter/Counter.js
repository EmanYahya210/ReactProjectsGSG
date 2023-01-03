import React, { useState } from 'react'
import './style.css'
import Form from 'react-bootstrap/Form'
import Swal from 'sweetalert2'

export default function Counter() {
  const [text, setText] = useState('')

  const LowerCase = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to change the letter to Lowercase letters?",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Changed!', 'successfully')
        setText(text.toLocaleLowerCase())
      }
    })
  }

  const UpperCase = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to change the letter to Uppercase letters?",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Changed!', 'successfully')
        setText(text.toUpperCase())
      }
    })
  }

  return (
    <div className="counter">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <p>Letters : </p>
            <p className="count"> {text.length}</p>
          </div>
          <div className="col-lg-6">
            <p>words : </p>
            <p className="count">
              {text.length > 0 ? text.split(' ').length : 0}
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={6}
                  placeholder="Please Enter Your Text Here"
                  value={text}
                  onChange={(changeText) => {
                    setText(changeText.target.value)
                  }}
                />
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="button-box">
              <button type="button" class="btn btn-light" onClick={UpperCase}>
                Click to UpperCase
              </button>

              <button type="button" class="btn btn-light" onClick={LowerCase}>
                Click to Lowercase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
