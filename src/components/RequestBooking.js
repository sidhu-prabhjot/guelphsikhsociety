import React, {Component} from 'react';
import {Text, ScrollView, Picker} from 'react-native';
import {ToMainScreen, Button, Input, CardSection, Spinner} from './common';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {
  bookingEventHolderChanged,
  bookingEmailChanged,
  bookingPhoneNumberChanged,
  bookingStartHourChanged,
  bookingStartMinChanged,
  bookingStartMeridiemChanged,
  bookingEndHourChanged,
  bookingEndMinChanged,
  bookingEndMeridiemChanged,
  bookingEventTypeChanged,
  bookingEventTitleChanged,
  bookingStartMonthChanged,
  bookingStartDateChanged,
  bookingStartYearChanged,
  bookingEndMonthChanged,
  bookingEndDateChanged,
  bookingEndYearChanged,
  clearInputs,
  createRequest,
  requestFormIncomplete,
} from '../actions';

class RequestBooking extends Component {
  componentDidMount() {
    this.props.clearInputs();
  }
  onBookingEventHolderChanged(text) {
    this.props.bookingEventHolderChanged(text);
  }

  onBookingEmailChanged(text) {
    this.props.bookingEmailChanged(text);
  }

  onBookingPhoneNumberChanged(text) {
    this.props.bookingPhoneNumberChanged(text);
  }

  onBookingEventTitleChanged(text) {
    this.props.bookingEventTitleChanged(text);
  }

  onCreateRequest() {
    const {
      bookingEventHolder,
      bookingEmail,
      bookingPhoneNumber,
      bookingEventTitle,
      bookingEventType,
      bookingStartYear,
      bookingStartMonth,
      bookingStartDate,
      bookingEndYear,
      bookingEndMonth,
      bookingEndDate,
      bookingStartMeridiem,
      bookingEndMeridiem,
      bookingStartHour,
      bookingStartMin,
      bookingEndHour,
      bookingEndMin,
    } = this.props;

    const startTime = `${bookingStartHour}:${bookingStartMin}/${bookingStartMeridiem}`;
    const endTime = `${bookingEndHour}:${bookingEndMin}/${bookingEndMeridiem}`;

    const year = new Date().getFullYear(); //To get the Current Year
    const month = new Date().getMonth() + 1; //To get the Current Month
    const date = new Date().getDate(); //To get the Current Date
    const hours = new Date().getHours(); //To get the Current Hours
    const min = new Date().getMinutes(); //To get the Current Minutes
    const sec = new Date().getSeconds(); //To get the Current Seconds

    const timeStampV5 =
      year + '/' + month + '/' + date + '/' + hours + '/' + min + '/' + sec;

    if (
      bookingEventHolder === '' ||
      bookingEmail === '' ||
      bookingPhoneNumber === '' ||
      bookingEventTitle === '' ||
      bookingEventType === ''
    ) {
      this.props.requestFormIncomplete();
    } else {
      this.props.createRequest({
        bookingEventHolder,
        bookingEmail,
        bookingPhoneNumber,
        bookingEventTitle,
        bookingEventType,
        bookingStartYear,
        bookingStartMonth,
        bookingStartDate,
        bookingEndYear,
        bookingEndMonth,
        bookingEndDate,
        startTime,
        endTime,
        timeStampV5,
        bookingStartMeridiem,
        bookingEndMeridiem,
      });
    }
  }

  renderSpinner() {
    if (this.props.bookingLoading) {
      return (
        <CardSection>
          <Spinner size="large" />
        </CardSection>
      );
    } else {
      return (
        <CardSection style={styles.buttonSectionStyle}>
          <Button onPress={this.onCreateRequest.bind(this)}>
            Send Request
          </Button>
        </CardSection>
      );
    }
  }

  checkResponseText() {
    if (this.props.bookingResponse === 'REQUEST SENT') {
      return <Text style={styles.successResponseStyle}>REQUEST SENT</Text>;
    } else if (this.props.bookingResponse === 'REQUEST FORM INCOMPLETE') {
      return (
        <Text style={styles.failureResponseStyle}>REQUEST FORM INCOMPLETE</Text>
      );
    } else if (this.props.bookingResponse === 'REQUEST FAILED TO SEND') {
      return (
        <Text style={styles.failureResponseStyle}>REQUEST FAILED TO SEND</Text>
      );
    } else {
    }
  }

