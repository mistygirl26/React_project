import './contactus.css';
import Button from 'react-bootstrap/Button';

function ContactUs() {
  return (
    <div>
<h2 className="contact">Contact Us</h2>
<section >
  <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
      <div className="col-md-8 col-lg-7 col-xl-6">
        <img src="contact us-01.svg"
          className="img-fluid" alt="Phone image"/>
      </div>
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form method="post">
         
          <div className="form-outline mb-4">
            <label className="form-label">Name</label>
            <input type="email" id="form1Example13" className="form-control form-control-lg" name="email" />
          </div>

          
          <div className="form-outline mb-4">
            <label className="form-label">Phone</label>
            <input type="email" id="form1Example13" className="form-control form-control-lg" name="email" />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label">Email</label>
            <input type="email" id="form1Example13" className="form-control form-control-lg" name="email" />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label">Password</label>
            <input type="email" id="form1Example13" className="form-control form-control-lg" name="email" />
          </div>

          <div className="d-flex justify-content-around align-items-center mb-4">
            
          <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
              <label className="form-check-label" > Remember me </label>

            </div>
            <a href="#!">Forgot password?</a>
            
          </div>
          <Button variant="primary">Submit </Button>{' '}
          
          


        </form>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default ContactUs;