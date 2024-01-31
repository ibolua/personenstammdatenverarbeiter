import React from "react";

function StatusBar({ pageinfo }) {
  return (
    <div className="bg-ase-blue-3 text-white h-12 flex items-center justify-center shadow-md">
      {pageinfo}
    </div>
  );
}

export default StatusBar;
