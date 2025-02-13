import { SystemIconProps } from "@/types"
import { FC } from "react"

const Windows: FC<SystemIconProps> = ({ fill, ...props }) => {
  return (
    <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_20_46)">
        <path d="M24.3625 4.83229V24.79C24.3625 25.0261 24.5539 25.2175 24.79 25.2175H52.1405C52.3766 25.2175 52.568 25.0261 52.568 24.79V0.852673C52.568 0.728539 52.5141 0.610562 52.4202 0.529345C52.3265 0.448129 52.2022 0.41188 52.079 0.429662L24.7285 4.40928C24.5183 4.43988 24.3625 4.6201 24.3625 4.83229Z" fill={fill} />
        <path d="M21.3707 48.2913C21.4735 48.2913 21.5735 48.2544 21.6518 48.186C21.7448 48.1048 21.7981 47.9873 21.7981 47.8639V28.2098C21.7981 27.9737 21.6068 27.7823 21.3707 27.7823H0.868374C0.755012 27.7823 0.646268 27.8273 0.566077 27.9075C0.485886 27.9877 0.440918 28.0964 0.440918 28.2098L0.441944 45.0541C0.441944 45.2679 0.599761 45.4486 0.811266 45.4777L21.3126 48.2876C21.3319 48.29 21.3514 48.2913 21.3707 48.2913Z" fill={fill} />
        <path d="M0.871386 25.2175H21.3708C21.6069 25.2175 21.7983 25.0262 21.7983 24.7901V5.3292C21.7983 5.20575 21.7449 5.08846 21.6521 5.00724C21.5592 4.92602 21.4365 4.88875 21.3133 4.90568L0.795299 7.692C0.58311 7.7209 0.425122 7.90197 0.425293 8.11604L0.44393 24.7904C0.444272 25.0264 0.635601 25.2175 0.871386 25.2175Z" fill={fill} />
        <path d="M52.1405 52.5748C52.2429 52.5748 52.3426 52.538 52.4209 52.47C52.5143 52.3888 52.568 52.2711 52.568 52.1473L52.5748 28.2098C52.5748 28.0964 52.5298 27.9877 52.4496 27.9075C52.3695 27.8273 52.2607 27.7823 52.1473 27.7823H24.79C24.5539 27.7823 24.3625 27.9737 24.3625 28.2098V48.2995C24.3625 48.5126 24.5195 48.6931 24.7303 48.7229L52.0808 52.5707C52.1008 52.5734 52.1207 52.5748 52.1405 52.5748Z" fill={fill} />
      </g>
      <defs>
        <clipPath id="clip0_20_46">
          <rect width="52.1496" height="52.1496" fill={fill} transform="translate(0.425293 0.425232)" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Windows