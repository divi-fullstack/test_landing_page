import React from "react"
import img1 from '../../images/image_9.png'
import Form from 'react-bootstrap/Form'

const Section7 = () => {
  return (
    <div className="section7 section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1> MAKE AN<span className="underline_heading">APPOINTMENT</span> </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ...</p>
          </div>

        </div>

        <div className="row er4">
          <div className="col-md-6">
            <div className="img_doc">
              <img src={img1} />
            </div>

          </div>
          <div className="col-md-6">
            <Form>
              <Form.Group >
                <Form.Control placeholder="Name" />


              </Form.Group>

              <Form.Group >
                <Form.Control type="email" placeholder="Email" />

              </Form.Group>
              <Form.Group >
                <Form.Control type="number" placeholder="Mobile Number" />

              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Department</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Doctor</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">

                <Form.Control as="textarea" placeholder="Your Message" />
              </Form.Group>
              <button>BOOK APPOINTMENT</button>
            </Form>

          </div>

        </div>
      </div>
    </div>
  )
}
export default Section7;