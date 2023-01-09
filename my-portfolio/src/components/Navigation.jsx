import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navigation({ scroll }) {
  console.log(scroll);
  let headerClass = "header";

  if (scroll > 0) {
    headerClass += " header-scrolled";
  }
  if (scroll > 683) {
    headerClass = "header";
  }
  if (scroll >= 2584) {
    headerClass += " header-scrolled";
  }
  return (
    <header
      className={
        headerClass
      } /* className={"header" + (props.scroll ? "" : " header-scrolled")} */
    >
      <nav>
        <ul>
          <li>
            <HashLink to="/#">Home</HashLink>
          </li>
          <li>
            <HashLink to="/#page2">About</HashLink>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
