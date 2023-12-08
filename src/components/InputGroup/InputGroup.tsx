import { useRef } from "react";
import { css } from "../../styled-system/css";
import { SystemStyleObject } from "../../styled-system/types";
import { Button } from "../Button";
import { Input } from "../Input";

type Props = {
  label: string
  onSubmit?: (text: string) => void
}

const wrapperStyle: SystemStyleObject = {
  display: "flex",
  gap: "1px"
}

export const InputGroup = ({ label, onSubmit }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <fieldset className={css(wrapperStyle)}>
      <Input ref={inputRef} />
      <Button
        label={label}
        size="small"
        onClick={() => {
          if (onSubmit) onSubmit(inputRef.current?.value || "")
        }}
      />
    </fieldset>
  )
}