import {attractionSelect} from './attractions/AttractionSelect.js'
import { parkSelect } from "./parks/ParkSelect.js";
import { getEateries } from "./eateries/EateryProvider.js";
import { eaterySelect } from "./eateries/EaterySelect.js";
import { itineraryList } from "./itineraries/ItineraryList.js";
import './parks/ParkPreviewList.js';
import "./attractions/AttractionPreviewList.js"


attractionSelect();
parkSelect();
getEateries();
eaterySelect();
itineraryList();




