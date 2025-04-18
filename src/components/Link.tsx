import { useState } from "react";
import { Colors } from "../core/styles/colors";

interface LinkProps {
  color?: string
  variant?: 'outlined' | 'contained'
  text?: string
  link?: string
  blank?: boolean
  image?: string
}

export default function Link(
  { color, variant, text, link, blank, image }: LinkProps
) {

  const [linkVariant, setLinkVariant] = useState(variant)
  const logo = image ? `../assets/images/networks/${image}` : null;

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
      {logo && <img src={logo} alt={`logo de ${text}`} style={{ width: '20px', height: '20px', marginRight: '10px' }} />}
      {image ? '' : text ? text : ''}
    </a>
  )
}

