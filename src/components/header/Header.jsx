import { useState } from "react";
import logo from "../../img/logo.png";
import navLeft from "../../img/nav-border-left.png";
import navRight from "../../img/nav-border-right.png";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <header>
      <div className="wrapper">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="nerdyeye logo" className="logo" />
          </a>
        </div>

        {/* <!-- navigation --> */}
        <nav className={`${isOpen ? "open" : ""}`}>
          <img src={navLeft} className="nav__border-left" alt="" />
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Academy</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
          <li>
            <a href="#">Workforce</a>
          </li>
          <li>
            <a href="#">Store</a>
          </li>
          <li>
            <a href="#">Affiliate</a>
          </li>
          <img src={navRight} className="nav__border-right" alt="" />
        </nav>
        {/* <!-- end of navigation --> */}

        <div className="user-account">
          <li className="cart">
            <a href="#">
              {/* <!-- The full svg paths are written to allow for use of css to change the stroke and fill colors --> */}
              {/* <!-- beginning of shopping cart icon --> */}
              <svg
                width="34"
                height="31"
                viewBox="0 0 34 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.676 28.8959C11.676 29.1255 11.6079 29.35 11.4803 29.5409C11.3528 29.7318 11.1714 29.8806 10.9593 29.9685C10.7472 30.0564 10.5137 30.0794 10.2885 30.0346C10.0633 29.9898 9.85642 29.8792 9.69405 29.7168C9.53168 29.5544 9.42111 29.3476 9.37631 29.1224C9.33152 28.8972 9.35451 28.6637 9.44238 28.4516C9.53025 28.2394 9.67906 28.0581 9.86999 27.9305C10.0609 27.803 10.2854 27.7349 10.515 27.7349C10.8229 27.7349 11.1182 27.8572 11.336 28.0749C11.5537 28.2926 11.676 28.5879 11.676 28.8959V28.8959Z"
                  stroke="black"
                  strokeLineCap="round"
                  strokeLineJoin="round"
                />
                <path
                  d="M24.868 28.8959C24.868 29.1255 24.7999 29.35 24.6724 29.5409C24.5448 29.7318 24.3635 29.8806 24.1513 29.9685C23.9392 30.0564 23.7057 30.0794 23.4805 30.0346C23.2553 29.9898 23.0484 29.8792 22.8861 29.7168C22.7237 29.5544 22.6131 29.3476 22.5683 29.1224C22.5235 28.8972 22.5465 28.6637 22.6344 28.4516C22.7223 28.2394 22.8711 28.0581 23.062 27.9305C23.2529 27.803 23.4774 27.7349 23.707 27.7349C24.0149 27.7349 24.3102 27.8572 24.528 28.0749C24.7457 28.2926 24.868 28.5879 24.868 28.8959V28.8959Z"
                  stroke="black"
                  strokeLineCap="round"
                  strokeLineJoin="round"
                />
                <path
                  d="M1 5.05713H5.762L8.952 21.1571C9.05778 21.7083 9.3545 22.2046 9.78997 22.5587C10.2254 22.9128 10.7718 23.102 11.333 23.0931H22.9C23.462 23.1032 24.0096 22.9145 24.4461 22.5603C24.8826 22.2061 25.1801 21.7092 25.286 21.1571L27.186 11.0711H6.952"
                  stroke="black"
                  strokeLineCap="round"
                  strokeLineJoin="round"
                />
                <path
                  d="M25.268 17C29.6863 17 33.268 13.4183 33.268 9C33.268 4.58172 29.6863 1 25.268 1C20.8497 1 17.268 4.58172 17.268 9C17.268 13.4183 20.8497 17 25.268 17Z"
                  fill="#020101"
                />
                <path
                  d="M26.25 4.158C27.5474 4.158 28.5414 4.58733 29.232 5.446C29.9227 6.29533 30.268 7.51333 30.268 9.1C30.268 10.6867 29.9227 11.9093 29.232 12.768C28.5414 13.6267 27.5474 14.056 26.25 14.056C24.962 14.056 23.968 13.6267 23.268 12.768C22.5774 11.9093 22.232 10.6867 22.232 9.1C22.232 7.51333 22.5774 6.29533 23.268 5.446C23.968 4.58733 24.962 4.158 26.25 4.158ZM26.25 4.928C25.2607 4.928 24.5094 5.28267 23.996 5.992C23.4827 6.692 23.226 7.728 23.226 9.1C23.226 10.472 23.4827 11.5127 23.996 12.222C24.5094 12.922 25.2607 13.272 26.25 13.272C27.2394 13.272 27.9907 12.922 28.504 12.222C29.0267 11.5127 29.288 10.472 29.288 9.1C29.288 7.728 29.0267 6.692 28.504 5.992C27.9907 5.28267 27.2394 4.928 26.25 4.928Z"
                  fill="white"
                />
              </svg>
              {/* <!-- end of shopping cart icon --> */}
            </a>
          </li>

          {/* <!-- account division --> */}
          <div className={`account-details ${isOpen ? "show" : ""}`}>
            {/* <!-- beginning of user icon --> */}
            <svg
              className="user-icon"
              width="24"
              height="27"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.2259 26V23C23.2825 21.4682 22.7294 19.9765 21.6879 18.8518C20.6465 17.7271 19.2016 17.0612 17.6699 17H6.55995C5.02832 17.0612 3.58342 17.7271 2.54195 18.8518C1.50048 19.9765 0.947404 21.4682 1.00395 23V26"
                stroke="black"
                strokeLineCap="round"
                strokeLineJoin="round"
              />
              <path
                d="M18.1149 7C18.1149 8.18669 17.763 9.34673 17.1037 10.3334C16.4445 11.3201 15.5074 12.0892 14.411 12.5433C13.3147 12.9974 12.1083 13.1162 10.9444 12.8847C9.7805 12.6532 8.71141 12.0818 7.87229 11.2426C7.03318 10.4035 6.46173 9.33443 6.23022 8.17054C5.99871 7.00666 6.11753 5.80026 6.57165 4.7039C7.02578 3.60754 7.79481 2.67047 8.78151 2.01118C9.7682 1.35189 10.9282 1 12.1149 1C13.7062 1 15.2324 1.63214 16.3576 2.75736C17.4828 3.88258 18.1149 5.4087 18.1149 7Z"
                stroke="black"
                strokeLineCap="round"
                strokeLineJoin="round"
              />
            </svg>
            {/* <!-- end of user icon --> */}

            <span>My Account</span>

            {/* <!-- beginning of chevron down --> */}
            <svg
              className="down-arrow"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5658 14.2617L4.2533 8.94922C3.88611 8.58203 3.88611 7.98828 4.2533 7.625L5.13611 6.74219C5.5033 6.375 6.09705 6.375 6.46033 6.74219L10.226 10.5078L13.9916 6.74219C14.3588 6.375 14.9525 6.375 15.3158 6.74219L16.1986 7.625C16.5658 7.99219 16.5658 8.58594 16.1986 8.94922L10.8861 14.2617C10.5267 14.6289 9.93298 14.6289 9.5658 14.2617Z"
                fill="black"
              />
            </svg>
            {/* <!-- end of chevron down --> */}
          </div>
          {/* <!-- end of account division --> */}

          {/* <!-- hamburger icon --> */}
          <svg
            className="hamburger"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleClick}
          >
            <path
              d="M3.26807 12H21.2681"
              stroke="black"
              strokeWidth="2"
              strokeLineCap="round"
              strokeLineJoin="round"
            />
            <path
              d="M3.26807 6H21.2681"
              stroke="black"
              strokeWidth="2"
              strokeLineCap="round"
              strokeLineJoin="round"
            />
            <path
              d="M3.26807 18H21.2681"
              stroke="black"
              strokeWidth="2"
              strokeLineCap="round"
              strokeLineJoin="round"
            />
          </svg>
          {/* <!-- end of hamburger icon --> */}
        </div>
      </div>
    </header>
    // <!-- end of header section -->
  );
};

export default Header;
