import styled from 'styled-components';
import { palette } from 'styled-theme';
import { transition, borderRadius } from '../../settings/style-util';
import WithDirection from '../../settings/withDirection';
import Icons from '../../components/uielements/icon';
import Dialogs from '../../components/uielements/dialogs';
import TextFields from '../../components/uielements/textfield';
import InputSearches from '../../components/uielements/inputSearch';
import Button, { IconButton, Fab } from '../../components/uielements/button';

const Dialog = styled(Dialogs)`
  color: red;
`;

const OkButton = styled(Button)`
  line-height: 1;
`;
const Icon = styled(Icons)``;
const AddButton = styled(Fab)``;
const CancelButton = styled(Button)`
  line-height: 1;
`;
const DeleteButton = styled(IconButton)``;
const InputSearch = styled(InputSearches)``;
const DescField = styled(TextFields)``;
const StartDatepicker = styled(TextFields)``;
const EndDatepicker = styled(TextFields)``;

const Prev = styled(Icons)``;
const Next = styled(Icons)``;

const WDCalendarStyleWrapper = styled.div`
  &.calendarWrapper {
    position: relative;
    display: flex;
    padding: 35px;
    flex-direction: column;

    @media (max-width: 767px) {
      padding: 0px;
      height: calc(100vh - 64px);
      background-color: ${palette('indigo', 5)};
      position: relative;
    }

    .mateCalendar {
      padding: 60px 30px 30px;
      border-radius: 0;
      flex-shrink: 0;
      position: relative;
      box-shadow: ${palette('shadows', 1)};
      background-color: #fff;

      @media (max-width: 767px) {
        height: 100%;
        flex-shrink: 1;
        background-color: ${palette('indigo', 5)};
        box-shadow: none;
        padding-top: 50px;
      }
    }
  }

  /* Reset */
  .rbc-btn {
    color: inherit;
    font: inherit;
    margin: 0;
  }

  button.rbc-btn {
    overflow: visible;
    text-transform: none;
    -webkit-appearance: button;
    cursor: pointer;
  }

  button[disabled].rbc-btn {
    cursor: not-allowed;
  }

  button.rbc-input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  /* Calendar */

  .rbc-calendar {
    box-sizing: border-box;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .rbc-calendar *,
  .rbc-calendar *:before,
  .rbc-calendar *:after {
    box-sizing: inherit;
  }

  .rbc-abs-full {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .rbc-ellipsis {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .rbc-rtl {
    direction: rtl;
  }

  .rbc-header {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 7px 3px;
    text-align: left;
    vertical-align: middle;
    font-weight: 500;
    font-size: 12px;
    min-height: 0;
    color: #ffffff;

    > a {
      &,
      &:active,
      &:visited {
        color: inherit;
        text-decoration: none;
      }
    }
  }

  .rbc-today {
    background-color: ${palette('grey', 2)};

    @media (max-width: 767px) {
      background-color: #3244a5;
    }
  }

  /* Toolbar */
  .rbc-toolbar {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    font-size: 16px;
    padding: 0;

    @media (max-width: 767px) {
      margin-bottom: 35px;
    }

    .rbc-toolbar-label {
      width: 100%;
      padding: 0;
      font-size: 21px;
      font-weight: 400;
      color: ${palette('grey', 8)};

      @media (max-width: 767px) {
        color: #ffffff;
      }
    }

    & button {
      color: ${palette('grey', 5)};
      font-size: 13px;
      font-weight: 400;
      font-family: 'Roboto', sans-serif;
      display: inline-block;
      vertical-align: middle;
      background: none;
      background-image: none;
      background-color: transparent;
      border: 0;
      padding: 0;
      margin: 0;
      margin-right: 20px !important;
      border-radius: 0;
      outline: 0;
      line-height: normal;
      white-space: nowrap;
      cursor: pointer;
      text-transform: capitalize;
      ${transition()};

      &:hover {
        background-color: transparent;
        color: ${palette('indigo', 5)};
      }

      @media (max-width: 767px) {
        color: #ffffff;
      }

      ${Prev}, ${Next} {
        font-size: 16px;
        color: ${palette('grey', 8)};

        @media (max-width: 767px) {
          color: #ffffff;
        }
      }

      &:last-child {
        margin-right: 0 !important;
      }

      &.rbc-active {
        background-image: none;
        background-color: transparent;
        box-shadow: none;
        color: ${palette('indigo', 5)};
        position: relative;
        font-weight: 500;

        &:hover {
          background-color: transparent;
          color: ${palette('indigo', 5)};
        }
      }
    }
  }

  .rbc-btn-group {
    display: inline-block;
    white-space: nowrap;

    &:first-child {
      display: flex;
      align-items: center;
      position: absolute;
      top: 20px;
      left: 25px;

      @media (max-width: 767px) {
        top: 15px;
      }

      button {
        margin-right: 0 !important;

        &:first-child,
        &:last-child {
          order: 1;
        }

        &:first-child {
          color: ${palette('grey', 8)};
          margin: 0 10px !important;
          @media (max-width: 767px) {
            color: #ffffff;
          }
        }

        + button,
        &:last-child {
          width: 24px;
          height: 24px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 2px;
          transition: all 0.25s;

          span {
            color: ${palette('grey', 5)};
            @media (max-width: 767px) {
              color: #ffffff;
            }
          }

          &:hover {
            background-color: ${palette('indigo', 0)};

            @media (max-width: 767px) {
              background-color: ${palette('indigo', 3)};
            }
          }
        }
      }
    }

    .rbc-rtl & > button:first-child:not(:last-child) {
      border-radius: 0;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    .rbc-rtl & > button:last-child:not(:first-child) {
      border-radius: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    .rbc-rtl & button + button {
      margin-left: 0;
      margin-right: -1px;
    }

    & + &,
    & + button {
      margin-left: 10px;
    }
  }

  /* Event */
  .rbc-event {
    cursor: pointer;
    padding: 3px 15px;
    background-color: ${palette('calendar', 1)};
    color: #fff;
    ${borderRadius('3px')};

    @media (max-width: 767px) {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      position: absolute;
      bottom: 0;
      left: 50%;
      margin-left: -3px;
      padding: 0;
      background-color: ${palette('grey', 3)};
    }

    &.rbc-selected {
      background-color: ${palette('calendar', 1)};
    }
  }

  .rbc-event-label {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 80%;
  }

  .rbc-event-overlaps {
    box-shadow: -1px 1px 5px 0px rgba(51, 51, 51, 0.5);
  }

  .rbc-event-continues-prior {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .rbc-event-continues-after {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .rbc-event-continues-earlier {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  .rbc-event-continues-later {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  /* Month */
  .rbc-row-content {
    position: relative;
    user-select: none;
    z-index: 4;

    ${'' /* .rbc-event {
      &:before {
        content: '';
        width: 29px;
        height: 29px;
        border-radius: 50%;
        display: inline-block;
        background-color: ${palette('grey', 2)};
        position: absolute;
        top: 0;
        right: 0;
      }
    } */};
  }

  .rbc-row {
    display: flex;
    flex-direction: row;

    @media (max-width: 767px) {
      &:last-child {
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 1;
      }
    }

    .rbc-row-segment {
      padding: 0 1px 1px 1px;

      @media (max-width: 767px) {
        height: 35px;
        display: flex;
        justify-content: center;
        position: relative;
      }

      .rbc-event-content {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 13px;
        font-weight: 500;
      }
    }
  }

  .rbc-selected-cell {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .rbc-show-more {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    background-color: rgba(255, 255, 255, 0.3);
    z-index: 4;
    font-weight: 500;
    font-size: 11px;
    height: auto;
    line-height: normal;
    white-space: nowrap;
    padding: 0 5px;
    margin-top: 5px;
    color: ${palette('indigo', 5)};
    ${transition()};

    &:hover {
      color: #252424;
    }
  }

  /* Month View */
  .rbc-month-view {
    position: relative;
    border: 1px solid transparent;
    display: flex;
    flex-direction: column;
    flex: 1 0 0;
    width: 100%;
    user-select: none;
    height: 100%;

    .rbc-header {
      border-bottom: 1px solid ${palette('grey', 2)};
      color: #fff;
      font-family: 'Roboto', sans-serif;
      font-size: 12px;
      text-align: center;

      @media (max-width: 767px) {
        border-bottom: 0;
      }
    }

    .rbc-header + .rbc-header {
      border-left: 0;
    }

    .rbc-rtl & .rbc-header + .rbc-header {
      border-left-width: 0;
      border-right: 0;
    }
  }

  .rbc-month-header {
    display: flex;
    flex-direction: row;
    background-color: ${palette('indigo', 5)};

    @media (max-width: 767px) {
      background-color: transparent;
      margin-bottom: 15px;
    }
  }

  .rbc-month-row {
    display: flex;
    position: relative;
    flex-direction: column;
    flex: 1 0 0;
    overflow: hidden;
    padding: 10px 0;
    height: 100%;

    @media (max-width: 767px) {
      overflow: inherit;
    }

    + .rbc-month-row {
      border-top: 1px solid ${palette('grey', 2)};

      @media (max-width: 767px) {
        border-top: 0;
      }
    }
  }

  .rbc-date-cell {
    padding: 0 10px 5px;
    color: ${palette('grey', 6)};
    text-align: center;
    font-size: 13px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;

    @media (max-width: 767px) {
      color: #ffffff;
      padding: 0;
    }

    &.rbc-off-range {
      color: ${palette('grey', 6)};

      @media (max-width: 767px) {
        color: ${palette('indigo', 2)};
      }
    }

    a {
      padding: 7px;
      position: relative;
      z-index: 1;
      border-radius: 50%;
      display: inline-block;
    }

    &.rbc-now {
      a {
        background-color: ${palette('indigo', 5)};
        color: #fff;
        font-weight: 500;

        @media (max-width: 767px) {
          background-color: #fff;
          color: ${palette('indigo', 5)};
          box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
        }
      }
    }

    > a {
      &,
      &:active,
      &:visited {
        color: inherit;
        text-decoration: none;
      }
    }
  }

  .rbc-row-bg {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: row;
    flex: 1 0 0;
    overflow: hidden;

    .rbc-off-range-bg {
      background-color: ${palette('grey', 0)};

      @media (max-width: 767px) {
        background-color: ${palette('indigo', 5)};
      }
    }
  }

  .rbc-day-bg + .rbc-day-bg {
    border-left: ${props => (props['data-rtl'] === 'rtl' ? '0' : '0')} solid
      ${palette('grey', 2)};
    border-right: ${props => (props['data-rtl'] === 'rtl' ? '0' : '0')} solid
      ${palette('grey', 2)};
  }

  .rbc-day-bg .rbc-rtl + .rbc-rtl {
    border-left-width: 0;
    border-right: 1px solid ${palette('border', 2)};
  }

  .rbc-overlay {
    position: absolute;
    z-index: 5;
    border: 1px solid #e5e5e5;
    background-color: #fff;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
    padding: 10px;

    > * + * {
      margin-top: 1px;
    }
  }

  .rbc-overlay-header {
    border-bottom: 1px solid #e5e5e5;
    margin: -10px -10px 5px -10px;
    padding: 10px;
    font-weight: 700;
    text-align: center;
    color: #323332;
  }

  /* Agenda */
  .rbc-agenda-view {
    display: flex;
    flex-direction: column;
    flex: 1 0 0;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;

    table {
      width: 100%;
      border: 0;
      border-bottom: 0;
      border-spacing: 0;

      tbody > tr > td {
        padding: 10px;
        vertical-align: top;
        border-right: 1px solid ${palette('grey', 2)};
        border-bottom: 1px solid ${palette('grey', 2)};

        &:last-child {
          border-right: 0;
        }
      }

      .rbc-agenda-time-cell {
        padding-left: 15px;
        padding-right: 15px;
        text-transform: lowercase;
      }

      tbody > tr > td + td {
        border-left: 0;
      }

      .rbc-rtl & {
        tbody > tr > td + td {
          border-left-width: 0;
          border-right: 1px solid ${palette('border', 2)};
        }
      }

      tbody > tr + tr {
        border-top: 1px solid ${palette('border', 2)};
      }

      thead > tr {
        background-color: ${palette('indigo', 5)};
        > th {
          padding: 7px 12px;
          text-align: ${props =>
            props['data-rtl'] === 'rtl' ? 'right' : 'left'};
          border-bottom: 0;

          .rbc-rtl & {
            text-align: right;
          }
        }
      }
    }
  }

  .rbc-agenda-content {
    width: 100%;
    overflow-x: scroll;
    border: 1px solid ${palette('grey', 2)};
    border-top: 0;
    border-bottom: 0;
    -webkit-overflow-scrolling: touch;

    table {
      border: 0;

      tbody {
        height: 28px;
        display: table;
      }
    }
  }

  .rbc-agenda-time-cell {
    text-transform: lowercase;

    .rbc-continues-after:after {
      content: ' »';
    }
    .rbc-continues-prior:before {
      content: '« ';
    }
  }

  .rbc-agenda-date-cell,
  .rbc-agenda-time-cell {
    white-space: nowrap;
    color: ${palette('grey', 8)};
    font-size: 12px;
    font-weight: 400;
  }

  .rbc-agenda-event-cell {
    width: 100%;
    color: ${palette('grey', 8)};
    font-size: 12px;
  }

  /* Time Column */
  .rbc-time-column {
    display: flex;
    flex-direction: column;
    min-height: 100%;

    .rbc-timeslot-group {
      flex: 1;
    }
  }

  .rbc-timeslot-group {
    border-bottom: 1px solid ${palette('grey', 2)};
    border-right: 1px solid ${palette('grey', 2)};
    min-height: 40px;
    display: flex;
    flex-flow: column nowrap;
  }

  .rbc-time-gutter,
  .rbc-header-gutter {
    flex: none;
  }

  .rbc-time-gutter {
    border-left: 1px solid ${palette('grey', 2)};
  }

  .rbc-label {
    padding: 5px;
    font-size: 13px;
    color: ${palette('grey', 8)};
  }

  .rbc-day-slot {
    position: relative;

    .rbc-event {
      border: 0;
      display: flex;
      max-height: 100%;
      flex-flow: column wrap;
      align-items: flex-start;
      overflow: hidden;
    }

    .rbc-event-label {
      flex: none;
      padding-right: 5px;
      width: auto;
    }

    .rbc-event-content {
      width: 100%;
      flex: 1 1 auto;
      word-wrap: break-word;
      line-height: 1;
      height: 100%;
      ${'' /* min-height: 1em; */};
    }

    .rbc-time-slot {
      border-top: 1px solid #fff;
    }
  }

  .rbc-time-content {
    .rbc-time-gutter {
      > * {
        border-left: 0;
      }
    }
  }

  .rbc-time-slot {
    flex: 1 0 0;

    &.rbc-now {
      font-weight: bold;
    }
  }

  .rbc-day-header {
    text-align: center;
  }

  .rbc-day-slot .rbc-event {
    position: absolute;
    z-index: 2;
  }

  /* Time Grid*/
  .rbc-slot-selection {
    z-index: 10;
    position: absolute;
    cursor: default;
    background-color: rgba(0, 0, 0, 0.5);
    color: #ffffff;
    font-size: 75%;
    padding: 3px;
  }

  .rbc-time-view {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    border: 0;
    min-height: 0;

    .rbc-time-gutter {
      white-space: nowrap;
    }

    .rbc-allday-cell {
      width: calc(100% - 70px);
      border-bottom: 0;
      position: relative;
    }

    .rbc-allday-events {
      position: relative;
      z-index: 4;
    }

    .rbc-row {
      min-height: 30px;
    }
  }

  .rbc-time-header {
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;

    > .rbc-row {
      &:last-child {
        border-bottom: 1px solid ${palette('grey', 2)};
        border-right: 1px solid ${palette('grey', 2)};

        .rbc-header-gutter {
          border-right: 1px solid ${palette('grey', 2)};
        }
      }
    }

    .rbc-time-header-gutter {
      padding: 0;
    }

    .rbc-header {
      border-bottom: 0;
      color: #fff;
      font-family: 'Roboto', sans-serif;
      font-size: 12px;
      text-align: center;
      background-color: ${palette('indigo', 5)};
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .rbc-header-gutter {
      border-bottom: 0;
      border-right: 0;
      border-left: 1px solid ${palette('grey', 2)};
    }

    > .rbc-row > * + * {
      border-left: 0;
    }

    .rbc-rtl & > .rbc-row > * + * {
      border-left-width: 0;
      border-right: 0;
    }

    > .rbc-row:first-child {
      background-color: ${palette('indigo', 5)};
      border-bottom: 0;
    }

    .rbc-gutter-cell {
      flex: none;
    }

    > .rbc-gutter-cell + * {
      width: 100%;
    }
  }

  .rbc-time-content {
    display: flex;
    flex: 1 0 0%;
    align-items: flex-start;
    width: 100%;
    border-top: 0;
    overflow-y: auto;
    position: relative;

    > .rbc-time-gutter {
      flex: none;
    }

    > * + * > * {
      border-left: 0;
    }

    .rbc-rtl & > * + * > * {
      border-left-width: 0;
      border-right: 0;
    }

    > .rbc-day-slot {
      width: 100%;
      user-select: none;
    }
  }

  .rbc-current-time-indicator {
    position: absolute;
    z-index: 1;
    left: 0;
    height: 1px;

    background-color: ${palette('primary', 0)};
    pointer-events: none;

    &::before {
      display: block;

      position: absolute;
      left: -3px;
      top: -3px;

      content: ' ';
      background-color: ${palette('primary', 0)};
      width: 8px;
      height: 8px;
      ${borderRadius('50%')};
    }

    .rbc-rtl &::before {
      left: 0;
      right: -3px;
    }
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: slategray;
  }

  .token.punctuation {
    color: ${palette('text', 2)};
  }

  .namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: ${palette('calendar', 0)};
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: ${palette('calendar', 1)};
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: ${palette('calendar', 2)};
    background: hsla(0, 0%, 100%, 0.5);
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: ${palette('calendar', 3)};
  }

  .token.function {
    color: ${palette('calendar', 4)};
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: ${palette('calendar', 5)};
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
`;

