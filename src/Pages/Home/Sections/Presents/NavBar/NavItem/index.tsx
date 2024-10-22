import { useState } from 'react';
import { Colors } from '../../../../../../core/styles/colors.ts';

export default function NavItem(
  { url, text, imageUrl }: NavItemProps
) {

  // const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <li
      onMouseEnter={() => { setHovered(true) }}
      onMouseLeave={() => { setHovered(false) }}
    >

      <a
        href={url}
        style={{
          display: 'inline-block',
          width: '100%',
          padding: '.5rem 1rem',
          paddingLeft: hovered ? '3rem' : '1rem',
          textAlign: 'right',
          letterSpacing: hovered ? '.7em' : '.2em',
          color: hovered ? Colors.DARK : Colors.LIGHT,
          textTransform: hovered ? 'uppercase' : 'lowercase',
          transition: 'all 0.25s',
          position: 'relative',
          fontSize: '2rem',
        }}
      >
        <span style={{
          content: '""',
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: hovered ? '100%' : 0,
          height: '100%',
          background: Colors.PRIMARY_TRANSPARENT,
          transition: 'all .25s ease-out',
          display: 'block',
          zIndex: -1,
        }}

        ></span>
        {imageUrl ? <img src={`../assets/images/${imageUrl}`} alt="" /> : text}
      </a>
    </li>
  )
}

export interface NavItemProps {
  url: string
  text?: string
  imageUrl?: string
}