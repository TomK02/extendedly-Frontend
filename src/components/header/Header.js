import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './header.css';
import logo from '../../assets/Logo.png';

const Header = () => {
  return (
    <section id="header">
      <div className="d-flex flex-column ">
        <div className="header__background d-flex">
          <div className="mx-auto">
            <div>
              <img src={logo} alt="Logo" className="img-fluid" />
              <span>The</span>
            </div>
            <h3>Fastest, Most Accurate</h3>
            <h4>Way to Close Your Books!</h4>
          </div>
        </div>

        <div className="header__banner d-flex flex-row mx-auto align-items-center py-1 px-3">
          <div className="banner__text col-4.5 mx-auto my-4">
            <h3 className="text-center"> SCHEDULE A DEMO</h3>
            <h4 className="text-center">Learn More about FloQast</h4>
          </div>

          <div className="col-7.5 container_">
            <h4 className="banner__title text-center my-2">
              Learn How FloQast Can <span>Improve Your Month-End</span>
            </h4>
            <Form className="d-md-flex flex-row mx-md-5">
              <Form.Group className="my-2" controlId="form_firstName">
                <Form.Control
                  className="form__name"
                  type="text"
                  placeholder="First Name*"
                  required
                />
              </Form.Group>

              <Form.Group className="mx-md-3 my-2" controlId="form_email">
                <Form.Control
                  className="form__email"
                  type="email"
                  placeholder="Email*"
                  required
                />
              </Form.Group>
              <Button
                className="my-2"
                variant="flat"
                type="submit"
                size="sm"
                style={{
                  backgroundColor: '#8bc540',
                  color: 'white',
                  border: '1px solid #8cb800',
                }}
              >
                SCHEDULE NOW
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
