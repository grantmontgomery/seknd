const setCategories = eventsCategory => {
  if (eventsCategory === "All" || eventsCategory === "") {
    return { ticketMasterCategories: "", yelpCategories: "" };
  } else if (eventsCategory === "Music") {
    return {
      ticketMasterCategories: ["KZFzniwnSyZfZ7v7nJ"],
      yelpCategories: ["music"]
    };
  } else if (eventsCategory === "Film") {
    return {
      ticketMasterCategories: ["KZFzniwnSyZfZ7v7nn"],
      yelpCategories: ["film"]
    };
  } else if (eventsCategory === "Arts & Theatre") {
    return {
      ticketMasterCategories: ["KZFzniwnSyZfZ7v7na"],
      yelpCategories: ["visual-arts", "performing-arts"]
    };
  } else if (eventsCategory === "Sports & Active Lifestyle") {
    return {
      ticketMasterCategories: ["KZFzniwnSyZfZ7v7nE"],
      yelpCategories: ["sports-active-life"]
    };
  } else if (eventsCategory === "Food & Drink") {
    return { yelpCategories: ["food-and-drink"], ticketMasterCategories: null };
  } else if (eventsCategory === "NightLife") {
    return { yelpCategories: ["nightlife"], ticketMasterCategories: null };
  } else if (eventsCategory === "Festivals & Fairs") {
    return {
      yelpCategories: ["festivals-fairs"],
      ticketMasterCategories: null
    };
  } else if (eventsCategory === "Other") {
    return {
      yelpCategories: ["official-yelp-events", "fashion"],
      ticketMasterCategories: ["KZFzniwnSyZfZ7v7n1"]
    };
  }
};

export default setCategories;
