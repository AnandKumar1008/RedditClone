import React from "react";
import "./Rightsection.css";
import { GrShield } from "react-icons/gr";

const RightSection = () => {
  return (
    <div className="reddit_clone-right_section">
      <section className="reddit_clone-right_section_premium">
        <div className="reddit_clone-right_section_premium_heading">
          <GrShield className="reddit_clone-right_section_icon" />
          <div>
            <h4>Reddit Premium</h4>
            <p>The Best Reddit experience, with monthly coins</p>
          </div>
        </div>
        <button>Try Now</button>
      </section>
      <section className="reddit_clone-right_Secton_community">
        <p>
          Your Personal Reddit frontPage.Come here to check in with your
          favourite communities
        </p>
        <button>Create Post</button>
        <button>Create Community</button>
      </section>
      <footer className="reddit_clone-section_right_footer">
        <div>
          <a href="">user Agreement</a>
          <a href="">Content Policy</a>
          <a href="">Privacy Policy</a>
          <a href="">Modern Code of conduct</a>
        </div>
        <hr />
        <div>
          <a href="">English</a>
          <a href="">Deutsch</a>
          <a href="">Francais</a>

          <a href="">Italiano</a>
          <a href="">Espanol</a>
          <a href="">Portuges</a>
        </div>
        <hr />
        <p>Reddit,Inc &copy 2023 All rights reserved</p>
      </footer>
    </div>
  );
};

export default RightSection;
