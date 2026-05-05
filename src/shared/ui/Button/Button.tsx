import React from "react"

interface IButton extends React.ComponentProps<'button'> {
  children: React.ReactNode
}

export const Button = ({ children }: IButton) => {

  return <button>{children}</button>
} 