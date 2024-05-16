import React from "react";
export default function Container({ children, heading, hasSelect, className }) {
  return (
    <div className={`bg-[#D9D9D952] rounded-t-[10px] mt-4 w-full ${className}`}>
      <div className="flex justify-between items-center px-5">
        <p className="text-[21px] font-medium pt-[11px] pb-[5px]">
          {heading}
        </p>
        {hasSelect && (
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
        )}
      </div>
      <div className="bg-white py-3 px-5 h-full">{children}</div>
    </div>
  );
}
