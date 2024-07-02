import { useState } from "react";
import { Colors } from "../core/colors";

export default function Link (
  { color, variant, text, link, blank }: LinkProps
) {

  const [linkVariant, setLinkVariant] = useState(variant)

  const toggleVariant = () => {
    const newVariant = linkVariant === 'outlined' ? 'contained' : 'outlined'
    setLinkVariant(newVariant)
  }
  return (
    <a
      href={link}
      target={blank ? '_blank' : '_self'}
      style={{
        display: 'inline-block',
        borderRadius: '4px',
        color: linkVariant === 'outlined' ? color : Colors.DARK,
        background: linkVariant === 'outlined' ? Colors.DARK : color,
        cursor: 'pointer',
        border: linkVariant === 'outlined' ? `1px solid ${color}` : `1px solid transparent`,
        padding: '.5rem 1.5rem',
        transition: 'all .5s',
        height: 'max-content',
        margin: '1rem',
      }}
      onMouseEnter={toggleVariant}
      onMouseLeave={toggleVariant}
    >
      {text}
    </a>
  )
}

interface LinkProps {
  color?: string
  variant?: 'outlined' | 'contained'
  text: string
  link?: string
  blank?: boolean
}