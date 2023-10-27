import Link from "next/link";
import React from "react";

const Hotels = () => {
  return (
    <div className="page-container">
      <div className="flex justify-between">
        <h1>Hotels</h1>
        <Link href="/hotels/create-hotels" className="link bg-grass-500">
          Create Hotels
        </Link>
      </div>
    </div>
  );
};

export default Hotels;
