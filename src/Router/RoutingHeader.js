import React, { useState } from 'react';
import './RoutingHeader.css';
import Render from './Render';

const RoutingHeader = () => {
  const [rend, setRend] = useState("New");

  return (
    <>
      <div className='routingHeaderMain'>
        <div className='routingHeader'>
          <ul>
            <li
              onClick={() => setRend("New")}
              className={rend === "New" ? "active" : ""}
            >
              New Arrivals
            </li>
            <li
              onClick={() => setRend("Best")}
              className={rend === "Best" ? "active" : ""}
            >
              Best Sellers
            </li>
          </ul>
        </div>
      </div>
      <Render data={rend} />
    </>
  );
};

export default RoutingHeader;
