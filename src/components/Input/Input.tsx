import { useId } from "react";
import { css } from "../../styled-system/css";
import { SystemStyleObject } from "../../styled-system/types";

const style: SystemStyleObject = {
  display: "inline-block",
  border: "solid 1px",
  borderColor: "neutralLight"
};

type Props = {
  placeholder?: string,
  label?: string
  labelPosition?: "on" | "in" | "overlap"
}

const labelStyle: SystemStyleObject = {
  display: "inline-block",
  fontSize: "1.25rem",
}

const inLabelStyle: SystemStyleObject = {
  position: "absolute",
  top: "0",
  left: "8px"
};

const overlapLabelStyle: SystemStyleObject = {
  position: "absolute",
  top: "-0.5rem",
  left: "8px",
  padding: "0px 2px",
  verticalAlign: "bottom",
  lineHeight: "0.7",
  backgroundColor: "white"
};

const wrapperStyle: SystemStyleObject = {
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  position: "relative"
}


export const Input = ({ label, placeholder,labelPosition = "on" }: Props) => {
  const id = useId();
  return (
    <span className={css(wrapperStyle)}>
      {label && <label htmlFor={id} className={css(labelStyle, labelPosition === "in" && inLabelStyle, labelPosition === "overlap" && overlapLabelStyle)}>{label}</label>}
      <input type="text" id={id} className={css(style, labelPosition === "in" && { paddingTop: "2rem" }, labelPosition === "overlap" && { paddingTop: "1.5rem"} )} placeholder={placeholder} />
    </span>
  )
}