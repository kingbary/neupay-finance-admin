import { Eye, EyeOff } from "lucide";
import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

export default function MetricCard({ iconSrc, escrowType, amount }) {
  const [viewText, setViewText] = useState(false);

  const toggleEyeIcon = () => {
    setViewText(true);
  };

  const toggleEyeSlashIcon = () => {
    setViewText(false);
  };
  return (
    <div className="flex flex-col !items-start gap-2 border border-[#00000029] rounded-[9px] min-w-[234px] px-4 py-3">
      <div className="flex justify-between w-full">
        <img src={iconSrc} alt="" width={42} height={42} />
        <select
          name=""
          id=""
          className="border border-primary rounded-[2px] cursor-pointer text-xs py-1 px-1"
        >
          This Week
          <option value="">This Week</option>
          <option value="">This Month</option>
          <option value="">This Year</option>
        </select>
      </div>
      <div>
        <p className="text-sm text-[#000000B0] font-medium">
          {escrowType} Escrow
        </p>
      </div>
      <div className="flex items-center gap-1">
        NGN
        <div className="flex gap-3 items-center">
          {!viewText && (
            <>
              <p>*****</p>
              <FaRegEye
                className="cursor-pointer"
                size={18}
                onClick={toggleEyeIcon}
              />
            </>
          )}
          {viewText && (
            <>
              <p>{amount}</p>
              <FaRegEyeSlash
                className="cursor-pointer"
                size={18}
                onClick={toggleEyeSlashIcon}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
