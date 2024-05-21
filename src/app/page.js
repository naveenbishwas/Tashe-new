import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="main-container">
      <div className="back-image">
        <div className="background-img">
          <Image
            src={"/banner3.JPG"}
            alt="Picture of the background"
            width={0}
            height={0}
            unoptimized
          />
        </div>
        <div className="background-color"></div>
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
                <Link href="/product">Product</Link>
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
          <h1>Tashe Power India</h1>
          <p>
            We are one of the first companies in india to manufacture
            <span id="orange"> Corrugated Tanks and Fin walls </span>and have
            been serving in india and across the globe to various transformer
            OEMs.
          </p>
          <Link href="/about-us">
            <button>Know More</button>
          </Link>
        </div>
      </header>

      <div className="section-one">
        <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 956 80.7">
          <path
            class="st0"
            d="M953.2,64.3L902.5,3.5C900.7,1.3,897.9,0,895,0h-64.3H124.2H59.9c-2.9,0-5.7,1.3-7.5,3.5L1.7,64.3
	C-3.6,70.7,1,80.4,9.3,80.4h115h706.4h115C953.9,80.4,958.5,70.7,953.2,64.3z"
          />
        </svg>
        <div className="section-one-df">
          <div className="section-one-top">
            <div className="section-one-top-left">
              <h1>Transform THE FUTURE</h1>
            </div>
            <div className="section-one-top-right">
              <p>
                We, at Tashe , are customer-centric in our focus and believe in
                maintaining a long-term relationship with our customers. With
                the knowledge and experience of our people, we are able to
                deliver quality products efficiently and cost-effectively
              </p>
              <Link href="/infrastructure">
                <button>Why we are different</button>
              </Link>
            </div>
          </div>
          <div className="section-top-bottom">
            <Image
              src={"/banner4.JPG"}
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
          class="st0"
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
            <h1>What we do</h1>
            <div className="section-two-top-boxes">
              <div className="section-two-top-boxes-one">
                <div className="section-two-top-boxes-one-background"></div>
                <div className="section-two-top-boxes-one-show">
                  <Image
                    src={"/tank.JPG"}
                    alt="bim-image"
                    width={0}
                    height={0}
                    unoptimized
                  />
                  <h3 class="bim">Corrugated Tanks</h3>
                </div>
                <div className="section-two-top-boxes-one-hide">
                  <div className="section-two-top-boxes-one-hide-top">
                    <h3>Corrugated Tanks</h3>
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
                  <div className="section-two-top-boxes-one-hide-bottom">
                    <p>
                      Corrugations are provided with embossed channels and spot
                      welds for greater stability and effective heat
                      dissipation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="section-two-top-boxes-two">
                <div className="section-two-top-boxes-one-background-two"></div>
                <div className="section-two-top-boxes-one-show">
                  <Image
                    src="/tank2.JPG"
                    alt="bim-image"
                    width={0}
                    height={0}
                    unoptimized
                  />
                  <h3 class="bim" id="pre">
                    Corrugated Finwalls for Transformers
                  </h3>
                </div>
                <div className="section-two-top-boxes-one-hide">
                  <div className="section-two-top-boxes-one-hide-top">
                    <h3 id="pre-con">Corrugated Finwalls for Transformers</h3>
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
                  <div className="section-two-top-boxes-one-hide-bottom">
                    <p id="coruggated">
                      Our corrugated fins are passed for Fatigue Test as per
                      SANS 780:2009 at 11,000 cycles, which is equivalent to 30
                      years of transformer life.
                    </p>
                  </div>
                </div>
              </div>

              <div className="section-two-top-boxes-two">
                <div className="section-two-top-boxes-one-background-two"></div>
                <div className="section-two-top-boxes-one-show">
                  <Image
                    src="/transform.JPG"
                    alt="bim-image"
                    width={0}
                    height={0}
                    unoptimized
                  />
                  <h3 class="bim" id="pre">
                    Transformer Tanks
                  </h3>
                </div>
                <div className="section-two-top-boxes-one-hide">
                  <div className="section-two-top-boxes-one-hide-top">
                    <h3> Transformer Tanks</h3>
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
                  <div className="section-two-top-boxes-one-hide-bottom">
                    <p id="shop-fab">
                      We manufacture tanks ranging from 100KVA to 15MVA. Our
                      tanks stand out due to their manufacturing quality and
                      amazing aesthetical finish
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-two-bottom-boxes">
              <div className="section-two-top-boxes-two">
                <div className="section-two-top-boxes-one-background-two"></div>
                <div className="section-two-top-boxes-one-show">
                  <Image
                    src="/rod.jpeg"
                    alt="bim-image"
                    width={0}
                    height={0}
                    unoptimized
                  />
                  <h3 class="bim" id="pre">
                    Field Installation
                  </h3>
                </div>
                <div className="section-two-top-boxes-one-hide">
                  <div className="section-two-top-boxes-one-hide-top">
                    <h3>Field Installation</h3>
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
                  <div className="section-two-top-boxes-one-hide-bottom">
                    <p id="field">
                      With an aptitude for architectural designs, non-standard
                      metals, gravity-defying structures, 20-ton radiation
                      shields and 10 story marquee signs, Tashe transcends new
                      heights in the industry. Tashe’s field crews are highly
                      qualified from Ironworkers Local 377 with years of
                      experience and extensive training. Our field crews
                      prioritize safety and quality craftsmanship.
                    </p>
                  </div>
                </div>
              </div>

              <div className="section-two-top-boxes-two">
                <div className="section-two-top-boxes-one-background-two"></div>
                <div className="section-two-top-boxes-one-show">
                  <Image
                    src="/detail.jpeg"
                    alt="bim-image"
                    width={0}
                    height={0}
                    unoptimized
                    style={{ width: "490px", height: "300px" }}
                  />
                  <h3 class="bim" id="pre">
                    Advance Detailing
                  </h3>
                </div>
                <div className="section-two-top-boxes-one-hide">
                  <div className="section-two-top-boxes-one-hide-top">
                    <h3>Advance Detailing</h3>
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
                  <div className="section-two-top-boxes-one-hide-bottom">
                    <p id="utilize">
                      Utilizing in-house detailing and BIM Coordination, we
                      avoid the pitfalls of outsourcing. Our mechanical
                      engineers are proficient in BIM coordination software,
                      allowing us to stay on schedule. Tekla Structures is a
                      powerful modeling platform that allows us to significantly
                      reduce the time needed to produce models and shop
                      drawings. Our advanced surveying capability also enables
                      us to efficiently transfer layouts from the computer to
                      the jobsite.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-two-bottom">
            <p>
              We, at Tashe, are customer-centric in our focus and believe in
              maintaining a long-term relationship with our customers. With the
              knowledge and experience of our people, we are able to deliver
              quality products efficiently and cost-effectively
            </p>
            <span>
              <button>Contact us Today</button>
            </span>
          </div>
        </div>
      </div>

      <div className="section-three">
        <hr class="section-three-line" />

        <div className="section-three-df">
          <div className="section-three-top">
            <h1>Our Client</h1>
          </div>
          <div className="section-three-bottom">
            <div className="section-three-bottom-logo-one">
              <div className="">
                <Image
                  src={"/alfanar.png"}
                  width={0}
                  height={0}
                  alt="alfanar"
                  unoptimized
                  style={{ width: "120px", height: "auto" }}
                ></Image>
              </div>
              <div className="">
                <Image
                  src="/ardan.png"
                  alt="ardan"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "100px", height: "auto" }}
                />
              </div>
              <div className="">
                <Image
                  src="/danish.jpeg"
                  alt="danish"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "150px", height: "auto" }}
                />
              </div>
              <div className="">
                <Image
                  src="/ETS.webp"
                  alt="ets"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "120px", height: "auto" }}
                />
              </div>
              <div className="">
                <Image
                  src={"/euro.png"}
                  alt="euro"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "200px", height: "auto" }}
                />
              </div>

              <div className="">
                <Image
                  src={"/federal.jpeg"}
                  alt="federal"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "180px", height: "auto" }}
                />
              </div>

              <div className="">
                <Image
                  src={"/memf.webp"}
                  alt="memf"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "110px", height: "auto" }}
                />
              </div>

              <div className="">
                <Image
                  src={"/sec.png"}
                  alt="sec"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "90px", height: "auto" }}
                />
              </div>

              <div className="">
                <Image
                  src={"/euro.png"}
                  alt="euro"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "110px", height: "auto" }}
                />
              </div>

              <div className="">
                <Image
                  src={"/shenda.png"}
                  alt="shenda"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "110px", height: "auto" }}
                />
              </div>

              <div className="">
                <Image
                  src={"/shilcar.png"}
                  alt="shilcar"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "110px", height: "auto" }}
                />
              </div>

              <div className="">
                <Image
                  src={"/sptc.png"}
                  alt="sptc"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "110px", height: "auto" }}
                />
              </div>

              <div className="">
                <Image
                  src={"/sudhir.png"}
                  alt="sudhir"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "110px", height: "auto" }}
                />
              </div>

              <div className="">
                <Image
                  src={"/tyree.jpeg"}
                  alt="tyree"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "110px", height: "auto" }}
                />
              </div>

              <div className="">
                <Image
                  src={"/volta-logo.png"}
                  alt="volta"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "80px", height: "auto" }}
                />
              </div>
            </div>
            <div className="section-three-bottom-logo-two">
              <div className="">
                <Image
                  src={"/alfanar.png"}
                  width={0}
                  height={0}
                  alt="alfanar"
                  unoptimized
                  style={{ width: "120px", height: "auto" }}
                ></Image>
              </div>
              <div className="">
                <Image
                  src="/ardan.png"
                  alt="ardan"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "100px", height: "auto" }}
                />
              </div>
              <div className="">
                <Image
                  src="/danish.jpeg"
                  alt="danish"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "150px", height: "auto" }}
                />
              </div>
              <div className="">
                <Image
                  src="/ETS.webp"
                  alt="ets"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "120px", height: "auto" }}
                />
              </div>
              <div className="">
                <Image
                  src={"/euro.png"}
                  alt="euro"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "200px", height: "auto" }}
                />
              </div>

              <div className="">
                <Image
                  src={"/federal.jpeg"}
                  alt="federal"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "180px", height: "auto" }}
                />
              </div>

              <div className="">
                <Image
                  src={"/memf.webp"}
                  alt="memf"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "110px", height: "auto" }}
                />
              </div>

              <div className="">
                <Image
                  src={"/sec.png"}
                  alt="sec"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "90px", height: "auto" }}
                />
              </div>

              <div className="">
                <Image
                  src={"/euro.png"}
                  alt="euro"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "110px", height: "auto" }}
                />
              </div>

              <div className="">
                <Image
                  src={"/shenda.png"}
                  alt="shenda"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "110px", height: "auto" }}
                />
              </div>

              <div className="">
                <Image
                  src={"/shilcar.png"}
                  alt="shilcar"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "110px", height: "auto" }}
                />
              </div>

              <div className="">
                <Image
                  src={"/sptc.png"}
                  alt="sptc"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "110px", height: "auto" }}
                />
              </div>

              <div className="">
                <Image
                  src={"/sudhir.png"}
                  alt="sudhir"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "110px", height: "auto" }}
                />
              </div>

              <div className="">
                <Image
                  src={"/tyree.jpeg"}
                  alt="tyree"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "110px", height: "auto" }}
                />
              </div>

              <div className="">
                <Image
                  src={"/volta-logo.png"}
                  alt="volta"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "80px", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
        <hr class="section-three-line" />
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
                  src="/sf-box1.jpeg"
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

          {/* <div className="section-four-box-one">
            <div className="section-four-box-one-left">
              <div className="section-four-box-one-left-image">
                <Image
                  src="/sf-box3.jpeg"
                  alt=""
                  width={0}
                  height={0}
                  unoptimized
                />
              </div>
              <div className="section-four-box-one-left-text">
                <Image
                  src="/planet.png"
                  alt=""
                  width={0}
                  height={0}
                  unoptimized
                  style={{
                    width: "100px",
                    height: "50px",
                    objectFit: "cover",
                  }}
                />
                <h1>Stanford University, Stanford, CA</h1>
                <p>
                  Tashe has worked with Stanford University in California on a
                  multitude of projects. These projects include structural
                  coruggated, complicated hip and valley roof structure, and
                  Christmas treeing for Crothers Dining Hall. Seismic upgrades
                  were made in the Peterson Building as well as Structural
                  coruggated infill in a concrete tilt up building for the
                  Aquatics Center. Additional services include stairs and
                  railings, ornamental ironwork, and more.
                </p>
              </div>
            </div>
            <div className="section-four-box-one-right">
              <h1>03</h1>
            </div>
          </div>
          <hr id="sc-four-line" />

          <div className="section-four-box-one">
            <div className="section-four-box-one-left">
              <div className="section-four-box-one-left-image">
                <Image
                  src="/medical.jpeg"
                  alt=""
                  width={0}
                  height={0}
                  unoptimized
                />
              </div>
              <div className="section-four-box-one-left-text">
                <Image
                  src="/palo.gif"
                  alt=""
                  width={0}
                  height={0}
                  unoptimized
                  style={{
                    width: "100px",
                    height: "50px",
                    objectFit: "cover",
                  }}
                />
                <h1>Stanford University, Stanford, CA</h1>
                <p>
                  Tashe has worked with Stanford University in California on a
                  multitude of projects. These projects include structural
                  coruggated, complicated hip and valley roof structure, and
                  Christmas treeing for Crothers Dining Hall. Seismic upgrades
                  were made in the Peterson Building as well as Structural
                  coruggated infill in a concrete tilt up building for the
                  Aquatics Center. Additional services include stairs and
                  railings, ornamental ironwork, and more.
                </p>
              </div>
            </div>
            <div className="section-four-box-one-right">
              <h1>04</h1>
            </div>
          </div>
          <hr id="sc-four-line" /> */}
        </div>
      </div>

      <div className="section-five">
        <div className="section-five-df">
          <div className="section-five-left">
            <h1>
              CLIENTS <span id="and">&</span> TESTIMONIALS
            </h1>
            <div className="section-five-left-text">
              <p id="over-150">
                Over 150 projects completed with Novo as a trusted partner.
              </p>
            </div>
          </div>
          <div className="section-five-right">
            <div className="section-five-right-one">
              <div className="section-five-right-one-left">
                <div className="">
                  <svg
                    version="1.1"
                    id="novo"
                    x="0px"
                    y="0px"
                    viewBox="0 0 1503.6 464.5"
                  >
                    <path
                      class="st0"
                      d="M353.1,444.4c-5.9-6.4-11-11.4-15.4-16.9c-3.7-4.8-8-4.9-13.1-3.8c0,10.5,0,20.7,0,31c2.9,0,5.3,0,8.4,0
	c0-6.4,0-12.6,0-18.8c0.5-0.1,0.9-0.2,1.4-0.3c4.6,5,9.6,9.7,13.8,15.1c3.7,4.8,8.1,5,13.5,3.9c0-10.3,0-20.5,0-31
	c-2.8,0-5.4,0-8.6,0C353.1,430.1,353.1,436.4,353.1,444.4z"
                    />
                    <path
                      class="st0"
                      d="M480,438.7c-3.7-1.8-7.9-2.4-11.9-3.4c-3.1-0.8-6.2-1.3-9.2-2.2c-0.8-0.2-1.7-1.3-1.8-2c-0.1-0.7,1-2.1,1.5-2.1
	c4.3,0,9.9-1.3,12.8,0.8c4.1,3.1,7.4,2.2,12.6,2c-1.7-2.4-2.6-4.4-4.2-5.6c-5.9-4.9-23-4.9-29.1-0.3c-4.3,3.3-4.3,8.2,0.3,11.1
	c2.6,1.6,5.8,2.5,8.8,3.3c4,1.1,8.2,1.6,12.2,2.6c1.1,0.3,2.4,1.6,2.6,2.5c0.1,1-0.9,2.5-1.8,3.1c-3.6,2.6-13,2.4-15.4-1.1
	c-3.2-4.6-6.9-3.1-12.1-2.4c2,2.7,3.2,5.1,5,6.7c6.3,5.1,24.1,5.1,30.6,0.3C486.1,448.1,485.9,441.6,480,438.7z"
                    />
                    <path
                      class="st0"
                      d="M565.9,423.4c-1.4,4,0.1,5.1,3.7,4.9c3.1-0.2,6.2,0,10,0c0,9.1,0,17.7,0,26.3c3.5,0,6.2,0,9.9,0
	c0-9.1,0-17.5,0-26.3c3.4,0,6.2-0.1,9,0c3.5,0.2,6.1-0.3,4.2-4.9C590.3,423.4,578,423.4,565.9,423.4z"
                    />
                    <path
                      class="st0"
                      d="M99.7,447c-3.2,4.2-8.6,3.7-13.5,2c-4.1-1.4-5.9-4.6-6.2-8.8c-0.3-4.4,0.4-8.5,4.8-10.7
	c4.7-2.4,10.4-3.2,14.2,0.4c4.1,3.9,7.6,2.4,11.6,1.8c0.3-0.5,0.5-0.9,0.8-1.4c-2.1-1.8-3.9-4.1-6.3-5.2c-9.2-4.1-18.5-4.1-27.4,0.8
	c-10.5,5.8-10.4,20.3,0.2,26c8.4,4.6,17.3,4.7,26,0.9c3-1.3,5.3-4.3,8.8-7.3C107,444.3,103.5,442.1,99.7,447z"
                    />
                    <path
                      class="st0"
                      d="M1183.8,423.4c-2.9,0-5.7,0-8.8,0c0,10.7,0,20.8,0,31c3.3,0,6.1,0,9.2,0c0-9.8,0-19.1,0-28.4
	C1184.2,425.2,1184,424.4,1183.8,423.4z"
                    />
                    <path
                      class="st0"
                      d="M1426.3,444.3c-5.7-6.2-10.7-11.1-15-16.5c-3.7-4.8-8.1-5.7-13.6-4.2c0,10.3,0,20.5,0,30.9c2.9,0,5.4,0,8.8,0
	c0-6.5,0-12.8,0-20.3c5.5,6,10.4,10.6,14.5,15.8c3.7,4.7,8.1,5.8,14,4.3c0-10.4,0-20.6,0-30.9c-2.9,0-5.5,0-8.7,0
	C1426.3,430.1,1426.3,436.4,1426.3,444.3z"
                    />
                    <path
                      class="st0"
                      d="M838.2,423.5c0,6.2,0.1,12,0,17.8c-0.1,6.7-2.4,8.8-9.2,8.8c-7.1,0-9.6-2.3-9.7-8.9c-0.1-5.9,0-11.8,0-17.7
	c-3.6,0-6.4,0-9.4,0c0,7.4-0.2,14.5,0.1,21.6c0.1,4,2.5,6.9,6.3,8.2c8.4,3,17,3.2,25.3-0.2c2.3-1,5.1-3.8,5.3-6
	c0.6-7.8,0.2-15.8,0.2-23.6C844.1,423.5,841.4,423.5,838.2,423.5z"
                    />
                    <path
                      class="st0"
                      d="M946.9,429.6c4.9-2.4,10.6-3.1,14.6,0.7c4.2,3.9,7.5,2.1,12.3,1.1c-1.8-2-2.9-3.7-4.4-4.9
	c-7.9-6-25-5.2-32.4,1.5c-5.2,4.7-6.4,13.3-2.6,19.2c6.9,10.6,30.2,11.3,37.7,1c0.5-0.7,0.8-1.4,1.5-2.7c-4.6-1.1-8.1-3.3-11.8,1.6
	c-3.2,4.2-8.6,3.7-13.5,2c-4.3-1.5-6.1-4.9-6.2-9.3C942,435.5,942.8,431.6,946.9,429.6z"
                    />
                    <path
                      class="st0"
                      d="M1054.7,428.3c3.3,0,5.9,0.3,8.5-0.1c4.8-0.7,5.9,1.5,5.7,5.9c-0.3,6.7-0.1,13.5-0.1,20.3c3.6,0,6.5,0,9.9,0
	c0-8.9,0-17.3,0-26.2c4.8,0,9,0,13.5,0c0-1.9,0-3.3,0-4.9c-12.5,0-24.8,0-37.3,0C1054.9,424.9,1054.8,426.2,1054.7,428.3z"
                    />
                    <path
                      class="st0"
                      d="M92.1,379.5c2.5,0.1,5,0.1,7.5,0.1c434.3,0,868.7,0,1303,0.1c28.1,0,52.4-8.7,72-29c17-17.5,25.9-38.7,26-63.1
	c0.2-64.6,0.2-129.3,0-193.9c-0.2-45.5-33.9-83.8-79.4-91.1c-1.6-0.3-3.2-0.8-4.8-1.2c-443.3,0-886.7,0-1330,0
	C82.6,2.3,78.7,3,74.8,3.9c-38,8.7-66.1,38.7-72.3,77.2c-0.2,1.5-0.7,2.9-1,4.3c0,70.3,0,140.6,0,210.9c0.8,3.7,1.6,7.4,2.5,11.1
	C13.7,348.6,49.3,377.7,92.1,379.5z M1383.8,122.4c0.6-32.3-17.2-56.3-44.2-65.9c24.8,0,49.6-0.4,74.4,0.2
	c16.3,0.4,29,15.1,29.1,32.4c0.1,36,0,71.9,0,107.9c0,31.1,0,62.3,0,93.4c0,21.1-13.5,34.6-34.8,34.6c-23.2,0-46.3,0-70.8,0
	c2.2-0.9,3.2-1.4,4.3-1.8c25.4-9.2,41.6-31.8,41.6-58.8C1383.6,217,1382.9,169.7,1383.8,122.4z M1166.1,117.4c0-4.7,1.5-5.9,6-5.8
	c24.7,0.2,49.3,0.1,74,0.1c24.5,0,49,0.1,73.5-0.1c4.4,0,5.6,1.3,5.6,5.6c-0.1,48.8-0.2,97.6,0,146.4c0,4.7-1.5,5.8-5.9,5.8
	c-49-0.1-98-0.2-147,0c-4.8,0-6.2-1.3-6.2-6.1C1166.2,214.7,1166.2,166.1,1166.1,117.4z M1084.5,56.3c22.3,0.2,44.6,0.1,67.1,0.7
	c-1.6,0.7-3.2,1.3-4.8,2c-23.4,9.3-39,31.4-39.1,56.5c-0.2,49.9-0.2,99.9,0,149.8c0.1,25.5,16,47.8,39.9,57c1.6,0.6,3.3,1.3,5.9,2.3
	c-69.7,0-138.3,0-207.7,0c0.9-2,1.4-3.6,2.2-5.2c42.9-86.1,85.8-172.2,128.6-258.4C1078.3,57.5,1080.5,56.3,1084.5,56.3z
	 M1014.9,56.7c-29.7,62-59.1,123.4-89,185.9c-28.7-62.4-56.9-123.7-85.5-185.9C898.8,56.7,956.2,56.7,1014.9,56.7z M739.8,117.5
	c0-27.5-15.2-49.3-41-59.2c-0.9-0.3-1.7-0.7-2.6-1.1c0-0.3,0.1-0.5,0.1-0.8c1.6,0,3.2,0,4.7,0c21.3,0,42.7,0.1,64-0.1
	c4.2,0,6.5,1.1,8.4,5c42.5,86.1,85.1,172.2,127.7,258.3c0.7,1.4,1.3,2.9,2.1,4.9c-69.7,0-138.7,0-208.5,0c1.8-0.7,3-1.3,4.3-1.8
	c24.7-9.2,40.6-31.6,40.6-57.9C739.9,215.7,739.9,166.6,739.8,117.5z M522.6,115.5c0-1,0.2-2,0.3-3.5c52.8,0,105.2,0,158.2,0
	c0.1,1.9,0.3,3.7,0.3,5.4c0,48.8,0,97.5,0.1,146.3c0,4.3-1,5.7-5.5,5.7c-49.3-0.2-98.6-0.1-147.9-0.1c-3.2,0-5.6,0.2-5.6-4.5
	C522.6,215.1,522.6,165.3,522.6,115.5z M398.8,142.6c0-26.5,0-52.9,0-79.4c0-2,0-3.9,0-6.4c36.5,0,72.6,0,109.4,0
	c-1.7,0.7-2.9,1.3-4.1,1.8c-24.5,9.5-39.8,31.8-39.8,58c0,48.8,0,97.5,0,146.3c0,28.8,15.4,50.7,42.6,60.5c0.6,0.2,1.2,0.5,1.7,0.8
	c-0.1,0.2-0.1,0.5-0.2,0.7c-35,0-70-0.1-104.9,0.1c-4.6,0-4.6-2.3-4.6-5.6C398.8,260.5,398.8,201.6,398.8,142.6z M357,324.9
	c-56.6,0-113.3,0-169.9,0c-6.8,0-6.8,0-6.8-6.8c-0.1-54.6-0.2-109.2-0.3-163.8c0-1.6,0.1-3.2,0.3-6.1
	c61.3,59.1,121.7,117.4,183.3,176.7C360.2,324.9,358.6,324.9,357,324.9z M344,56.8c0,57.9,0,115.6,0,174.3
	c-59.9-58.3-119.2-116-179.1-174.3C225.2,56.8,284.4,56.8,344,56.8z M59.3,89.9c0-16.9,10-29.9,25.6-32.8c5.2-1,10.6-0.6,15.9-0.6
	c7.5-0.1,15,0.1,22.5-0.1c2.9,0,4.4,0.9,4.1,4c-0.1,1.2,0,2.3,0,3.5c0,84.6,0,169.2,0,253.7c0,2.1,0,4.3,0,6.4
	c-15,0-29.4,1.1-43.5-0.3c-13.2-1.4-23.3-14.2-24.4-27.5c-0.1-1.7-0.2-3.3-0.2-5C59.3,224.1,59.2,157,59.3,89.9z"
                    />
                    <path
                      class="st0"
                      d="M1435,454.4c-5.9,1.5-10.2,0.3-14-4.3c-4.1-5.2-8.9-9.8-14.5-15.8c0,7.5,0,13.8,0,20.3c-3.4,0-5.9,0-8.8,0
	c0-10.4,0-20.6,0-30.9c5.6-1.5,9.9-0.6,13.6,4.2c4.2,5.4,9.2,10.3,15,16.5c0-7.9,0-14.2,0-20.9c3.2,0,5.7,0,8.7,0
	C1435,433.7,1435,443.9,1435,454.4z"
                    />
                    <path
                      class="st0"
                      d="M333,435.8c0,6.2,0,12.4,0,18.8c-3.1,0-5.6,0-8.4,0c0-10.4,0-20.6,0-31c5.1-1.1,9.4-0.9,13.1,3.8
	c4.4,5.6,9.5,10.5,15.4,16.9c0-7.9,0-14.3,0-21c3.2,0,5.8,0,8.6,0c0,10.5,0,20.7,0,31c-5.4,1.1-9.8,0.9-13.5-3.9
	c-4.2-5.3-9.2-10.1-13.8-15.1C333.9,435.6,333.4,435.7,333,435.8z"
                    />
                    <path
                      class="st0"
                      d="M445.2,445c5.3-0.7,8.9-2.1,12.1,2.4c2.5,3.5,11.8,3.7,15.4,1.1c0.9-0.7,1.9-2.2,1.8-3.1
	c-0.1-1-1.5-2.3-2.6-2.5c-4-1-8.2-1.6-12.2-2.6c-3-0.8-6.2-1.6-8.8-3.3c-4.6-2.9-4.6-7.8-0.3-11.1c6.1-4.7,23.2-4.6,29.1,0.3
	c1.5,1.3,2.4,3.2,4.2,5.6c-5.2,0.2-8.5,1-12.6-2c-2.9-2.2-8.4-0.8-12.8-0.8c-0.6,0-1.6,1.4-1.5,2.1c0.1,0.7,1,1.8,1.8,2
	c3,0.9,6.2,1.4,9.2,2.2c4,1,8.3,1.6,11.9,3.4c6,2.9,6.2,9.4,0.9,13.3c-6.5,4.8-24.3,4.7-30.6-0.3C448.4,450.1,447.3,447.7,445.2,445
	z"
                    />
                    <path
                      class="st0"
                      d="M809.9,423.4c3,0,5.7,0,9.4,0c0,5.9,0,11.8,0,17.7c0.1,6.6,2.6,8.9,9.7,8.9c6.8,0,9-2,9.2-8.8
	c0.1-5.8,0-11.6,0-17.8c3.2,0,5.9,0,8.9,0c0,7.9,0.4,15.8-0.3,23.6c-0.2,2.2-3,5-5.3,6c-8.3,3.5-16.9,3.2-25.3,0.2
	c-3.8-1.3-6.1-4.2-6.3-8.2C809.8,438,809.9,430.8,809.9,423.4z"
                    />
                    <path
                      class="st0"
                      d="M110.7,431.7c-4,0.6-7.5,2.2-11.6-1.8c-3.8-3.6-9.4-2.8-14.2-0.4c-4.4,2.2-5,6.3-4.8,10.7
	c0.2,4.2,2.1,7.4,6.2,8.8c4.8,1.7,10.3,2.2,13.5-2c3.7-5,7.2-2.7,13-1.4c-3.5,3-5.8,6-8.8,7.3c-8.7,3.8-17.6,3.6-26-0.9
	c-10.6-5.7-10.7-20.2-0.2-26c8.8-4.9,18.2-5,27.4-0.8c2.4,1.1,4.2,3.4,6.3,5.2C111.2,430.8,110.9,431.3,110.7,431.7z"
                    />
                    <path
                      class="st0"
                      d="M973.7,445.4c-0.7,1.3-1,2.1-1.5,2.7c-7.4,10.3-30.8,9.6-37.7-1c-3.8-5.9-2.7-14.5,2.6-19.2
	c7.4-6.6,24.5-7.5,32.4-1.5c1.5,1.1,2.6,2.8,4.4,4.9c-4.8,1-8.2,2.8-12.3-1.1c-4-3.8-9.7-3.1-14.6-0.7c-4.2,2-4.9,6-4.8,10.2
	c0.2,4.4,1.9,7.8,6.2,9.3c4.8,1.7,10.3,2.1,13.5-2C965.6,442.1,969.1,444.3,973.7,445.4z"
                    />
                    <path
                      class="st0"
                      d="M589.4,454.6c-3.7,0-6.4,0-9.9,0c0-8.6,0-17.1,0-26.3c-3.8,0-6.9-0.1-10,0c-3.5,0.2-5.1-1-3.7-4.9
	c12.2,0,24.4,0,36.8,0c1.9,4.6-0.7,5.1-4.2,4.9c-2.8-0.1-5.6,0-9,0C589.4,437.1,589.4,445.5,589.4,454.6z"
                    />
                    <path
                      class="st0"
                      d="M1054.7,428.3c0.1-2.1,0.2-3.4,0.2-4.9c12.5,0,24.8,0,37.3,0c0,1.6,0,3,0,4.9c-4.5,0-8.8,0-13.5,0
	c0,8.9,0,17.3,0,26.2c-3.4,0-6.2,0-9.9,0c0-6.8-0.2-13.6,0.1-20.3c0.2-4.4-0.9-6.6-5.7-5.9C1060.7,428.6,1058,428.3,1054.7,428.3z"
                    />
                    <path
                      class="st0"
                      d="M1175,423.4c3.1,0,5.9,0,8.8,0c0.2,1.1,0.4,1.9,0.4,2.6c0,9.3,0,18.6,0,28.4c-3.1,0-6,0-9.2,0
	C1175,444.2,1175,434,1175,423.4z"
                    />
                    <path
                      class="st0"
                      d="M715.4,440.3c0.5-0.2,2.6-0.3,3.8-1.4c2.1-2,5-4.7,5-7.1c0-2.4-2.9-5.1-5-7.1c-1.2-1.1-3.4-1.3-5.2-1.4
	c-9.1-0.1-18.3-0.1-28-0.1c0,10.6,0,20.8,0,31.1c3.2,0,6.1,0,9.6,0c0-4.5,0-8.6,0-12.4c8.5-2,12.7,3.6,16.8,8.4
	c4.3,5,9.2,4.9,15.9,4C723.4,449.1,719.2,444.6,715.4,440.3z M709.4,436.1c-4.4,0.5-8.9,0.2-13.8,0.2c0-2.5,0-4.9,0-7.9
	c4.8,0,9.3-0.4,13.7,0.2c1.9,0.3,3.5,2.6,5.3,4C712.9,433.8,711.3,435.9,709.4,436.1z"
                    />
                    <path
                      class="st0"
                      d="M1281.1,454c-0.5-0.1-0.9-0.3-1.3-0.4C1280.2,453.8,1280.7,453.9,1281.1,454z"
                    />
                    <path
                      class="st0"
                      d="M1303,452.9c-0.5,0.2-1,0.4-1.5,0.5C1302.1,453.3,1302.5,453.1,1303,452.9z"
                    />
                    <path
                      class="st0"
                      d="M1304.9,452.1c-0.5,0.2-0.9,0.4-1.4,0.6C1304,452.5,1304.5,452.3,1304.9,452.1z"
                    />
                    <path
                      class="st0"
                      d="M1279.3,453.5c-0.4-0.1-0.8-0.3-1.3-0.4C1278.4,453.2,1278.8,453.3,1279.3,453.5z"
                    />
                    <path
                      class="st0"
                      d="M1277.5,452.9c-0.6-0.2-1.1-0.5-1.7-0.7C1276.4,452.4,1276.9,452.6,1277.5,452.9z"
                    />
                    <path
                      class="st0"
                      d="M1290.3,456.2c-3.1-0.8-6-1.3-8.8-2.1C1284.2,454.8,1287.2,455.4,1290.3,456.2z"
                    />
                    <path
                      class="st0"
                      d="M1307.3,450.9c-0.6,0.3-1.2,0.7-1.8,1C1306.1,451.6,1306.7,451.3,1307.3,450.9z"
                    />
                    <path
                      class="st0"
                      d="M1292.2,456.2c2.9-0.9,6-1.7,9-2.6C1298.2,454.5,1295.1,455.3,1292.2,456.2L1292.2,456.2z"
                    />
                    <path
                      class="st0"
                      d="M1291.4,456.5c0.3-0.1,0.6-0.2,0.9-0.3l0,0C1291.9,456.3,1291.6,456.4,1291.4,456.5z"
                    />
                    <path
                      class="st0"
                      d="M1301.6,453.4c-0.1,0-0.2,0.1-0.4,0.1C1301.3,453.5,1301.4,453.5,1301.6,453.4z"
                    />
                    <path
                      class="st0"
                      d="M1305.5,451.9c-0.2,0.1-0.4,0.2-0.5,0.2C1305.1,452,1305.3,452,1305.5,451.9z"
                    />
                    <path
                      class="st0"
                      d="M1303.6,452.7c-0.2,0.1-0.4,0.1-0.5,0.2C1303.2,452.8,1303.4,452.8,1303.6,452.7z"
                    />
                    <path
                      class="st0"
                      d="M1290.3,456.2c0.4,0.1,0.7,0.2,1.1,0.3C1291,456.4,1290.6,456.3,1290.3,456.2L1290.3,456.2z"
                    />
                    <path
                      class="st0"
                      d="M1281.5,454.1c-0.1,0-0.2-0.1-0.3-0.1C1281.2,454.1,1281.4,454.1,1281.5,454.1z"
                    />
                    <path
                      class="st0"
                      d="M1278,453c-0.2-0.1-0.3-0.1-0.5-0.2C1277.7,452.9,1277.8,453,1278,453z"
                    />
                    <path
                      class="st0"
                      d="M1279.8,453.6c-0.2-0.1-0.3-0.1-0.5-0.2C1279.4,453.5,1279.6,453.6,1279.8,453.6z"
                    />
                    <path
                      class="st0"
                      d="M1307.5,426.9c-8.1-5.7-24.5-6.1-32.9-0.7c-10.2,6.5-9.8,20.6,1.2,25.9c0.5,0.3,1.1,0.5,1.7,0.7
	c0.2,0.1,0.3,0.1,0.5,0.2c0.4,0.2,0.8,0.3,1.3,0.4c0.2,0.1,0.3,0.1,0.5,0.2c0.4,0.1,0.9,0.3,1.3,0.4c0.1,0,0.2,0.1,0.3,0.1
	c2.7,0.7,5.7,1.3,8.8,2.1h0c0.7,0,1.3,0,2,0c2.9-0.9,6-1.7,9-2.6c0.1,0,0.2-0.1,0.4-0.1c0.5-0.2,1-0.3,1.5-0.5
	c0.2-0.1,0.4-0.1,0.5-0.2c0.5-0.2,0.9-0.4,1.4-0.6c0.2-0.1,0.4-0.2,0.5-0.2c0.6-0.3,1.2-0.6,1.8-1
	C1316.2,445.6,1316,432.9,1307.5,426.9z M1290.8,450c-8.3,0.1-13.5-4.4-13.4-11.4c0.1-6.9,4.9-10.7,13.3-10.7
	c8.5,0,13.1,3.8,13.1,10.9C1303.8,445.8,1298.9,450,1290.8,450z"
                    />
                    <path
                      class="st0"
                      d="M1290.3,456.2c0.4,0.1,0.7,0.2,1.1,0.3c0.3-0.1,0.6-0.2,0.9-0.3C1291.6,456.2,1290.9,456.2,1290.3,456.2z"
                    />
                    <path
                      class="st0"
                      d="M208.4,454.1c2.8,0.7,5.8,1.3,8.9,2.1l0,0C214.2,455.4,211.2,454.8,208.4,454.1z"
                    />
                    <path
                      class="st0"
                      d="M204.6,453c-0.6-0.2-1.1-0.4-1.7-0.6C203.5,452.6,204,452.8,204.6,453z"
                    />
                    <path
                      class="st0"
                      d="M208.2,454c-0.5-0.1-0.9-0.2-1.4-0.4C207.3,453.8,207.7,453.9,208.2,454z"
                    />
                    <path
                      class="st0"
                      d="M230.9,452.5c-0.5,0.2-0.9,0.4-1.4,0.5C230,452.9,230.4,452.7,230.9,452.5z"
                    />
                    <path
                      class="st0"
                      d="M233.1,451.5c-0.6,0.3-1.2,0.6-1.8,0.9C232,452.1,232.6,451.8,233.1,451.5z"
                    />
                    <path
                      class="st0"
                      d="M229.1,453.2c-0.5,0.2-1,0.3-1.5,0.5C228.1,453.6,228.6,453.4,229.1,453.2z"
                    />
                    <path
                      class="st0"
                      d="M206.4,453.5c-0.4-0.1-0.9-0.3-1.3-0.4C205.5,453.3,205.9,453.4,206.4,453.5z"
                    />
                    <path
                      class="st0"
                      d="M218.3,456.2c3-0.9,6.1-1.5,9.1-2.4C224.4,454.7,221.2,455.3,218.3,456.2L218.3,456.2z"
                    />
                    <path
                      class="st0"
                      d="M217.8,456.3c0.2,0,0.3-0.1,0.5-0.1l0,0C218.1,456.2,218,456.3,217.8,456.3z"
                    />
                    <path
                      class="st0"
                      d="M217.3,456.2c0.2,0,0.4,0.1,0.5,0.1C217.6,456.3,217.5,456.2,217.3,456.2L217.3,456.2z"
                    />
                    <path
                      class="st0"
                      d="M231.4,452.3c-0.2,0.1-0.3,0.1-0.5,0.2C231,452.5,231.2,452.4,231.4,452.3z"
                    />
                    <path
                      class="st0"
                      d="M227.6,453.7c-0.1,0-0.1,0-0.2,0.1C227.5,453.8,227.5,453.7,227.6,453.7z"
                    />
                    <path
                      class="st0"
                      d="M229.5,453.1c-0.1,0.1-0.3,0.1-0.5,0.2C229.2,453.2,229.4,453.1,229.5,453.1z"
                    />
                    <path
                      class="st0"
                      d="M205.1,453.1c-0.2-0.1-0.3-0.1-0.5-0.2C204.8,453,204.9,453.1,205.1,453.1z"
                    />
                    <path
                      class="st0"
                      d="M208.4,454.1c-0.1,0-0.2,0-0.2-0.1C208.3,454.1,208.3,454.1,208.4,454.1z"
                    />
                    <path
                      class="st0"
                      d="M206.8,453.7c-0.1,0-0.3-0.1-0.4-0.1C206.5,453.6,206.7,453.6,206.8,453.7z"
                    />
                    <path
                      class="st0"
                      d="M233.3,426.5c-10-5.7-20.7-5.6-31.1-0.7c-5.6,2.6-8.3,7.5-8,13.8c0.2,6.2,3.2,10.6,8.7,12.8
	c0.6,0.2,1.1,0.4,1.7,0.6c0.2,0.1,0.3,0.1,0.5,0.2c0.4,0.1,0.8,0.3,1.3,0.4c0.1,0,0.3,0.1,0.4,0.1c0.5,0.1,0.9,0.3,1.4,0.4
	c0.1,0,0.2,0,0.2,0.1c2.8,0.7,5.8,1.3,8.9,2.1c0.3,0,0.7,0,1,0c3-0.9,6.1-1.5,9.1-2.4c0.1,0,0.1,0,0.2-0.1c0.5-0.2,1-0.3,1.5-0.5
	c0.2-0.1,0.3-0.1,0.5-0.2c0.5-0.2,0.9-0.4,1.4-0.5c0.2-0.1,0.3-0.1,0.5-0.2c0.6-0.3,1.2-0.5,1.8-0.9
	C243,446.1,243.1,432.1,233.3,426.5z M217,450c-8.1-0.1-13.1-4.4-13-11.3c0.1-7.1,5-11,13.8-10.8c8.3,0.1,12.9,4.2,12.7,11.3
	C230.3,446,225.1,450.2,217,450z"
                    />
                    <path
                      class="st0"
                      d="M217.3,456.2c0.2,0,0.4,0.1,0.5,0.1c0.2,0,0.3-0.1,0.5-0.1C217.9,456.2,217.6,456.2,217.3,456.2z"
                    />
                  </svg>
                </div>
              </div>
              <div className="section-five-right-one-right">
                <h4>Over 150 projects completed with Novo...</h4>
                <h6>
                  <span id="bold">Novo |</span> 150 Projects
                </h6>
              </div>
            </div>
            <hr className="section-five-line" />

            <div id="five-two" className="section-five-right-one">
              <div className="section-five-right-one-left">
                <div className="">
                  <Image
                    src="/vance.png"
                    alt="vance"
                    width={0}
                    height={0}
                    unoptimized
                    style={{ width: "120px", height: "auto" }}
                  />
                </div>
              </div>
              <div className="section-five-right-one-right">
                <h4>Over 150 projects completed with Novo...</h4>
                <h6>
                  <span id="bold">Novo |</span> 150 Projects
                </h6>
              </div>
            </div>
            <hr className="section-five-line" />

            <div className="section-five-right-one">
              <div className="section-five-right-one-left">
                <div className="">
                  <svg
                    version="1.1"
                    id="turner"
                    x="0px"
                    y="0px"
                    viewBox="0 0 193 54"
                  >
                    <path
                      class="st0"
                      d="M15,11.4H0V0h45.5v11.4H30V52H15L15,11.4z"
                    />
                    <path
                      class="st0"
                      d="M32.9,15.4h13.2v22.9c0,0,0.2,3.5,4,3.5c3.8,0,4.2-3.5,4.2-3.5V15.4H68v37.3H54.4v-3.5c0,0-4.2,4.7-11.2,4.7
	c-6.2,0-8.7-4.7-8.7-4.7s-1.5-2.6-1.5-6.3C32.9,39.3,32.9,15.4,32.9,15.4z"
                    />
                    <path
                      class="st0"
                      d="M82.3,15.4H69v37.3h13.6V32c0,0,0.6-4.7,7.7-5.6h2.3V15.8h-2.3c0,0-6,0.6-8,5.2V15.4z"
                    />
                    <path
                      class="st0"
                      d="M182.6,15.4h-13.3v37.3h13.6V32c0,0,0.6-4.7,7.7-5.6h2.3V15.8h-2.3c0,0-6,0.6-8,5.2V15.4z"
                    />
                    <path
                      class="st0"
                      d="M107.5,14.8H94.1v37.3h13.3V30.2c0,0,0.8-3.9,4.1-3.9c3.3,0,4.1,3.9,4.1,3.9V52h13.2V24.7
	c0,0-0.2-10.8-9.8-10.8c0,0-6.6-0.2-11.6,5.1V14.8z"
                    />
                    <path
                      class="st0"
                      d="M148.3,13.9c0,0-18.2-0.2-18.2,19.8c0,0-0.2,19.6,18.2,19.6c0,0,16.2,1.3,18.9-14.3h-12.4c0,0-1.7,5.1-5.8,5.1
	c-4.2,0-5.7-6-5.9-7.3h24.6C167.6,36.9,169.6,13.9,148.3,13.9z M143.2,28.3c0,0,1.4-5.7,5.5-5.7c4.9,0,6,5.7,6,5.7H143.2z"
                    />
                  </svg>
                </div>
              </div>
              <div className="section-five-right-one-right">
                <h4>Over 150 projects completed with Novo...</h4>
                <h6>
                  <span id="bold">Novo |</span> 150 Projects
                </h6>
              </div>
            </div>
            <hr className="section-five-line" />

            <div className="section-five-right-one">
              <div className="section-five-right-one-left">
                <div className="">
                  <svg
                    version="1.1"
                    id="xl"
                    x="0px"
                    y="0px"
                    viewBox="0 0 200 34.8"
                  >
                    <path
                      class="st0"
                      d="M178.1,23.3c-1.4,0-2.6-0.6-3.5-1.7c-0.9-1.2-1.3-2.7-1.2-4.2c-0.1-1.5,0.4-3,1.2-4.2c1.6-1.9,4.4-2.2,6.3-0.6
	c0.2,0.2,0.5,0.4,0.6,0.6c0.9,1.2,1.3,2.7,1.3,4.2c0.1,1.5-0.4,3-1.3,4.2C180.7,22.8,179.4,23.4,178.1,23.3z M178.1,13.7
	c-1.5,0-2.4,1.5-2.4,3.8s0.9,3.8,2.4,3.8s2.4-1.5,2.4-3.8S179.5,13.7,178.1,13.7z M155.1,23.3c-1.4,0-2.7-0.6-3.5-1.6
	c-0.9-1.2-1.3-2.7-1.3-4.2c-0.1-1.5,0.4-3,1.3-4.2c0.8-1.1,2.1-1.7,3.5-1.6c1.7,0,3.2,1.1,3.8,2.7l-1.9,0.8c-0.2-0.9-1-1.5-1.9-1.5
	c-1.5,0-2.5,1.5-2.5,3.8c0,1,0.2,1.9,0.7,2.7c0.5,1,1.7,1.4,2.7,0.9c0.6-0.3,0.9-0.8,1.1-1.4l1.9,0.8
	C158.4,22.2,156.9,23.3,155.1,23.3z M144.2,23.3c-2.1,0.2-3.9-1.3-4.1-3.4c0-0.2,0-0.5,0-0.7v-7.4h2.3v7.4c0,1.3,0.7,2.1,1.9,2.1
	s1.9-0.8,1.9-2.1v-7.4h2.3v7.4c0.2,2.1-1.4,3.9-3.5,4.1C144.7,23.4,144.4,23.4,144.2,23.3z M116.3,23.3c-1.4,0.1-2.8-0.5-3.8-1.5
	l1.1-1.8c0.7,0.8,1.7,1.2,2.7,1.2c0.9,0,1.6-0.5,1.6-1.2c0-0.8-0.9-1.2-1.9-1.6c-1.4-0.6-3.1-1.3-3.1-3.5c0-0.9,0.3-1.7,1-2.3
	c0.7-0.7,1.7-1,2.7-1c1.3,0,2.5,0.4,3.4,1.2l-1.1,1.7c-0.6-0.6-1.5-1-2.4-1c-0.7-0.1-1.3,0.4-1.3,1c0,0,0,0.1,0,0.1
	c0,0.7,0.8,1.1,1.8,1.5c1.4,0.6,3.2,1.3,3.2,3.6c0,0.9-0.3,1.8-1,2.5C118.4,23,117.4,23.4,116.3,23.3L116.3,23.3z M95.8,23.3
	c-1.4,0-2.6-0.6-3.5-1.7c-0.9-1.2-1.3-2.7-1.2-4.2c-0.1-1.5,0.4-3,1.2-4.2c0.8-1.1,2.1-1.7,3.5-1.6c1.4,0,2.6,0.6,3.5,1.7
	c0.9,1.2,1.3,2.7,1.3,4.2c0.1,1.5-0.4,3-1.3,4.2C98.4,22.8,97.2,23.4,95.8,23.3L95.8,23.3z M95.8,13.7c-1.5,0-2.4,1.5-2.4,3.8
	s0.9,3.8,2.4,3.8c1.5,0,2.4-1.5,2.4-3.8S97.3,13.7,95.8,13.7L95.8,13.7z M86,23.3c-1.4,0-2.7-0.6-3.5-1.6c-0.9-1.2-1.4-2.7-1.3-4.2
	c-0.1-1.5,0.4-3,1.3-4.2c0.9-1.1,2.1-1.7,3.5-1.6c1.7,0,3.2,1.1,3.8,2.7l-1.9,0.8c-0.2-0.9-1-1.5-1.9-1.5c-1.5,0-2.5,1.5-2.5,3.8
	c0,1,0.2,1.9,0.7,2.7c0.4,0.7,1.1,1.1,1.8,1.1c0.9-0.1,1.7-0.7,1.9-1.6l1.9,0.8C89.3,22.2,87.7,23.3,86,23.3L86,23.3z M197.3,23.3
	h-0.4v-2.9h0.6l0.7,2.1l0.7-2.1h0.6v2.9h-0.4v-2.4l-0.9,2.4h-0.1l-0.9-2.4L197.3,23.3L197.3,23.3z M195.7,23.3h-0.4v-2.6h-0.7v-0.3
	h1.7v0.3h-0.7L195.7,23.3L195.7,23.3z M187,23.1h-2.3V11.9h2.3l3.7,6.6v-6.6h2.3v11.3h-2.2l-3.9-6.9V23.1L187,23.1z M132.5,23.1
	h-2.3V11.9h4.2c0.9,0,1.8,0.3,2.5,1c0.6,0.7,1,1.6,1,2.6c0.1,1.4-0.7,2.7-2,3.2l2.1,4.5h-2.5l-1.7-4.1h-1.2L132.5,23.1L132.5,23.1z
	 M132.5,13.9v3.2h1.6c0.8,0,1.5-0.6,1.5-1.4c0-0.1,0-0.1,0-0.2c0.1-0.8-0.5-1.5-1.3-1.6c-0.1,0-0.1,0-0.2,0L132.5,13.9z M104.7,23.1
	h-2.3V11.9h2.3l3.7,6.6v-6.6h2.3v11.3h-2.2l-3.9-6.9V23.1L104.7,23.1z M164.8,23.1h-2.3v-9.3H160v-2h7.3v2h-2.5L164.8,23.1
	L164.8,23.1z M126,23.1h-2.3v-9.3h-2.5v-2h7.3v2H126L126,23.1L126,23.1z M171.4,23.1h-2.3V11.9h2.3V23.1L171.4,23.1z"
                    />
                    <rect
                      x="2.2"
                      y="1.1"
                      class="st1"
                      width="29.3"
                      height="29.3"
                    />
                    <rect
                      x="42.4"
                      y="1.1"
                      class="st1"
                      width="29.3"
                      height="29.3"
                    />
                    <path
                      class="st0"
                      d="M74,34.3H39.6V0H74V34.3L74,34.3z M50.8,7.5v19.6h12.9v-4.4h-7.9V7.5H50.8z"
                    />
                    <path
                      class="st0"
                      d="M34.3,34.3H0V0h34.3V34.3L34.3,34.3z M17.2,20.7L17.2,20.7l4.3,6.6h6l-6.8-10.1l6.4-9.5h-6l-3.8,6.1l-3.8-6.1
	h-6l6.4,9.5l-6.8,10h6L17.2,20.7L17.2,20.7z"
                    />
                  </svg>
                </div>
              </div>
              <div className="section-five-right-one-right">
                <h4>Over 150 projects completed with Novo...</h4>
                <h6>
                  <span id="bold">Novo |</span> 150 Projects
                </h6>
              </div>
            </div>
            <hr className="section-five-line" />
          </div>
        </div>
      </div>

      {/* <div className="section-six">
        <div className="section-six-header">
          <h1>OUR ACHIEVEMENTS</h1>
          <p>
            We assign each project a mechanical engineer to field-measure,
            detail, and supervise fabrication and installation. We provide an
            unsurpassed level of care and precision. Choose Tashe Power India
            Works as your partner, and we will make you look great. As evidence,
            we present the following achievements.
          </p>
        </div>

        <div className="section-six-content">
          <div className="section-six-content-box-1">
            <div className="section-six-content-box-1-image">
              <Image
                src="box1.jpeg"
                alt="box-1 Image"
                width={0}
                height={0}
                unoptimized
              />
            </div>
            <div className="section-six-content-box-1-text">
              <h3>Clients</h3>
              <p>
                Tashe Power India Works is one of the top design/build
                miscellaneous metals companies in Northern California,
                pre-qualified with 90% of the largest commercial contractors in
                Silicon Valley (a growing list).
              </p>
            </div>
          </div>

          <div className="section-six-content-box-1">
            <div className="section-six-content-box-1-image">
              <Image
                src="box2.jpeg"
                alt="box-1 Image"
                width={0}
                height={0}
                unoptimized
              />
            </div>
            <div className="section-six-content-box-1-text">
              <h3>Clients</h3>
              <p>
                Tashe Power India Works is one of the top design/build
                miscellaneous metals companies in Northern California,
                pre-qualified with 90% of the largest commercial contractors in
                Silicon Valley (a growing list).
              </p>
            </div>
          </div>

          <div className="section-six-content-box-1">
            <div className="section-six-content-box-1-image">
              <Image
                src="box3.jpeg"
                alt="box-1 Image"
                width={0}
                height={0}
                unoptimized
              />
            </div>
            <div className="section-six-content-box-1-text">
              <h3>Clients</h3>
              <p>
                Tashe Power India Works is one of the top design/build
                miscellaneous metals companies in Northern California,
                pre-qualified with 90% of the largest commercial contractors in
                Silicon Valley (a growing list).
              </p>
            </div>
          </div>

          <div className="section-six-content-box-1">
            <div className="section-six-content-box-1-image">
              <Image
                src="box4.jpeg"
                alt="box-1 Image"
                width={0}
                height={0}
                unoptimized
              />
            </div>
            <div className="section-six-content-box-1-text">
              <h3>Clients</h3>
              <p>
                Tashe Power India Works is one of the top design/build
                miscellaneous metals companies in Northern California,
                pre-qualified with 90% of the largest commercial contractors in
                Silicon Valley (a growing list).
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <footer>
        <div className="footer-df">
          <div className="footer-left">
            <div className="footer-left-top">
              <h2>TTASHE POWER INDIA</h2>
              <p>
                A great place to work where people are inspired, involved and
                motivated.
              </p>
              <hr id="footer-line" />
            </div>
            <div className="footer-left-middle">
              <div className="footer-left-middle-left">
                <li id="first">
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
                  <h5>+919711718600</h5>
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
                    Unit 1: F-194, Khushkhera Industrial Area, Bhiwadi, District
                    Alwar, Rajasthan 301019 (India)
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
                    Unit 2: G1/172, Khushkhera Industrial Area, Bhiwadi,
                    District Alwar, Rajasthan 301019 (India)
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
                    Unit 3: F-73, Karoli Industrial Area, Bhiwadi, District
                    Alwar, Rajasthan 301019 (India)
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
