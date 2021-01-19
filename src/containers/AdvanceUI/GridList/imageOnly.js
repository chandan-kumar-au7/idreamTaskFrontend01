import React from 'react';
import PropTypes from 'prop-types';
import { GridListTile } from '../../../components/uielements/gridlist';
import { Root, GridList } from './grid.style';
import tileData from './config';

function ImageGridList(props) {
  return (
    <Root>
      <GridList cellHeight={160} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </Root>
  );
}

ImageGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default ImageGridList;
