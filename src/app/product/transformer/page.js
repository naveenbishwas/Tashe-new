"use client";

import React from "react";
import "./product.css";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const Page = () => {
  const { ref: processAnimationOne, inView: isProcessOneVis } = useInView();
  const { ref: processAnimationTwo, inView: isProcessTwoVis } = useInView();
  const { ref: processAnimationThree, inView: isProcessThreeVis } = useInView();
  const { ref: processAnimationFour, inView: isProcessFourVis } = useInView();
  const { ref: processAnimationFive, inView: isProcessFiveVis } = useInView();
  const { ref: processAnimationSix, inView: isProcessSixVis } = useInView();
  const { ref: processAnimationSeven, inView: isProcessSevenVis } = useInView();
  const { ref: processAnimationEight, inView: isProcessEightVis } = useInView();
  const { ref: processAnimationNine, inView: isProcessNineVis } = useInView();
  const { ref: processAnimationTen, inView: isProcessTenVis } = useInView();
  const { ref: processAnimationEleven, inView: isProcessElevenVis } =
    useInView();
  const { ref: processAnimationTwelve, inView: isProcessTwelveVis } =
    useInView();
  const { ref: processAnimationThirteen, inView: isProcessThirteenVis } =
    useInView();
  const { ref: processAnimationFourteen, inView: isProcessFourteenVis } =
    useInView();

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
          />
        </div>
        <div className="background-color" id="product-background-color"></div>
      </div>
      <header>
        <div className="navbar">
          <Link href="/">
            <div className="logo">
              <Image
                src={"/new-logo.png"}
                alt="Logo"
                width={0}
                height={0}
                unoptimized
              />
            </div>
          </Link>

          <nav id="navigation">
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
              <svg
                id="nav-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </label>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <div className="dropdown">
                  <Link id="product-p" href="/product/transformer">
                    Product
                  </Link>
                  <ul id="dropdown-bottm">
                    <Link href="/product/transformer">
                      <li>Transformer</li>
                    </Link>
                    <Link href="/product/coruggated">
                      <li>Coruggated</li>
                    </Link>
                  </ul>
                </div>
              </li>
              <li>
                <Link href="/aboutus">About us</Link>
              </li>
              <li>
                <Link href="/">Infrastructure</Link>
              </li>

              <li id="contact">
                <div className="">
                  <Link id="black" href="#">
                    Contact us
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-up-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                    />
                  </svg>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-lin">
          <hr id="header-line" />
        </div>
        <div className="header-text">
          <h1 id="product-banner-heading">Transformer tanks</h1>
          <p id="product-banner-text">
            We manufacture corrugated and conventional transformer tanks ranging
            from 100KVA to 15MVA. Our tanks stand out due to their manufacturing
            quality with highest dimensional accuracy and weld seam quality.
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
          class="st0"
          d="M953.2,64.3L902.5,3.5C900.7,1.3,897.9,0,895,0h-64.3H124.2H59.9c-2.9,0-5.7,1.3-7.5,3.5L1.7,64.3
	C-3.6,70.7,1,80.4,9.3,80.4h115h706.4h115C953.9,80.4,958.5,70.7,953.2,64.3z"
        />
      </svg>

      <div className="product-section-one">
        <div className="product-section-one-first">
          <div className="product-section-one-first-header">
            <h1>MEETING THE MOST DEMANDING PROJECT SCHEDULES</h1>
          </div>
          <div className="product-section-one-first-content">
            <div className="product-section-one-first-content-left">
              <h1>Tank manufacturing</h1>
              <p>
                All the tanks are made using customer drawings and then
                converted to 3D using latest 3D softwares to understand the
                design better and avoid any mistakes during production.
              </p>
              <p>
                All the metal preparation is done on high precision laser
                cutting machines or CNC press brake machines. Various tank
                fitments like top covers, cable boxes, conservators are made
                with highest accuracy and precise positioning. Once the assembly
                is done with tack welds, the complete job goes under stringent
                dimensional and visual checks before passing them on to welding
                stage. Welding is done as per approved WPS/PQR by highly
                experienced and certified welders.
              </p>
            </div>
            <div className="product-section-one-first-content-right">
              <Image
                src={"/product-page-img-1.jpeg"}
                width={0}
                height={0}
                unoptimized
                alt="Loading Image"
              />
            </div>
          </div>
        </div>

        <div className="product-section-one-second">
          <div className="product-section-one-second-left">
            <Image
              src={"/product-page-img2.jpeg"}
              alt="Loading img"
              width={0}
              height={0}
              unoptimized
            />
          </div>
          <div className="product-section-one-second-right">
            <h1>Leak Testing</h1>
            <p>
              The most reliable and stringent tests are conducted under
              prescribed pressure to eliminate any leakage. Every tank goes
              through three stages of leak testing:
            </p>
            <li>1. Ultra-violet penetrant test</li>
            <li>2. Air and soap water test</li>
            <li>3. Pressure holding test</li>
            <p>This ensures that the tanks are completely leak free.</p>
          </div>
        </div>

        <div className="product-section-one-first">
          <div className="product-section-one-first-content">
            <div
              className="product-section-one-first-content-left"
              id="surface"
            >
              <h1>Surface treatment and corrosion protection</h1>
              <p>
                Tashe painting process is in accordance to ISO 12944:2008: C3,
                C4, C5 (L, M, H, VH). DFT can be maintained as per customer
                requirements suitable for the corrosive environment category.
              </p>
              <p>
                We shot blast every single tank as per Sa 3/Sa 2.5 to ensure
                absolute surface cleaning and paint adhesion. Different painting
                schemes can be offered for obtaining optimum corrosion
                protection.
              </p>

              <li>
                surface surface surface surface surface surface Zinc Metallizing
                or Zinc Rich primers can be used to provide higher corrosion
                resistance suitable to C5VH environments
              </li>
              <li>
                Epoxy based primers, intermediate or top coats are done using
                flood painting for equal coats even at the hidden areas
              </li>
              <li>Spray painting is also applied for superior finish</li>
              <li>
                All jobs are subject to force drying in ovens for faster paint
                drying and making them ready for further coats
              </li>
            </div>
            <div className="product-section-one-first-content-right">
              <Image
                src={"/product-page-img-1.jpeg"}
                width={0}
                height={0}
                unoptimized
                alt="Loading Image"
              />
            </div>
          </div>
        </div>

        <div className="product-section-one-second">
          <div className="product-section-one-second-left">
            <Image
              src={"/product-page-img2.jpeg"}
              alt="Loading img"
              width={0}
              height={0}
              unoptimized
            />
          </div>
          <div className="product-section-one-second-right" id="pdi">
            <h1>Pre-dispatch Inspections (PDI)</h1>
            <p>
              At Tashe, 100% tanks go through a stringent PDI with detailed
              checklists made customised as per every customer. Once passed, the
              tanks go for packing as per international standards and shipped
              globally.
            </p>
          </div>
        </div>
      </div>

      <section className="process-steps">
        <h1>Our Manufacturing Process</h1>
        <div className="steps-container">
          <div
            ref={processAnimationOne}
            className={`${isProcessOneVis ? "steps-first" : "steps"}`}
            id="first"
          >
            <h2>Cold rolled steel</h2>
          </div>
          <div
            ref={processAnimationTwo}
            className={`${isProcessTwoVis ? "steps-second" : "steps"}`}
            id="second"
          >
            <h2>Decoiler</h2>
          </div>
          <div
            ref={processAnimationThree}
            className={`${isProcessThreeVis ? "steps-third" : "steps"}`}
            id="third"
          >
            <h2>Fin Folding</h2>
          </div>
          <div
            ref={processAnimationFour}
            className={`${isProcessFourVis ? "steps-fourth" : "steps"}`}
            id="fourth"
          >
            <h2>Edge Cutting & upward bending</h2>
          </div>

          <div
            ref={processAnimationFive}
            className={`${isProcessFiveVis ? "steps-fifth" : "steps"}`}
            id="fifth"
          >
            <h2>Auto steam welding for fin edges using robots</h2>
          </div>
          <div
            ref={processAnimationSix}
            className={`${isProcessSixVis ? "steps-six" : "steps"}`}
            id="six"
          >
            <h2>Strip welding</h2>
          </div>
          <div
            ref={processAnimationSeven}
            className={`${isProcessSevenVis ? "steps-seven" : "steps"}`}
            id="seven"
          >
            <h2>spot welding on embossement</h2>
          </div>
          <div
            ref={processAnimationEight}
            className={`${isProcessEightVis ? "steps-eight" : "steps"}`}
            id="eight"
          >
            <h2>edge downword ending</h2>
          </div>
          <div
            ref={processAnimationNine}
            className={`${isProcessNineVis ? "steps-nine" : "steps"}`}
            id="nine"
          >
            <h2>leakage test(dye penetrant)</h2>
          </div>

          <div
            ref={processAnimationTen}
            className={`${isProcessTenVis ? "steps-ten" : "steps"}`}
            id="ten"
          >
            <h2>tank assembly & welding</h2>
          </div>
          <div
            ref={processAnimationEleven}
            className={`${isProcessElevenVis ? "steps-eleven" : "steps"}`}
            id="eleven"
          >
            <h2>sub-assembly fitment and welding</h2>
          </div>
          <div
            ref={processAnimationTwelve}
            className={`${isProcessTwelveVis ? "steps-twelve" : "steps"}`}
            id="twelve"
          >
            <h2>metal parts prepration</h2>
          </div>
          <div
            ref={processAnimationThirteen}
            className={`${isProcessThirteenVis ? "steps-thirteen" : "steps"}`}
            id="thirteen"
          >
            <h2>hot rolled steel</h2>
          </div>

          <div
            ref={processAnimationFourteen}
            className={`${isProcessFourteenVis ? "steps-fourteen" : "steps"}`}
            id="fourteen"
          >
            <h2>leakage test</h2>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-df">
          <div className="footer-left">
            <div className="footer-left-top">
              <h2>Tashe Power India</h2>
              <p>
                We thrive on jobs that other metal contractors avoid. From
                simple embeds to the most complex curved stair assemblies and
                challenging structural coruggated, we have what it takes to get
                the job done.
              </p>
              <hr id="footer-line" />
            </div>
            <div className="footer-left-middle">
              <div className="footer-left-middle-left">
                <li id="first-pro">
                  <a href="#">Who we are</a>
                </li>
                <li>
                  <a href="#">corugated Fabrications</a>
                </li>
                <li>
                  <a href="#">Our Work</a>
                </li>
              </div>

              <div className="footer-left-middle-right">
                <li id="first-pro">
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </div>
            </div>
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
                  <h5>149-325-0709</h5>
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
                  <h5>info@tashe.co.in</h5>
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
                    Works: F-194, Khushkhera Industrial Area, Bhiwadi, District
                    Alwar, Rajasthan 301019(India)
                  </h6>
                </div>

                <div className="footer-left-last-address-2">
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
                    Regd.Address: R-616, New Rajinder Nagar, New Delhi
                    110060(India)
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-right-header">
              <h1>
                WED LOVE TO <span id="footer-hear">HEAR FROM YOU</span>
              </h1>
              <form action="">
                <div className="form-top">
                  <input type="text" name="" id="name" placeholder="Name" />
                  <input type="email" name="" id="email" placeholder="Email" />
                  <input type="tel" name="" id="phone" placeholder="Phone" />
                </div>
                <div className="form-middle">
                  <textarea
                    name=""
                    id=""
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
