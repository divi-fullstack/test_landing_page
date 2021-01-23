import React from "react"

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                       <div className="copy-wrapper">
                       <p className="copyright-text">© Copyright 2020, All right Reserved Powered by Amazing7 Studios.</p>
                       </div>
                    </div>
                    <div className="col-md-5">
                        <ul className="social-icons">
                        <li><i className="fa fa-facebook"></i></li>
                        <li><i className="fa fa-instagram"></i></li>
                        <li><i className="fa fa-twitter"></i></li>
                        <li><i className="fa fa-linkedin"></i></li>
                        </ul>
                        <p className="email-text"><b>Email:</b> helthcareplus@gmail.com</p>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;