const WDCalendarModalBody = styled.div`
  padding: 30px;

  @media (max-width: 767px) {
    padding: 15px;
  }

  .modalTitle {
    font-size: 16px;
    font-weight: 500;
    color: ${palette('grey', 8)};
    margin: 0 0 20px;
  }

  .calendarInputWrapper {
    width: 100%;
    margin-bottom: 20px;

    ${InputSearch}, ${DescField} {
      width: 100%;

      > div {
        &:before {
          height: 1px;
        }
      }
    }
  }

  .calendarDatePicker {
    display: flex;

    ${StartDatepicker} {
      margin-right: 10px;
    }

    ${EndDatepicker} {
      margin-left: 10px;
    }
  }

  .actionBtnsWrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 30px;

    ${DeleteButton} {
      margin-right: auto;
      width: 35px;
      height: 35px;

      ${Icon} {
        font-size: 22px;
        color: ${palette('grey', 5)};
      }
    }
  }
`;

const MobileEventPlace = styled.div`
  width: 100%;
  padding: 20px 20px 75px;
  height: 55%;
  flex-shrink: 0;
  overflow: auto;
  z-index: 100;
  position: absolute;
  bottom: 0;
  background-color: #ffffff;
  border-top: 1px solid ${palette('grey', 2)};
  box-sizing: border-box;

  * {
    box-sizing: border-box;
  }

  .eventsList {
    height: 100%;
    overflow-y: auto;

    .eventItem {
      font-size: 14px;
      color: ${palette('grey', 8)};
      margin-bottom: 30px;
      padding-left: 30px;
      position: relative;
      display: flex;
      align-items: center;
      height: auto;

      &:before {
        content: '';
        width: 10px;
        height: 10px;
        display: inline-block;
        background-color: ${palette('indigo', 5)};
        border-radius: 50%;
        position: absolute;
        left: 0;
      }

      &:after {
        content: '';
        width: 2px;
        height: calc(100% + 24px);
        display: inline-block;
        position: absolute;
        top: 5px;
        left: 2px;
        border-right: 2px dashed ${palette('indigo', 5)};
      }

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;

        &::after {
          display: none;
        }
      }
    }
  }

  ${AddButton} {
    padding: 10px 15px;
    background-color: ${palette('indigo', 5)};
    position: absolute;
    bottom: 15px;
    right: 15px;

    ${Icon} {
      color: #ffffff;
    }
  }

  ${CancelButton} {
    position: absolute;
    bottom: 27px;
  }
`;

const CalendarStyleWrapper = WithDirection(WDCalendarStyleWrapper);
const CalendarModalBody = WithDirection(WDCalendarModalBody);
export {
  CalendarStyleWrapper,
  CalendarModalBody,
  Prev,
  Next,
  Dialog,
  InputSearch,
  DescField,
  StartDatepicker,
  EndDatepicker,
  OkButton,
  CancelButton,
  DeleteButton,
  MobileEventPlace,
  AddButton,
  Icon,
};
