const AboutMe = () => {
  return (
    <div className="about-me">
      <section className="before-article">
        <div className="picture-container">
          <img
            src="https://pbs.twimg.com/profile_images/1487479147609812994/oYJ9NS7P_400x400.jpg"
            className="profile-picture"
          />
          <h2 className="projects">Portfolio</h2>
        </div>
      </section>

      <hr className="the-line" />

      <aside>
        <h2 id="about" className="side-header">
          About Me:
        </h2>
      </aside>

      <section>
        <article>
          <p className="bio">
            Hello! I am a Minnesotan living in Arizona. My hobbies include
            writing code, playing games, and producing my own music. I've been
            producing music for about 8 years now, and I currently have 2 albums
            out on Spotify, Apple Music, YouTube Music, and other platforms.
            I've always been interested in writing code for websites and video
            games, so this is the perfect opportunity for me.
          </p>
        </article>
      </section>
    </div>
  );
};

export default AboutMe;
