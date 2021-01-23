import React from "react"
import Form from 'react-bootstrap/Form'
const Section6 = () => {
    return (
        <div className="section6">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Form>

                            <Form.Control type="email" placeholder="ENTER YOUR EMAIL ADDRESS" />
                            <button>SUBSCRIBE NOW</button>
                        </Form>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section6;