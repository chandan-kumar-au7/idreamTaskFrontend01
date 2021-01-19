import React from 'react';
import { Form } from 'formik';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip';
import CreateTaskHeader from './CreateTaskHeader';
import HeadingWithIcon from '../../../../components/scrumBoard/HeadingWithIcon/HeadingWithIcon';
import TitleIcon from '../../../../assets/images/icon/05-icon.svg';
import DescriptionIcon from '../../../../assets/images/icon/06-icon.svg';
import AttachmentIcon from '../../../../assets/images/icon/01-icon.svg';
import {
  FieldWrapper,
  BadgeText,
  AttachmentWrapper,
} from './TaskCreateOrUpdate.style';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    width: '100%',
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  tooltip: {
    backgroundColor: '#000',
    color: '#fff',
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default ({
  handleSubmit,
  values,
  onCancel,
  onDelete,
  onEditCancel,
  touched,
  errors,
  handleChange,
  setFieldValue,
}) => {
  const classes = useStyles();

  return (
    <Form className="create-task--form" onSubmit={handleSubmit}>
      <CreateTaskHeader
        values={values}
        onCancel={onCancel}
        onDelete={onDelete}
        onEditCancel={onEditCancel}
      />

      <HeadingWithIcon heading="Task Name" iconSrc={TitleIcon} />

      <TextField
        name="title"
        helperText={touched.title ? errors.title : ''}
        error={Boolean(errors.title)}
        label="Add Task Name"
        value={values.title}
        onChange={handleChange}
        fullWidth
      />

      <FieldWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="select-multiple-chip">
                Assign Members
              </InputLabel>
              <Select
                multiple
                name="assignees"
                value={values.assignees}
                onChange={handleChange}
                input={<Input id="select-multiple-chip" />}
                renderValue={selected => (
                  <div className={classes.chips}>
                    {selected.map(value => (
                      <Chip
                        key={value}
                        label={value}
                        className={classes.chip}
                      />
                    ))}
                  </div>
                )}
                MenuProps={MenuProps}
              >
                {values.selectAssignees.map(name => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="select-multiple-chip">
                Assign Labels
              </InputLabel>
              <Select
                multiple
                name="labels"
                value={values.labels}
                onChange={handleChange}
                input={<Input id="select-multiple-chip" />}
                renderValue={selected => (
                  <div className={classes.chips}>
                    {selected.map(value => (
                      <Chip
                        key={value}
                        label={value}
                        className={classes.chip}
                      />
                    ))}
                  </div>
                )}
                MenuProps={MenuProps}
              >
                {values.selectOptions.map(label => (
                  <MenuItem key={label} value={label}>
                    <BadgeText status={label}>{label}</BadgeText>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                name="due_date"
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                fullWidth
                value={values.due_date}
                onChange={value => setFieldValue('due_date', value)}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>
      </FieldWrapper>

      <HeadingWithIcon
        heading="Description"
        iconSrc={DescriptionIcon}
        style={{ marginTop: '30px' }}
      />

      <TextField
        name="description"
        multiline
        helperText={touched.description ? errors.description : ''}
        error={Boolean(errors.description)}
        label="Add a more detailed description..."
        value={values.description}
        onChange={handleChange}
        fullWidth
      />

      <Tooltip
        className={classes.tooltip}
        title="Please Implements Your Own Attachment Methods"
      >
        <AttachmentWrapper>
          <HeadingWithIcon heading="Attachments" iconSrc={AttachmentIcon} />
          <HeadingWithIcon
            heading="Add an Attachment...."
            iconSrc={AttachmentIcon}
          />
        </AttachmentWrapper>
      </Tooltip>
    </Form>
  );
};
