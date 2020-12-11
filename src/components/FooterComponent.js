import React from "react";
import { Link } from "react-router-dom";
import '../header-footer.css'

function Footer(props) {
  return (
    <footer className="site-footer">
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-4 col-sm-2 offset-1">
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li>
                  <Link className = "link" to="/home"><i className="fa fa-home" /> Home</Link>
                </li>
                <li>
                  <Link className = "link" to="/ourstory"><i className="fa fa-info" /> Our Story</Link>
                </li>
                <li>
                  <Link className = "link" to="/products"><i className="fa fa-list" /> Products</Link>
                </li>
                <li>
                  <Link className = "link" to="contactus"><i className="fa fa-address-card" /> Contact</Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm-3 text-center">
              <h5>Social</h5>
              <a
                className="btn btn-social-icon btn-instagram"
                href="http://instagram.com/"
              >
                <i className="fa fa-instagram" />
              </a>{" "}
              <a
                className="btn btn-social-icon btn-facebook"
                href="http://www.facebook.com/"
              >
                <i className="fa fa-facebook" />
              </a>{" "}
              <a
                className="btn btn-social-icon btn-twitter"
                href="http://twitter.com/"
              >
                <i className="fa fa-twitter" />
              </a>{" "}
              <a
                className="btn btn-social-icon btn-google"
                href="http://youtube.com/"
              >
                <i className="fa fa-youtube" />
              </a>
            </div>
            
            <div className="col-sm-4 text-center">
              <a  role="button" className="btn btn-link" href="tel: 212-249-1700">
                <i className="fa fa-phone" /> <span className = "link">212-249-1700</span>
              </a>
              <br />
              <a
                role="button"
                className="btn btn-link"
                href="mailto:notreal@notreal.co"
              >
                <i className="fa fa-envelope-o" /><span className = "link">frank@76liquors.com</span>
              </a>
              <br/>
              
              <a  role="button" className="btn btn-link" href="1473 1st Avenue">
                <i className="fa fa-map-marker" /> <span className = "link">1473 1st Avenue, New York , New York 10021</span>
              </a>



              
                
                </div>
            </div>
          </div>
        
      </footer>
    </footer>
  );
}

export default Footer;
