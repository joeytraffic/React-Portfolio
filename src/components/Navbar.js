const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <h1>Joseph</h1>
        <nav>
          <ul>
            <li className="nav-link">
              <a href="#about">About Me</a>
            </li>
            <li className="nav-link">
              <a href="#work">Work</a>
            </li>
            <li className="nav-link">
              <a href="#contact">Contact Me</a>
            </li>
            <li className="nav-link">
              <a
                href="https://www.linkedin.com/in/josephtranvik/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
