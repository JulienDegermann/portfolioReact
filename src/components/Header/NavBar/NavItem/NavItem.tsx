import { useState } from 'react';
import { Colors } from '../../../../core/colors';

export default function NavItem(
  { url, text, imageUrl }: NavItemProps
) {

  // const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <li
      style={{
        textTransform: hovered ? 'uppercase' : 'lowercase',
        transition: 'all 0.25s',

      }}
      onMouseEnter={() => { setHovered(true) }}
      onMouseLeave={() => { setHovered(false) }}
      // onMouseDown={() => { setActive(true) }}
      // onMouseUp={() => { setActive(false) }}
    >
      <a
        href={url}
        style={{
          display: 'inline-block',
          width: '100%',
          padding: '.5rem 1rem',
          fontSize: hovered ? '2.4em' : '1.2em',
          textAlign: 'center',
          color: hovered ? Colors.PRIMARY : Colors.LIGHT,
          transition: 'all 0.25s',
        }}
      > {imageUrl ? <img src={`../assets/images/${imageUrl}`} alt="" /> : text}</a>
    </li>
  )
}

export interface NavItemProps {
  url: string
  text?: string
  imageUrl?: string
}