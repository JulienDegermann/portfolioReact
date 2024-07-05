import { Colors } from "../core/styles/colors";

export default function Footer() {
  return (
    <footer
      style={{
        height: '100px',
        backgroundColor: Colors.DARK,
        color: Colors.PRIMARY,
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex'
        }}
      >
        <p
          style={{
            textAlign: 'center',
            width: '100%'
          }}
        >
          Developed by Julien DEGERMANN</p>

      </div>

    </footer>
  )
}