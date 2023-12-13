import { forwardRef, useId } from "react";
import { css } from "../../styled-system/css";
import { SystemStyleObject } from "../../styled-system/types";

type Props = {
  placeholder?: string,
  label?: string
  labelPosition?: "on" | "in" | "overlap"
  error?: string,
  errorPosition?: "block" | "inline"
}

export const Input = forwardRef<HTMLInputElement, Props>(({ label, placeholder, error, labelPosition = "on", errorPosition = "block" }: Props, ref) => {
  const id = useId();
  return (
    <span className={css(wrapperStyle)}>
      {label && <label htmlFor={id} className={css(labelStyle, labelPosition === "in" && inLabelStyle, labelPosition === "overlap" && overlapLabelStyle)}>{label}</label>}
      <span className={css(inputWrapperStyle, errorPosition === "inline" && { flexDirection: "row" })}>
        <input type="text" ref={ref} id={id} className={css(inputStyle, labelPosition === "in" && { paddingTop: "2rem" }, labelPosition === "overlap" && { paddingTop: "1.5rem"} )} placeholder={placeholder} />
        {error &&
          <span className={css(errorStyle)}>
            {errorPosition === "inline" && <span className={css(triangleStyle)} />}
            <span className={css(errorTextStyle)}>{error}</span>
          </span>
        }
      </span>
    </span>
  )
})
const inputStyle: SystemStyleObject = {
  display: "inline-block",
  padding: "8px",
  border: "solid 1px",
  borderColor: "neutralLight"
};

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
  position: "relative",
}

const inputWrapperStyle: SystemStyleObject = {
  display: "flex",
  flexDirection: "column",
}

const errorStyle: SystemStyleObject = {
  display: "flex",
  alignItems: "center"
}

const errorTextStyle: SystemStyleObject = {
  display: "inline-block",
  padding: "4px 8px",
  backgroundColor: "neutral",
  color: "white"
}

const triangleStyle: SystemStyleObject = {
  display: "inline-block",
  width: "16px",
  height: "16px",
  backgroundColor: "neutral",
  // 三角形の座標をそれぞれ指定する
  clipPath: "polygon(100% 0, 100% 100%, 20% 50%)"
}