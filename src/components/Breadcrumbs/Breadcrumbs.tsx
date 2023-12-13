import { css } from '../../styled-system/css';
import { SystemStyleObject } from "../../styled-system/types";

type Props = {
  items: Array<{
    link: string,
    text: string,
  }>,
}

export const Breadcrumbs = ({ items }: Props) => {
  return (
    <ol className={css(baseStyle)}>
      {items.map(({ link, text}, i) => {
        const active = i === items.length - 1;
        return (
          <li key={text} className={css(itemStyle, active && { backgroundColor: "neutralLight", _after: {
            display: "none"
          } })}>
            {active ?
              <span className={css(textSytle)} aria-current="page">{text}</span> :
              (
                <a href={link} className={css(linkStyle)}>
                  {text}
                </a>
              )
            }
          </li>
        );
      })}
    </ol>
  )
}

const baseStyle: SystemStyleObject = {
  display: "flex",
};

const itemStyle: SystemStyleObject = {
  display: "inline-block",
  borderWidth: "1px",
  borderRadius: "4px",
  borderColor: "neutralLighter",
  position: "relative",
  borderRightWidth: "0px",
}

const textSytle: SystemStyleObject = {
  display: "inline-block",
  padding: "8px 16px",
}

const linkStyle: SystemStyleObject = {
  display: "inline-block",
  padding: "8px 16px",
  width: "100%",
  height: "100%",
  _hover: {
    backgroundColor: "neutralLightest",
    _before: { backgroundColor: "neutralLightest",
    },
    _after: {
      backgroundColor: "neutralLightest",
    },
  },
  _before: {
    content: '""',
    display: "block",
    position: "absolute",
    top: "0px",
    left: "calc(100%)",
    width: "12px",
    height: "40px",
    backgroundColor: "neutralLighter",
    clipPath: "polygon(0 0, 100% 50%, 0 100%)",
    zIndex: 1,

  },
  _after: {
    content: '""',
    display: "block",
    position: "absolute",
    top: "0",
    left: "calc(100% - 1px)",
    width: "12px",
    height: "40px",
    backgroundColor: "white",
    clipPath: "polygon(0 0, 100% 50%, 0 100%)",
    zIndex: 2,

  },
}