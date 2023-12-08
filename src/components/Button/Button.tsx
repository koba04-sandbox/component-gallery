import { MouseEventHandler } from "react"
import { css } from '../../styled-system/css';
import { SystemStyleObject } from "../../styled-system/types";

type Props = {
  type?: "primary" | "normal"
  onClick?: MouseEventHandler<HTMLButtonElement>
  label: string
  size?: 'large' | 'small'
}

export const Button = ({ onClick, label, type = "normal", size = "large" }: Props) => {
  return (
    <button
      className={css(baseStyle, type === "primary" ? primaryStyle : normalStyle, size === "small" && smallStyle)}
      onClick={onClick}
      >
        {label}
      </button>
  )
}

const baseStyle: SystemStyleObject = {
  display: "inline-block",
  fontSize: "1.25rem",
  p: "12px 24px",
  borderRadius: "4px",
  border: "none",
  boxShadow: "0 1px hsla(0, 0%, 0%, .2)",
};

const primaryStyle: SystemStyleObject = {
  color: "white",
  bg: { base: "primary", _hover: "primaryLight" }

};

const normalStyle: SystemStyleObject = {
  bg: { base: "neutralLighter", _hover: "neutralLight" }
};

const smallStyle: SystemStyleObject = {
  padding: "4px 8px"
}