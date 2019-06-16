import React, {useState, useEffect} from "react";
import ReactMapGL, {Marker} from "react-map-gl";
import {useQuery} from "react-apollo-hooks";
import {GET_MAP_MARKERS} from "../../queries/queries";
import {MapCardStyles} from "../cards/index";
import {CardTitle} from "../titles/index";
import LottieLoader from "../loading/lottieLoader";
import SkateBoardingMarker from "../../images/maps-and-flags.svg";

export default function Map() {
  const {data, loading, error} = useQuery(GET_MAP_MARKERS);
  const [viewport, setViewport] = useState({
    latitude: 39.9525625,
    longitude: -75.1895462,
    width: "100%",
    height: "80vh",
    zoom: 12
  });
  const [selectedUser, setSelectedUser] = useState(null);

  // true until slowest query is fetched
  if (loading) {
    return <LottieLoader />;
  }
  if (error) {
    return <div>Error! {error.message}</div>;
  }

  const markers = data.getUserPresentationViews;
  return (
    <MapCardStyles>
      <CardTitle>User Map</CardTitle>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/magnil/cjsncqgls1y391griaeu1r958"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {markers.map(user => (
          <Marker
            key={user.Views[0].ClientEmail}
            latitude={parseFloat(user.Views[0].Latitude)}
            longitude={parseFloat(user.Views[0].Longitude)}
          >
            {console.log(parseFloat(user.Views[0].Latitude))}
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedUser(user.Views[0].ClientEmail);
              }}
            >
              <img src={SkateBoardingMarker} alt="Skate Park Icon" />
            </button>
          </Marker>
        ))}
      </ReactMapGL>
    </MapCardStyles>
  );
}
