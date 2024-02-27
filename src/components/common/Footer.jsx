import React from "react"
import { social } from "../data/dummydata"

const Footer = () => {
  return (
    <>
      <footer>
        {social.map((item) => (
          <>
            <i data-aos='zoom-in'>{item.icon}</i>
          </>
        ))}
        <p data-aos='zoom-in'>All Right Resceved &copy; 2024</p>
        <p data-aos='zoom-in'>Template Create By &copy; Venky Kumar</p>
      </footer>
    </>
  )
}

export default Footer
