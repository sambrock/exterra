import Logo from '../../images/logo.svg';

const Header = () => (
  <header className="fixed top-0 px-4 py-6 sm:p-12 z-10">
    <div className="w-28 sm:w-40"><a href="/"><img src={Logo} alt="Logo" /></a></div>
  </header>
)

export default Header;