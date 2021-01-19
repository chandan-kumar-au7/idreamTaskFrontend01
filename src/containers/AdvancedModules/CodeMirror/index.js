import React, { Component } from 'react';
import {
  Row,
  FullColumn,
  HalfColumn,
} from '../../../components/utility/rowColumn';
import Switch from '../../../components/uielements/switch';
import Select from '../../../components/uielements/select';
import { MenuItem } from '../../../components/uielements/menus';
import Papersheet from '../../../components/utility/papersheet';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import { switchOptions, selectOptions, defaultValues } from './config';
import CodeMirror, { CodeMirrorToolbar, CMOptBlock } from './codeMirror.style';

const Option = MenuItem;

export default class extends Component {
  constructor(props) {
    super(props);
    this.updateCode = this.updateCode.bind(this);
    this.toggleOptions = this.toggleOptions.bind(this);
    this.selctOptions = this.selctOptions.bind(this);
    this.state = {
      ...defaultValues,
      basicOptions: {
        lineNumbers: true,
        readOnly: false,
        tabSize: 4,
        mode: 'javascript',
        theme: 'zenburn',
      },
    };
  }
  updateCode(mode, value) {
    this.setState({
      [mode]: value,
    });
  }
  toggleOptions() {
    const { basicOptions } = this.state;
    return switchOptions.map((option, index) => {
      const id = option.id;
      const onChange = () => {
        basicOptions[id] = !basicOptions[id];
        this.setState(basicOptions);
      };
      return (
        <CMOptBlock key={option.id}>
          <h1>{option.title}</h1>
          <Switch
            checked={option.value === basicOptions[id]}
            onChange={onChange}
          />
        </CMOptBlock>
      );
    });
  }
  selctOptions() {
    const { basicOptions } = this.state;
    return selectOptions.map((option, index) => {
      const id = option.id;
      const handleChange = event => {
        const value = event.target.value;
        basicOptions[id] = isNaN(value) ? value : parseInt(value, 10);
        this.setState(basicOptions);
      };
      return (
        <CMOptBlock key={option.id}>
          <h1>{option.title}</h1>
          <Select value={`${basicOptions[id]}`} onChange={handleChange}>
            {option.options.map(opt => (
              <Option value={opt} key={opt}>
                {opt}
              </Option>
            ))}
          </Select>
        </CMOptBlock>
      );
    });
  }
  render() {
    return (
      <LayoutWrapper>
        <Row>
          <FullColumn>
            <Papersheet title="Basic Example">
              <CodeMirrorToolbar>
                {this.toggleOptions()}
                {this.selctOptions()}
              </CodeMirrorToolbar>
              <CodeMirror
                preserveScrollPosition
                value={this.state.basic}
                onChange={value => this.updateCode('basic', value)}
                options={this.state.basicOptions}
              />
            </Papersheet>
          </FullColumn>
        </Row>
        <Row>
          <HalfColumn>
            <Papersheet title="Ruby Example" stretched>
              <CodeMirror
                preserveScrollPosition
                value={this.state.ruby}
                onChange={value => this.updateCode('ruby', value)}
                options={{ lineNumbers: true, theme: 'hopscotch' }}
              />
            </Papersheet>
          </HalfColumn>
          <HalfColumn>
            <Papersheet title="Javascript Example" stretched>
              <CodeMirror
                preserveScrollPosition
                value={this.state.javascript}
                onChange={value => this.updateCode('javascript', value)}
                options={{ lineNumbers: true, theme: 'twilight' }}
              />
            </Papersheet>
          </HalfColumn>
        </Row>
        <Row>
          <HalfColumn>
            <Papersheet title="Markdown Example" stretched>
              <CodeMirror
                preserveScrollPosition
                value={this.state.markdown}
                onChange={value => this.updateCode('markdown', value)}
                options={{ lineNumbers: true, theme: 'rubyblue' }}
              />
            </Papersheet>
          </HalfColumn>
          <HalfColumn>
            <Papersheet title="XML Example" stretched>
              <CodeMirror
                preserveScrollPosition
                value={this.state.xml}
                onChange={value => this.updateCode('xml', value)}
                options={{ lineNumbers: true, theme: 'paraiso-dark' }}
              />
            </Papersheet>
          </HalfColumn>
        </Row>
        <Row>
          <HalfColumn>
            <Papersheet title="PHP Example" stretched>
              <CodeMirror
                preserveScrollPosition
                value={this.state.php}
                onChange={value => this.updateCode('php', value)}
                options={{ lineNumbers: true, theme: 'midnight' }}
              />
            </Papersheet>
          </HalfColumn>
          <HalfColumn>
            <Papersheet title="Python Example" stretched>
              <CodeMirror
                preserveScrollPosition
                value={this.state.python}
                onChange={value => this.updateCode('python', value)}
                options={{ lineNumbers: true, theme: 'material' }}
              />
            </Papersheet>
          </HalfColumn>
        </Row>
      </LayoutWrapper>
    );
  }
}
