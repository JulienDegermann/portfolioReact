import { Colors } from "../core/styles/colors";
import { useContext } from "react";
import { ScrollContext } from "../hooks/contexts/useScroll";

export default function ScrollBar() {
  const { scrollPercentage } = useContext(ScrollContext);

  return (
    <div
      id="scrollBar"
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: `${scrollPercentage.toString()}%`,
        height: '2px',
        // backgroundColor: Colors.PRIMARY,
        backgroundColor: Colors.DARK,
        borderRadius: '0 5px 5px 0',
        zIndex: 1000,
      }
      }
    >
    </div>
  )
}