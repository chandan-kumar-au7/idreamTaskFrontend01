import React from "react";
import PropTypes from "prop-types";
import {
  GridListTile,
  GridListTileBar
} from "../../../components/uielements/gridlist";
import IconButton from "../../../components/uielements/iconbutton";
import { Root, GridListSingle, Icon } from "./grid.style";
import tileData from "./config";

function SingleLineGridList(props) {
  return (
    <Root>
      <GridListSingle cols={2.5}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: "titleBar",
                title: "title"
              }}
              actionIcon={
                <IconButton>
                  <Icon>star_border_icon</Icon>
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridListSingle>
    </Root>
  );
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default SingleLineGridList;
