import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, FullColumn } from '../../components/utility/rowColumn';
import Papersheet from '../../components/utility/papersheet';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import YoutubeResult from '../../components/youtubeSearch/result';
import actions from '../../redux/youtubeSearch/actions';
import {
	Root,
	InputFullWidth,
	InputLabel,
	FormControl,
} from './youtubeSearch.style';

const { youtubeSearch, onPageChange } = actions;

class YoutubeSearch extends Component {
	componentDidMount() {
		const { youtubeSearch, YoutubeSearch } = this.props;
		const { result, searcText } = YoutubeSearch;
		if (result.length === 0) {
			youtubeSearch(searcText);
		}
	}
	render() {
		return (
			<LayoutWrapper>
				<Row>
					<FullColumn>
						<Papersheet style={{ marginBottom: 20 }}>
							<FormControl>
								<InputLabel htmlFor="youtubeSearch">
									Search Youtube Video
								</InputLabel>
								<InputFullWidth
									id="youtubeSearch"
									onSearch={this.props.youtubeSearch}
									defaultValue={this.props.YoutubeSearch.searcText}
								/>
							</FormControl>
						</Papersheet>
						<Root>
							<YoutubeResult
								YoutubeSearch={this.props.YoutubeSearch}
								onPageChange={this.props.onPageChange}
							/>
						</Root>
					</FullColumn>
				</Row>
			</LayoutWrapper>
		);
	}
}
function mapStateToProps(state) {
	return { YoutubeSearch: state.YoutubeSearch };
}
export default connect(mapStateToProps, { youtubeSearch, onPageChange })(
	YoutubeSearch
);
