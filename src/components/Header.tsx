import logo from "../assets/ms-logo-2.png"

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__bar">
        <div className="content-width site-header__bar-inner">
          <img
            className="site-header__logo"
            src={logo}
            alt="Site logo"
          />
        </div>
      </div>
    </header>
  );
}