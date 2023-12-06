import { MouseEventHandler } from "react"
import styles from "./Buttom.module.css"

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
}

export const Button = ({ onClick, children }: Props) => {
  return (
    <button className={styles.btn} onClick={onClick}>{children}</button>
  )
}