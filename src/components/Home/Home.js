import React from 'react'
import BG from './../../Images/BG.png'
import './style.css'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Toast from 'react-bootstrap/Toast'
import 'animate.css'
import HomeBG from './../../HomeBG.json'
import Lottie from 'lottie-react'
import Trophy from './../../Trophy.json'
import peopleWorkingWithTechnology from './../../peopleWorkingWithTechnology.json'

export default function Home() {
  const [showA, setShowA] = useState(true)
  const toggleShowA = () => setShowA(!showA)

  return (
    /* Header Start Here */
    <div>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="textArea animate__animated animate__zoomInDown ">
                <h2>Hi , I am Eman Yahya</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit officia eaque repudiandae repellendus doloremque
                  deserunt, amet veniam beatae in fugiat autem nesciunt eum
                  eligendi perspiciatis dicta fuga! Iure doloribus magnam ad
                  laborum nihil reiciendis dolorem.
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
              <div>
                <Lottie animationData={HomeBG} loop={true} />
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Header Start Here  */}

      {/* Section 1 (Cards) Start Here */}
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
        {/* Section 1 (Cards) End Here  */}

        {/* Section 2  Start Here  */}
        <section className="seniorPro">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="seniorPriImg">
                  <Lottie
                    animationData={peopleWorkingWithTechnology}
                    loop={true}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="aboutSeniorPro">
                  <h2>Eey Controlled Game for the Disabled People</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Odio rerum ut alias reiciendis quos totam assumenda,
                    dignissimos quaerat itaque. Id aperiam mollitia tempore ab
                    iste iure voluptatibus ea deleniti, dolor sapiente
                    excepturi. Nisi numquam magni sint ratione repellendus fugit
                    excepturi laudantium tempore qui ex minus nobis alias, ullam
                    sunt animi expedita quos sequi impedit beatae tenetur? Odit
                    distinctio atque nam?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Section 3 start here */}
      <section id="contactInfo">
        <div className="row">
          <div className="col-lg-12 .d-md">
            <div className="socialMedia">
              <div className="mainCycle">
                <span className="mid"></span>
                <a
                  href="https://www.facebook.com/eman.alsayedd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="ico1 icon">
                    <strong>Facebook</strong>
                  </span>
                </a>
                <a
                  href="https://www.instagram.com/eng.eman_3/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="ico2 icon">
                    <strong>Instagram</strong>
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/eman-yahya-0429aa231/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="ico3 icon">
                    <strong>LinkedIn</strong>
                  </span>
                </a>
                <a href="#">
                  <span className="ico4 icon">
                    <strong>Phone</strong>
                  </span>
                </a>
                <a
                  href="https://github.com/EmanYahya210"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="ico5 icon">
                    <strong>GitHub</strong>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
