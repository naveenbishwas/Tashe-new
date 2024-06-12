import React from "react";
import "./contact-us.css";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="contact-us-page">
        <header>
          <div className="navbar" id="contact-us-nav">
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
                  <div className="dropdown" id="for-desk">
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

                  <div className="dropdown" id="for-mobile">
                    <details>
                      <summary>
                        Products
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-chevron-down"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                          />
                        </svg>
                      </summary>
                      <summary>
                        <Link href="/product/transformer">Transformer</Link>
                      </summary>
                      <summary>
                        <Link href="/product/coruggated">Coruggated</Link>
                      </summary>
                    </details>
                  </div>
                </li>
                <li>
                  <Link href="/about-us">About us</Link>
                </li>
                <li>
                  <Link href="/">Infrastructure</Link>
                </li>

                <li id="contact">
                  <div className="">
                    <Link id="black" href="/contact-us">
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
        </header>

        <div className="footer-right" id="contact-right">
          <div className="footer-right-header" id="white-bordern">
            <h1>
              WE LOVE TO <span id="footer-hear">HEAR FROM YOU</span>
            </h1>
            <form action="">
              <div className="form-top" id="contact-inputs">
                <input type="text" name="" id="name" placeholder="Name" />
                <input type="email" name="" id="email" placeholder="Email" />
                <input type="tel" name="" id="phone" placeholder="Phone" />
              </div>
              <div className="form-middle">
                <textarea
                  cols="90"
                  rows="12"
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
    </>
  );
};

export default page;
