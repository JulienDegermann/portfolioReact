import NavItem from './NavItem';
import { routes } from '../../../../../core/routes.tsx';



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
          flexDirection: 'column',
          // alignItems: 'center',
          alignContent: 'center',
          padding: '0',
          margin: '0',
          transition: 'all 0.25s',
          flex: '1'
        }}
      >

        {
          routes.map((link, index) => (
            <NavItem
              key={index}
              url={link.url}
              text={link.text}
            />
          ))
        }
      </ul>
    </nav >
  )
}