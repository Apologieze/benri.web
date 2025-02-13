import { HTMLAttributes } from "react"

export type System = "mac" | "linux" | "windows"

export interface SystemIconProps extends HTMLAttributes<SVGElement> {
  fill: string
}