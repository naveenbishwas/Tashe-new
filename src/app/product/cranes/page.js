"use client";

import React from "react";
import "./cranes.css";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

const Page = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isNavbarVisible, setNavbarVisible] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleNavbar = () => {
    setNavbarVisible((prev) => !prev);
  };

  const closeNavbar = () => {
    setNavbarVisible(false);
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
        x: -118,
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
        x: 25,
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
          <h1>Cranes System</h1>
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
          <h1 id="frame">Cranes System</h1>
          <p>
            When Crane System is required, DSM supply includes Columns, RaŌ ers,
            Brackets, Crane runway beams & lateral Ɵe that support crane system.
            Clients have to provide complete crane data as per the crane's
            manufacturer for opƟ mal designing of PEB having crane systems.
          </p>
        </div>
      </section>

      <section className="topic-images">
        <h1>
          The most common types of Crane System available for Pre- Engineered
          Steel Buildings are:
        </h1>
        <div className="row-one">
          <div className="row-left">
            <h2>1. Top Running Crane Along Building length:</h2>
          </div>
          <div className="row-right">
            <div
              className="img-box"
              onClick={() => {
                openImagePopup("/cranes-one.png");
              }}
            >
              <span>
                <h3> Top Running Crane Along Building length</h3>
              </span>
              <span>
                <Image
                  id="frame-img-one"
                  className="frame-imgs"
                  src="/cranes-one.png"
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
            <h2>2. Underhung Crane:</h2>
          </div>
          <div className="row-right">
            <div
              className="img-box"
              onClick={() => {
                openImagePopup("/cranes-two.png");
              }}
            >
              <span>
                <h3>Underhung Crane</h3>
              </span>
              <span>
                <Image
                  id="frame-img-one"
                  className="frame-imgs"
                  src="/flashing-two.png"
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

        <div className="row-one">
          <div className="row-left">
            <h2>3. Jib Crane and Monorail Crane:</h2>
          </div>
          <div className="row-right">
            <div
              className="img-box"
              onClick={() => {
                openImagePopup("/cranes-one.png");
              }}
            >
              <span>
                <h3> Jib Crane and Monorail Crane</h3>
              </span>
              <span>
                <Image
                  id="frame-img-one"
                  className="frame-imgs"
                  src="/cranes-one.png"
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
                    fillRule="currentColor"
                    class="bi bi-telephone-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule-rule="evenodd"
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
                    class="bi bi-envelope-fill"
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
                    class="bi bi-geo-alt-fill"
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
