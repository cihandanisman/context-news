import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { user, setSigned, setUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.email && user.password) {
      setSigned(true);
      navigate("/News");
    } else {
      setSigned(false);
    }
  };
  return (
    <MDBContainer fluid className="my-5">
      <MDBRow className="g-0 align-items-center">
        <MDBCol col="6">
          <MDBCard
            className="my-5 cascading-right"
            style={{
              background: "hsla(0, 0%, 100%, 0.55)",
              backdropFilter: "blur(30px)",
            }}
          >
            <MDBCardBody className="p-5 shadow-5 text-center">
              <h2 className="fw-bold mb-5">Sign up now</h2>

              <MDBRow></MDBRow>

              <MDBInput
                wrapperClass="mb-4"
                value={user?.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                label="Email"
                id="form3"
                type="email"
              />
              <MDBInput
                wrapperClass="mb-4"
                value={user?.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                label="Password"
                id="form4"
                type="password"
              />

              <div className="d-flex justify-content-center mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Subscribe to our newsletter"
                />
              </div>

              <MDBBtn onClick={handleSubmit} className="w-100 mb-4" size="md">
                sign up
              </MDBBtn>

              <div className="text-center">
                <p>or sign up with:</p>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "black" }}
                >
                  <FaGithub />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "black" }}
                >
                  <CiFacebook />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "black" }}
                >
                  <FaGoogle />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "black" }}
                >
                  <FaTwitter />
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol col="6" className="image-login">
          <img
            src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
            class="w-100 rounded-4 shadow-4"
            alt=""
            fluid
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
