import { connect } from "react-redux";

import {  } from '../actions/MapsAction';
import MapPage from "../pages/MapExample";

function mapStateToProps({mapsReducers}) {
    return mapsReducers;
}
  
const MapsContainer = connect(
    mapStateToProps
)(MapPage)

export default MapsContainer