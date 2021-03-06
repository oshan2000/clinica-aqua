import { combineReducers } from 'redux';

// global
import {
  getDeviceReducer,
  getLeadTypeReducer,
  getLoadingReducer,
  getSectionReducer,
} from './global';

// header
import {
  isHeaderVisibleReducer,
} from './components/header';

// footer
import {
  selectedLanguageReducer,
  selectedVariantVerbiageReducer,
} from './components/footer';

//
// containers
//

// home
import {
  getLeadReducer,
} from './home';

// services
import {
  getCategoryReducer,
  getServiceReducer,
  getServicesReducer,
} from './services';

/*
// combining reducers
*/
const rootReducer = combineReducers({
  category: getCategoryReducer,
  device: getDeviceReducer,
  isHeaderVisible: isHeaderVisibleReducer,
  language: selectedLanguageReducer,
  lead: getLeadReducer,
  leadType: getLeadTypeReducer,
  loading: getLoadingReducer,
  section: getSectionReducer,
  service: getServiceReducer,
  services: getServicesReducer,
  verbiage: selectedVariantVerbiageReducer,
});

export default rootReducer;
