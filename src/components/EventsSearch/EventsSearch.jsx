import React, { useCallback } from "react";
import css from "./EventsSearch.css";
import { useState } from "react";

import { setCategories } from "./Logic";

const EventsSearch = ({ eventsCategory, handleQuery, style }) => {
  const handleCategory = useCallback(
    event => {
      const eventsCategory = event.target.value;

      const categoriesObject = setCategories(eventsCategory);

      handleQuery({ eventsCategory, ...categoriesObject });
    },
    [eventsCategory]
  );

  return (
    <div
      className={`eventsSearchWrapper ${css.eventsSearchWrapper} ${style} ${
        css[`${style}`]
      }`}
    >
      <div className={`eventsSearchTextWrapper ${css.eventsSearchTextWrapper}`}>
        <span>What type of events are you looking for?</span>
      </div>
      <select
        name=""
        value={eventsCategory}
        onChange={event => handleCategory(event)}
        className={`eventsCategories ${css.eventsCategories}`}
      >
        <option value="">Select a category (Optional)</option>
        <option value="All">All</option>
        <option value="Music">Music</option>
        <option value="Nightlife">Nightlife</option>
        <option value="Food & Drink">Food & Drink</option>
        <option value="Film">Film</option>
        <option value="Sports & Active Lifestyle">
          Sports & Active Lifestyle
        </option>
        <option value="Festivals & Fairs">Festivals & Fairs</option>
        <option value="Arts & Theatre">Arts & Theatre</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
};

export default EventsSearch;
