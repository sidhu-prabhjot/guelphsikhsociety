import React, {Component} from 'react';
import {
  Text,
  Picker,
  ScrollView,
  Modal,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';
import {Input, CardSection, Button, ToMainScreen} from './common';
import {connect} from 'react-redux';
import Communications from 'react-native-communications';
import _ from 'lodash';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import {
  eventTitleChanged,
  eventHolderChanged,
  eventDescriptionChanged,
  startMonthChanged,
  startDateChanged,
  startYearChanged,
  endMonthChanged,
  endDateChanged,
  endYearChanged,
  eventTypeChanged,
  startEventHourChanged,
  startEventMinuteChanged,
  startEventMeridiemChanged,
  endEventHourChanged,
  endEventMinuteChanged,
  endEventMeridiemChanged,
  createEvent,
  emailFetch,
  eventFormIncomplete,
  clearEventInputs,
  openCreateEventModal,
  closeCreateEventModal,
} from '../actions';

class CreateEvent extends Component {
  componentDidMount() {
    this.props.clearEventInputs();
    this.props.emailFetch();
  }

  onEventTitleChange(text) {
    this.props.eventTitleChanged(text);
  }

  onEventHolderChange(text) {
    this.props.eventHolderChanged(text);
  }

  onEventDescriptionChange(text) {
    this.props.eventDescriptionChanged(text);
  }

  onEndDateChange(text) {
    this.props.endDateChanged(text);
  }

  //method to create a new event
  onCreatePressed() {
    const year = new Date().getFullYear(); //To get the Current Year
    const month = new Date().getMonth() + 1; //To get the Current Month
    const date = new Date().getDate(); //To get the Current Date
    const hours = new Date().getHours(); //To get the Current Hours
    const min = new Date().getMinutes(); //To get the Current Minutes
    const sec = new Date().getSeconds(); //To get the Current Seconds

    const timeStampV5 =
      year + '/' + month + '/' + date + '/' + hours + '/' + min + '/' + sec;

    const status = 'upcoming';

    const {
      eventTitle,
      eventHolder,
      startMonth,
      startDate,
      startYear,
      endMonth,
      endDate,
      endYear,
      eventType,
      eventDescription,
      startHour,
      startMinute,
      startMeridiem,
      endHour,
      endMinute,
      endMeridiem,
    } = this.props;

    //method to check if all the necessary input fields have been filled out, and if not, then display and error
    if (
      eventTitle === '' ||
      eventHolder === '' ||
      eventDescription === '' ||
      startYear === '' ||
      startMonth === '' ||
      startDate === '' ||
      endYear === '' ||
      endMonth === '' ||
      endDate === ''
    ) {
      this.props.eventFormIncomplete();
    } else {
      this.props.createEvent({
        eventTitle,
        eventHolder,
        startMonth,
        startDate,
        startYear,
        endMonth,
        endDate,
        endYear,
        eventType,
        timeStampV5,
        eventDescription,
        startHour,
        startMinute,
        startMeridiem,
        endHour,
        endMinute,
        endMeridiem,
        status,
      });
    }
  }

  //method to fetch the email list so the user can send an email
  getEmailList() {
    let result = this.props.emailsArray.map(({email}) => email);
    return result;
  }

  //this method will check the response after an event is created an format the response accordingly
  checkResponseText() {
    if (this.props.response === 'EVENT SUCCESSFULLY CREATED') {
      return (
        <Text style={styles.successResponseStyle}>{this.props.response}</Text>
      );
    } else if (this.props.response === 'FAILED TO CREATE EVENT') {
      return (
        <Text style={styles.failureResponseStyle}>{this.props.response}</Text>
      );
    } else if (this.props.response === 'EVENT CREATION FORM INCOMPLETE') {
      return (
        <Text style={styles.failureResponseStyle}>{this.props.response}</Text>
      );
    } else {
    }
  }

  render() {
    return (
      <ScrollView style={styles.containerStyle}>
        <LinearGradient
          colors={['#FFFFFF', '#FFFFFF']}
          style={styles.LinearGradient}>
          <ToMainScreen
            headerText="Create An Event"
            style={styles.headerStyle}
          />
          <CardSection style={styles.inputStyle}>
            <Input
              label="*Event Title: "
              placeholder="Event Title"
              onChangeText={this.onEventTitleChange.bind(this)}
              value={this.props.eventTitle}
            />
          </CardSection>

          <CardSection style={styles.inputStyle}>
            <Input
              label="*Event Holder: "
              placeholder="Name"
              onChangeText={this.onEventHolderChange.bind(this)}
              value={this.props.eventHolder}
            />
          </CardSection>

          <CardSection style={styles.inputStyle}>
            <Input
              label="*Event Description: "
              placeholder="Description Content"
              onChangeText={this.onEventDescriptionChange.bind(this)}
              value={this.props.eventDescription}
              multiline
            />
          </CardSection>

          {/*///////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <CardSection>
            <Text style={styles.pickerHeaderStyle}>*Start Date:</Text>
          </CardSection>

          {/*pickers used for choosing the start date*/}
          <CardSection style={styles.pickerSectionStyle}>
            <Picker
              style={styles.monthPickerStyle}
              selectedValue={this.props.startMonth}
              onValueChange={value => this.props.startMonthChanged(value)}>
              {/*The picker is a drop-down menu(android) or a scroll wheel(IOS), and it the
                items are created here*/}
              <Picker.Item label="MM" value="" />
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
              selectedValue={this.props.startDate}
              onValueChange={value => this.props.startDateChanged(value)}>
              {/*The picker is a drop-down menu(android) or a scroll wheel(IOS), and it the
                items are created here*/}
              <Picker.Item label="DD" value="" />
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
              selectedValue={this.props.startYear}
              onValueChange={value => this.props.startYearChanged(value)}>
              {/*The picker is a drop-down menu(android) or a scroll wheel(IOS), and it the
                items are created here*/}
              <Picker.Item label="YYYY" value="" />
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
            <Text style={styles.pickerHeaderStyle}>*End Date:</Text>
          </CardSection>
          {/*pickers used for choosing the end date*/}
          <CardSection style={styles.datePickerSectionStyle}>
            <Picker
              style={styles.monthPickerStyle}
              selectedValue={this.props.endMonth}
              onValueChange={value => this.props.endMonthChanged(value)}>
              {/*The picker is a drop-down menu(android) or a scroll wheel(IOS), and it the
                items are created here*/}
              <Picker.Item label="MM" value="" />
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
              selectedValue={this.props.endDate}
              onValueChange={value => this.props.endDateChanged(value)}>
              {/*The picker is a drop-down menu(android) or a scroll wheel(IOS), and it the
                items are created here*/}
              <Picker.Item label="DD" value="" />
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
              selectedValue={this.props.endYear}
              onValueChange={value => this.props.endYearChanged(value)}>
              {/*The picker is a drop-down menu(android) or a scroll wheel(IOS), and it the
                items are created here*/}
              <Picker.Item label="YYYY" value="" />
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
              selectedValue={this.props.startHour}
              onValueChange={value => this.props.startEventHourChanged(value)}>
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
              selectedValue={this.props.startMinute}
              onValueChange={value =>
                this.props.startEventMinuteChanged(value)
              }>
              {/*The picker is a drop-down menu(android) or a scroll wheel(IOS), and it the
                items are created here*/}
              <Picker.Item label="00" value="00" />
              <Picker.Item label="15" value="15" />
              <Picker.Item label="30" value="30" />
              <Picker.Item label="45" value="45" />
            </Picker>
            <Picker
              style={styles.yearPickerStyle}
              selectedValue={this.props.startMeridiem}
              onValueChange={value =>
                this.props.startEventMeridiemChanged(value)
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
              selectedValue={this.props.endHour}
              onValueChange={value => this.props.endEventHourChanged(value)}>
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
              selectedValue={this.props.endMinute}
              onValueChange={value => this.props.endEventMinuteChanged(value)}>
              {/*The picker is a drop-down menu(android) or a scroll wheel(IOS), and it the
                items are created here*/}
              <Picker.Item label="00" value="00" />
              <Picker.Item label="15" value="15" />
              <Picker.Item label="30" value="30" />
              <Picker.Item label="45" value="45" />
            </Picker>
            <Picker
              style={styles.yearPickerStyle}
              selectedValue={this.props.endMeridiem}
              onValueChange={value =>
                this.props.endEventMeridiemChanged(value)
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
              selectedValue={this.props.eventType}
              onValueChange={value => this.props.eventTypeChanged(value)}>
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
          <CardSection style={styles.cardSectionStyle}>
            <Button onPress={() => this.props.openCreateEventModal()}>
              Publish Event
            </Button>
          </CardSection>
          <CardSection style={styles.cardSectionStyle}>
            <Button
              onPress={() =>
                Communications.email(
                  [`${this.getEmailList()}`],
                  null,
                  null,
                  'Demo Subject',
                  'Demo Content for the mail',
                )
              }>
              {/*email(to, cc, bcc, subject, body)*/}
              <Text style={styles.text}>Send an Email</Text>
            </Button>
          </CardSection>
        </LinearGradient>
        {/*render the modal to confirm the publishing of the event*/}
        <Modal
          animationType="fade"
          useNativeDriver={true}
          visible={this.props.eventModalOpen}
          transparent={true}>
          <View style={styles.modalContainerStyle}>
            <LinearGradient
              colors={['#ff930f', '#fff95b']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              style={styles.modalStyle}>
              {/*displays all the information that the user entered in the event creation form one last time*/}
              <View style={styles.childTextContainerStyle}>
                <Text style={styles.modalTitleStyle}>
                  Confirm Event Creation
                </Text>
                <Text style={styles.modalContentTextStyle}>
                  Event Title: {this.props.eventTitle}
                </Text>
                <Text style={styles.modalContentTextStyle}>
                  Event Holder: {this.props.eventHolder}
                </Text>
                <Text style={styles.modalContentTextStyle}>
                  Start Date: {this.props.startMonth} {this.props.startDate}
                  {', '}
                  {this.props.startYear}
                </Text>
                <Text style={styles.modalContentTextStyle}>
                  End Date: {this.props.endMonth} {this.props.endDate}
                  {', '}
                  {this.props.endYear}
                </Text>
                <Text style={styles.modalContentTextStyle}>
                  Start Time: {this.props.startHour}
                  {':'}
                  {this.props.startMinute}
                  {''}
                  {this.props.startMeridiem}
                </Text>
                <Text style={styles.modalContentTextStyle}>
                  End Time: {this.props.endHour}
                  {':'}
                  {this.props.endMinute}
                  {''}
                  {this.props.endMeridiem}
                </Text>
                <Text style={styles.modalContentTextStyle}>
                  Event Type: {this.props.eventType}
                </Text>
                {this.checkResponseText()}
              </View>
              {/*displays the confirm and cancel buttons at the bottom of the modal*/}
              <View style={styles.modalChildContainerStyle}>
                <TouchableOpacity
                  onPress={() => this.onCreatePressed()}
                  style={styles.iconsStyle}>
                  <Feather name="check-circle" size={48} color="#008000" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.closeCreateEventModal()}
                  style={styles.iconsStyle}>
                  <Feather name="x-circle" size={48} color="#FF0000" />
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </View>
        </Modal>
      </ScrollView>
    );
  }
}

const styles = {
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
  containerStyle: {
    flex: 1,
  },
  LinearGradient: {
    flex: 1,
  },
  cardSectionStyle: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  headerStyle: {
    backgroundColor: '#ffa41b',
    marginBottom: 24,
  },
  inputStyle: {
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 32,
    backgroundColor: 'transparent',
    borderColor: '#ffa41b',
  },
  pickerSectionStyle: {
    backgroundColor: '#00a8cc',
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
    borderRadius: 24,
  },
  successResponseStyle: {
    color: '#008000',
    fontSize: 16,
  },
  failureResponseStyle: {
    color: '#FF0000',
    fontSize: 16,
    marginVertical: 8,
  },
  modalStyle: {
    flex: 1,
    flexDirection: 'column',
    maxHeight: Dimensions.get('window').height / 2,
    width: Dimensions.get('window').width / 1.2,
    borderRadius: 24,
    alignSelf: 'center',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 5,
    justifyContent: 'space-between',
  },
  modalContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(220,220,220, 0.5)',
  },
  modalChildContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    marginVertical: 24,
  },
  modalTitleStyle: {
    marginVertical: 8,
    fontSize: 24,
  },
  modalContentTextStyle: {
    fontSize: 18,
    marginVertical: 4,
  },
  childTextContainerStyle: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
};

const mapStateToProps = state => {
  const emailsArray = _.map(state.event.emailsObject, (val, key) => {
    return {
      ...val,
      key: key,
    };
  });

  return {
    emailsArray,
    eventTitle: state.event.eventTitle,
    eventHolder: state.event.eventHolder,
    startMonth: state.event.startMonth,
    startDate: state.event.startDate,
    startYear: state.event.startYear,
    endMonth: state.event.endMonth,
    endDate: state.event.endDate,
    endYear: state.event.endYear,
    eventType: state.event.eventType,
    response: state.event.response,
    eventDescription: state.event.eventDescription,
    startHour: state.event.startHour,
    startMinute: state.event.startMinute,
    startMeridiem: state.event.startMeridiem,
    endHour: state.event.endHour,
    endMinute: state.event.endMinute,
    endMeridiem: state.event.endMeridiem,
    eventModalOpen: state.event.eventModalOpen,
  };
};

export default connect(
  mapStateToProps,
  {
    eventTitleChanged,
    eventHolderChanged,
    eventDescriptionChanged,
    startMonthChanged,
    startDateChanged,
    startYearChanged,
    endMonthChanged,
    endDateChanged,
    endYearChanged,
    eventTypeChanged,
    startEventHourChanged,
    startEventMinuteChanged,
    startEventMeridiemChanged,
    endEventHourChanged,
    endEventMinuteChanged,
    endEventMeridiemChanged,
    createEvent,
    emailFetch,
    eventFormIncomplete,
    clearEventInputs,
    openCreateEventModal,
    closeCreateEventModal,
  },
)(CreateEvent);