  render() {
    return (
      <ScrollView>
        <LinearGradient
          colors={['#FFFFFF', '#FFFFFF']}
          style={styles.LinearGradient}>
          <ToMainScreen
            headerText="Request Booking"
            style={styles.headerStyle}
          />
          <CardSection style={styles.inputStyle}>
            <Input
              label="*Event Holder:"
              placeholder="First Name and Last Name"
              onChangeText={this.onBookingEventHolderChanged.bind(this)}
              value={this.props.bookingEventHolder}
            />
          </CardSection>
          <CardSection style={styles.inputStyle}>
            <Input
              label="*Email:"
              placeholder="example@gmail.com"
              keyboardType={'email-address'}
              onChangeText={this.onBookingEmailChanged.bind(this)}
              value={this.props.bookingEmail}
            />
          </CardSection>
          <CardSection style={styles.inputStyle}>
            <Input
              label="*Phone Number:"
              placeholder="000-000-0000"
              keyboardType={'number-pad'}
              onChangeText={this.onBookingPhoneNumberChanged.bind(this)}
              value={this.props.bookingPhoneNumber}
              maxLength={10}
            />
          </CardSection>
          <CardSection style={styles.inputStyle}>
            <Input
              label="*Event Title:"
              placeholder="example name for event"
              onChangeText={this.onBookingEventTitleChanged.bind(this)}
              value={this.props.bookingEventTitle}
            />
          </CardSection>
          {/*///////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <CardSection>
            <Text style={styles.pickerHeaderStyle}>Start Date:</Text>
          </CardSection>

          {/*pickers used for choosing the start date*/}
          <CardSection style={styles.pickerSectionStyle}>
            <Picker
              style={styles.monthPickerStyle}
              selectedValue={this.props.bookingStartMonth}
              onValueChange={value =>
                this.props.bookingStartMonthChanged(value)
              }>
              {/*The picker is a drop-down menu(android) or a scroll wheel(IOS), and it the
                items are created here*/}
              <Picker.Item label="MM" value="Not Available" />
              <Picker.Item label="January" value="January" />
              <Picker.Item label="February" value="February" />
              <Picker.Item label="March" value="March" />
              <Picker.Item label="April" value="April" />
              <Picker.Item label="May" value="May" />
              <Picker.Item label="June" value="June" />
              <Picker.Item label="July" value="July" />
              <Picker.Item label="August" value="August" />
              <Picker.Item label="September" value="September" />
              <Picker.Item label="October" value="October" />
              <Picker.Item label="November" value="November" />
              <Picker.Item label="December" value="December" />
            </Picker>
            <Picker
              style={styles.datePickerStyle}
              selectedValue={this.props.bookingStartDate}
              onValueChange={value =>
                this.props.bookingStartDateChanged(value)
              }>
              {/*The picker is a drop-down menu(android) or a scroll wheel(IOS), and it the
                items are created here*/}
              <Picker.Item label="DD" value="Not Available" />
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
              <Picker.Item label="7" value="7" />
              <Picker.Item label="8" value="8" />
              <Picker.Item label="9" value="9" />
              <Picker.Item label="10" value="10" />
              <Picker.Item label="11" value="11" />
              <Picker.Item label="12" value="12" />
              <Picker.Item label="13" value="13" />
              <Picker.Item label="14" value="14" />
              <Picker.Item label="15" value="15" />
              <Picker.Item label="16" value="16" />
              <Picker.Item label="17" value="17" />
              <Picker.Item label="18" value="18" />
              <Picker.Item label="19" value="19" />
              <Picker.Item label="20" value="20" />
              <Picker.Item label="21" value="21" />
              <Picker.Item label="22" value="22" />
              <Picker.Item label="23" value="23" />
              <Picker.Item label="24" value="24" />
              <Picker.Item label="25" value="25" />
              <Picker.Item label="26" value="26" />
              <Picker.Item label="27" value="27" />
              <Picker.Item label="28" value="28" />
              <Picker.Item label="29" value="29" />
              <Picker.Item label="30" value="30" />
              <Picker.Item label="31" value="31" />
            </Picker>
            <Picker
              style={styles.yearPickerStyle}
              selectedValue={this.props.bookingStartYear}
              onValueChange={value =>
                this.props.bookingStartYearChanged(value)
              }>
              {/*The picker is a drop-down menu(android) or a scroll wheel(IOS), and it the
                items are created here*/}
              <Picker.Item label="YYYY" value="Not Available" />
              <Picker.Item label="2020" value="2020" />
              <Picker.Item label="2021" value="2021" />
              <Picker.Item label="2022" value="2022" />
              <Picker.Item label="2023" value="2023" />
              <Picker.Item label="2024" value="2024" />
              <Picker.Item label="2025" value="2025" />
              <Picker.Item label="2026" value="2026" />
              <Picker.Item label="2027" value="2027" />
              <Picker.Item label="2028" value="2028" />
              <Picker.Item label="2029" value="2029" />
              <Picker.Item label="2030" value="2030" />
              <Picker.Item label="2031" value="2031" />
              <Picker.Item label="2032" value="2032" />
              <Picker.Item label="2033" value="2033" />
              <Picker.Item label="2034" value="2034" />
              <Picker.Item label="2035" value="2035" />
            </Picker>
          </CardSection>
          {/*///////////////////////////////////////////////////////////////////////////////////////////////////*/}

          {/*///////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <CardSection>
            <Text style={styles.pickerHeaderStyle}>End Date:</Text>
          </CardSection>
          {/*pickers used for choosing the end date*/}
          <CardSection style={styles.datePickerSectionStyle}>
            <Picker
              style={styles.monthPickerStyle}
              selectedValue={this.props.bookingEndMonth}
              onValueChange={value => this.props.bookingEndMonthChanged(value)}>
              {/*The picker is a drop-down menu(android) or a scroll wheel(IOS), and it the
                items are created here*/}
              <Picker.Item label="MM" value="Not Available" />
              <Picker.Item label="January" value="January" />
              <Picker.Item label="February" value="February" />
              <Picker.Item label="March" value="March" />
              <Picker.Item label="April" value="April" />
              <Picker.Item label="May" value="May" />
              <Picker.Item label="June" value="June" />
              <Picker.Item label="July" value="July" />
              <Picker.Item label="August" value="August" />
              <Picker.Item label="September" value="September" />
              <Picker.Item label="October" value="October" />
              <Picker.Item label="November" value="November" />
              <Picker.Item label="December" value="December" />
            </Picker>
            <Picker
              style={styles.datePickerStyle}
              selectedValue={this.props.bookingEndDate}
              onValueChange={value => this.props.bookingEndDateChanged(value)}>
              {/*The picker is a drop-down menu(android) or a scroll wheel(IOS), and it the
                items are created here*/}
              <Picker.Item label="DD" value="Not Available" />
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
              <Picker.Item label="7" value="7" />
              <Picker.Item label="8" value="8" />
              <Picker.Item label="9" value="9" />
              <Picker.Item label="10" value="10" />
              <Picker.Item label="11" value="11" />
              <Picker.Item label="12" value="12" />
              <Picker.Item label="13" value="13" />
              <Picker.Item label="14" value="14" />
              <Picker.Item label="15" value="15" />
              <Picker.Item label="16" value="16" />
              <Picker.Item label="17" value="17" />
              <Picker.Item label="18" value="18" />
              <Picker.Item label="19" value="19" />
              <Picker.Item label="20" value="20" />
              <Picker.Item label="21" value="21" />
              <Picker.Item label="22" value="22" />
              <Picker.Item label="23" value="23" />
              <Picker.Item label="24" value="24" />
              <Picker.Item label="25" value="25" />
              <Picker.Item label="26" value="26" />
              <Picker.Item label="27" value="27" />
              <Picker.Item label="28" value="28" />
              <Picker.Item label="29" value="29" />
              <Picker.Item label="30" value="30" />
              <Picker.Item label="31" value="31" />
            </Picker>
            <Picker
              style={styles.yearPickerStyle}
              selectedValue={this.props.bookingEndYear}
              onValueChange={value => this.props.bookingEndYearChanged(value)}>
              {/*The picker is a drop-down menu(android) or a scroll wheel(IOS), and it the
                items are created here*/}
              <Picker.Item label="YYYY" value="Not Available" />
              <Picker.Item label="2020" value="2020" />
              <Picker.Item label="2021" value="2021" />
              <Picker.Item label="2022" value="2022" />
              <Picker.Item label="2023" value="2023" />
              <Picker.Item label="2024" value="2024" />
              <Picker.Item label="2025" value="2025" />
              <Picker.Item label="2026" value="2026" />
              <Picker.Item label="2027" value="2027" />
              <Picker.Item label="2028" value="2028" />
              <Picker.Item label="2029" value="2029" />
              <Picker.Item label="2030" value="2030" />
              <Picker.Item label="2031" value="2031" />
              <Picker.Item label="2032" value="2032" />
              <Picker.Item label="2033" value="2033" />
              <Picker.Item label="2034" value="2034" />
              <Picker.Item label="2035" value="2035" />
            </Picker>
          </CardSection>
          {/*///////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <CardSection>
            <Text style={styles.pickerHeaderStyle}>Start Time:</Text>
          </CardSection>
          <CardSection style={styles.pickerSectionStyle}>
            <Picker
              style={styles.monthPickerStyle}
              selectedValue={this.props.bookingStartHour}
              onValueChange={value =>
                this.props.bookingStartHourChanged(value)
              }>
              {/*The picker is a drop-down menu(android) or a scroll wheel(IOS), and it the
                items are created here*/}
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
              <Picker.Item label="7" value="7" />
              <Picker.Item label="8" value="8" />
              <Picker.Item label="9" value="9" />
              <Picker.Item label="10" value="10" />
              <Picker.Item label="11" value="11" />
              <Picker.Item label="12" value="12" />
            </Picker>
            <Picker
              style={styles.datePickerStyle}
              selectedValue={this.props.bookingStartMin}
              onValueChange={value => this.props.bookingStartMinChanged(value)}>
              {/*The picker is a drop-down menu(android) or a scroll wheel(IOS), and it the
                items are created here*/}
              <Picker.Item label="00" value="00" />
              <Picker.Item label="15" value="15" />
              <Picker.Item label="30" value="30" />
              <Picker.Item label="45" value="45" />
            </Picker>
            <Picker
              style={styles.yearPickerStyle}
              selectedValue={this.props.bookingStartMeridiem}
              onValueChange={value =>
                this.props.bookingStartMeridiemChanged(value)
              }>
              {/*The picker is a drop-down menu(android) or a scroll wheel(IOS), and it the
                items are created here*/}
              <Picker.Item label="AM" value="AM" />
              <Picker.Item label="PM" value="PM" />
            </Picker>
          </CardSection>
          {/*///////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <CardSection>
            <Text style={styles.pickerHeaderStyle}>End Time:</Text>
          </CardSection>
          <CardSection style={styles.pickerSectionStyle}>
            <Picker
              style={styles.monthPickerStyle}
              selectedValue={this.props.bookingEndHour}
              onValueChange={value => this.props.bookingEndHourChanged(value)}>
              {/*The picker is a drop-down menu(android) or a scroll wheel(IOS), and it the
                items are created here*/}
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
              <Picker.Item label="7" value="7" />
              <Picker.Item label="8" value="8" />
              <Picker.Item label="9" value="9" />
              <Picker.Item label="10" value="10" />
              <Picker.Item label="11" value="11" />
              <Picker.Item label="12" value="12" />
            </Picker>
            <Picker
              style={styles.datePickerStyle}
              selectedValue={this.props.bookingEndMin}
              onValueChange={value => this.props.bookingEndMinChanged(value)}>
              {/*The picker is a drop-down menu(android) or a scroll wheel(IOS), and it the
                items are created here*/}
              <Picker.Item label="00" value="00" />
              <Picker.Item label="15" value="15" />
              <Picker.Item label="30" value="30" />
              <Picker.Item label="45" value="45" />
            </Picker>
            <Picker
              style={styles.yearPickerStyle}
              selectedValue={this.props.bookingEndMeridiem}
              onValueChange={value =>
                this.props.bookingEndMeridiemChanged(value)
              }>
              {/*The picker is a drop-down menu(android) or a scroll wheel(IOS), and it the
                items are created here*/}
              <Picker.Item label="AM" value="AM" />
              <Picker.Item label="PM" value="PM" />
            </Picker>
          </CardSection>
          {/*///////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <CardSection>
            <Text style={styles.pickerHeaderStyle}>Event Type:</Text>
          </CardSection>

          <CardSection style={styles.pickerSectionStyle}>
            <Picker
              style={styles.pickerStyle}
              selectedValue={this.props.bookingEventType}
              onValueChange={value =>
                this.props.bookingEventTypeChanged(value)
              }>
              {/*The picker is a drop-down menu(android) or a scroll wheel(IOS), and it the
                items are created here*/}
              <Picker.Item label="Prayer" value="Prayer" />
              <Picker.Item label="Wedding" value="Wedding" />
              <Picker.Item label="Holiday" value="Holiday" />
              <Picker.Item label="Kirtan" value="Kirtan" />
              <Picker.Item label="Gurpurab" value="Gurpurab" />
              <Picker.Item label="Birthday" value="Birthday" />
              <Picker.Item label="Education" value="Education" />
              <Picker.Item label="Funeral" value="Funeral" />
              <Picker.Item label="Other" value="Other" />
            </Picker>
          </CardSection>
          <CardSection style={styles.responseViewStyle}>
            <Text style={styles.responseTextStyle}>
              {this.checkResponseText()}
            </Text>
          </CardSection>
          {this.renderSpinner()}
        </LinearGradient>
      </ScrollView>
    );
  }
}

