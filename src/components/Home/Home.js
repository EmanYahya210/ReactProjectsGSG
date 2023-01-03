import React from 'react'
import BG from './../../Images/BG.png'
import './style.css'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Toast from 'react-bootstrap/Toast'

import 'animate.css'

export default function Home() {
  const [showA, setShowA] = useState(true)
  const toggleShowA = () => setShowA(!showA)

  return (
    <div className="aboutMe">
      <header>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="textArea animate__animated animate__zoomInDown ">
                <h2>Hi , I am Eman Yahya</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus vitae corporis ipsam ullam sapiente. Cum eos
                  facilis deleniti autem quod.
                </p>
                <Row>
                  <Col md={6} className="mb-2">
                    <a href="#contactInfo">
                      <Button
                        onClick={toggleShowA}
                        className="mb-2"
                        variant="warning"
                      >
                        Follow Me
                      </Button>
                    </a>
                    <Toast show={showA} onClose={toggleShowA}>
                      <Toast.Body>
                        <strong>Follow me on social media</strong>
                      </Toast.Body>
                    </Toast>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                id="MyPicBg"
                className="animate__animated animate__zoomInDown "
              >
                <img src={BG} alt="My Pic" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="row">
            <div className="about_project_cards">
              <div className="cards firstCard">
                <h3>title</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  id, architecto at veritatis laboriosam pariatur molestiae
                  reprehenderit quas libero asperiores.
                </p>
              </div>
              <div className="cards">
                <h3>title</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  id, architecto at veritatis laboriosam pariatur molestiae
                  reprehenderit quas libero asperiores.
                </p>
              </div>
              <div className="cards">
                <h3>title</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  id, architecto at veritatis laboriosam pariatur molestiae
                  reprehenderit quas libero asperiores.
                </p>
              </div>
              <div className="cards">
                <h3>title</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  id, architecto at veritatis laboriosam pariatur molestiae
                  reprehenderit quas libero asperiores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contactInfo">
        <div className="row">
          <div className="col-lg-12 .d-md">
            <div className="languages">
              <div className="sun">
                <span className="mid">
                  <p>hiiiiiii</p>
                </span>
                <span className="ico1 icon">
                  <strong>Html5</strong>
                </span>
                <span className="ico2 icon">
                  <strong>CSS3</strong>
                </span>
                <span className="ico3 icon">
                  <strong>React</strong>
                </span>
                <span className="ico4 icon">
                  <strong>Redux</strong>
                </span>
                <span className="ico5 icon">
                  <strong>Api</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
