import styled from 'styled-components';
import { palette } from 'styled-theme';
import InputSearch from '../../components/uielements/inputSearch';
import Papersheet from '../../components/utility/papersheet';
import { InputLabel as InputLabels } from '../../components/uielements/input';
import { FormControl as FormControls } from '../../components/uielements/form';

const InputLabel = styled(InputLabels)``;
const InputFullWidth = styled(InputSearch)`
	width: 100%;
`;
const FormControl = styled(FormControls)`
	width: 100%;
`;
const Root = styled(Papersheet)`
	.YoutubeSearchResult {
		width: 100%;
		margin-top: 0;

		p {
			&.TotalResultFind {
				margin-top: 0;
				border-bottom: 1px solid ${palette('grey', 3)};

				span {
					font-size: 16px;
					font-weight: 500;
					color: ${palette('grey', 9)};
				}
			}
		}

		.SingleVideoResult {
			border-bottom: 0;

			.videoDescription {
				h3.videoName {
					color: ${palette('grey', 8)};

					a {
						color: ${palette('grey', 8)};
					}
				}

				@media only screen and (max-width: 767px) {
					width: 100%;
					margin-top: 15px;
					margin-left: 0;
				}

				.ChannelNameAndDate {
					color: ${palette('grey', 5)};

					a {
						color: ${palette('grey', 5)};
						text-decoration: none;

						&:hover {
							color: ${palette('grey', 6)};
						}
					}

					span.uploadDate {
						&:before {
							background-color: ${palette('grey', 5)};
						}
					}
				}

				p {
					margin-top: 15px;
					color: ${palette('grey', 6)};
				}
			}

			&:hover {
				h3.videoName {
					color: ${palette('grey', 9)};

					a {
						color: ${palette('grey', 9)};
					}
				}
			}

			@media only screen and (max-width: 767px) {
				-webkit-box-orient: vertical;
				-webkit-box-direction: normal;
				-ms-flex-direction: column;
				flex-direction: column;
			}
		}
	}
`;

export { Root, InputFullWidth, InputLabel, FormControl };
