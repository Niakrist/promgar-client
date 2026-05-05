import React from "react"

interface IInputProps extends React.ComponentProps<'input'> {
  type: 'text' | "email"
}

export const Input = ({ type }: IInputProps) => {
  return <input type={type} />
}