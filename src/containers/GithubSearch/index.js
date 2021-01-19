import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, FullColumn } from '../../components/utility/rowColumn';
import Papersheet from '../../components/utility/papersheet';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import GitResult from '../../components/github/githubResult';
import actions from '../../redux/githubSearch/actions';
import {
	Root,
	InputFullWidth,
	InputLabel,
	FormControl,
} from './githubSearch.style';
const { gitSearch, onPageChange } = actions;

class GitSearch extends Component {
	componentDidMount() {
		const { gitSearch, GitSearch } = this.props;
		const { result, searcText } = GitSearch;
		if (result.length === 0) {
			gitSearch(searcText);
		}
	}
	render() {
		const { onPageChange, GitSearch, gitSearch } = this.props;
		return (
			<LayoutWrapper>
				<Row>
					<FullColumn>
						<Papersheet style={{ marginBottom: 20 }}>
							<FormControl>
								<InputLabel htmlFor="githubSearch">
									Search Repository
								</InputLabel>
								<InputFullWidth
									id="githubSearch"
									onSearch={gitSearch}
									defaultValue={GitSearch.searcText}
								/>
							</FormControl>
						</Papersheet>
						<Root>
							<GitResult
								GitSearch={GitSearch}
								defaultValue={GitSearch.searcText}
								onPageChange={onPageChange}
							/>
						</Root>
					</FullColumn>
				</Row>
			</LayoutWrapper>
		);
	}
}
function mapStateToProps(state) {
	return { GitSearch: state.GithubSearch };
}
export default connect(mapStateToProps, { gitSearch, onPageChange })(GitSearch);
