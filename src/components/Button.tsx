import { MouseEventHandler } from "react"

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
}

export const Button = ({ onClick, children }: Props) => {
  return (
    <button onClick={onClick}>{children}</button>
  )
}