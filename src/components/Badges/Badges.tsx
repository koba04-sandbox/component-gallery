import { css } from '../../styled-system/css';
import { SystemStyleObject } from "../../styled-system/types";

type Props = {
  label: string
}

export const Badges = ({ label }: Props) => {
  return (
    <span
      className={css(baseStyle)}>
        {label}
      </span>
  )
}

const baseStyle: SystemStyleObject = {
  display: "inline-block",
  p: "4px 8px",
  borderRadius: "24px",
  fontSize: "1.25rem",
  backgroundColor: "neutral",
  color: "white",
};
