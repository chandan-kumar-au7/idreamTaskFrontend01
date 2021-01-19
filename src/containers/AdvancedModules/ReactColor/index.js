import React, { Component } from 'react';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import { Row, HalfColumn } from '../../../components/utility/rowColumn';
import Papersheet from '../../../components/utility/papersheet';
import {
  SketchPicker,
  ChromePicker,
  SwatchesPicker,
  PhotoshopPicker,
  TwitterPicker,
  GithubPicker,
  BlockPicker,
  CirclePicker,
} from '../../../components/uielements/reactColor';
import { MatePhotoshopPicker, ColumnWrapper } from './color.style';
import Holder from './holder';

export default class extends Component {
  render() {
    return (
      <LayoutWrapper>
        <ColumnWrapper>
          <Row>
            <HalfColumn>
              <Papersheet title="Sketch Picker" stretched>
                <Holder Picker={SketchPicker} title="Sketch" />
              </Papersheet>
            </HalfColumn>
            <HalfColumn>
              <Papersheet title="Chrome Picker" stretched>
                <Holder Picker={ChromePicker} title="Chrome" />
              </Papersheet>
            </HalfColumn>
          </Row>
          <Row>
            <HalfColumn>
              <Papersheet title="Swatches Picker" stretched>
                <Holder Picker={SwatchesPicker} title="Swatches" />
              </Papersheet>
            </HalfColumn>
            <HalfColumn>
              <Papersheet title="Photoshop Picker" stretched>
                <MatePhotoshopPicker>
                  <Holder Picker={PhotoshopPicker} title="Photoshop" />
                </MatePhotoshopPicker>
              </Papersheet>
            </HalfColumn>
          </Row>
          <Row>
            <HalfColumn>
              <Papersheet title="Twitter Picker" stretched>
                <Holder Picker={TwitterPicker} title="Twitter" />
              </Papersheet>
            </HalfColumn>
            <HalfColumn>
              <Papersheet title="Github Picker" stretched>
                <Holder Picker={GithubPicker} title="Github" />
              </Papersheet>
            </HalfColumn>
          </Row>
          <Row>
            <HalfColumn>
              <Papersheet title="Block Picker" stretched>
                <Holder Picker={BlockPicker} title="Block" />
              </Papersheet>
            </HalfColumn>
            <HalfColumn>
              <Papersheet title="Circle Picker" stretched>
                <Holder Picker={CirclePicker} title="Circle" />
              </Papersheet>
            </HalfColumn>
          </Row>
        </ColumnWrapper>
      </LayoutWrapper>
    );
  }
}
