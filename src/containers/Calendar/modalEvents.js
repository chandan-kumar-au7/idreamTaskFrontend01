import React, { Component } from 'react';
import moment from 'moment';
import { DateTimePicker } from '../../components/uielements/materialUiPicker';

import {
	CalendarModalBody,
	Dialog,
	DescField,
	InputSearch,
	OkButton,
	CancelButton,
	Icon,
} from './calendar.style';
import DeleteButton from './deleteButton';

export default class ModalEvent extends Component {
	handleOk = () => this.props.setModalData('ok', this.props.selectedData);
	handleCancel = () => this.props.setModalData('cancel');
	handleDelete = () =>
		this.props.setModalData('delete', this.props.selectedData);
	render() {
		const { modalVisible, selectedData, setModalData } = this.props;
		const visible = modalVisible ? true : false;
		if (!visible) {
			return <div />;
		}
		const title = selectedData && selectedData.title ? selectedData.title : '';
		const desc = selectedData && selectedData.desc ? selectedData.desc : '';
		const start =
			selectedData && selectedData.start
				? moment(selectedData.start).format('YYYY-MM-DDTHH:MM')
				: '';
		const end =
			selectedData && selectedData.end
				? moment(selectedData.end).format('YYYY-MM-DDTHH:MM')
				: '';
		const onChangeTitle = value => {
			selectedData.title = value;
			setModalData('updateValue', selectedData);
		};
		const onChangeDesc = value => {
			selectedData.desc = value;
			setModalData('updateValue', selectedData);
		};
		const onChangeStart = value => {
			value = moment(value);
			if (value.isValid()) {
				selectedData.start = new Date(value);
				setModalData('updateValue', selectedData);
			}
		};
		const onChangeEnd = value => {
			value = moment(value);
			if (value.isValid()) {
				selectedData.end = new Date(value);
				setModalData('updateValue', selectedData);
			}
		};
		return (
			<div>
				<Dialog disableEnforceFocus open={visible} onClose={this.handleCancel}>
					<CalendarModalBody>
						<h1 className="modalTitle">
							{modalVisible === 'update' ? 'Update Event' : 'Set Event'}
						</h1>
						<div className="calendarInputWrapper">
							<InputSearch
								fullwidth
								defaultValue={title}
								placeholder="Set Title"
								onChange={onChangeTitle}
							/>
						</div>

						<div className="calendarInputWrapper">
							<DescField
								defaultValue={desc}
								multiline
								rowsMax="4"
								placeholder="Set Description"
								onChange={onChangeDesc}
							/>
						</div>

						<div className="calendarDatePicker">
							<DateTimePicker
								label="Start Time"
								value={start}
								onChange={onChangeStart}
								leftArrowIcon={<Icon> keyboard_arrow_left </Icon>}
								rightArrowIcon={<Icon> keyboard_arrow_right </Icon>}
							/>
							<DateTimePicker
								label="End Time"
								value={end}
								onChange={onChangeEnd}
								leftArrowIcon={<Icon> keyboard_arrow_left </Icon>}
								rightArrowIcon={<Icon> keyboard_arrow_right </Icon>}
							/>
						</div>

						<div className="actionBtnsWrapper">
							{modalVisible === 'update' ? (
								<DeleteButton handleDelete={this.handleDelete} />
							) : (
								''
							)}
							<CancelButton color="secondary" onClick={this.handleCancel}>
								Cancel
							</CancelButton>
							<OkButton color="primary" size="small" onClick={this.handleOk}>
								ok
							</OkButton>
						</div>
					</CalendarModalBody>
				</Dialog>
			</div>
		);
	}
}
