import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const [data, setData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNumber: "",
    Subject: "",
    Message: "",
  });

  const onInputChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setData((current) => ({ ...current, [name]: value }));
  };

  const onFormSubmit = () => {
    // validate
    if (
      data.FirstName === "" ||
      data.LastName === "" ||
      data.Email === "" ||
      data.PhoneNumber === "" ||
      data.Subject === "" ||
      data.Message === ""
    ) {
      setMessage({ type: "danger", text: "Please enter all data" });
    } else {
      setMessage({ type: "success", text: "Message sent." });
      setTimeout(() => navigate("/"), [2000]);
    }
  };
  return (
    <div className="py-5">
      <div className="text-center mb-3">
        <h2 className="text-primary">Contact Us</h2>
        <p className="lead">Reach out to us for any inquiries.</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <form action="#">
              <div className="row">
                <div className="col-md-6 mb-2">
                  <div className="form-group">
                    <label for="text" class="form-label">
                      First Name
                    </label>
                    <input
                      type="FirstName"
                      class="form-control"
                      id="FirstName"
                      name="FirstName"
                      placeholder="First Name"
                      onChange={onInputChange}
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-2">
                  <div className="form-group">
                    <label for="LastName" class="form-label">
                      LastName
                    </label>
                    <input
                      type="tel"
                      class="form-control"
                      id="LastName"
                      name="LastName"
                      placeholder="Last Name"
                      onChange={onInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-2">
                  <div className="form-group">
                    <label for="Email" class="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="Email"
                      name="Email"
                      placeholder="Email Address"
                      onChange={onInputChange}
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-2">
                  <div className="form-group">
                    <label for="PhoneNumber" class="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      class="form-control"
                      id="PhoneNumber"
                      name="PhoneNumber"
                      placeholder="Phone Number"
                      onChange={onInputChange}
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="Subject" class="form-label">
                  Your Subject
                </label>
                <input
                  class="form-control"
                  id="Subject"
                  name="Subject"
                  placeholder="Subject"
                  onChange={onInputChange}
                />
              </div>
              <div class="form-group">
                <label for="message" class="form-label">
                  Your Message
                </label>
                <textarea
                  class="form-control"
                  id="message"
                  name="Message"
                  rows="3"
                  onChange={onInputChange}
                ></textarea>
              </div>

              <div className="d-grid">
                {message ? (
                  <div
                    className={`alert alert-${message.type} mb-2`}
                    role="alert"
                  >
                    {message.text}
                  </div>
                ) : null}
                <button
                  type="button"
                  className="bg-primary rounded"
                  onClick={() => onFormSubmit()}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
