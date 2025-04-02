import { FC } from "react"
import { Apple, Windows, Linux } from "./icons"
import { System, SystemIconProps } from "@/types"

const SYSTEMS: Record<System, FC<SystemIconProps>> = {
  Linux: Linux,
  Windows: Windows,
  Mac: Apple
}

const DownloadButton: FC<{
  system: System
  curr: System
  onClick: () => void
}> = ({ system, onClick, curr }) => {
  const Icon = SYSTEMS[system]

  return (
    <button onClick={onClick} className={`flex h-32 w-full items-center justify-center rounded-2xl xs:h-44 lg:size-44 ${curr === system ? "bg-gradient-to-tr from-primary to-secondary" : "bg-bgsecondary"}`}>
      <Icon
        fill={curr == system ? "#100F14" : "#9CBE5D"} className="size-11 xs:size-14"
      />
    </button>
  )
}

export default DownloadButton