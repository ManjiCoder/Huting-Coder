import React from "react";

const Dummy = () => {
  return (
    <>
      <style jsx global>
        {`
          .dummy {
            background: gold;
          }
        `}
      </style>
      <div className="dummy">I am Dummy Dummy</div>
    </>
  );
};

export default Dummy;
