"use client";

import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./page.css";

export default function Home() {
  const textRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isNavbarVisible, setNavbarVisible] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleNavbar = () => {
    setNavbarVisible((prev) => !prev);
  };

  const closeNavbar = () => {
    setNavbarVisible(false);
  };
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 1000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const splitText = new SplitType(textRef.current, {
      type: "chars",
    });

    gsap.from(splitText.chars, {
      opacity: 0,
      yPercent: 130,
      duration: 1.2,
      ease: "ease",
    });

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".section-one-top-left", {
      x: 40,
      duration: 1,
      ease: "circ",
      scrollTrigger: {
        trigger: ".section-one-top-left",
        start: "top 60%",
        end: "top 40%",
      },
    });

    gsap.to(".section-one-top-right", {
      x: -70,
      duration: 1,
      ease: "circ",
      scrollTrigger: {
        trigger: ".section-one-top-left",
        start: "top 60%",
        end: "top 40%",
      },
    });

    gsap.to("#section-top-bottom-one", {
      x: 60,
      duration: 1,
      ease: "circ",
      scrollTrigger: {
        trigger: "#section-top-bottom-one",
        start: "top 60%",
        end: "top 40%",
      },
    });

    gsap.to("#section-top-bottom-two", {
      x: -50,
      duration: 1,
      ease: "circ",
      scrollTrigger: {
        trigger: "#section-top-bottom-two",
        start: "top 60%",
        end: "top 40%",
      },
    });

    gsap.to(".vision", {
      x: -110,
      duration: 1,
      ease: "circ",
      scrollTrigger: {
        trigger: ".vision",
        start: "top 80%",
        end: "top 40%",
      },
    });

    gsap.to(".mission", {
      x: 120,
      duration: 1,
      ease: "circ",
      scrollTrigger: {
        trigger: ".vision",
        start: "top 80%",
        end: "top 40%",
      },
    });

    if (window.innerWidth <= 768) {
      gsap.to(".section-one-top-left", {
        x: 10,
        duration: 1,
        ease: "circ",
        scrollTrigger: {
          trigger: ".section-one-top-left",
          start: "top 60%",
          end: "top 40%",
        },
      });

      gsap.to(".section-one-top-right", {
        x: -20,
        duration: 1,
        ease: "circ",
        scrollTrigger: {
          trigger: ".section-one-top-left",
          start: "top 60%",
          end: "top 40%",
        },
      });

      gsap.to("#section-top-bottom-one", {
        x: 25,
        duration: 1,
        ease: "circ",
        scrollTrigger: {
          trigger: "#section-top-bottom-one",
          start: "top 60%",
          end: "top 40%",
        },
      });

      gsap.to("#section-top-bottom-two", {
        x: -47,
        duration: 1,
        ease: "circ",
        scrollTrigger: {
          trigger: "#section-top-bottom-two",
          start: "top 60%",
          end: "top 40%",
        },
      });

      gsap.to(".vision", {
        x: -40,
        duration: 1,
        ease: "circ",
        scrollTrigger: {
          trigger: ".vision",
          start: "top 80%",
          end: "top 40%",
        },
      });

      gsap.to(".mission", {
        x: 20,
        duration: 1,
        ease: "circ",
        scrollTrigger: {
          trigger: ".vision",
          start: "top 80%",
          end: "top 40%",
        },
      });
    }
  }, []);

  return (
    <main className="main-container">
      <div className="back-image" id="homepage">
        <div className="background-img">
          <Image
            src={"/Picture7.png"}
            alt="Picture of the background"
            width={0}
            height={0}
            unoptimized
            priority
          />
        </div>
        <div className="background-color"></div>
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
                priority
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
                onClick={() => setDropdownVisible(!isDropdownVisible)}
              >
                <Link id="product-p" href="#">
                  <span id="product-anchor-df">
                    Product
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className={`bi bi-caret-down-fill transition-all duration-300 ${
                        isDropdownVisible
                          ? "rotate-180 text-orangered"
                          : "text-black"
                      }`}
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
              <li id="about-us">
                <Link href="/about-us">About us</Link>
              </li>
              <li id="career">
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
        <div className="header-text">
          <h1 ref={textRef}>
            DEVKINANDAN STEEL & METAL <br /> INDUSTRIES LLP
          </h1>
          <p>
            we are pioneers in the steel and metal industry, committed to
            delivering top-quality products and unmatched service. With years of
            expertise and a reputation for excellence, we are your trusted
            partner for all <span id="orange">steel</span> and{" "}
            <span id="orange">metals</span> needs
          </p>
          <Link href="/about-us">
            <button>Know More</button>
          </Link>
        </div>
      </header>

      <div className="section-one">
        <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 956 80.7">
          <path
            className="st0"
            d="M953.2,64.3L902.5,3.5C900.7,1.3,897.9,0,895,0h-64.3H124.2H59.9c-2.9,0-5.7,1.3-7.5,3.5L1.7,64.3
	C-3.6,70.7,1,80.4,9.3,80.4h115h706.4h115C953.9,80.4,958.5,70.7,953.2,64.3z"
          />
        </svg>
        <div className="section-one-df">
          <div className="section-one-top">
            <div className="section-one-top-left">
              <h1>BUILD TOMORROW'S DREAMS TODAY</h1>
            </div>
            <div className="section-one-top-right">
              <p>
                At DEVKINANDAN STEEL & METAL INDUSTRIES LLP, we believe in
                shaping a future that’s stronger, more resilient, and built to
                last. With our premium steel and metal solutions, you’re not
                just constructing projects—you’re building dreams that stand the
                test of time.
              </p>
              <Link href="/infrastructure">
                <button>Why we are different</button>
              </Link>
            </div>
          </div>
          <div className="section-top-bottom">
            <Image
              id="section-top-bottom-one"
              src={"/Factory-image2.jpeg"}
              alt="About-us Image"
              width={0}
              height={0}
              unoptimized
            />
            <Image
              id="section-top-bottom-two"
              src={"/Factory-image6.jpeg"}
              alt="About-us Image"
              width={0}
              height={0}
              unoptimized
            />
          </div>
        </div>
      </div>
      <svg version="1.1" id="Layer_2" x="0px" y="0px" viewBox="0 0 956 80.7">
        <path
          className="st0"
          d="M953.2,64.3L902.5,3.5C900.7,1.3,897.9,0,895,0h-64.3H124.2H59.9c-2.9,0-5.7,1.3-7.5,3.5L1.7,64.3
	C-3.6,70.7,1,80.4,9.3,80.4h115h706.4h115C953.9,80.4,958.5,70.7,953.2,64.3z"
        />
      </svg>
      <div className="section-two">
        <div className="builder-img">
          <svg id="builder" version="1.1" viewBox="0 0 367 704">
            <g>
              <g>
                <path
                  d="M363,105c0,2.7,0,5.3,0,8c-3.2,0-6.3,0-9.5-0.1c-1.9-0.1-2.6,0.7-2.6,2.6c0,12.3,0,24.6,0,36.9c0,0.9,0,2.7,1,2.3
			c3.6-1.6,7.7,0.6,11-1.7c0,2.7,0,5.3,0,8c-0.7,0-1.4-0.2-2,0c-17.1,3.1-34.3,4.8-51.7,3.9c-4.5-0.2-5.5,1.1-5.5,5.5
			c0.1,95.9,0.1,191.9,0.1,287.8c0,82.3,0.1,164.6,0.1,246.9c-101,0-202,0-303,0C1,471.8,1,238.7,0.9,5.5c0-3.7,0.8-4.6,4.6-4.6
			C105,1,204.5,1,304,1c0,33.6,0,67.1-0.2,100.7c0,3.5,0.8,4.6,4.4,4.4c9.9-0.5,19.6-2.3,29.5-2.1C346.2,104.2,354.5,105.8,363,105z
			 M298.3,344.3c0-58.1-0.1-116.3,0.1-174.4c0-4.3-1.1-5.9-5.4-5.8c-9.7,0.2-19.3,0-29-0.2c-3.2-0.1-3.1,1.1-2.3,3.6
			c1.9,6.2,3.5,12.5,5.4,18.7c0.7,2.1,0.1,3.6-0.7,5.6c-2.1,5.1-6.4,5.4-10.9,6.2c-7.8,1.3-16.3-0.4-22.9,5.8
			c-1.2,1.1-3.2,1.4-4.8,0.8c-2.3-0.9-4.1-0.3-6.2,0.5c-2.9,1.1-5.5,1.1-8.6-0.5c-3.5-1.9-7.6-0.3-11.1,0.7c-2.1,0.6-1.6,4-2,6.3
			c-1.2,7.2-2.5,14.4-3.5,21.7c-1.4,9.9-4.9,19.7-4.2,29.6c1.8,24.6,4.8,49,7.2,73.5c1.3,13.2,3.8,26.5,3.5,39.8
			c-0.6,27.4-2.4,54.8-4.3,82.2c-0.5,7.2,0.6,14.7-2.4,21.7c-0.8,2,1.1,3.4,3.1,3.6c1.8,0.2,3.7,0,5.5-0.3c7-0.8,11.7,2.1,13.3,8.8
			c0.7,2.8,2.2,4,4.8,5c23.4,8.2,46.7,16.4,70,24.9c4,1.4,4.9,1,4.9-3.4c0-31,0.2-61.9,0.3-92.9
			C298.3,398.6,298.3,371.5,298.3,344.3z M6.9,418.4c0.1,0,0.2,0,0.2,0c0,33.6,0,67.3,0,100.9c0,2.7-0.5,5.6,4.1,4.2
			c32-10,64.1-20,96.1-29.9c2.3-0.7,2.9-2.1,3.8-4.3c2-4.7,0.7-9.1,0.8-13.6c0.2-10,1.2-19.9,1.8-29.9c2.7-40.5,4.1-81.1,5.2-121.7
			c0.1-2.8-7-7.7-8.3-5.7c-3.3,4.6-7.1,2-10.2,1.2c-4.6-1.2-9.9-2.7-12.2-7.5c-0.9-1.9-1.8-2.8-3.5-3.4
			c-11.3-3.9-22.5-8.1-33.9-11.8c-3.8-1.3-5.8-3-4.4-7.2c1.3-4,3.7-4.8,7.7-3.4c11.2,3.6,22.6,6.8,33.9,10.3c2.4,0.7,3.1,0.6,3-2.3
			c-0.5-8.1-0.7-16.2-0.8-24.4c-0.1-14.6-2.7-29.2-0.5-43.8c0.1-0.9,0.1-1.7-0.8-2.1c-6.3-3-6.8-7.9-4.3-13.7
			c0.6-1.3,0.5-2.9,0.6-4.4c0.2-2.6,0.8-5,3.2-6.4c1.1-0.6,1.5-1.5,1.9-2.7c3.8-10.2,9.3-19.8,11.3-30.7c0.7-3.7,0.5-4-2.8-4
			c-17,0-34,0.1-51-0.4c-4.9-0.1-6.9,1.7-7.8,6c-6.1,26.7-0.7,50.4,18.4,70.4c2.4,2.5,3.1,4.1,0.9,7c-1.9,2.6-2.8,5.9-1.9,8.9
			c0.8,2.9-0.8,3.5-2.7,4.3C35.3,266,29,286.4,40.7,303.7c1.4,2,1.7,3.3-0.6,4.8c-3.1,2-5.7,4.7-7.2,8.1c-1.3,2.7-2.7,2.7-5.1,1.6
			c-5-2.3-10.2-3.8-15.7-4.6c-4-0.6-5.3,0.5-5.3,4.9C7,351.7,6.9,385,6.9,418.4z M213.8,115.2c-2-3.9-1.4-6,3-5.9
			c1,0,1.8-0.5,2.6-1.2c4.7-4.8,13.7-5.2,19.1-1.4c3,2.1,5.2,5.8,9.7,5.4c15.6-1.5,31.1-2.9,46.7-4.3c2.4-0.2,3.5-1.2,3.4-3.8
			c-0.2-5.5-0.1-11,0-16.5c0-2.8-1.2-3.6-3.9-3.9c-14.2-1.7-27.4,1-39.4,8.7c-2,1.3-3.3,1.5-4.9-0.7c-6.4-8.5-15.1-12.2-25.6-11.8
			c-2.7,0.1-3.6-0.7-4.3-3.4c-6.6-25.9-30.9-46.1-61.1-42.9c-21.5,2.2-36.9,13.4-46,32.5c-3.1,6.6-5.4,11.8-13.9,9.7
			c-0.6-0.1-1.3,0.2-1.9,0.4c-20.3,5-29.5,24.1-20.5,43.3c0.9,2,0.7,2.7-1.1,3.8c-2.4,1.5-5.5,2.1-6.9,5.2c0.6,0.2,0.9,0.4,1.2,0.3
			c20.9-1.9,41.8-3.7,62.7-5.7c1-0.1,3.5,0.4,2.9-1.5c-0.6-2.1,0.9-5.5-1.9-6c-3.2-0.6-2.4-1.9-2-4c0.4-2.4,1.8-4.2,2.7-6.3
			c4.9-11.5,13.1-18.1,26.3-17.3c5,0.3,11-1.5,14.7,0.7c4,2.4,4.2,9,5.7,13.9c1.1,3.3,2.8,5.4,6,6.7c2.9,1.2,6,2.4,9.4,5.2
			c-5.2,0.2-9.3,0.4-13.4,0.6c-1.2,0.1-3-0.4-3,1.6c-0.1,2.6,2,1.8,3.3,1.7C193.2,117.1,203.3,116.2,213.8,115.2z M161.6,553.2
			C161.6,553.2,161.6,553.2,161.6,553.2c-0.1-11.3-0.3-22.6,0-33.9c0.1-4.1-0.8-4.8-4.7-3.7c-17.5,4.9-35,9.5-52.5,14.2
			c-31.2,8.4-62.3,16.8-93.5,25c-3.2,0.8-4.2,2.2-4.1,5.4c0.2,7.7,0.1,15.3,0.1,23c0,9.4,0,9.3,9.6,8.7c2.4-0.1,3.2-0.9,3.1-3.3
			c-0.1-4.6,0-9.3-0.1-13.9c-0.1-2.3,0.5-3.5,3.1-4c15.6-3.4,31.2-6.9,46.7-10.5c2.8-0.6,3.1,0.6,3,2.8c-0.1,2.7-2.2,2.6-3.9,3
			c-9.1,2-18.2,4-27.3,6c-12.4,2.7-12.2,2.7-12.1,15.4c0,3.6,1.5,4.1,4.4,4.1c17.3,0.1,34.6,0.1,51.9,0.5c4.1,0.1,5-1.4,4.9-5.1
			c-0.2-9,0.1-18-0.2-27c-0.1-3.6,0.9-5.2,4.6-5.9c14.7-3,29.2-6.5,43.9-9.6c1.4-0.3,4-2.5,4.7,1.2c0.5,2.9-1.3,3.5-3.7,4
			c-11.9,2.5-23.7,5.3-35.6,7.8c-2.9,0.6-4.1,1.8-4,4.9c0.2,8.3,0.2,16.6,0,25c-0.1,3.3,1,4.4,4.2,4.4c17.8,0,35.6,0.1,53.4,0.4
			c3.2,0,3.9-1.1,3.9-4C161.5,576.4,161.6,564.8,161.6,553.2z M260.9,155.5c0-0.2,0-0.4,0-0.6c26.6,0,53.3-0.1,79.9,0.1
			c4.5,0,5.2-1.5,5.1-5.4c-0.2-10.3-0.4-20.6,0-31c0.2-4.8-1.4-5.9-5.9-5.5c-30.3,2.6-60.7,5.2-91,7.5c-9.1,0.7-18.2,3.2-27.2,3.1
			c-10.7-0.1-21.2,1.5-31.8,1.8c-2.2,0.1-5.7-0.3-3.1,3.9c0.5,0.8,0.2,1.9-0.7,2.1c-6,1.2-4.5,5.8-4.1,9.4c0.6,5.1-0.9,7.1-6.1,6.1
			c-2.4-0.4-3.4,0.2-2.2,3c1.6,3.7,3.6,5.6,8.1,5.5C208.3,155.3,234.6,155.5,260.9,155.5z M161.6,495c0-2,0-4,0-6
			c0-5.8,0-5.8-5.6-4.1c-46,14.3-92,28.6-138,42.9C6.8,531.3,6.9,531.3,6.9,543c0,3.8,0.8,4.3,4.5,3.3c46.6-12.7,93.3-25.2,140-37.7
			C161.7,505.8,161.7,505.8,161.6,495z M166.9,423.2c-0.6-17.4,1.4-38.2-2-58.9c-1.4-8.4-2.1-16.8-3.1-25.2
			c-0.2-1.6-0.7-3.2-2.3-3.5c-2-0.4-1.9,1.6-2.1,2.7c-2.4,17.8-5.2,35.5-7.1,53.3c-3,29.1-5.4,58.2-8.3,87.3
			c-0.4,3.6,0.6,3.7,3.3,2.8c5.7-1.8,11.3-4.3,17.2-5c4.2-0.5,4.5-1.9,4.4-5.3C166.8,456.5,166.9,441.5,166.9,423.2z M79.3,155.8
			C79.3,155.8,79.3,155.8,79.3,155.8c7.7,0.1,15.3,0.1,23,0.1c9,0,18,0.5,26.8-1.7c5-1.3,10.4-2,12.3-8.3c0.6-2,0.8-2.4-1.2-3.1
			c-4.5-1.6-6-5.4-5-9.6c0.8-3.2-0.7-2.9-2.6-3c-1.3,0-2.7,0-4,0.1c-27.8,2.3-55.7,4.6-83.5,6.9c-8.3,0.7-8.3,0.5-8.1,8.5
			c0.1,2,0.2,4,0,6c-0.3,3.4,1.1,4.2,4.3,4.1C54,155.7,66.7,155.8,79.3,155.8z M120.9,224.7c-3.3,4.6-3.6,10-8.1,12.8
			c-0.7,0.4-0.8,2.1-0.9,3.2c-1.6,15.3-3.4,30.7-4.6,46.1c-0.4,4.6-2.1,10.5,4.5,13.1c1.3,0.5,1,2,1.4,3c1,2.2,3.3,2.5,5.1,2.4
			c1.9-0.2,1.2-2.5,1.2-3.8c0.3-4.6,0.5-9.3,0.3-13.9c-0.3-10.4,0.8-20.5,4.5-30.3c0.5-1.2,0.9-2.6,0.7-3.9
			C123.8,244.2,122.4,234.9,120.9,224.7z M103,221.4c-0.7-1.3-1.4-2.5-1.9-3.8c-0.6-1.7-0.8-3.2,1.5-3.9c1.3-0.4,3.5,0.2,3.4-2
			c0-1.6-1.9-2.1-3.3-2.7c-1-0.5-2.1-0.9-3.2-1.5c-1.3-0.7-2.9-1.5-2.7-3.2c0.3-2.3,2.4-1,3.6-1.4c1.6-0.4,4.3,0.9,4.3-1.9
			c0-6.4,2.7-12.1,3.6-18.2c1.4-9.5,6.7-15.2,15.6-18.1c3.8-1.2,7.5-2.6,11.3-4c2.5-0.9,5.2-1.1,7.2-3.3c-1.8-1.3-3.7-3.1-5.8-2.3
			c-8.6,3.3-17.9,3.6-26.6,6.4c-3.9,1.3-6.4,3.6-7.2,7.5c-2.5,12.4-6.9,24-14.6,34.2c-0.5,0.6-0.5,1.6-0.6,2.4
			c-0.4,3-0.7,5.9-1.7,8.7c-1.2,3.3,0.7,5.3,4.1,4.7C94.8,218.3,99.1,218.2,103,221.4z M122.3,625.8c2,7.3,3.8,13.5,5.4,19.8
			c0.6,2.3,1.4,3.4,3.9,3.5c2.7,0.1,3.3-1.5,3.9-3.5c1.9-6.2,3.9-12.4,6.2-19.9c0.4,7.5,0.9,13.6,1,19.8c0,3,0.9,3.9,3.9,4
			c3.8,0.1,3.5-2,3.4-4.4c-0.4-7.8-0.8-15.6-1.4-23.4c-0.1-1.8,1-4.9-2.6-4.8c-3.3,0.1-7.5-1.9-8.8,3.7c-1.3,5.5-3.2,10.8-5.1,17.4
			c-1.9-7-3.4-12.8-5.1-18.5c-1.5-4.9-5.6-2.2-8.5-2.6c-2.8-0.4-2.4,2.1-2.5,3.9c-0.5,8.3-1,16.6-1.6,24.9c-0.2,2.3-0.1,3.8,2.9,3.7
			c2.5-0.1,4.1-0.2,4.1-3.4C121.4,639.6,121.9,633.4,122.3,625.8z M191.9,637.8c-1.9-6.8-3.5-12.4-5.1-18.1c-1.4-5-5.4-2.5-8.3-2.9
			c-3.3-0.5-2.6,2.3-2.7,4.1c-0.6,8.1-1.2,16.3-1.7,24.4c-0.1,1.9-0.7,4.1,2.7,4c2.7-0.1,4.4-0.2,4.4-3.7c0-6.1,0.6-12.1,0.9-18.2
			c2.1,5.9,3.7,11.9,5.3,17.8c0.5,1.9,0.8,3.7,3.7,3.8c2.9,0.1,3.6-1.5,4.3-3.8c1.8-6.1,3.8-12.1,5.7-18.2c0.5,0.1,0.9,0.1,1.4,0.2
			c0,6.3,0.2,12.6-0.1,19c-0.1,3.7,2.2,2.9,4.3,3.1c2.7,0.3,3.3-0.9,3.1-3.5c-0.6-8.1-0.9-16.3-1.5-24.4c-0.1-1.9,1-4.9-2.7-4.6
			c-3.1,0.2-7.1-1.8-8.5,3.5C195.7,625.8,193.8,631.3,191.9,637.8z M7.5,553.8c0.8-0.2,1.5-0.4,2.3-0.6
			c26.8-7.2,53.6-14.4,80.4-21.6c22.6-6.1,45.3-12.2,67.9-18.3c2.1-0.6,4.1-1,3.4-3.8c-0.9-3.4-3.1-0.9-4.3-0.6
			c-10,2.5-19.9,5.2-29.9,7.9c-38.7,10.4-77.4,20.8-116,31.2C8.4,549,5.5,549.6,7.5,553.8z M113.2,306.2c-2.6,0.3-3.1,2.6-3.7,4.6
			c-0.8,2.8,0.1,4.6,3.1,5.7c16,5.5,32,11.1,47.9,16.9c4,1.5,7.1,2.6,6.7-3.6c-0.1-1,0.7-2.3,1.4-3.1c2.1-2.3,1.6-3.4-1.3-4.2
			c-17.4-5.1-34.7-10.4-52-15.6C114.6,306.6,114,306.4,113.2,306.2z M146.1,109.1c2-1.5,4.8-2.1,5.3-0.3c1.7,6.6,6.5,3.2,10.1,3.6
			c2.4,0.3,3.5-1.4,3.3-3.8c-0.3-4.3-1-8.6-2.3-12.7c-1.8-5.7-4.3-6.9-10.2-5.4c-7.9,2-16.6,11.9-17.8,20c-0.2,1.7,0.5,2.1,1.9,2.1
			c4,0,8,0,12,0c0.6,0,1.4,0.2,1.6-0.7c0.2-0.9-0.3-1.6-1.1-2C147.9,109.7,147,109.4,146.1,109.1z M89.1,628.9c0.1,0,0.1,0,0.2,0
			c0-2.8-0.1-5.7,0-8.5c0.2-2.7-0.7-3.8-3.6-3.8c-3.2-0.1-4,1.2-3.9,4.1c0.2,5.3,0.2,10.6,0,15.9c-0.1,3.7-1.3,7.2-5.8,7.2
			c-4.3,0-5.1-3.6-5.7-6.9c-0.2-1.5-0.1-3-0.1-4.5c0-4.3-0.1-8.6,0-13c0.1-2.8-1.6-2.9-3.6-2.7c-1.7,0.1-3.8-0.6-3.8,2.5
			c0.1,6.5-0.3,13,0.3,19.4c0.7,7.6,5.8,11.6,13.2,11.3c7.4-0.3,12-4.6,12.7-12C89.3,634.9,89.1,631.9,89.1,628.9z M30.2,616.1
			c-7.3,0.1-11.9,3.1-13,7.8c-1.3,5,1.6,8.9,8.3,11.9c2.4,1.1,6.5,1.4,5.3,5.2c-1.2,3.9-5,2.9-8.1,2.3c-0.5-0.1-1-0.1-1.5-0.3
			c-1.9-0.8-3.3-1.2-4,1.6c-0.5,2.3-0.4,3.9,2.2,4.5c3.1,0.7,6.2,1.3,9.4,0.7c5.8-1.2,9-4,9.5-8.7c0.6-4.9-1.6-7.8-7.1-10.7
			c-2.5-1.3-7.6-1.2-6.5-5.3c1.1-4,5.4-2.8,8.6-1.9c2.5,0.7,2.7-1,3.3-2.5c0.7-2,0.2-3.2-2-3.6C32.9,616.7,31.1,616.2,30.2,616.1z
			 M199.2,159.1c3.7,1.3,6.2,1.9,8.9,2c14.8,0.2,29.6,0.5,44.5,0.7c22.8,0.3,45.6-0.2,68.4,0.8c2.7,0.1,5.3,0,8-0.1
			c1.2-0.1,3,0.2,2.9-1.8c-0.1-2-1.9-1.3-3.2-1.5c-0.8-0.1-1.7,0-2.5,0c-21.5,0-43,0-64.5,0C241.3,159.1,220.8,159.1,199.2,159.1z
			 M273.9,635.8C273.9,635.8,273.9,635.8,273.9,635.8c0,3.5,0.2,7,0,10.5c-0.2,3.1,1.6,3,3.7,3.1c2.3,0.1,3.7-0.4,3.7-3.2
			c-0.2-5.5,0.2-11-0.1-16.5c-0.3-4.8,0.5-7.8,6.2-6.7c2.3,0.4,2.7-1.2,2.7-3.1c0-1.9-0.3-3.2-2.6-3.1c-6.7,0.1-13.3,0.1-20,0
			c-2,0-2.5,1-2.5,2.9c0.1,1.8,0.2,3.7,2.5,3.3c6.8-1.3,6.8,2.7,6.3,7.4C273.8,632.1,273.9,633.9,273.9,635.8z M95.1,223.8
			c-1.8-0.2-2.5,1.1-2.9,2.6c-0.9,3.4-1.4,6.8-1.2,10.4c0.4,8.6,0.8,17.3,1.2,25.9c0.3,7,0.7,13.9,1.3,20.9c0.1,1.1-0.3,3.4,2.2,3
			c2.1-0.3,2.7-1.7,2.4-3.6c-0.1-0.7-0.1-1.4-0.3-2c-3.8-8.3-2.5-17-1.3-25.5c1.1-8,1.8-16.1,4.9-23.7
			C102,230,97.1,223.9,95.1,223.8z M89.6,300.5c0.2-1.9-1.4-1.8-2.3-2c-11.4-3.5-22.8-6.9-34.2-10.4c-2.6-0.8-4.1-0.2-4.9,2.4
			c-0.8,2.6,0.5,3.5,2.7,4.3c10.5,3.6,21,7.3,31.5,11C87.9,307.7,89.9,306.2,89.6,300.5z M236.9,117.7c0.2,0,0.3,0,0.5,0
			c30.4-2.6,60.9-5.2,91.3-7.8c1.3-0.1,3.4,0.6,3-2c-0.4-2.5-2.3-1.2-3.5-1.1c-16.5,1.4-33.1,2.8-49.6,4.3
			c-13.7,1.3-27.4,2.6-41.1,4c-1.1,0.1-2.6-0.1-2.7,1.4C234.5,118.1,236,117.6,236.9,117.7z M162.3,152.5
			c-2.3-7.9-4.3-14.7-6.1-21.5c-0.5-2-1.4-2.1-3.2-1.6c-4.7,1.4-7.5,5.2-8.2,11.4c-0.5,3.9,0.3,6.5,4.8,7.5
			C153.5,149.2,157.3,150.9,162.3,152.5z M159.5,674.7c0.8,3.8,1.3,6.3,1.7,8.7c0.3,1.6,0.9,2.7,2.9,2.7c1.6-0.1,2.4-0.8,2.7-2.3
			c1.1-4.2,2.2-8.4,3.2-12.6c0.3-1,0.8-2.5-1-2.7c-1.4-0.2-2.6,0.3-2.9,2c-0.5,2.6-1,5.2-1.6,8.2c-1.8-2.7-1.4-5.4-2.1-7.7
			c-0.5-1.7-1-2.6-2.9-2.5c-1.8,0.1-2.2,1-2.5,2.4c-0.4,2.4-1,4.7-1.5,7c-1.5-2.5-2-5-2.5-7.5c-0.3-1.8-1.5-2.1-2.9-1.9
			c-1.7,0.3-1.4,1.6-1.1,2.7c1,4.2,2,8.4,2.9,12.6c0.3,1.6,1.2,2.1,2.8,2.2c2,0.1,2.5-1,2.9-2.6C158,681.1,158.6,678.7,159.5,674.7z
			 M234.7,632.7c0,4.5,0.1,9,0,13.4c-0.1,2.9,1.5,3.1,3.7,3.1c2.3,0,3.8-0.2,3.7-3.1c-0.1-8.8-0.1-17.6,0-26.4
			c0.1-2.9-1.5-3.1-3.7-3.1c-2.2,0-3.9,0.2-3.7,3.1C234.9,624.1,234.7,628.4,234.7,632.7z M91.1,307.8c0.4,1.7-1.3,4.4,2.1,5.1
			c2.6,0.5,5.2,0.7,7.8,1.2c3.2,0.5,4-1.1,4-4c0-1.9-0.5-3.9,0.5-5.9c1.8-3.4,0-6.6-3.7-6.9C94.8,296.8,91.3,300.2,91.1,307.8z
			 M144,148.4c-1.4-0.3-1.8,0.5-2.1,1.6c-0.3,1.3-1.8,2.8,0,4c5.3,3.7,10.7,7.3,16,11c1.7,1.2,2.5-0.2,3.1-1.3
			c1.5-2.6,4.5-4.4,4.5-7.8c0-0.2-0.5-0.4-0.8-0.5C157.8,153.1,150.9,150.8,144,148.4z M348.8,134C348.8,134,348.8,134,348.8,134
			c0-2.2,0-4.3,0-6.5c0-2.3,0-4.6,0-7c0.1-9.7,0.1-9.7,9.5-10.2c0.9-0.1,2.2,0.2,2.3-1.1c0.1-1.3-1-1.6-2-1.6
			c-7.3-0.4-14.6-0.8-21.9-1.3c-1.2-0.1-2,0.3-2,1.6c0,1.1,0.5,1.8,1.8,1.8c2.3,0,4.7,0.4,7,0.1c3.8-0.4,4.8,1.2,4.7,4.8
			c-0.2,10.8,0,21.6-0.1,32.4c0,9.7,0,9.7-9.3,11.4c-0.3,0.1-0.7,0.1-1,0.2c-1,0.4-2.7-0.1-2.6,1.6c0.1,2,1.8,1.5,3.1,1.4
			c5.1-0.6,10.2-1.1,15.3-2c2.3-0.4,6.8,0.4,6.5-2.3c-0.3-2.7-4.2-0.6-6.4-0.3c-3.9,0.5-5.3-0.6-5.1-4.7
			C349,146.3,348.8,140.2,348.8,134z M131.9,239.7c-5.8-4.2-3.9-11.4-7.2-17c-1,2.5-0.4,4.3-0.3,6.1c0.4,7.4,3.8,14.1,4.9,21.3
			c0.3,2.1,0.3,4,3.1,4.1c3,0.1,3.6-2,3.6-4.3c0.1-5,0.2-10,0.1-14.9c0-2.6-1-4.8-4.2-5.8C131.9,232.8,131.9,236.3,131.9,239.7z
			 M184.8,677.5c0.1,5.4,3.6,8.9,8.7,8.7c5-0.2,8.6-4.1,8.4-9.2c-0.1-4.9-3.9-8.9-8.4-8.9C188.5,668.1,184.7,672.2,184.8,677.5z
			 M217.4,677.3C217.4,677.3,217.4,677.3,217.4,677.3c0.1,2.3,0,4.6,0.1,6.9c0,1.6,1.1,1.8,2.4,1.8c1.3-0.1,1.8-0.6,1.7-1.9
			c-0.1-0.8,0.1-1.7,0.1-2.5c0.1-0.9-0.4-2.2,1-2.4c1.4-0.2,2.1,0.7,2.4,2c0.2,1,0.6,1.9,0.8,2.9c0.3,1.7,1.5,2.1,2.9,1.9
			c2.3-0.3,1.3-2,1-3c-0.6-3-2.6-5.7,0-8.9c1.2-1.6-0.3-3.9-2.3-4.9c-2.8-1.4-5.9-1.8-8.7-0.6c-2.7,1.2-1,4.2-1.4,6.3
			C217.3,675.7,217.4,676.5,217.4,677.3z M250.2,674.3c-0.1-1-0.2-1.8-0.3-2.5c-0.1-1.5,0.3-3.1-2-3.2c-2.8-0.1-2.2,2-2.2,3.4
			c-0.1,4,0,8,0,12c0,1.4,0.5,2.1,2.1,2.1c1.4,0,2-0.6,2.1-2.1c0.1-1.5-0.7-3.4,1.1-4.5c5.4,6.5,5.4,6.5,9.2,5.9
			c-4.5-5.3-8.4-10.7-0.7-16.3C253.6,666.8,253.3,672.4,250.2,674.3z M71,677.1c0,9.5,0,9.5,8.3,9c1.2-0.1,3.1,0.5,3.1-1.4
			c0.1-2.3-1.9-1.7-3.3-1.9c-1.5-0.2-3.7,0.8-3.8-1.9c-0.1-3.1,2.4-1.9,4-2.2c1.1-0.2,2.5,0.2,2.5-1.6c0.1-2-1.3-2-2.7-2
			c-0.7,0-1.3,0-2,0c-0.8-0.1-1.7-0.2-1.8-1.3c-0.2-1.4,0.7-1.7,1.8-1.7c0.8,0,1.7,0,2.5-0.1c1.2,0,2.4-0.1,2.3-1.8
			c-0.1-1.6-1.2-1.6-2.4-1.8c-8.1-1-8.5-0.6-8.5,7.7C71,676.4,71,676.7,71,677.1z M98.1,677c0,1.3,0.2,2.7,0,4
			c-0.8,4.3,1.2,5.7,5.2,5.2c0.8-0.1,1.7,0,2.5-0.1c1.4-0.2,3.5,0.8,3.7-1.3c0.2-2.7-2.2-1.8-3.7-2c-1.4-0.2-3.2,0.5-3.4-1.8
			c-0.2-2.7,1.9-2.1,3.4-2.3c1.2-0.1,3,0.4,3.1-1.6c0.2-2.4-1.7-1.9-3.1-2c-0.5,0-1,0-1.5-0.1c-0.8-0.1-1.7-0.2-1.8-1.3
			c-0.2-1.4,0.7-1.7,1.8-1.7c0.8,0,1.7-0.1,2.5-0.1c1.2,0,2.4-0.1,2.4-1.8c0-1.7-1.2-1.6-2.4-1.7c-8.1-1.1-8.6-0.7-8.6,7.5
			C98.1,676.3,98.1,676.6,98.1,677z M278.6,686.3c3.6-0.2,6.5-0.9,7.3-4.5c0.7-3.2-1.4-4.8-3.9-6.1c-1.2-0.6-3.5-0.7-3.3-2.4
			c0.3-2.4,2.5-1.4,4.1-1.3c1.1,0.1,2-0.1,2.2-1.4c0.2-0.7,0-1.2-0.6-1.7c-2.1-1.6-7.4-0.7-9.1,1.8c-2.2,3.3-0.8,5.5,2.1,7.4
			c1.6,1,4.8,1,4.2,3.4c-0.6,2.4-3.3,1.5-5.2,1c-1.4-0.4-1.8,0.5-2.1,1.5c-0.2,1,0.4,1.6,1.3,1.8
			C276.7,686.1,277.9,686.2,278.6,686.3z M19.9,682.8c-0.7,0.7-2.7-2.1-3.1,0.9c-0.3,2.6,1.9,2.3,3.4,2.4c3.3,0.2,6.6-0.2,7.7-4
			c1.1-3.7-1.4-5.4-4.4-6.7c-1.1-0.5-2.9-0.7-2.5-2.5c0.4-1.8,2.1-1.1,3.3-1.1c1.2,0,2.4,0.5,2.7-1.3c0.3-2-1.3-2.2-2.5-2.3
			c-3.3-0.4-6.5,0.2-7.8,3.8c-1.2,3.4,1.2,5.2,3.9,6.5c1.4,0.7,3.7,0.7,3,3.1C23.3,683.3,21.6,682.9,19.9,682.8z M47.1,678.4
			c0,2,0,3.7,0,5.3c0,1.7,0.8,2.4,2.5,2.3c1.7-0.1,1.7-1.3,1.7-2.5c0-2.2,0-4.3,0-6.5c0-2.5-0.9-5.7,3.6-5.3c1.1,0.1,1.2-1,1.2-1.8
			c0-1-0.5-1.6-1.5-1.6c-3.5,0-7,0-10.5,0c-1,0-1.4,0.7-1.5,1.6c-0.1,0.7,0.1,1.6,0.8,1.6C49.1,671.6,46.4,676.1,47.1,678.4z
			 M171.6,131.7c0.1-3.5-1.3-4.8-4.5-5c-2.7-0.2-4,1-4.1,3.7c-0.2,4.4,3.8,11.6,6.2,10.6C173.8,139,169.7,134.1,171.6,131.7z
			 M169.3,268.4c3.8,0.8,4.6-1.3,4.7-3.9c0.3-5.4-4-4-6.9-4.5c-3.7-0.7-5.3,1.2-5.2,4.6C162.1,270.7,167.4,266.8,169.3,268.4z
			 M125.1,677.1c-0.1,9.3-0.1,9.3,7.7,8.9c1.3-0.1,3.3,0.7,3.3-1.8c-0.1-2-1.9-1.6-3-1.5c-3.2,0.3-4-1.2-3.8-4.1c0.2-2.6,0-5.3,0-8
			c0-1.3-0.4-2.3-2-2.2c-1.4,0-2.1,0.8-2.1,2.2C125.1,672.8,125.1,675,125.1,677.1z M164.1,115.1c-10.4-1-17.5,6-26,9.7
			c-0.9,0.4-1.2,1.2-0.6,2c0.6,0.8,1.5,0.6,2.3,0.3C147.8,123.1,155.9,119.1,164.1,115.1z M215.4,119.3c-0.1-0.7-0.1-1.3-0.2-2
			c-10.9,1-21.8,2.1-32.7,3.1c0.1,0.5,0.1,1.1,0.2,1.6C193.6,121.2,204.5,120.2,215.4,119.3z M96.4,296c2.2-0.4,3.7-1.5,3.6-3.9
			c0-2.6-1.6-4-4-3.9c-2.2,0.1-3.7,1.5-3.7,3.8C92.3,294.4,93.8,295.8,96.4,296z M61.3,159.3c-0.1,0.1-0.2,0.3-0.2,0.4
			c14.7,0,29.3,0,44,0c0-0.1,0-0.3,0-0.4C90.5,159.3,75.9,159.3,61.3,159.3z M134.5,126.1c0-0.4-0.1-0.8-0.1-1.1
			c-8.8,0.8-17.7,1.6-26.5,2.5c0,0.3,0,0.6,0.1,0.8C116.8,127.5,125.6,126.8,134.5,126.1z M228.5,164.4c1.7,0.8,2.8,1.3,3.9,1.8
			c1.4,0.7,2.1,2,2.9,3.2c0.3,0.4,1.2,0.7,1.7,0.6c0.7-0.1,0.6-0.9,0.7-1.6C238.1,163.8,236.7,163,228.5,164.4z M173.5,336.4
			c5.1-2.6,6-5.5,3.3-9.9C176.4,330.3,175.3,333.5,173.5,336.4z"
                />
                <path
                  d="M197.4,677.1c-0.4,2.5-0.5,5.6-4,5.7c-3.4,0.1-4.3-2.7-4.3-5.5c0-2.8,0.7-5.5,4.2-5.5C196.7,671.8,197,674.5,197.4,677.1z
			"
                />
                <path
                  d="M223.4,675.9c-1.3,0.2-1.9-0.4-1.7-1.7c0.2-1.2-0.5-2.9,1.7-2.8c1.2,0.1,2.3,0.6,2.4,2C226,675.1,224.8,675.6,223.4,675.9
			z"
                />
              </g>
            </g>
          </svg>
        </div>

        <div className="section-two-df">
          <div className="section-two-top">
            <h1>Management</h1>
            <div className="section-two-top-boxes">
              <div className="section-two-top-boxes-one-hide">
                <div className="section-two-top-boxes-one-hide-top">
                  <h3>Mrs Karan Goel- Director</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-up-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                    />
                  </svg>
                </div>
                <div className="section-two-top-boxes-one-hide-bottom">
                  <p>
                    Mr. karan Goel is young and dynamic person with post
                    Graduation MBA(Finance & Marketing) with total 8 yers
                    professional experience in steel industry.
                  </p>
                </div>
              </div>

              <div className="section-two-top-boxes-one-hide">
                <div className="section-two-top-boxes-one-hide-top">
                  <h3 id="pre-con"> Mr. Vaibhav - Director</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-up-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                    />
                  </svg>
                </div>
                <div className="section-two-top-boxes-one-hide-bottom">
                  <p id="coruggated">
                    Mr. Vaibhav Kulshreshtha is young professional with Diploma
                    Mechanical Engineering. He is having 8 year exprience in PEB
                    industry
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-three">
        <hr className="section-three-line" />

        <div className="section-three-df">
          <div className="section-three-top">
            <h1>Our Client</h1>
          </div>
          <div className="section-three-bottom">
            <div className="section-three-bottom-logo-one">
              <div className="">
                <Image
                  src={"/Picture1.png"}
                  width={0}
                  height={0}
                  alt="alfanar"
                  unoptimized
                  style={{ width: "120px", height: "auto" }}
                ></Image>
              </div>
              <div className="">
                <Image
                  src="/Picture2.png"
                  alt="ardan"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "100px", height: "auto" }}
                />
              </div>
              <div className="">
                <Image
                  src="/Picture3.png"
                  alt="danish"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "150px", height: "auto" }}
                />
              </div>
              <div className="">
                <Image
                  src="/Picture4.png"
                  alt="ets"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "120px", height: "auto" }}
                />
              </div>
            </div>
            <div className="section-three-bottom-logo-two">
              <div className="">
                <Image
                  src={"/Picture1.png"}
                  width={0}
                  height={0}
                  alt="alfanar"
                  unoptimized
                  style={{ width: "120px", height: "auto" }}
                ></Image>
              </div>
              <div className="">
                <Image
                  src="/Picture2.png"
                  alt="ardan"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "100px", height: "auto" }}
                />
              </div>
              <div className="">
                <Image
                  src="/Picture3.png"
                  alt="danish"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "150px", height: "auto" }}
                />
              </div>
              <div className="">
                <Image
                  src="/Picture4.png"
                  alt="ets"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "120px", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="section-three-line" />
      </div>
      <div className="vision-mission">
        <h1>Vision & Mission</h1>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            Our vision is to be the industry leader in providing innovative,
            durable, and cost-effective pre-engineered building solutions that
            meet the evolving needs of our clients. We strive to deliver
            high-quality structures that combine efficiency, sustainability, and
            design flexibility, ensuring that every project is completed on time
            and within budget. By leveraging cutting-edge technology,
            sustainable practices, and a customer-focused approach, we aim to
            reshape the construction landscape and become the preferred partner
            for businesses and industries worldwide, contributing to the growth
            and success of our communities.
          </p>
        </div>

        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            Devkinandan Steel & Metal Industries LLP will consistently be the
            preferred partner of steel building users, their consultants and
            contractors. We give value for money by prompt delivery of high
            quality buildings, supported by accurate engineering designs through
            our investments in people, technology and manufacturing capacity.
            Profitable growth and our passion for innovation let us continue to
            offer rewarding careers to our employees and continuously provide
            excellent service to our customers.
          </p>
        </div>
      </div>
      <div className="section-four">
        <div className="section-four-df">
          <div className="section-four-header">
            <h1>
              WE THRIVE ON <span id="imposs">IMPOSSIBLE</span>
            </h1>
          </div>

          <div className="section-four-box-one">
            <div className="section-four-box-one-left">
              <div className="section-four-box-one-left-image">
                <Image
                  src="/Factory-image16.jpeg"
                  alt=""
                  width={0}
                  height={0}
                  unoptimized
                />
              </div>
              <div className="section-four-box-one-left-text">
                <Image
                  src={"volta-logo.png"}
                  alt=""
                  width={70}
                  height={40}
                  unoptimized
                ></Image>
                <h1>Voltamp Transformers, Oman: 3D modelling</h1>
                <p>
                  Weight of the tank is a very critical part for any
                  transformer. We worked with our customer Voltamp and started
                  designing all the tanks on the latest 3D software. This not
                  only helped us to zero down on the weight of the tanks but
                  also helped us improvise the tank designs with continuous
                  discussion with customer and thereby achieving a seamless
                  production process. Now all our tanks are designed on 3D
                  modelling and we are able to control many unexpected problems
                  during our designing stage itself.
                </p>
              </div>
            </div>
            <div className="section-four-box-one-right">
              <h1>01</h1>
            </div>
          </div>
          <hr id="sc-four-line" />

          <div className="section-four-box-one">
            <div className="section-four-box-one-left">
              <div className="section-four-box-one-left-image">
                <Image
                  src="/sf-box2.jpeg"
                  alt=""
                  width={0}
                  height={0}
                  unoptimized
                />
              </div>
              <div className="section-four-box-one-left-text">
                <Image
                  src={"sneda2.png"}
                  alt=""
                  width={90}
                  height={50}
                  unoptimized
                ></Image>
                <h1>Sneda Transformers, Ghana: Designing and Supply Chain</h1>
                <p>
                  Our client, Sneda Transformers in Ghana, was starting a new
                  factory and they chose us to be their supplier for tanks. We
                  not only helped them in designing the complete mechanical
                  structure of the tank but also helped procure all the major
                  raw materials for transformer and send them in the same
                  container along with tanks. This helped them save their
                  resources of following up with various vendors as we procured
                  everything and shipped along with tanks thereby creating cost
                  savings in logistics.
                </p>
              </div>
            </div>
            <div className="section-four-box-one-right">
              <h1>02</h1>
            </div>
          </div>
          <hr id="sc-four-line" />
        </div>
      </div>
      <div className="factory-unit">
        <div className="factory-unit-heading">
          <h1>Factory Unit</h1>
          <p>
            Our factory unit is built on precision, efficiency, and innovation,
            ensuring top-quality production at every stage. With a commitment to
            sustainability, we integrate advanced manufacturing techniques to
            optimize performance while reducing environmental impact. Every
            product reflects our dedication to craftsmanship, reliability, and
            industry-leading standards. By continuously evolving, we power
            industries with excellence, meeting the demands of a dynamic and
            competitive market
          </p>
        </div>
        <div className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1">
              <div className="unit-right-part">
                <Image
                  src="Untitled-design.png"
                  alt="unit image"
                  width={0}
                  height={0}
                  unoptimized
                  priority
                ></Image>
              </div>
            </div>
            <div className="keen-slider__slide number-slide2">
              <div className="unit-right-part">
                <Image
                  src="Factory-image10.jpeg"
                  alt="unit image"
                  width={0}
                  height={0}
                  unoptimized
                  priority
                ></Image>
              </div>
            </div>
            <div className="keen-slider__slide number-slide3">
              <div className="unit-right-part">
                <Image
                  src="Factory-image11.jpeg"
                  alt="unit image"
                  width={0}
                  height={0}
                  unoptimized
                  priority
                ></Image>
              </div>
            </div>
            <div className="keen-slider__slide number-slide4">
              <div className="unit-right-part">
                <Image
                  src="Factory-image12.jpeg"
                  alt="unit image"
                  width={0}
                  height={0}
                  unoptimized
                  priority
                ></Image>
              </div>
            </div>
            <div className="keen-slider__slide number-slide5">
              <div className="unit-right-part">
                <Image
                  src="Factory-image13.jpeg"
                  alt="unit image"
                  width={0}
                  height={0}
                  unoptimized
                  priority
                ></Image>
              </div>
            </div>
            <div className="keen-slider__slide number-slide6">
              <div className="unit-right-part">
                <Image
                  src="Factory-image14.jpeg"
                  alt="unit image"
                  width={0}
                  height={0}
                  unoptimized
                  priority
                ></Image>
              </div>
            </div>
            <div className="keen-slider__slide number-slide7">
              <div className="unit-right-part">
                <Image
                  src="Factory-image15.jpeg"
                  alt="unit image"
                  width={0}
                  height={0}
                  unoptimized
                  priority
                ></Image>
              </div>
            </div>

            <div className="keen-slider__slide number-slide9">
              <div className="unit-right-part">
                <Image
                  src="Factory-image17.jpeg"
                  alt="unit image"
                  width={0}
                  height={0}
                  unoptimized
                  priority
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                      fillRule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                    />
                  </svg>
                  <h5>+91 8758809966</h5>
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
                  <h5>info@devkinandansteel.com</h5>
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
    </main>
  );
}
