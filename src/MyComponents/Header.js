import { Navbar, NavbarBrand } from 'reactstrap';

const Header = () => {

  return (
    <div>
      <Navbar color="primary" dark>
        <div>
          <NavbarBrand href="/" className="mr-auto">ToDoStack</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;