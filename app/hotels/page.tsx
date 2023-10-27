import Link from "next/link";
import React from "react";

const Hotels = () => {
  return (
    <div className="page-container">
      Hotels{" "}
      <Link href="/hotels/create-hotels" className="link bg-grass-500">
        Create Hotels
      </Link>
    </div>
  );
};

export default Hotels;
