import { HTMLAttributes } from "react"

export type System = "Mac" | "Linux" | "Windows"

export interface SystemIconProps extends HTMLAttributes<SVGElement> {
  fill: string
}