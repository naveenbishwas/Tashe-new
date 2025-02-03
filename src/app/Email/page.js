import React from "react";
import "./email.css";

const page = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHanlder = (e) => {
    e.preventDefault();
    const serviceId = "service_lc3zqsj";
    const templateId = "template_lgmyk3o";
    const publicKey = "vwQ1UwMU_xiay6xqT";
    const comfirmationTemplateId = "template_dtk82zi";

    const templateParams = {
      to_name: "Sayam",
      from_name: companyName,
      company_name: companyName,
      monthly_marketing_budget: budget,
      client_name: name,
      phone_no: phone,
      email_id: email,
      service_id: service,
      designation: designation,
    };

    const confirmationParams = {
      to_name: name,
      to_email: email,
      user_name: name,
      user_email: email,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setCompanyName("");
        setBudget("");
        setName("");
        setPhone("");
        setEmail("");
        setService("");
        setDesignation("");
      })
      .catch((error) => {
        console.log(error);
      });

    emailjs
      .send(serviceId, comfirmationTemplateId, confirmationParams, publicKey)
      .then((response) => {
        console.log("Confirmation email sent sucessfully", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="footer-right">
        <div className="footer-right-header">
          <h1>
            WE LOVE TO <span id="footer-hear">HEAR FROM YOU</span>
          </h1>
          <form action="" onSubmit={submitHanlder}>
            <div className="form-top">
              <input
                type="text"
                name=""
                id="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                name=""
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="tel"
                name=""
                id="phone"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-middle">
              <textarea
                cols="69"
                rows="8"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="from-bottom">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
