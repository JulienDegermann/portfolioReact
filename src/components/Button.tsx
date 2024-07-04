import { useState } from "react";
import { Colors } from "../core/styles/colors";

export default function Button(
  { color, variant, text, onClick }: ButtonProps
) {

  const [buttonVariant, setButtonVariant] = useState(variant)

const toggleVariant = () => {
  const newVariant = buttonVariant === 'outlined' ? 'contained' : 'outlined'
  setButtonVariant(newVariant)
}
  return (
    <button
      onClick={onClick}
      style={{
        borderRadius: '4px',
        color: buttonVariant === 'outlined' ? color : Colors.DARK,
        background: buttonVariant === 'outlined' ? Colors.DARK : color,
        cursor: 'pointer',
        border: buttonVariant === 'outlined' ? `1px solid ${color}` : `1px solid transparent`,
        padding: '.5rem 2rem',
        transition: 'all .5s',
        height: 'max-content',
      }}
      onMouseEnter={toggleVariant}
      onMouseLeave={toggleVariant}
    >
      {text}
    </button>
  )
}

interface ButtonProps {
  color?: string
  variant?: 'outlined' | 'contained'
  text: string
  onClick?: () => void
}