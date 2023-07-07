import about from "../assets/about.jpg";

const About = () => {
  return (
    <>
      <header>
        <div className="container  ">
          <div className="section-about-data ">
            <h1 className="about-heading">About Me</h1>
            <p className="hero-para">
              Welcome to my portfolio! My name is Neysha Budhathoki, and I am a
              young and enthusiastic individual from Morang, Nepal. Born on
              October 18, 2018, I have been blessed with a supportive and
              understanding family who have been my pillars of strength.
            </p>
            <p className="hero-para">
              From an early age, I have embraced life with a bubbly and dazzled
              spirit. Every day is an opportunity for me to explore, learn, and
              grow. Currently, I am enrolled in UKG and take pride in being the
              first girl in my class. Through my academic journey, I have
              demonstrated a strong work ethic and a thirst for knowledge.
            </p>
            <p className="hero-para">
              Dancing and traveling are my two greatest passions. When I dance,
              I feel a sense of freedom and joy that is indescribable. It is my
              way of expressing myself and connecting with the rhythm of life.
              Similarly, traveling allows me to discover new cultures,
              breathtaking landscapes, and make lifelong memories.
            </p>
            <p className="hero-para">
              I have been recognized for my achievements and hard work. In my
              nursery class, I was awarded as the first girl, securing the
              prestigious first prize. Moreover, my dedication to
              extracurricular activities has earned me various accolades and
              awards, fueling my motivation to excel in all aspects of life.
            </p>
            <p className="hero-para">
              My personality is characterized by traits such as hard work and
              patience. I believe that success comes to those who are willing to
              put in the effort and remain steadfast in the face of challenges.
              These qualities drive me to constantly push myself and strive for
              greatness.
            </p>
            <p className="hero-para">
              Looking ahead, I am passionate about technology. Even at my young
              age, I am captivated by the possibilities it offers and the impact
              it can have on our lives. I aspire to channel my passion into a
              future career where I can harness the power of technology to make
              a positive difference in the world.
            </p>
            <p className="hero-para">
              Thank you for taking the time to learn about me. I am excited
              about the opportunities that lie ahead and I am committed to
              leaving a lasting impact through my dedication, hard work, and
              passion for technology.
            </p>
          </div>
          <div className="section-hero-image ">
            <picture>
              <img id="animation" src={about} alt="" className="hero-img" />
            </picture>
          </div>
        </div>
      </header>
    </>
  );
};

export default About;