const styles = {
  inputStyle: {
    marginLeft: 24,
    marginRight: 24,
    backgroundColor: 'transparent',
    borderColor: '#ffa41b',
    marginBottom: 32,
  },
  headerStyle: {
    marginBottom: 32,
  },
  LinearGradient: {
    flex: 1,
  },
  pickerStyle: {
    flex: 1,
    marginLeft: 24,
    marginRight: 24,
    fontSize: 18,
  },
  pickerHeaderStyle: {
    flex: 1,
    marginLeft: 32,
    fontSize: 18,
  },
  datePickerSectionStyle: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    borderColor: 'transparent',
    marginBottom: 20,
    backgroundColor: '#00a8cc',
    marginLeft: 24,
    marginRight: 24,
    borderRadius: 24,
  },
  yearPickerStyle: {
    flex: 3,
  },
  datePickerStyle: {
    flex: 2,
  },
  monthPickerStyle: {
    flex: 3,
  },
  pickerSectionStyle: {
    backgroundColor: '#00a8cc',
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
    borderRadius: 24,
  },
  buttonSectionStyle: {
    marginVertical: 24,
  },
  responseViewStyle: {
    justifyContent: 'center',
  },
  responseTextStyle: {
    fontSize: 16,
  },
  successResponseStyle: {
    color: '#008000',
    fontSize: 18,
  },
  failureResponseStyle: {
    color: '#FF0000',
    fontSize: 18,
  },
};

