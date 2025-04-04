import { SystemIconProps } from "@/types"
import {FC, useEffect, useState} from "react"

const ArrowDown: FC<SystemIconProps> = ({ fill, ...props }) => {
  return (
    <svg fill={fill} height="100px" width="100px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 330 330" xmlSpace="preserve"
      {...props}>
      <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
    </svg>
  )
}

export const ScrollTopArrowDown = () => {
  const [isScrolledUp, setIsScrolledUp] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // Show arrow only when at top of the page
      setIsScrolledUp(window.scrollY === 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isScrolledUp) return null

  return (
    <div style={{
      position: "fixed",
      left: "50%",
      bottom: "2%",
      transform: "translateX(-50%)",
      width: "40px",
      height: "40px",
      zIndex: 1000,
      cursor: "pointer",
      animation: "bounce 2s infinite",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <ArrowDown fill="rgba(255, 255, 255, 0.7)" />
    </div>
  )
}

export default ArrowDown