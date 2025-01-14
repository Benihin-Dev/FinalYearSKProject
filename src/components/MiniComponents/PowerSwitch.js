import React, { useState } from "react";

export default function PowerSwitch() {
  const [switchState, setSwitchState] = useState(false);
  return (
    <div
      onClick={() => {
        setSwitchState(!switchState);
      }}
      className=" text-xs font-bold relative "
    >
      <div
        className={`  h-7 w-[65px] cursor-pointer element ${
          switchState
            ? "bg-[#637adb]  border border-transparent "
            : " border border-[#637adb]"
        }   text-white relative py-2  rounded-sm flex items-center justify-center gap-2 `}
      >
        <div
          className={`h-full element absolute top-0 left-0  aspect-square ${
            !switchState
              ? "bg-[#637adb] "
              : " border bg-[#637adb] border-[#000000]"
          }  ${
            switchState ? " sm:translate-x-[150%] translate-x-[140%]" : "translate-x-[1px]"
          }  rounded-sm overflow-hidden scale-[0.85]`}
        ></div>
      </div>
    </div>
  );
}
