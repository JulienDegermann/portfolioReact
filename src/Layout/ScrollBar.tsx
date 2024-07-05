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
        height: '5px',
        backgroundColor: Colors.PRIMARY,
        borderRadius: '0 5px 5px 0',
        boxShadow: `0 0 10px 4px ${Colors.PRIMARY}`,
        zIndex: 1000,
      }
      }
    >
    </div>
  )
}