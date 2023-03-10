import React, { Component } from "react";
import "./Footer.css";

function Footer() {
  return (
    <div class="row mtop">
      <div class="col-lg-12 mt-lg-4 mb-lg-4">
        <footer class="footer-distributed">
          <div class="footer-left">
            <h3>
              <span>
                <img height="50px" src="cdac-logo.png" alt="" />
              </span >
              Acts Library 
            
             
            </h3>

            <p class="footer-links">
              <a href="#" class="link-1">
                Home
              </a>

              <a href="#">About Library</a>

             

              {/* <a href="#">E-Book</a> */}

              <a href="#">Services</a>
              <a href="#">FeedBack</a>
              <a href="#">FAQ</a>
            </p>

            <p class="footer-company-name">
              Copyright Policy © 2022 Acts Pune
            </p>
          </div>

          <div class="footer-center">
            <div>
              <a href="https://www.bing.com/maps?q=cdac+pashan+pune+map&FORM=HDRSC4">
                <i class="fa fa-map-marker"></i>
              </a>
              <p>
                <span> Pune</span> Pashan
              </p>
            </div>

            <div>
              <i class="fa fa-phone"></i>
              <p>+91 9876543210</p>
            </div>

            <div>
              <i class="fa fa-envelope"></i>
              <p>
                <a href="mailto:support@company.com">support@cdacacts.com</a>
              </p>
            </div>
          </div>

          <div class="footer-right">
            <p class="footer-company-about">
              <span>About our Library</span>
              Cdac Acts has one of the biggest library in India with 5000+ books
              present.Our moto is to open the gateway to knowledge to most of
              the students.{" "}
            </p>

            <div class="footer-icons">
              <a href="https://www.facebook.com/OfficiallyACTS/">
                <i class="fa fa-facebook"></i>
              </a>
              <a href="https://twitter.com/cdacindia?lang=en">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/school/c-dac/">
                <i class="fa fa-linkedin"></i>
              </a>
             
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
