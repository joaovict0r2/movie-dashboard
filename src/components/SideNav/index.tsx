import DiscoverIcon from "assets/icons/Discover.svg";
import HomeIcon from "assets/icons/Squircle.svg";
import WatchlistIcon from "assets/icons/Watchlist.svg";

import { Container, ItemsContainer, NavItem } from "./style";

function SideNav() {
  return (
    <Container>
      <header>
        <p>TINY</p>
        <p>MOVIEZ</p>
      </header>

      <ItemsContainer>
        <p>Menu</p>

        <NavItem>
          <img src={DiscoverIcon} alt="Discover" />
          Home
        </NavItem>
        <NavItem>
          <img src={HomeIcon} alt="Discover" />
          Discover
        </NavItem>
        <NavItem>
          <img src={WatchlistIcon} alt="Discover" />
          Watchlist
        </NavItem>
      </ItemsContainer>
    </Container>
  );
}

export default SideNav;
