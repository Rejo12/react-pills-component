import React from "react";
import "./pillStyle.css";

const Pills = ({ itemList, selectedPill = () => {} }) => {
  const handleClick = (item) => {
    item.selected = !item.selected;
    selectedPill(item);
  };
  if (!itemList) {
    console.error("Missing itemList. Hence there is nothing to display");
    return null;
  } else {
    return (
      <>
        {itemList.length > 0 &&
          itemList.map((item, index) => (
            <span
              key={item.id || index}
              className="pillContainer"
              onClick={(e) => handleClick(item)}
              style={{
                backgroundColor: !item.selected
                  ? item.pillColor
                    ? item.pillColor
                    : "azure"
                  : item.selectedPillColor || "violet",
              }}
            >
              {item.text || ""}
            </span>
          ))}
      </>
    );
  }
};

export default Pills;
