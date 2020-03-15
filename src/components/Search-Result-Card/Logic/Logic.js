import cardType from "./cardType";
import toSingular from "./toSingluar";
import parseYelpData from "./parseYelpData";
import ticketMasterCategories from "./ticketMasterCategories";
import parseYelpTime from "./parseYelpTime";
import parseTicketMasterTime from "./parseTicketMasterTime";
import setEventPrice from "./setEventPrice";
import setPlacePrice from "./setPlacePrice";
import limitTitle from "./limitTitle";
import limitVenue from "./limitVenue";
import limitPlace from "./limitPlace";
import checkYelpVenue from "./checkYelpVenue";
import parseYelpCity from "./parseYelpCity";

const Logic = {
  limitPlace,
  parseYelpCity,
  checkYelpVenue,
  limitVenue,
  limitTitle,
  setPlacePrice,
  parseTicketMasterTime,
  setEventPrice,
  cardType,
  toSingular,
  parseYelpData,
  parseYelpTime,
  ticketMasterCategories
};

export default Logic;
