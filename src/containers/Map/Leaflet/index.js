import React, { Component } from "react";
import Async from "../../../helpers/asyncComponent";
import LayoutWrapper from "../../../components/utility/layoutWrapper";
import { Row, HalfColumn } from "../../../components/utility/rowColumn";
import Box from "../../../components/utility/papersheet";
const BasicLeafletMap = props => (
  <Async
    load={import(/* webpackChunkName: "basicLeafletMap" */ "./maps/basic")}
    componentProps={props}
    componentArguement={"leafletMap"}
  />
);
const BasicmapWithDefaultMarker = props => (
  <Async
    load={import(/* webpackChunkName: "LeafletMapWithCustomMarker" */ "./maps/mapWithDefaultMarker.js")}
    componentProps={props}
    componentArguement={"leafletMap"}
  />
);
const LeafletMapWithCustomHtmlMarker = props => (
  <Async
    load={import(/* webpackChunkName: "LeafletMapWithCustomHtmlMarker" */ "./maps/mapWithCustomHtmlMarker.js")}
    componentProps={props}
    componentArguement={"leafletMap"}
  />
);
const LeafletMapWithCustomIconMarker = props => (
  <Async
    load={import(/* webpackChunkName: "LeafletMapWithCustomMarker" */ "./maps/mapWithCustomIconMarker.js")}
    componentProps={props}
    componentArguement={"leafletMap"}
  />
);
const LeafletMapWithMarkerCluster = props => (
  <Async
    load={import(/* webpackChunkName: "LeafletMapWithMarkerCluster" */ "./maps/mapWithMarkerCluster.js")}
    componentProps={props}
    componentArguement={"leafletMap"}
  />
);
const LeafletMapWithRouting = props => (
  <Async
    load={import(/* webpackChunkName: "LeafletMapWithCustomMarker" */ "./maps/mapWithRouting.js")}
    componentProps={props}
    componentArguement={"leafletMap"}
  />
);

export default class extends Component {
  render() {
    return (
      <LayoutWrapper>
        <Row>
          <HalfColumn>
            <Box title="Basic Map">
              <BasicLeafletMap />
            </Box>
          </HalfColumn>
          <HalfColumn>
            <Box title="Basic Marker Map">
              <BasicmapWithDefaultMarker />
            </Box>
          </HalfColumn>
        </Row>
        <Row>
          <HalfColumn>
            <Box title="Basic Custom Html Marker">
              <LeafletMapWithCustomHtmlMarker />
            </Box>
          </HalfColumn>
          <HalfColumn>
            <Box title="Basic Icon Marker">
              <LeafletMapWithCustomIconMarker />
            </Box>
          </HalfColumn>
        </Row>
        <Row>
          <HalfColumn>
            <Box title="Basic Map With Marker Cluster">
              <LeafletMapWithMarkerCluster />
            </Box>
          </HalfColumn>
          <HalfColumn>
            <Box title="Basic Map Routing">
              <LeafletMapWithRouting />
            </Box>
          </HalfColumn>
        </Row>
      </LayoutWrapper>
    );
  }
}
