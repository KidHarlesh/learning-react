import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import playStore from '../assets/play-store.svg';
import appleStore from '../assets/apple-store.svg';


const Navbar = () => {
  return (
    <nav className=" bg-light pt-[19px] pb-[11px] text-primary">
      <div className="container flex justify-between items-center ">
        <Link>
          <img src={logo} alt="logo" />
        </Link>
        <ul className="hidden lg:flex gap-[36px] xl:gap-[46px] ">
          <li className="font-bold">
            <Link>Home</Link>
          </li>
          <li className="font-bold">
            <Link>About</Link>
          </li>
          <li className="font-bold">
            <Link>How it works</Link>
          </li>
          <li className="font-bold">
            <Link>FAQ</Link>
          </li>
        </ul>
        <ul className="hidden lg:flex gap-5  xl:gap-[52px] ">
          <li>
            <Link>
              <img src={playStore} alt="playstore download button" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={appleStore} alt="applestore download button" />
            </Link>
          </li>
        </ul>
        <div className="lg:hidden">
          {" "}
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.624109 0.11026C0.18057 0.38141 -0.0753334 1.10138 0.0197585 1.81075C0.0785707 2.24971 0.413471 2.76817 0.717524 2.89103C0.887187 2.95964 5.33713 2.9817 15.1579 2.96264L29.3531 2.93505L29.5383 2.74152C29.8902 2.37379 30 2.07383 30 1.48028C30 0.886732 29.8902 0.586767 29.5383 0.219039L29.3531 0.0255076L15.0909 0.00532885C3.33584 -0.0111898 0.792699 0.00720562 0.624109 0.11026ZM0.624109 13.6255C0.180503 13.8968 -0.0753334 14.6167 0.0197585 15.326C0.0785707 15.765 0.413471 16.2835 0.717524 16.4064C0.886852 16.4748 4.69268 16.497 13.012 16.4779L25.0613 16.4503L25.2464 16.2568C25.5983 15.8891 25.7081 15.5891 25.7081 14.9956C25.7081 14.402 25.5983 14.1021 25.2464 13.7343L25.0613 13.5408L12.945 13.5206C2.97411 13.504 0.792431 13.5226 0.624109 13.6255ZM0.624109 27.1406C0.180369 27.4125 -0.0753334 28.1321 0.0197585 28.8413C0.0785707 29.2801 0.413404 29.7987 0.717524 29.922C0.885309 29.9899 3.24249 30.0126 8.18365 29.9935C15.3566 29.9658 15.4057 29.9643 15.5897 29.7721C15.9416 29.4044 16.0514 29.1044 16.0514 28.5109C16.0514 27.9173 15.9416 27.6174 15.5897 27.2496C15.4056 27.0572 15.3613 27.056 8.11659 27.0356C2.16013 27.0189 0.791291 27.0381 0.624109 27.1406Z"
              fill="#020636"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
}

export default Navbar