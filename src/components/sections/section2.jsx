import React from "react"
import img1 from '../../images/image_2.jpg'
import Table from 'react-bootstrap/Table'
const Section2 = () => {
  return (
    <div className="section2">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="img-62">
              <img src={img1} />
              <div className="inner_box">
                <h4>WHO WE ARE</h4>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page
                         when looking at this layout.The point of using lorem Ipsum is taht it has more or less normal distribution of letters.</p>
                <button>Read More <i className="fa fa-chevron-right"></i></button>

              </div>
            </div>


          </div>
          <div className="col-md-6">
            <div className="cu-table-1">
              <Table >
                <tbody>
                  <tr>
                    <th colSpan={2}>Opening Hours</th>
                  </tr>
                  <tr>
                    <td>Monday-Friday</td>
                    <td>8:00-18:00</td>
                  </tr>
                  <tr>
                    <td>Saturday</td>
                    <td>9:00-18:00</td>
                  </tr>
                  <tr>
                    <td>Sunday</td>
                    <td>Sunday</td>
                  </tr>
                </tbody>
              </Table>

              <Table >
                <tbody>
                  <tr> <th colSpan={2}>Visitor Hours</th></tr>
                  <tr><td>Monday-Friday</td>
                    <td>8:00-18:00</td>
                  </tr>
                  <tr>
                    <td>Saturday</td>
                    <td>9:00-18:00</td>
                  </tr>
                  <tr>
                    <td>Sunday</td>
                    <td>Sunday</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Section2;