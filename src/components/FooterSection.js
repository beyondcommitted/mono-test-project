import React from "react";
import "../styles/FooterSection.css";

function FooterSection() {
  return (
    <div>
      <div className="footer-section-1">
        <hr className="hr-1" />

        <hr className="hr-2" />

        <p className="inventory">Shop Our Online Inventory</p>
      </div>

      <p className="inventory-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>
      <button className="inventory-button">
        <a className="link-1" href="https://www.google.com">
          Shop Online
        </a>
      </button>

      <p className="appt">Request An Appointment</p>

      <p className="appt-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>

      <button className="appt-button">
        <a className="link-2" href="https://google.com">
          Get Started
        </a>
      </button>

      <div className="footer-section-2">
        <button className="footer-button-1">
          <a className="footer-links" href="https://google.com">
            BRAND
          </a>
        </button>
        <button className="footer-button-2">
          <a className="footer-links" href="https://google.com">
            BESPOKE
          </a>
        </button>
        <button className="footer-button-3">
          <a className="footer-links" href="https://google.com">
            DETAILS
          </a>
        </button>
        <button className="footer-button-4">
          <a className="footer-links" href="https://google.com">
            LOOKS
          </a>
        </button>
        <button className="footer-button-5">
          <a className="footer-links" href="https://google.com">
            STUDIO
          </a>
        </button>
        <button className="footer-button-6">
          <a className="footer-links" href="https://google.com">
            WELLNESS
          </a>
        </button>
        <button className="footer-button-7">
          <a className="footer-links" href="https://google.com">
            MEMBERSHIP
          </a>
        </button>
        <button className="footer-button-8">
          <a className="footer-links" href="https://google.com">
            CONTACT
          </a>
        </button>
        <button className="privacy">
          <a className="footer-links" href="https://google.com">
            PRIVACY POLICY
          </a>
        </button>
        <p className="divider">|</p>
        <button className="site">
          <a className="footer-links" href="https://google.com">
            SITEMAP
          </a>
        </button>
        <p className="know">BE IN THE KNOW</p>
        <input className="input"></input>
        <button className="go">
          <a className="go-link" href="https://google.com">
            GO
          </a>
        </button>
      </div>
    </div>
  );
}

export default FooterSection;
