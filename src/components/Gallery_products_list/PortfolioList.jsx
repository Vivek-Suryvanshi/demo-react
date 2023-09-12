import React from "react";
import "./PortfolioList.css";

function PortfolioList({id, title, active, setSelected }) {
  return (
    <li className={active ? "portfolioList active_item" : "portfolioList"} onClick={()=> setSelected(id)}>
      {title}
    </li>
  );
}

export default PortfolioList;
