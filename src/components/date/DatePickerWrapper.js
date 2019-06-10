import React, {Component} from "react";
import moment from "moment";
import styled from "styled-components";
import "react-dates/initialize";
import {DateRangePicker} from "react-dates";
import {ButtonDatePicker} from "../buttons";
import "react-dates/lib/css/_datepicker.css";

const PanelPresetWrapper = styled.div`
  padding: 11px 22px 0px 22px;
`;

class DatePickerWrapper extends Component {
  constructor(props) {
    super(props);

    let focusedInput = null;
    if (props.autoFocus) {
      focusedInput = "startDate";
    } else if (props.autoFocusEndDate) {
      focusedInput = "endDate";
    }

    this.state = {
      focusedInput,
      startDate: null,
      endDate: null
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.renderDatePresets = this.renderDatePresets.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(startDate, endDate) {
    console.log(`submitted ${startDate} ${endDate}`);
  }

  onDatesChange({startDate, endDate}) {
    this.setState(
      {
        focusedInput: null,
        startDate,
        endDate
      },
      () => {
        this.onSubmit(startDate, endDate);
      }
    );
  }

  onFocusChange(focusedInput) {
    if (!focusedInput) return; // doesn't update the focusedInput if it is trying to close the DRP
    this.setState({focusedInput});
  }

  renderDatePresets() {
    const {styles} = this.props;
    const {startDate, endDate} = this.state;

    const today = moment();
    const tomorrow = moment().add(1, "day");
    const presets = [
      {
        text: "Today",
        start: today,
        end: today
      },
      {
        text: "Tomorrow",
        start: tomorrow,
        end: tomorrow
      },
      {
        text: "Next Week",
        start: today,
        end: moment().add(1, "week")
      },
      {
        text: "Next Month",
        start: today,
        end: moment().add(1, "month")
      }
    ];

    return (
      <PanelPresetWrapper>
        {presets.map(({text, start, end}) => {
          return (
            <ButtonDatePicker
              small
              key={text}
              onClick={() =>
                this.onDatesChange({startDate: start, endDate: end})
              }
            >
              {text}
            </ButtonDatePicker>
          );
        })}
      </PanelPresetWrapper>
    );
  }

  render() {
    const {focusedInput, startDate, endDate} = this.state;

    return (
      <div>
        <DateRangePicker
          startDateId="startDate"
          endDateId="endDate"
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
          focusedInput={focusedInput}
          startDate={startDate}
          endDate={endDate}
          daySize={25}
          calendarInfoPosition="top"
          renderCalendarInfo={this.renderDatePresets}
          noBorder={true}
          reopenPickerOnClearDates={true}
        />
      </div>
    );
  }
}

export default DatePickerWrapper;
