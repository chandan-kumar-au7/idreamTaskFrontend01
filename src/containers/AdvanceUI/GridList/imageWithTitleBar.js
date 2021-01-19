import React from "react";
import PropTypes from "prop-types";
import {
  GridListTile,
  GridListTileBar
} from "../../../components/uielements/gridlist";
import ListSubheaders from "../../../components/uielements/lists";
import IconButton from "../../../components/uielements/iconbutton";
import { Container, GridList, Icon } from "./grid.style";
import tileData from "./config";

function TitlebarGridList(props) {
  return (
    <Container>
      <GridList cellHeight={180}>
        <GridListTile key="ListSubheaders" cols={2} style={{ height: "auto" }}>
          <ListSubheaders component="div">December</ListSubheaders>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton>
                  <Icon>info</Icon>
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </Container>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default TitlebarGridList;
