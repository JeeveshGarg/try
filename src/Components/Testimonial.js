import React from 'react'
import './test.css';
import logo from './as.png';
import logoo from './ss.png';
import logop from './ps.png';
function Testimonial() {
    
    return (
        <div  id="Testimonial" className="testi__wrap" >
        <section >
        <div className="customer-feedback">
          <div className="container text-center">
            <div className="row" >
              <div className="col-sm-offset-2 col-sm-8">
                <div >
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
                   
                  </div>
                 
                  <div className="feedback-slider-item">
                    <img src={logo} style={{zIndex:"-1"}} className="center-block img-circle" alt="Customer Feedback" />
                    <h3 className="customer-name arefont">Riya, Delhi</h3>
                    <p className="arefont">Making dating a little fun and filling energy is a wholesome idea.
                       And it's even great for long distance relationships.</p>
                   
                  </div>
                  
                  <div className="feedback-slider-item">
                    <img style={{zIndex:"-1"}} src={logop} className="center-block img-circle" alt="Customer Feedback" />
                    <h3 className="customer-name arefont">Subham, Mumbai</h3>
                    <p className="arefont">Awkward pauses are a big problem while dating. Candid connection is making life easier.</p>
                    
                  </div>
                  
                </div>
                <div className="feedback-slider-thumb hidden-xs">
                  <div className="thumb-prev">
                    <span>
                      <img src={logo} alt="Customer Feedback" />
                    </span>
                    
                  </div> 
                  <div className="thumb-next">
                    <span>
                      <img src={logop} alt="Customer Feedback" />
                    </span>
                    
                  </div>
                 </div>
               
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}

export default Testimonial

