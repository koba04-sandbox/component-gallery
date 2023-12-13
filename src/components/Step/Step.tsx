import { css } from '../../styled-system/css';
import { SystemStyleObject } from "../../styled-system/types";

type Props = {
  items: Array<{
    link: string,
    text: string,
    current?: boolean
  }>,
}

export const Step = ({ items }: Props) => {
  return (
    <ol className={css(baseStyle)}>
      {items.map(({ link, text, current}) => {
        return (
          <li key={text} className={css(itemStyle, current && { color: "neutral"})}>
            {current ?
              <span aria-current="page">{text}</span> :
              (
                <a href={link}>
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
  color: "neutralLighter",
  position: "relative",
  fontSize: "1.25rem",
  padding: "24px",
  width: "120px",
  textAlign: "center",

  _before: {
    content: '""',
    position: "absolute",
    top: "4rem",
    left: "50%",
    backgroundColor: "currentcolor",
    borderRadius: "50%",
    width: "12px",
    height: "12px",
    zIndex: 2,
  },
  _after: {
    content: '""',
    position: "absolute",
    top: "calc(4rem + 4px)",
    left: "50%",
    borderBottom: "solid 4px",
    borderColor: "neutralLight",
    width: "100%",
    zIndex: 1,
  },
  _lastOfType: {
    _after: {
      display: "none",
    },
  },
}
