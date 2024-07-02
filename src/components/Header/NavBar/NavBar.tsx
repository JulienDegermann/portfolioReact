import NavItem from './NavItem/NavItem';
import { navLinks } from './index.ts';

export default function NavBar() {
  return (
    <nav
      style={{
        position: 'relative'      
      }}
    >
      <ul
        style={{
          top: '0',
          right: '0',
          display: 'flex',
          flexDirection: 'row',
          // alignItems: 'center',
          justifyContent: 'flex-end',
          alignContent: 'center',
          padding: '0',
          margin: '0',
          transition: 'all 0.25s',
          flex: '1'
        }}
      >
        {
          navLinks.map((link, index) => {
            return (
              <NavItem
                key={index}
                url={link.url}
                text={link.text}
              />
            )
          })
        }
      </ul>
    </nav >
  )
}