import React, { useCallback, useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Marker, GoogleMap, useLoadScript, InfoWindow } from '@react-google-maps/api';
import usePlacesAutocomplete from "use-places-autocomplete";
import Location from '../constants/Location'
import MapStyle from '../constants/Map_style'
import { getDataMaps, setMarkers } from 'actions/MapsAction'

const libraries = ['places']
const mapContainerStyle = {
  width: '100%',
  height: '100vh'
}
const center = {
  lat: Location[0],
  lng: Location[1]
}
const titleStyle = {
  position: "absolute",
  zIndex: 100000
}

const options = {
  styles: MapStyle,
  disableDefaultUI: true
}
export default function MapExample(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_KEY,
    libraries,
  })
  const [selected, setSelected] = useState(null);
  const dispatch = props.dispatch;

  useEffect(() => {
    // equal componentDidMount()
    dispatch(getDataMaps());

  },[]);

  const mapsReducer = props.mapsReducer;
  const markers = mapsReducer ? mapsReducer.data : [];

  const onMapClick = useCallback(e => {
    dispatch(setMarkers([...markers, { lat: e.latLng.lat(), lng: e.latLng.lng(), time: new Date() }]))
  }, [])

  const mapRef = useRef();
  const onMapLoad = useCallback(map => mapRef.current = map, [])


  if (loadError) return "error loading map"
  if (!isLoaded) return "loading map"
  return (
    <React.Fragment>
      <div style={titleStyle}>
        <h1>Quận 9</h1>
      </div>
      <SearchPlace />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad} 
      >
        {markers.map(marker => <Marker
          key={marker.time.toISOString()}
          position={{ lat: marker.lat, lng: marker.lng }}
          icon={GetIcon(marker)}
          onClick={() => setSelected(marker)}
        />)}
        {selected ? (<InfoWindow position={{ lat: selected.lat, lng: selected.lng }} onCloseClick={() => setSelected(null)}>
          <div>
            <h4>{selected.data.name}</h4>

            <p>{selected.data.numOfArticles}</p>
            <p>{selected.data.time.toISOString()}</p>
            <button>xem chi tiết ("/tags?place={selected.data.name}")</button>
          </div>
        </InfoWindow>) : null}
      </GoogleMap>
    </React.Fragment>)
}

function SearchPlace() {
  const { ready, value, suggestions: { status, data }, setValue, clearSuggesetions } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => Location[0], lng: () => Location[1] },
      radius: 200 * 1000
    }
  })
  return <div></div>// <ComboboxInput></ComboboxInput> ???
}
function GetIcon(marker) {
  var numOfArticles = marker && marker.data && marker.data.numOfArticles ? marker.data.numOfArticles : 0;
  var maxArticles = 10;
  const maxSize = 50;
  const minSize = 15;

  const diameter = numOfArticles < maxArticles ?
    (((numOfArticles / maxArticles) * (maxSize - minSize)) + minSize) :
    maxSize


  const result = {
    url: '/circle.svg',
    scaledSize: new window.google.maps.Size(diameter, diameter),
    origin: new window.google.maps.Point(0, 0),
    anchor: new window.google.maps.Point(diameter / 2, diameter / 2),
  }
  return result
}