import React from 'react'
import './test.css';
import logo from './as.jpeg';
import logoo from './ss.jpeg';
import logop from './ps.jpeg';
function Testimonial() {
    
    return (
        <div  id="Testimonial" >
             <section>
        <div className="customer-feedback">
          <div className="container text-center">
            <div className="row">
              <div className="col-sm-offset-2 col-sm-8">
                <div>
                  <h2 className="section-title">Hear! Hear!</h2>
                </div>
              </div>{/* /End col */}
            </div>{/* /End row */}
            <div className="row">
              <div className="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8">
                <div className="owl-carousel feedback-slider">
                  {/* slider item */}
                  <div className="feedback-slider-item">
                    <img src={logoo} style={{zIndex:"-1"}} className="center-block img-circle" alt="Customer Feedback" />
                    <h3 className="customer-name  arefont">Swapnil, Kolkata</h3>
                    <p className="arefont">Candid Connection is a revolutionary idea with unlimited scope of growth. I believe it is going to change the world of online dating and make it more realistic.</p>
                    {/* <span className="light-bg customer-rating" data-rating={5}> */}
                      
                      {/* <i className="fa fa-star" /> */}
                    {/* </span> */}
                  </div>
                  {/* /slider item */}
                  {/* slider item */}
                  <div className="feedback-slider-item">
                    <img src={logo} style={{zIndex:"-1"}} className="center-block img-circle" alt="Customer Feedback" />
                    <h3 className="customer-name arefont">Riya, Delhi</h3>
                    <p className="arefont">Making dating a little fun and filling energy is a wholesome idea.
And it's even great for long distance relationships.</p>
                    {/* <span className="light-bg customer-rating" data-rating={4}> */}
                      
                      {/* <i className="fa fa-star" /> */}
                    {/* </span> */}
                  </div>
                  {/* /slider item */}
                  {/* slider item */}
                  <div className="feedback-slider-item">
                    <img style={{zIndex:"-1"}} src={logop} className="center-block img-circle" alt="Customer Feedback" />
                    <h3 className="customer-name arefont">Subham, Mumbai</h3>
                    <p className="arefont">Awkward pauses are a big problem while dating. Candid connection is making life easier.</p>
                    {/* <span className="light-bg customer-rating" data-rating={5}> */}
                      
                      {/* <i className="fa fa-star" /> */}
                    {/* </span> */}
                  </div>
                  {/* /slider item */}
                </div>{/* /End feedback-slider */}
                {/* side thumbnail */}
                <div className="feedback-slider-thumb hidden-xs">
                  <div className="thumb-prev">
                    <span>
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451270/profile/profile-80.jpg" alt="Customer Feedback" />
                    </span>
                    {/* <span className="light-bg customer-rating"> */}
                      
                      {/* <i className="fa fa-star" /> */}
                    {/* </span> */}
                  </div>
                  <div className="thumb-next">
                    <span>
                      <img src="https://res.cloudinary.com/hnmqik4yn/image/upload/c_fill,fl_force_strip,h_128,q_100,w_128/v1493982718/ah57hnfnwxkmsciwivve.jpg" alt="Customer Feedback" />
                    </span>
                    {/* <span className="light-bg customer-rating"> */}
                      
                      {/* <i className="fa fa-star" style={{color:"#EB0090 !important"}} /> */}
                    {/* </span> */}
                  </div>
                </div>
                {/* /side thumbnail */}
              </div>{/* /End col */}
            </div>{/* /End row */}
          </div>{/* /End container */}
        </div>{/* /End customer-feedback */}
      </section>
        </div>
    )
}

export default Testimonial

