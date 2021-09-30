import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// import image from '../assets/marginalia-vaccination.png';

import classes from './Home.module.scss';

export default function Home() {
  return (
    <div>
      <section className={classes.section}>
        <Container>
          <Row
            className={`justify-content-center text-center align-items-center ${classes.firstRow}`}
          >
            <Col xs={8}>
              <h1>
                Schedule your FREE <br />
                COVID-19 vaccine today!
              </h1>
            </Col>
            <Col>
              <div>{/* <img src={image} alt="vaccination image" /> */}</div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row
            className={`justify-content-center text-center ${classes.secondRow}`}
          >
            <Col>
              <div>
                <svg
                  width="65"
                  height="69"
                  viewBox="0 0 65 69"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M19.2009 32.0015C19.2009 30.8232 20.1561 29.868 21.3344 29.868H29.8681V21.3343C29.8681 20.156 30.8232 19.2009 32.0015 19.2009C33.1798 19.2009 34.1349 20.156 34.1349 21.3343V29.868H42.6687C43.847 29.868 44.8021 30.8232 44.8021 32.0015C44.8021 33.1798 43.847 34.1349 42.6687 34.1349H34.1349V42.6686C34.1349 43.8469 33.1798 44.8021 32.0015 44.8021C30.8232 44.8021 29.8681 43.8469 29.8681 42.6686V34.1349H21.3344C20.1561 34.1349 19.2009 33.1798 19.2009 32.0015Z"
                      fill="#C0C0C0"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 32.0015C0 14.3275 14.3275 0 32.0015 0C49.6754 0 64.0029 14.3275 64.0029 32.0015C64.0029 49.6754 49.6754 64.0029 32.0015 64.0029C28.4226 64.0029 24.9774 63.4147 21.7593 62.3282L16.4426 67.6449C15.8324 68.2551 14.9148 68.4377 14.1176 68.1074C13.3204 67.7772 12.8006 66.9993 12.8006 66.1364V57.6048C5.03165 51.7696 0 42.4734 0 32.0015ZM32.0015 4.26686C16.6841 4.26686 4.26686 16.6841 4.26686 32.0015C4.26686 41.4244 8.96416 49.7505 16.1546 54.766C16.7266 55.1652 17.0674 55.8184 17.0674 56.5159V60.9858L19.7014 58.3519C20.299 57.7543 21.193 57.5657 21.981 57.8712C25.0862 59.0749 28.464 59.7361 32.0015 59.7361C47.3189 59.7361 59.7361 47.3189 59.7361 32.0015C59.7361 16.6841 47.3189 4.26686 32.0015 4.26686Z"
                      fill="#C0C0C0"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="64.0029" height="68.1057" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="pt-3">Need to make an appointment?</p>
              {/* <Link to="/makeapt">Make Appointment</Link> */}
              <LinkContainer to="/makeapt">
                <Button>Schedule Appointment</Button>
              </LinkContainer>
            </Col>
            <Col>
              <div>
                <svg
                  width="75"
                  height="72"
                  viewBox="0 0 75 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M20.6896 36.3744C15.9473 31.6312 15.9473 23.9413 20.6896 19.1983C21.7032 18.1845 21.7032 16.5408 20.6896 15.5269C19.6759 14.5131 18.0325 14.5131 17.0188 15.5269C10.2493 22.2976 10.2493 33.2749 17.0188 40.0457C18.0325 41.0596 19.6759 41.0596 20.6896 40.0457C21.7032 39.0318 21.7032 37.388 20.6896 36.3744Z"
                      fill="#C0C0C0"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M48.4816 8.57785C58.4692 18.5672 59.0522 34.401 50.2303 45.0726L55.48 50.3232C57.6527 49.5338 60.1815 50.0104 61.9237 51.7529L70.6087 60.4393C73.007 62.8379 73.007 66.727 70.6087 69.1257C68.2104 71.5243 64.322 71.5243 61.9237 69.1257L53.2388 60.4393C51.4965 58.6968 51.02 56.1673 51.8093 53.9945L46.5596 48.7439C35.8897 57.5673 20.0586 56.9842 10.0708 46.9949C-0.535982 36.3862 -0.535982 19.1864 10.0708 8.57785C20.6776 -2.03071 37.8746 -2.03071 48.4816 8.57785ZM13.7416 43.3234C5.1621 34.7424 5.1621 20.8301 13.7416 12.2492C22.3211 3.6683 36.2311 3.6683 44.8106 12.2492C53.3886 20.8285 53.3902 34.7371 44.8157 43.3186L44.8106 43.3234L44.8048 43.3293C36.2249 51.9044 22.3191 51.9025 13.7416 43.3234Z"
                      fill="#C0C0C0"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="74.6701" height="71.1384" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="pt-3">Need to check or change your appointment?</p>
              {/* <Link to="/findapt">Find Appointment</Link> */}
              <LinkContainer to="/findapt">
                <Button>Find My Appointment</Button>
              </LinkContainer>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
