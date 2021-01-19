import React, { Component } from 'react';
import Form from './formElements';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import { FullColumn } from '../../../components/utility/rowColumn';
import Papersheet from '../../../components/utility/papersheet';
import { FormsComponentWrapper, FormsMainWrapper } from './formik.style';
import CodeViewer from '../codeViewer';
export default class extends Component {
  state = {
    result: '',
  };
  onSubmit = value => {
    if (value) {
      this.setState({ result: `${JSON.stringify(value, null, 4)}` });
    } else {
      this.setState({ result: '' });
    }
  };
  render() {
    const { result } = this.state;

    console.log(result);

    return (
      <LayoutWrapper>
        <FormsMainWrapper>
          <FormsComponentWrapper className="mateFormsComponent">
            <FullColumn>
              <Papersheet>
                <Form onSubmit={this.onSubmit} />
              </Papersheet>
              {result && <CodeViewer>{result}</CodeViewer>}
            </FullColumn>
          </FormsComponentWrapper>
        </FormsMainWrapper>
      </LayoutWrapper>
    );
  }
}
