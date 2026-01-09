import Button from "../Button/Button";
import LoginComponent from "../LoginComponent/LoginComponent";

const Navbar = () => {
  return (
    <header className="bg-tertiary">
      <div className="container flex justify-between">
        <Button href="/" isLink>
          Navbar
        </Button>
        <LoginComponent />
      </div>
    </header>
  );
};

export default Navbar;
