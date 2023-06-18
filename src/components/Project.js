const Project = ({ title, screenshot, description, url, githubUrl }) => {
  return (
    <div id="work">
      <div className="project-container">
        <div className="project-box">
          <div className="project">
            <a href={url} className="live-link" target="_blank">
              <h3 className="header">{title}</h3>
            </a>
            <img className="project-screenshot" src={screenshot} alt={title} />
            <p className="project-description">{description}</p>
            <div className="repo-container">
              <a href={githubUrl} className="repo" target="_blank">
                <span className="repo-text">GitHub Repository</span>
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  className="gh-logo"
                  alt="GitHub Logo"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="the-line" />
    </div>
  );
};

export default Project;
