import { StyledNavigationContronl } from "./StyledNavigationControl";
import Image from "next/image";
import Link from "next/link";
export const NavigationControl = ({
  downArrow = true,
  upArrow = true,
  height = 328,
  moreText = false,
  black = false,
  active,
  top = 0,
}) => {
  const links = [
    "#hero",
    "#about",
    "#advantages",
    "#francgizing",
    "#cost_count",
    "#investition_sum",
    "#start_path",
    "#presentation_form",
  ];
  return (
    <StyledNavigationContronl top={top} black={black} height={height}>
      <div className="leftDiv">
        <div className="lineDiv">
          <div className="line"></div>
        </div>
        <div className="arrows">
          {upArrow && (
            <Link href={links[active - 2]} className="upArrowButton">
              {!black && (
                <Image
                  src="/upArrow.svg"
                  alt="upArrow"
                  width={19}
                  height={35}
                />
              )}
              {black && (
                <Image
                  src="/upArrowBlack.svg"
                  alt="upArrowBlack"
                  width={19}
                  height={35}
                />
              )}
            </Link>
          )}
          {moreText && <p className="moreText">БІЛЬШЕ</p>}
          {!moreText && (
            <p className="number">
              <span className="fromNumber">{active}</span>/8
            </p>
          )}
          {downArrow && (
            <Link href={links[active]} className="upArrowButton">
              {!black && (
                <Image
                  src="/downArrow.svg"
                  alt="upArrow"
                  width={19}
                  height={35}
                />
              )}
              {black && (
                <Image
                  src="/downArrowBlack.svg"
                  alt="upArrow"
                  width={19}
                  height={35}
                />
              )}
            </Link>
          )}
        </div>
      </div>
      <ul className="links">
        {links.map((item, index) => (
          <li key={item}>
            <Link href={item} className={active - 1 === index ? "active" : ""}>
              <div className="point"></div>
            </Link>
          </li>
        ))}
      </ul>
    </StyledNavigationContronl>
  );
};
