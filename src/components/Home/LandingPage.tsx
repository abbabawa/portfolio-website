import { Col, Image, Row } from "react-bootstrap";
import profilePic from "../../images/profile_pic.jpg";
import Link from "next/link";

const LandingPage = () => {
  return (
    <Row className="mt-5 pt-5">
      <Col md="5" className="p-2 offset-md-2 p-5 homeBox">
        <div className="">
          <h6>WELCOME TO ABBA BAWA&apos;S PORTFOLIO</h6>
          <h2>
            EDUCATION, CONTACT AND <br />
            PORTFOLIO
          </h2>
          <p>
            Hi, Thanks for visiting my portfolio website. On this site you will
            find details about my educational background, qualifications, work
            experience and portfolio.
          </p>
          <Link
            href={{
              pathname:
                "https://drive.google.com/file/d/12l_-RWMxTDrpOwzKPacjyAysLtg0NTSa/view?usp=sharing",
            }}
            target="_blank"
            download
          >
            <button className="btn btn-danger">Download CV</button>
          </Link>
        </div>
      </Col>
      <Col className="pt-4 d-flex">
        <Image
          src={profilePic.src}
          className="img  rounded-circle mx-auto me-md-auto ms-md-0"
          id="profilePic"
          alt="Profile Picture"
        />
      </Col>
    </Row>
  );
};

export default LandingPage;
