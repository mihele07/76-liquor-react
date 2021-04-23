import { Link } from 'react-router-dom';
import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem, Button, Label, Input, Col, Form, FormGroup, FormFeedback, CardImg } from 'reactstrap';
import "../contactUs.css"

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactType: 'By Phone',  
      firstName: '',
        lastName: '',
        phoneNum: '',
        email: '',
        agree: false,
        feedback: '',
        touched: {
          firstName: false,
          lastName: false,
          phoneNum: false,
          email: false
      }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

validate(firstName, lastName, phoneNum, email) {

  const errors = {
      firstName: '',
      lastName: '',
      phoneNum: '',
      email: ''
  };

  if (this.state.touched.firstName) {
      if (firstName.length < 2) {
          errors.firstName = 'First name must be at least 2 characters.';
      } else if (firstName.length > 15) {
          errors.firstName = 'First name must be 15 or less characters.';
      }
  }

  if (this.state.touched.lastName) {
      if (lastName.length < 2) {
          errors.lastName = 'Last name must be at least 2 characters.';
      } else if (lastName.length > 15) {
          errors.lastName = 'Last name must be 15 or less characters.';
      }
  }

  const reg = /^\d+$/;
  if (this.state.touched.phoneNum && !reg.test(phoneNum)) {
      errors.phoneNum = 'The phone number should contain only numbers.';
  }

  if (this.state.touched.email && !email.includes('@')) {
      errors.email = 'Email should contain a @';
  }

  return errors;
}

handleBlur = (field) => () => {
  this.setState({
      touched: {...this.state.touched, [field]: true}
  });
}
handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
        [name]: value
    });
}

handleSubmit(event) {
    console.log('Current state is: ' + JSON.stringify(this.state));
    alert('Current state is: ' + JSON.stringify(this.state));
    event.preventDefault();
}
  render () { 
  
    const errors = this.validate(this.state.firstName, this.state.lastName, this.state.phoneNum, this.state.email);

  return ( 
    <div className="contact-background-image">
    <div className="container">
        <div className="row">
            <div className="col bread">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <h1> Contact us  </h1>
                <hr />
            </div>
        </div>
        <div className="row row-content align-items-center">
                    <div className="address col-sm-4">
                        <h5>Our Address</h5>
                        <address>
                            1473 1st Ave, New York, NY 10021
                        </address>
                    </div>
                    <div className="col">
                        <a role="button" className="btn btn-link btn-warning" href="tel:+12122491700"><i className="fa fa-phone" /> 1-212-249-1700</a><br /><br />
                        <a role="button" className="btn btn-link btn-warning" href="mailto:frake@76liquors.com"><i className="fa fa-envelope-o" /> Email Us</a>
                    </div>
                    <div>
                         <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3021.596947490165!2d-73.9539499!3d40.7708888!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258bf542522b1%3A0x90598d42770b56f0!2s76%20Liquors%20Ltd!5e0!3m2!1sen!2sus!4v1610465716354!5m2!1sen!2sus" width="350" height="250" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
        </div>
        <br/>
        <div className="row ">    
            <div className="col-md-10">
              <div className="feedBack">
              <p> We would like your feedback !!! </p>
              </div>
              
              <Form  onSubmit={this.handleSubmit}>
              <FormGroup row>
                    <Col md={{size: 4, offset: 2}}>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox"
                                    name="agree"
                                /> {' '}
                                <strong> How to contact you? </strong>
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <Input type="select" name="contactType"
                        value={this.state.contactType}
                        onChange={this.handleInputChange} >
                            <option> By Phone </option>
                            <option> By Text </option>
                            <option> By Email </option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="firstName" md={2}>First Name</Label>
                    <Col md={10}>
                        <Input type="text" id="firstName" name="firstName"
                          placeholder="First Name"
                          value={this.state.firstName}
                          invalid={errors.firstName}
                          onBlur={this.handleBlur("firstName")}
                          onChange={this.handleInputChange}
                        />
                        <FormFeedback>{errors.firstName}</FormFeedback>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="lastName" md={2}>Last Name</Label>
                    <Col md={10}>
                        <Input type="text" id="lastName" name="lastName"
                            placeholder="Last Name"
                            value={this.state.lastName}
                            invalid={errors.lastName}
                            onBlur={this.handleBlur("lastName")}
                            onChange={this.handleInputChange}
                        />
                        <FormFeedback>{errors.lastName}</FormFeedback>
                    </Col>                        
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="phoneNum" md={2}>Phone</Label>
                    <Col md={10}>
                        <Input type="tel" id="phoneNum" name="phoneNum"
                            placeholder="Phone number"
                            value={this.state.phoneNum}
                            invalid={errors.phoneNum}
                            onBlur={this.handleBlur("phoneNum")}
                            onChange={this.handleInputChange}
                        />
                        <FormFeedback>{errors.phoneNum}</FormFeedback>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="email" md={2}>Email</Label>
                    <Col md={10}>
                        <Input type="email" id="email" name="email"
                            placeholder="Email"
                            value={this.state.email}
                            invalid={errors.email}
                            onBlur={this.handleBlur("email")}
                            onChange={this.handleInputChange}
                        />
                        <FormFeedback>{errors.email}</FormFeedback>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                    <Col md={10}>
                        <Input type="textarea" id="feedback" name="feedback"
                            rows="5"
                            value={this.state.feedback}
                            onChange={this.handleInputChange}>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={{size: 10, offset: 2}}>
                        <Button type="submit" color="success">
                            Send Feedback
                        </Button>
                    </Col>
                </FormGroup>
              </Form>
            </div>
        
        </div>
    </div>
  </div>
  );
}
}

export default Contact;