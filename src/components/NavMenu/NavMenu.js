import React from "react";
import { isMobile } from "react-device-detect";
import OffCanvas from "react-aria-offcanvas";

import { RouterLink } from "../../components";
import { HTMLEntities } from "../../utils/stringUtils";
import styles from "./NavMenu.css";
import hamburgerSvg from "../../assets/images/hamburger.svg";

class NavMenu extends React.Component {
  state = {
    isOpen: false,
  };

  open = () => {
    this.setState({ isOpen: true });
  };

  close = () => {
    this.setState({ isOpen: false });
  };

  render() {
    if (isMobile) {
      return (
        <>
          <span
            id="menu-button"
            aria-label="Menu"
            aria-controls="menu"
            aria-expanded={this.state.isOpen}
            onClick={this.open}
            className={styles.BurgerMenuOpenIcon}
          >
            <img src={hamburgerSvg} alt="Menu" width="25px" />
          </span>
          <OffCanvas
            height="100%"
            width="250px"
            style={{
              content: {
                background: "var(--superlighteal)",
                boxShadow: "-1px 0 4px 0 var(--gray)",
              },
            }}
            isOpen={this.state.isOpen}
            onClose={this.close}
            labelledby="menu-button"
          >
            <div className={styles.BurgerMenu}>
              <span onClick={this.close} className={styles.BurgerMenuCloseIcon}>
                {HTMLEntities.multiplicationX}
              </span>
              <RouterLink onClick={this.close} to="/">Artister</RouterLink>
              <RouterLink onClick={this.close} to="/billetter">Billetter</RouterLink>
              <RouterLink onClick={this.close} to="/program">Program</RouterLink>
              <RouterLink onClick={this.close} to="/praktisk">Praktisk</RouterLink>
              <RouterLink onClick={this.close} to="/frivillig">Frivillig</RouterLink>
              <RouterLink onClick={this.close} to="/historikk">Historikk</RouterLink>
              <RouterLink onClick={this.close} to="/koronainfo">Koronainfo</RouterLink>
            </div>
          </OffCanvas>
        </>
      );
    } else {
      return (
        <>
          <div className={styles.NavMenu}>
            <RouterLink to="/">Artister</RouterLink>
            <RouterLink to="/billetter">Billetter</RouterLink>
            <RouterLink to="/praktisk">Praktisk</RouterLink>
            <RouterLink to="/frivillig">Frivillig</RouterLink>
            <RouterLink to="/historikk">Historikk</RouterLink>
            <RouterLink to="/koronainfo">Koronainfo</RouterLink>
          </div>
        </>
      );
    }
  }
}

export default NavMenu;
