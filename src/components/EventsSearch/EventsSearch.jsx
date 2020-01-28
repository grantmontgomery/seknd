import React from "react";
import css from "./EventsSearch.css";
import { useState } from "react";
const EventsSearch = props => {
  let [eventCategory, changeCategory] = useState("");
  return (
    <div className={`eventsSearchWrapper ${css.eventsSearchWrapper}`}>
      <div className={`eventsSearchTextWrapper ${css.eventsSearchTextWrapper}`}>
        <p>What type of events are you looking for?</p>
      </div>
      <select
        name=""
        id=""
        value={eventCategory}
        onChange={event => changeCategory((eventCategory = event.target.value))}
        className={`eventCategories ${css.eventsCategories}`}
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
