import react, { useCallback, useState, useRef } from 'react'
import { Marker, GoogleMap, useLoadScript,InfoWindow } from '@react-google-maps/api'
import Location from '../constants/Location'
import MapStyle from '../constants/Map_style'
import { getDataMaps } from 'actions/MapsAction'

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
export default function MapExample() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_KEY,
    libraries,
  })
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch()

  dispatch(getDataMaps());
  const data = useSelector((state) => state.data)

  setMarkers(curremts=>data);

  const onMapClick = useCallback(e => {
    setMarkers(current => [...current, { lat: e.latLng.lat(), lng: e.latLng.lng(), time: new Date() }])
  }, [])

  const mapRef = useRef();
  const onMapLoad = useCallback(map=>mapRef.current=map,[])



  if (loadError) return "error loading map"
  if (!isLoaded) return "loading map"
  return (
    <>
      <div style={titleStyle}>
        <h1>Quận 9</h1>
      </div>
      <SearchPlace/>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
        // onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map(marker => <Marker
          key={marker.time.toISOString()}
          position={{ lat: marker.lat, lng: marker.lng }}
          icon={GetIcon(marker)}
          onClick={() => setSelected(marker)}
        />)}
        {selected ? (<InfoWindow position={{ lat: selected.lat, lng: selected.lng }} onCloseClick={()=>setSelected(null)}>
          <div>
            <h4>{selected.data.name}</h4>

            <p>{selected.data.numOfArticles}</p>
            <p>{selected.data.time.toISOString()}</p>
            <button>xem chi tiết ("/tags?place={selected.data.name}")</button>
          </div>
        </InfoWindow>) : null}
      </GoogleMap>
    </>)
}

function SearchPlace(){
  const {ready,value, suggestions:{status,data},setValue, clearSuggesetions} = usePlacesAutocomplete({
    requestOptions:{
      location: {lat:()=>Location[0],lng:()=>Location[1]},
      radius: 200*1000
    }
  })
  return <ComboboxInput></ComboboxInput>
}
function GetIcon(marker){
  var numOfArticles = marker.data.numOfArticles;
  var maxArticles = 10;
  const maxSize = 50;
  const minSize = 15;

  const diameter = numOfArticles < maxArticle ?
  (((numOfArticles/maxArticles)*(maxSize-minSize)) + minSize) :
  maxSize
  

  const result = {
    url: '/circle.svg',
    scaledSize: new window.google.maps.Size(diameter, diameter),
    origin: new window.google.maps.Point(0, 0),
    anchor: new window.google.maps.Point(diameter/2, diameter/2),
  }
  return  result
}