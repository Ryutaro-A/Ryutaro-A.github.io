import React from "react"
import Container from '@mui/material/Container';
import Profile from "../../components/profile"
import Resume from "../../components/resume"
import Footer from "../../components/footer"
import Header from "../../components/header"



const Publicatuons = () => {
    return (
    <Container className="mt-10">
    <Header />
    <div className="relative right-0">
      <ul
        className="relative flex flex-wrap p-1 list-none rounded-xl bg-blue-gray-50/60"
        data-tabs="tabs"
        role="list"
      >
        <li className="z-30 flex-auto text-center">
          <a
            className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
            data-tab-target=""
            active=""
            role="tab"
            aria-selected="true"
            aria-controls="app"
          >
            <span className="ml-1">App</span>
          </a>
        </li>
        <li className="z-30 flex-auto text-center">
          <a
            className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
            data-tab-target=""
            role="tab"
            aria-selected="false"
            aria-controls="message"
          >
            <span className="ml-1">Messages</span>
          </a>
        </li>
        <li className="z-30 flex-auto text-center">
          <a
            className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
            data-tab-target=""
            role="tab"
            aria-selected="false"
            aria-controls="settings"
          >
            <span className="ml-1">Settings</span>
          </a>
        </li>
      </ul>
      <div data-tab-content="" className="p-5">
        <div className="block opacity-100" id="app" role="tabpanel">
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
            Because it's about motivating the doers. Because I'm here to follow
            my dreams and inspire other people to follow their dreams, too.
          </p>
        </div>
        <div className="hidden opacity-0" id="message" role="tabpanel">
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
            The reading of all good books is like a conversation with the finest
            minds of past centuries.
          </p>
        </div>
        <div className="hidden opacity-0" id="settings" role="tabpanel">
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
            Comparing yourself to others is the thief of joy.
          </p>
        </div>
      </div>
    </div>
    </Container>
    )
}

export default Publicatuons