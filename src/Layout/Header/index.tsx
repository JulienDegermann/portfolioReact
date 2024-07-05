import { Colors } from "../../core/styles/colors";
import NavBar from "./NavBar/NavBar";

export default function Header() {
  return (
    <header
      style={{
        position: 'sticky',
        width: '100%',
        height: '125px',
        top: 0,
        left: 0,  
        backgroundColor: Colors.DARK,
        padding: '1.5rem',
        display: 'flex',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        zIndex: 10,
      }}
    >
      <div
        className="container">
        <h1
          id="top"
          onClick={() => { window.scrollTo(0, 0) }}
          style={{
            cursor: 'pointer',
            textAlign: 'center',
            flex: '1',
            color: Colors.PRIMARY,
          }}
        >
          Julien Degermann [Développeur Full Stack]
        </h1>
        <NavBar />
      </div>

    </header >
  )
}