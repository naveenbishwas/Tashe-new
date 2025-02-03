"use client";

import React from "react";
import "./roofing.css";
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
          <h1>Types of Roofing & Cladding</h1>
          <p></p>
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
          class="st0"
          d="M953.2,64.3L902.5,3.5C900.7,1.3,897.9,0,895,0h-64.3H124.2H59.9c-2.9,0-5.7,1.3-7.5,3.5L1.7,64.3
	C-3.6,70.7,1,80.4,9.3,80.4h115h706.4h115C953.9,80.4,958.5,70.7,953.2,64.3z"
        />
      </svg>

      <section className="topic-headng">
        <div className="blue-border">
          <h1 id="frame">Roofing & Cladding</h1>
        </div>
      </section>

      <section className="topic-images">
        <div className="row-one">
          <div className="row-left">
            <h2>1. Roof Sheet:</h2>
            <p>
              Roofing and cladding it is the most popular profile worldwide. It
              has been uniquely designed to withstand adverse atmospheric condiƟ
              ons and heavy to torrenƟ al rain. Its excellent load bearing
              design allows bigger purlin spacing. It can be supplied in lengths
              up to 12 mtr to minimize the number of overlaps. It comes in mulƟ
              ple colors and for bulk requirement we can also make customized
              colors.
            </p>

            <p>
              It has our exclusive valley discharge feature and anƟ -capillary
              groove. The valley discharge feature enables the water to flow
              faster downwards. And the anƟ -capillary groove ensures that water
              does not seep in through the side laps. It can be made from
              different raw materials like Bare Galvalume, Color Coated
              Galvalume, Stainless Steel, Aluminum etc.
            </p>

            <div className="profit-adv">
              <span className="profit">
                <h3>Profile Details</h3>
                <p>Overall Width: 1090 mm</p>
                <p>EffecƟ ve Width: 1015 mm</p>
                <p>Crest Height: 28.5 mm</p>
                <p>Pitch Distance (Center to Center): 203 mm</p>
              </span>
              <span className="advantages">
                <h3>Advantage</h3>
                <li>Light Weight</li>
                <li>High Strength 550mpa</li>
                <li>Weather Resistance</li>
                <li>Customized Length</li>
                <li>Easy to install</li>
                <li>Long Lasting</li>
                <li>Al-Zn Coating</li>
              </span>
            </div>
          </div>
          <div className="row-right">
            <div
              className="img-box"
              onClick={() => {
                openImagePopup("/roof-img-one.png");
              }}
            >
              <span>
                <h3> Roof Sheet</h3>
              </span>
              <span>
                <Image
                  id="room-img-one"
                  className="frame-imgs"
                  src="/roof-img-one.png"
                  alt=""
                  width={0}
                  height={0}
                  unoptimized
                  priority
                ></Image>
              </span>
            </div>
            <div
              className="img-box"
              onClick={() => {
                openImagePopup("/roof-img-two.png");
              }}
            >
              <span>
                <h3> Roof Sheet</h3>
              </span>
              <span>
                <Image
                  id="roof-img-two"
                  className="frame-imgs"
                  src="/roof-img-two.png"
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
            <h2>2. Tile Sheets:</h2>
            <p>
              Tile is aestheƟ cally the number one choice of our customer; it
              resembles the shape of clay Ɵ les used in residenƟ al structure.
              It is preferred by individual house builders and architects to
              give their houses a more rusƟ c and homely look. It comes in mulƟ
              ple color & thickness. The lengths can be customized as well. It
              has been provided with two sƟ ffening ribs in between two crests
              to further enhance the strength of the sheet. It also comes with
              our state-of-the-art anƟ capillary groove, which prevents water
              seepage from side laps
            </p>

            <p>
              It is coated with galvalume, which is an alloy of aluminum and
              zinc. The Aluminum provides the membrane protecƟ on and zinc
              provides the sacrificial protecƟ on. Apart from this it is paint
              and primer coated which again acts as a barrier and also enhances
              the look and life of the roofing sheet.
            </p>

            <div className="profit-adv">
              <span className="profit">
                <h3>Profit Details</h3>
                <p>Overall Width: 1090 mm</p>
                <p>Effective Width: 1015 mm</p>
                <p>Crest Height: 28.5 mm</p>
                <p>Pitch Distance (Center to Center): 203 mm</p>
              </span>
              <span className="advantages">
                <h3>Advantage</h3>
                <li>Light Weight</li>
                <li>Weather Resistant</li>
                <li>Customized Length</li>
                <li>Easy To Install</li>
                <li>Long Lasting</li>
                <li>Al-Zn Coating</li>
                <li>Guard Film Protection</li>
              </span>
            </div>
          </div>
          <div className="row-right">
            <div
              className="img-box"
              onClick={() => {
                openImagePopup("/roof-img-three.png");
              }}
            >
              <span>
                <h3>Tile Sheets</h3>
              </span>
              <span>
                <Image
                  id="frame-img-one"
                  className="frame-imgs"
                  src="/roof-img-three.png"
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
            <h2>3. Color Aluminum Roofing</h2>
            <p>
              Aluminum Roofing sheets are made from aluminum of the highest
              tensile strength available in the industry. It is used mostly in
              industry with high level of polluƟ on or those whose products or
              byproducts are corrosive in nature. Though they are expensive in
              comparison to galvalume sheet, but its lifecycle cost makes it
              economical over Ɵme.
            </p>
          </div>
          <div className="row-right">
            <div
              className="img-box"
              onClick={() => {
                openImagePopup("/roof-img-four.png");
              }}
            >
              <span>
                <h3>Color Aluminum Roofing</h3>
              </span>
              <span>
                <Image
                  id="frame-img-one"
                  className="frame-imgs"
                  src="/roof-img-four.png"
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
            <h2>4. Standing Seam Roofing:</h2>
            <p>
              Standing seam roofing is the latest roofing technology introduced
              by us. It is the screw less or hole free system where clips, which
              are screwed to the purlin, do the holding down. These clips are
              then seamed along with the roofing sheet. This interlocking seam
              of our profile in the side laps increases the life of the roof
              sheet as there is no external protrusion in the original factory
              finish of the coated roofing sheet. As the roofing machine goes to
              the site there is no limit to the length of sheet that can be
              made. This profile gives you a leak proof roof.
            </p>

            <p>
              The seaming technology is the most used roofing technology across
              the world. Even low sloped structures can be covered with this
              profile without any risk of water seepages. It can withstand
              adverse weather condiƟ ons and heavy to torrenƟ al rainfall. It
              can also be used with double skin insulaƟ on system. With our
              expert team of trained roofing contractors, and site engineers,
              clients can experience best quality roofing.
            </p>

            <div className="profit-adv">
              <span className="profit">
                <h3>Profit Details</h3>
                <p>
                  It has got a high crest of 70 mm and effecƟ ve covered width
                  of 475 mm. We have provided three sƟ ffening ribs in its
                  valley, which further enhances the strength of the sheet. The
                  seaming is done by powered automaƟ c seaming machine. We have
                  the opƟ on to do 180 or a 360-degree seaming.
                </p>
              </span>
              <span className="advantages">
                <h3>Advantage</h3>
                <li>
                  <b>Light Weight</b>
                  –In this Roofing System we provide a Leak Proof Assurance
                </li>
                <li>
                  <b>Large Spanning</b>– As the Roof are formed on site we can
                  provide single length sheet to cover the full roof
                </li>
                <li>
                  <b>Low Slope</b>– No Problem –The 70 mm high crest and
                  concealed screw fix system ensures that even low slope roof
                  remains leak proof
                </li>
                <li>
                  <b>High Strength</b>– Our roof panels are provided with 3
                  stiffening ribs and 70 mm high crest which provide high
                  strength
                </li>
                <li>
                  <b>Onsite Profiling</b>– Our machines are mobile and the roll
                  forming is done on site to provide a single panel from roof to
                  gutter or eave
                </li>
                <li>
                  <b>No Maintenance Cost</b>– As it is leak proof it requires no
                  practical maintenance except for cleaning in case of very
                  dusty environment
                </li>
                <li>
                  <b>Aesthetically</b> – It large spans and screw less looks
                  makes it look beautiful.
                </li>
              </span>
            </div>
          </div>
          <div className="row-right">
            <div
              className="img-box"
              onClick={() => {
                openImagePopup("/roof-img-five.png");
              }}
            >
              <span>
                <h3>Standing Seam Roofing</h3>
              </span>
              <span>
                <Image
                  id="roof-img-one"
                  className="frame-imgs"
                  src="/roof-img-five.png"
                  alt=""
                  width={0}
                  height={0}
                  unoptimized
                  priority
                ></Image>
              </span>
            </div>
            <div
              className="img-box"
              id="new-box"
              onClick={() => {
                openImagePopup("/roof-img-six.png");
              }}
            >
              <span>
                <h3>Standing Seam Roofing</h3>
              </span>
              <span>
                <Image
                  id="room-img-one"
                  className="frame-imgs"
                  src="/roof-img-six.png"
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
                    class="bi bi-telephone-fill"
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
