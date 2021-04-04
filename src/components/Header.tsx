function Header() {
  return (
    <nav id="header" className="navbar navbar-expand-lg" aria-label="navbar">
      <div className="container-fluid">
        <div className="navbar-collapse justify-content-md-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Explorer
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/" aria-disabled="true">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/" aria-disabled="true">
                Link
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
