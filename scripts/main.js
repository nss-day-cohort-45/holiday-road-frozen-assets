import {attractionSelect} from './attractions/AttractionSelect.js'
import { parkSelect } from "./parks/ParkSelect.js";
import { getEateries } from "./eateries/EateryProvider.js";
import { eaterySelect } from "./eateries/EaterySelect.js";
import { itineraryList } from "./itineraries/ItineraryList.js";
import './parks/ParkPreviewList.js';
import "./attractions/AttractionPreviewList.js"
import './parks/ParkDetailList.js';
import "./eateries/EateryPreviewList.js"
import "./eateries/DetailList.js"
import "./attractions/AttractionDetailList.js"
import './search/Search.js';
import './Color.js'

attractionSelect();
parkSelect();
getEateries();
eaterySelect();
itineraryList();




