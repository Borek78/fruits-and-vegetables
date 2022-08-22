import Header from "./Header";
import "./GoodBey.css";
import Borek from "../images/Borek3.png";
import YoutubeEmbed from "../functions/YouTubeEmbed.js";

const GoodBey = () => {
  return (
    <>
      <Header />
      <div className="goodbey-container">
        <div className="goodbey-letter">
          <p className="p-first">Congratulations. And Hi!</p>
          <div className="img-wrapper">
            <img src={Borek} alt="imgURL"></img>
          </div>
          <p>
            You have successfully placed an order in my experimental Fruits and
            Vegetables e-shop. I have created it to show that I know enough
            React, Redux, and Javacript to create a project that is a little bit
            more complex than a blog or porfolio page.
          </p>
          <p>
            Originally I just wanted to learn Redux. The freeCodeCamp´s video{" "}
            <a href="https://www.youtube.com/watch?v=zrs7u6bdbUw">
              Redux Tutorial - Beginner to Advanced
            </a>{" "}
            looked like a good tutorial. I was coding along the video and when I
            was finished with it, I realized I had enough tools to create an
            e-shop. That is how the Fruits and Vegetables e-shop came to be.
          </p>
          <p>
            I have also created two videos. They will walk you through all the
            functionality of the e-shop. The sound is not very good but you
            should understand what I say. And that is it. I hope you like the
            e-shop and the videos.
          </p>
          <p className="best-regards">Best Regards,</p>
          <p> Dalibor</p>
          <p>
            P.S. The code of the e-shop is available on my GitHub. The name of
            the repo is{" "}
            <a href=" https://github.com/Borek78/fruits-and-vegetables">
              fruits-and-vegetables.{" "}
            </a>
          </p>
        </div>
        <div className="first-video">
          <YoutubeEmbed embedId="zeMW8xuSt1g" />
        </div>
        <div>
          <YoutubeEmbed embedId="CoxhNFlGOVg" />
        </div>
      </div>
    </>
  );
};

export default GoodBey;
