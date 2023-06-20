import Link from "next/link";

import { homeItems } from "../../data/mainMenuData";
import { isActiveParentChaild } from "../../utils/linkActiveChecker";
import { useRouter } from "next/router";

const MainMenu = ({ style = "" }) => {
  const router = useRouter();

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        <li
          className={`${
            isActiveParentChaild(homeItems, router.asPath) ? "current" : ""
          } menu-item-has-children`}
        >
          <Link href="/">
            <span className="mr-10">Home</span>
            {/* <i className="icon icon-chevron-sm-down" /> */}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