const mapStateToProps = state => {
  return {
    bookingEventHolder: state.booking.bookingEventHolder,
    bookingEmail: state.booking.bookingEmail,
    bookingPhoneNumber: state.booking.bookingPhoneNumber,
    bookingEventTitle: state.booking.bookingEventTitle,
    bookingStartHour: state.booking.bookingStartHour,
    bookingStartMin: state.booking.bookingStartMin,
    bookingStartMeridiem: state.booking.bookingStartMeridiem,
    bookingEndHour: state.booking.bookingEndHour,
    bookingEndMin: state.booking.bookingEndMin,
    bookingEndMeridiem: state.booking.bookingEndMeridiem,
    bookingEventType: state.booking.bookingEventType,
    bookingStartMonth: state.booking.bookingStartMonth,
    bookingStartDate: state.booking.bookingStartDate,
    bookingStartYear: state.booking.bookingStartYear,
    bookingEndMonth: state.booking.bookingEndMonth,
    bookingEndDate: state.booking.bookingEndDate,
    bookingEndYear: state.booking.bookingEndYear,
    bookingLoading: state.booking.bookingLoading,
    bookingResponse: state.booking.bookingResponse,
  };
};

export default connect(
  mapStateToProps,
  {
    bookingEventHolderChanged,
    bookingEmailChanged,
    bookingPhoneNumberChanged,
    bookingStartHourChanged,
    bookingStartMinChanged,
    bookingStartMeridiemChanged,
    bookingEndHourChanged,
    bookingEndMinChanged,
    bookingEndMeridiemChanged,
    bookingEventTypeChanged,
    bookingEventTitleChanged,
    bookingStartMonthChanged,
    bookingStartDateChanged,
    bookingStartYearChanged,
    bookingEndMonthChanged,
    bookingEndDateChanged,
    bookingEndYearChanged,
    clearInputs,
    createRequest,
    requestFormIncomplete,
  },
)(RequestBooking);
