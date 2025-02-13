import { SystemIconProps } from "@/types"
import { FC } from "react"

const Apple: FC<SystemIconProps> = ({ fill, ...props }) => {
  return (
    <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_20_52)">
        <path d="M7.39073 19.5955C2.98195 27.2461 5.7847 38.8563 10.6601 45.896C13.0937 49.4155 15.5575 52.5748 18.9322 52.5748C18.9958 52.5748 19.0596 52.5736 19.1249 52.571C20.7104 52.5077 21.8562 52.0196 22.964 51.5478C24.2077 51.0178 25.494 50.4698 27.5116 50.4698C29.431 50.4698 30.656 51 31.8405 51.5126C33.008 52.0177 34.2105 52.5402 35.9873 52.5069C39.7886 52.4361 42.1225 49.027 44.1817 46.0196C46.3304 42.8795 47.4083 39.8308 47.772 38.6657L47.7867 38.6193C47.8559 38.4123 47.7581 38.1862 47.5596 38.0951C47.5541 38.0926 47.534 38.0842 47.5283 38.0818C46.8589 37.808 40.987 35.2031 40.9253 28.1033C40.868 22.335 45.3303 19.2804 46.2253 18.7268L46.267 18.7008C46.3639 18.6384 46.4315 18.5394 46.4544 18.4262C46.4773 18.3131 46.4533 18.1955 46.3884 18.1004C43.3083 13.593 38.5875 12.9137 36.6868 12.832C36.411 12.8044 36.1264 12.7906 35.8405 12.7906C33.6081 12.7906 31.4697 13.6337 29.7516 14.3111C28.5657 14.7788 27.5413 15.1826 26.8348 15.1826C26.041 15.1826 25.0108 14.7738 23.8179 14.3005C22.2226 13.6674 20.4145 12.9499 18.5003 12.9499C18.4547 12.9499 18.4097 12.9505 18.3654 12.9513C13.9147 13.0168 9.70925 15.5631 7.39073 19.5955Z" fill={fill} />
        <path d="M36.6907 0.425499C33.9955 0.53527 30.7624 2.19431 28.83 4.45778C27.1877 6.36029 25.5834 9.53236 26.006 12.7297C26.0326 12.9298 26.1953 13.0842 26.3966 13.0997C26.5785 13.1139 26.7642 13.1211 26.9492 13.1213C29.5845 13.1213 32.4275 11.6633 34.369 9.31572C36.4124 6.83682 37.4456 3.65553 37.1331 0.805935C37.1084 0.582632 36.912 0.416779 36.6907 0.425499Z" fill={fill} />
      </g>
      <defs>
        <clipPath id="clip0_20_52">
          <rect width="52.1496" height="52.1496" fill={fill} transform="translate(0.425293 0.425171)" />
        </clipPath>
      </defs>
    </svg>

  )
}

export default Apple