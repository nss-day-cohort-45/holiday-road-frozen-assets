import {getAttractions} from './attractions/AttractionProvider.js'
import {attractionSelect} from './attractions/AttractionSelect.js'
import { parkSelect } from "./parks/ParkSelect.js";
import { getEateries } from "./eateries/EateryProvider.js";
import "./itineraries/ItineraryList.js"

getAttractions()
attractionSelect()
parkSelect();
getEateries();


