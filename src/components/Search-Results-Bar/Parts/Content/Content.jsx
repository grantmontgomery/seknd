import React from "react";
import { SearchResultCard } from "../../../Search-Result-Card";
import { SekndLoader } from "../../../SekndLoader";
import css from "../../SearchResultsBar.css";

const Content = ({ loading, items, index }) => {
  const renderItems = () => {
    return items.length > 0
      ? items.map((item) => (
          <SearchResultCard key={item.id} item={item}></SearchResultCard>
        ))
      : null;
  };

  if (loading) {
    return <SekndLoader></SekndLoader>;
  } else {
    return (
      <div
        className={`contentHolder ${css.contentHolder}`}
        style={{
          display: `${loading ? "block" : "flex"}`,
          transform: `translate(-${index * (100 / items.length)}%, -50%)`,
          width: `${loading ? "100%" : "fit-content"}`,
        }}
      >
        {renderItems()}
      </div>
    );
  }
};

export default Content;
