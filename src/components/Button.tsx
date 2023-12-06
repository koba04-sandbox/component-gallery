import { MouseEventHandler } from "react"
import { clsx } from 'clsx';

import styles from "./Buttom.module.css"

type Props = {
  type?: "primary" | "normal"
  onClick?: MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
}

export const Button = ({ onClick, children, type = "normal" }: Props) => {
  return (
    <button className={clsx(styles.btn, { [styles.primary]: type === "primary" })} onClick={onClick}>{children}</button>
  )
}