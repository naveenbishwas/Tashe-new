"use client";

import React from "react";
import "./peb-frames.css";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

const Page = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isNavbarVisible, setNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setNavbarVisible((prev) => !prev); // Toggle visibility
  };

  const closeNavbar = () => {
    setNavbarVisible(false); // Close when clicking cancel
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#frame", {
      x: -455,
      duration: 1,
      ease: "power1",
      scrollTrigger: {
        trigger: "#frame",
        start: "top 80%",
        end: "top 50%",
        scrub: false,
      },
    });

    gsap.to(".topic-headng p", {
      x: 75,
      duration: 1,
      ease: "power1",
      scrollTrigger: {
        trigger: "#frame",
        start: "top 90%",
        end: "top 50%",
        scrub: false,
      },
    });
    if (window.innerWidth <= 768) {
      gsap.to("#frame", {
        x: -105,
        duration: 1,
        ease: "power1",
        scrollTrigger: {
          trigger: "#frame",
          start: "top 80%",
          end: "top 50%",
          scrub: false,
        },
      });
      gsap.to(".topic-headng p", {
        x: 36,
        duration: 1,
        ease: "power1",
        scrollTrigger: {
          trigger: "#frame",
          start: "top 90%",
          end: "top 50%",
          scrub: false,
        },
      });
    }
  }, []);

  const openImagePopup = (src) => {
    setSelectedImage(src);
    setTimeout(() => setIsVisible(true), 0);
  };

  const closeImagePopup = () => {
    setIsVisible(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  return (
    <div className="main-container">
      <div className="back-image">
        <div className="background-img">
          <Image
            id="product-banner"
            src={"/product1.JPG"}
            alt="Picture of the background loading"
            width={0}
            height={0}
            unoptimized
            priority
          />
        </div>
        <div className="background-color" id="product-background-color"></div>
      </div>
      <header>
        <div className="navbar">
          <Link href="/">
            <div className="logo">
              <Image
                src={"/dev-logo-white.png"}
                alt="Logo"
                width={0}
                height={0}
                unoptimized
              />
            </div>
          </Link>

          <nav id="navigation">
            <input
              type="checkbox"
              id="check"
              checked={isNavbarVisible}
              onChange={toggleNavbar}
            />
            <label htmlFor="check" className="checkbtn">
              <svg
                id="nav-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </label>

            {/* Main Navbar */}
            <ul
              className={`main-navbar ${isNavbarVisible ? "open" : "closed"}`}
            >
              <span id="cancel_btn" onClick={closeNavbar}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
              </span>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li
                className="dropdown"
                id="for-desk"
                onMouseEnter={() => setDropdownVisible(true)}
                onMouseLeave={() => setDropdownVisible(false)}
              >
                <Link id="product-p" href="#">
                  <span id="product-anchor-df">
                    Product
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-caret-down-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  </span>
                </Link>

                {isDropdownVisible && (
                  <ul id="product-li-table">
                    <li>
                      <Link href="/product/standard-frame-types">
                        Standard Frame Types
                      </Link>
                    </li>
                    <li>
                      <Link href="/product/peb-frames">PEB Frames</Link>
                    </li>
                    <li>
                      <Link href="/product/insulation">Insulation</Link>
                    </li>
                    <li>
                      <Link href="/product/cranes">Cranes</Link>
                    </li>
                    <li>
                      <Link href="/product/mezzanine">Mezzanine</Link>
                    </li>
                    <li>
                      <Link href="/product/purlin&girt">Purlin & Girt</Link>
                    </li>
                    <li>
                      <Link href="/product/roofing&cladding">
                        Roofing & Cladding
                      </Link>
                    </li>
                    <li>
                      <Link href="/product/technical-details">
                        Technical Details
                      </Link>
                    </li>
                    <li>
                      <Link href="/product/trims&flashing">
                        Trims & Flashing
                      </Link>
                    </li>
                    <li>
                      <Link href="/product/ventilation">Ventilation</Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link href="/about-us">About us</Link>
              </li>
              <li>
                <Link href="/career">Career</Link>
              </li>
              <li id="contact">
                <div className="">
                  <Link id="black" href="/contact-us">
                    Contact us
                  </Link>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-lin">
          <hr id="header-line" />
        </div>

        <div className="transformer-heading">
          <h1>PEB Frames </h1>
          <p>
            The modular nature of PEB frames allows for easy installation,
            expansion, and maintenance.
          </p>
        </div>
      </header>
      <svg
        version="1.1"
        id="product-svg"
        x="0px"
        y="0px"
        viewBox="0 0 956 80.7"
      >
        <path
          className="st0"
          d="M953.2,64.3L902.5,3.5C900.7,1.3,897.9,0,895,0h-64.3H124.2H59.9c-2.9,0-5.7,1.3-7.5,3.5L1.7,64.3
	C-3.6,70.7,1,80.4,9.3,80.4h115h706.4h115C953.9,80.4,958.5,70.7,953.2,64.3z"
        />
      </svg>

      <section className="topic-headng">
        <div className="blue-border">
          <h1 id="frame">PEB Frames </h1>
          <p>
            A PEB (Pre-Engineered Building) frame in valves typically refers to
            a structural framework designed to house and support industrial
            valve systems within a larger infrastructure. These frames are
            custom-engineered to meet specific requirements, providing a stable
            and durable environment for valve operation.
          </p>

          <p>
            PEB frames are commonly used in industries like oil and gas, water
            treatment, and manufacturing, where valves play a critical role in
            controlling the flow of fluids or gases. The modular nature of PEB
            frames allows for easy installation, expansion, and maintenance.
            They are constructed using materials such as steel or aluminum to
            ensure resistance to environmental factors and operational stress,
            ensuring longevity and reliable performance in demanding conditions.
          </p>
        </div>
      </section>

      <section className="topic-images">
        <div className="row-one">
          <div className="row-left">
            <h2>1. CLEAR SPAN (CS):</h2>
            <p>
              This type of frame is the most preferred and widely used
              worldwide. It offers clear access to loading and stacking funcƟ on
              within the shed. As the pillars or columns are coming at both
              ends, it gives a very spacious and airy look to the enƟ re shed.
              We can design these sheds for a width of up to 150 meters.
              However, the water discharge from these types of frames is on both
              sides of the shed as this is a TWO SLOPE frame.
            </p>
          </div>
          <div className="row-right">
            <div
              className="img-box"
              onClick={() => {
                openImagePopup("/fed1.png");
              }}
            >
              <span>
                <h3>CLEAR SPAN (CS)</h3>
              </span>
              <span>
                <Image
                  id="frame-img-one"
                  className="frame-imgs"
                  src="/fed1.png"
                  alt=""
                  width={0}
                  height={0}
                  unoptimized
                  priority
                ></Image>
              </span>
            </div>
          </div>
        </div>

        <div className="row-two rotate">
          <div className="row-left">
            <h2>2. MULTI SPAN (MS)</h2>
            <p>
              This type of frame is most suitable for clients who want a wide
              shed but do not necessarily want it to be clear span because it
              gives us the economy of Two Sloped Structure and the columns in
              between distributes the load and thus reduces the weight of the
              structure. It is the most economical form of frame for large span
              buildings. The water discharge is however done from the two side
              of the slope.
            </p>
          </div>
          <div className="row-right">
            <div
              className="img-box"
              onClick={() => {
                openImagePopup("/fed2.png");
              }}
            >
              <span>
                <h3>MULTI SPAN (MS)</h3>
              </span>
              <span>
                <Image
                  id="frame-img-one"
                  className="frame-imgs"
                  src="/fed2.png"
                  alt=""
                  width={0}
                  height={0}
                  unoptimized
                  priority
                ></Image>
              </span>
            </div>
          </div>
        </div>

        <div className="row-three">
          <div className="row-left">
            <h2>3.SINGLE SLOPE (SS)</h2>
            <p>
              This type of frames are the preferred choice when clients wants or
              has restricƟ on to drain water of both sides of the shed. It is
              also chosen by clients in case their exisƟ ng sheds require an
              expansion in width but is not designed to support the load of a
              lean to shed. In case these sheds are very wide then is becomes
              economical to make the same in MulƟ span.
            </p>
          </div>
          <div className="row-right">
            <div
              className="img-box"
              onClick={() => {
                openImagePopup("/fed3.png");
              }}
            >
              <span>
                <h3>SINGLE SLOPE (SS)</h3>
              </span>
              <span>
                <Image
                  id="frame-img-one"
                  className="frame-imgs"
                  src="/fed3.png"
                  alt=""
                  width={0}
                  height={0}
                  unoptimized
                  priority
                ></Image>
              </span>
            </div>
          </div>
        </div>

        <div className="row-four rotate">
          <div className="row-left">
            <h2>4. MULTI GABLE (MG)</h2>
            <p>
              This type of frame is the used in case of wide shed but are more
              economical than the MulƟ Span frame type. It is lighter because
              the trusses are smaller hence economical but it comes with a rider
              that it may has a water discharge in the center of the shed which
              would require an internal drainage line, which is not preferred in
              most of the industries where water ingress during unplanned excess
              rains lead to losses.
            </p>
          </div>
          <div className="row-right">
            <div
              className="img-box"
              onClick={() => {
                openImagePopup("/fed5.png");
              }}
            >
              <span>
                <h3>MULTI GABLE (MG)</h3>
              </span>
              <span>
                <Image
                  id="frame-img-one"
                  className="frame-imgs"
                  src="/fed5.png"
                  alt=""
                  width={0}
                  height={0}
                  unoptimized
                  priority
                ></Image>
              </span>
            </div>
          </div>
        </div>

        <div className="row-five">
          <div className="row-left">
            <h2>5. LEAN TO (LT)</h2>
            <p>
              This type of frame is the most preferred type, for sheds requiring
              an expansion along the width. It requires the original shed to be
              designed such that it is able to take the load of the expanded
              shed along with the new shed. Lean to sheds are designed to match
              the roof slope of the exisƟ ng shed such that the water is
              discharged out of the shed.
            </p>
          </div>
          <div className="row-right">
            <div
              className="img-box"
              onClick={() => {
                openImagePopup("/fed5.png");
              }}
            >
              <span>
                <h3>LEAN TO (LT)</h3>
              </span>
              <span>
                <Image
                  id="frame-img-one"
                  className="frame-imgs"
                  src="/fed5.png"
                  alt=""
                  width={0}
                  height={0}
                  unoptimized
                  priority
                ></Image>
              </span>
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className={`image-popup ${isVisible ? "visible" : ""}`}
          onClick={closeImagePopup}
        >
          <div className="popup-content">
            <Image
              src={selectedImage}
              alt=""
              layout="fill"
              objectFit="contain"
            ></Image>
          </div>
        </div>
      )}

      <footer>
        <div className="footer-df">
          <div className="footer-left">
            <div className="footer-left-top">
              <h2>DEVKINANDAN STEEL & METAL INDUSTRIES LLP</h2>
              <p>
                A great place to work where people are inspired, involved and
                motivated.
              </p>
              <hr id="footer-line" />
            </div>
            <div className="footer-left-middle"></div>
            <div className="footer-left-last">
              <div className="footer-left-last-call-mail">
                <div className="footer-left-last-call-mail-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-telephone-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                    />
                  </svg>
                  <h5>+91 123456789</h5>
                </div>
                <div className="footer-left-last-call-mail-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-envelope-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                  </svg>
                  <h5>devkinandansteel@gmail.com</h5>
                </div>
              </div>

              <div className="footer-left-last-address">
                <div className="footer-left-last-address-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                  </svg>
                  <h6>
                    Survey no 786, near PCBL, Village-Vadal, Mundra - kutch,
                    Gujurat.
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-right-header">
              <h1>
                WE LOVE TO <span id="footer-hear">HEAR FROM YOU</span>
              </h1>
              <form action="">
                <div className="form-top">
                  <input type="text" name="" id="name" placeholder="Name" />
                  <input type="email" name="" id="email" placeholder="Email" />
                  <input type="tel" name="" id="phone" placeholder="Phone" />
                </div>
                <div className="form-middle">
                  <textarea
                    cols="69"
                    rows="8"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="from-bottom">
                  <button>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;
