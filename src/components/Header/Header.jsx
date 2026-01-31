import { HeaderSec, List, NavLinkSt } from "./Header.js";

export const Header = () => {
  return (
    <HeaderSec>
        <nav>
          <List>
            <li>
              <NavLinkSt to="/">Home</NavLinkSt>
            </li>
            <li>
              <NavLinkSt to="/movies">Movies</NavLinkSt>
            </li>
          </List>
        </nav>
    </HeaderSec>
  );
};