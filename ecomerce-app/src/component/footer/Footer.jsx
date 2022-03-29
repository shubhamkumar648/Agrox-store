import React from 'react'

export default function Footer() {
  return (
    <div>
          <footer className="fotter__container">
          <div className="footer_header">
            <span className="font-l fs-l">
              Mady by<i className="fas fa-code code_color"></i>Shubham Kumar
            </span>
          </div>

          <div className="footer_social-icon">
            <ul>
              <li>
                <a href="https://github.com/shubhamkumar648" target="_blank">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/shubham8124" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/shubham-kumar8124"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </footer>
    </div>
  )
}
