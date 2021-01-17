// import React, { Component, useState } from 'react';
// import GoogleMapReact from 'google-map-react';
// import location from '../constants/Location'
// import Marker from '../components/Maps/Marker'
 
 
// export default function SimpleMap(props){
//   const [center,setCenter] = useState({
//     lat: location[0],
//     lng: location[1]
//   });
  
//  const [zoom,setZoom] = useState(11);
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '100vh', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
//           defaultCenter={center}
//           defaultZoom={zoom}
//         >
//           <Marker
//             lat={10.832171 }
//             lng={106.776889}
//             text="Quận 9"
//             onClick={()=>{console.log("click");}}
//           />
//         </GoogleMapReact>
//       </div>
//     );
// }
 