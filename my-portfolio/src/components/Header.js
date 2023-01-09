import Navigation from "./Navigation";
import { useScrollHandler } from "../hooks/useScrollHandler";

function Header() {
  const scroll = useScrollHandler();

  return <Navigation scroll={scroll} /* clase={clase} */ />;
}

export default Header;
