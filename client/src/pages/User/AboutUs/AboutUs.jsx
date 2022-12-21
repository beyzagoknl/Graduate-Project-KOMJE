import React from "react";
import { SocialIcon } from "react-social-icons";

//Bootstrap/css section
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "../AboutUs/aboutUs.css";

import beyzaPic from "./teamImg/beyza.jpg";
import baraahPic from "./teamImg/baraah.jpg";
import monesPic from "./teamImg/mones.jpg";
import abdullaPic from "./teamImg/abdulla.jpg";

const AboutUs = () => {
  return (
    <div>
      <div className="home-container">
        <h1 className="meet-team">Meet our team</h1>
        <br />

        <div className="team-member-box">
          <div>
            <img src={monesPic} alt="teamPic1" className="team-pic" />
            <hr />
            <div className="data-box">
              <p className=" title-app">Mones Hamad</p>
              <div className="icon-social-box">
                <SocialIcon
                  className="icon-social"
                  url="https://www.linkedin.com/in/mones-hamd-313ba722b/"
                  style={{ height: 30, width: 30 }}
                />
                <SocialIcon
                  className="icon-social"
                  url="https://github.com/Mones-Hamd"
                  style={{ height: 30, width: 30 }}
                />
              </div>
            </div>
          </div>
          <div>
            <p className="paragraph paragraph-app">
              “You dont have to be great to start, But you have to start to be
              great. (Zig Zigglar)“ <br />
              therefore, I sm starting my career as a junior web developer to
              create the greatness that every web developer aspire to, and I
              think it will be a good start after completing this project that
              taught me a new skills .<br />
              As a funny fact about me, If i start a conversation with “Guess
              what ...“, make sure after that sentence there is a negative
              sentence for instanse “I found a bug“
            </p>
          </div>
        </div>

        <div className="team-member-box">
          <div>
            <img src={beyzaPic} alt="teamPic2" className="team-pic" />
            <hr />
            <div className="data-box">
              <p className="title-app">Beyza Gök</p>

              <div className="icon-social-box">
                <SocialIcon
                  className="icon-social"
                  url="https://www.linkedin.com/in/beyza-g%C3%B6k-b7a218246/"
                  style={{ height: 30, width: 30 }}
                />
                <SocialIcon
                  className="icon-social"
                  url="https://github.com/beyzagoknl"
                  style={{ height: 30, width: 30 }}
                />
              </div>
            </div>
          </div>
          <div>
            <p className="paragraph paragraph-app">
              “Hello, I am Beyza, here I am helping you as a software-engineer.
              I am here to create great comfort with little touches, of course I
              do it in the most fancy way possible. Speed chess, kickboxing and
              tennis are my passions. Exploring the diversity in the world
              improves my perspective on my profession and my career. Uniqueness
              in diversity, unity in diversity here is my life motto”
            </p>
          </div>
        </div>

        <div className="team-member-box">
          <div>
            <img src={abdullaPic} alt="teamPic1" className="team-pic" />
            <hr />
            <div className="data-box">
              <p className="title-app">Abdullah Samur</p>
              <div className="icon-social-box">
                <SocialIcon
                  className="icon-social"
                  url="https://www.linkedin.com/in/abdullah-samur-282424241/"
                  style={{ height: 30, width: 30 }}
                />
                <SocialIcon
                  className="icon-social"
                  url="https://github.com/B1gB4dB4ng"
                  style={{ height: 30, width: 30 }}
                />
              </div>
            </div>
          </div>
          <div>
            <p className="paragraph paragraph-app">
              Hi there! ,It is Abdullah ,I am junior web developer ,I love
              solving issues with my own way and creating some cool stuff. We
              enjoyed and learned a lot while building the application ,hope you
              enjoy while you are using it too!
            </p>
          </div>
        </div>

        <div className="team-member-box">
          <div>
            <img src={baraahPic} alt="teamPic1" className="team-pic" />
            <hr />
            <div className="data-box">
              <p className="title-app">Baraah Ranneh</p>
              <div className="icon-social-box">
                <SocialIcon
                  className="icon-social"
                  url="https://www.linkedin.com/in/baraah-ranneh/"
                  style={{ height: 30, width: 30 }}
                />
                <SocialIcon
                  className="icon-social"
                  url="https://github.com/Baraah-Rn"
                  style={{ height: 30, width: 30 }}
                />
              </div>
            </div>
          </div>
          <div>
            <p className="paragraph paragraph-app">
              In a world full of uncertainties, I`ve found myself in a word full
              of adventurers,challenges, puzzles to be tackled and solved. As a
              fresh web-developer I know there is still a lot to learn ahead,
              but for me it`s a matter of experiencing the journey rather than
              the distention. Enjoy using our app and you can always reach us
              for help and feedback
            </p>
          </div>
        </div>

        <div className="team-member-box">
          <div>
            <img
              src="https://avatars.githubusercontent.com/u/82180752?v=4"
              alt="teamPic1"
              className="team-pic"
            />
            <hr />
            <div className="data-box">
              <p className="title-app">Akın Tanış</p>
              <div className="icon-social-box">
                <SocialIcon
                  className="icon-social"
                  url="https://www.linkedin.com/in/akin-tanis/"
                  style={{ height: 30, width: 30 }}
                />
                <SocialIcon
                  className="icon-social"
                  url="https://github.com/rakin-tanis"
                  style={{ height: 30, width: 30 }}
                />
              </div>
            </div>
          </div>
          <div>
            <p className="paragraph paragraph-app">
              Thank you very much. Because it is necessary to choose the time to
              do the exercise of the body that is convenient to be aware of the
              fact that it should be avoided? He runs away from the rougher
              often, who wants trouble and who does not!
              <span role="img" aria-label="Grinning face">
                😀
              </span>
            </p>
          </div>
        </div>
        <div className="teamIntro-container welcoming-section">
          <h1 className="first-team-title">Making A Difference</h1>
          <p className="aboutUs-paragraph paragraph-app">
            Founded with the mission to create digital invitations that would
            provide all of the elegance of traditional invites without any of
            the waste, helping event hosts, and be more eco-friendly is our
            ultimate goal.
            <br />
            Our online invitations will continue to do more than just save
            paper. Together we can invite a greener future.
          </p>
        </div>

        <div className="faq">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <h1>F&Q</h1>
            <div className="accordion-item">
              <h3 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  How to write invitation card?
                </button>
              </h3>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Writing an invitation card is simple. Address your card to the
                  person you’re inviting; name the event you’re inviting them
                  to; spell out the date, time and location; and provide contact
                  details so they can RSVP. Be sure to note if you want to
                  mention any thing in your invitation.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  What do you include on an invitation?
                </button>
              </h3>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  An invitation card should include text that describes the
                  basic wedding details, images or illustrations to make the
                  card stand out and white space to balance it all out.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Canceling the invitation
                </button>
              </h3>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Using Komje it will be easy to cancel you invitation, just
                  click on <code> Cancel invitation button</code>
                  and we will send an email for all guests to inform them.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
