import React, {Component} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import {EventCard, ToMainScreen, Input, CardSection, Spinner} from './common';
import firebase from 'firebase';
import {connect} from 'react-redux';
import {
  checkAdmin,
  checkAdminFalse,
  searchEventChanged,
  searchingEvents,
  clearSearchBar,
  updateEventActive,
  updateEventUpcoming,
  updateEventComplete,
} from '../actions';
import {Actions} from 'react-native-router-flux';
import {eventFetch} from '../actions';
import _ from 'lodash';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';

class EventScreen extends Component {
  componentDidMount() {
    this.props.clearSearchBar();
    firebase.auth().onAuthStateChanged(user => {
      if (user.uid === 'Emycz2T9ekdVBAOpno3y2FJyQVJ3') {
        this.props.checkAdmin();
      } else {
        // User not logged in or has just logged out.
        this.props.checkAdminFalse();
        console.log('not admin');
      }
    });

    this.props.eventFetch();
    this.filteredArr;
  }

  //function to determine if the event create button should be shown to the user
  renderCreate() {
    if (this.props.admin) {
      return (
        <TouchableOpacity
          //onPress handler is used to decide what happens when that button is pressed
          onPress={() => Actions.createEvent()}
          style={styles.buttonStyle}>
          <Text style={styles.textStyle}>+</Text>
        </TouchableOpacity>
      );
    } else {
    }
  }

  //function to handle the changing of text in the event title search bar
  onSearchTitleChanged(text) {
    this.props.searchEventChanged(text);
  }

  /*this method handles the search bar, and the filtering of the objects array. According to what the user types in the search
  bar, then object array of events will be filtered by all properties possible. The resulting array is then sorted by date*/
  filterArray() {
    if (this.props.searchEventTitle !== '') {
      const result = this.props.eventsArray.filter(
        obj =>
          obj.eventTitle.toLocaleLowerCase() ===
            `${this.props.searchEventTitle.toLocaleLowerCase()}` ||
          obj.eventType.toLocaleLowerCase() ===
            `${this.props.searchEventTitle.toLocaleLowerCase()}` ||
          obj.eventHolder.toLocaleLowerCase() ===
            `${this.props.searchEventTitle.toLocaleLowerCase()}` ||
          obj.startMonth.toLocaleLowerCase() ===
            `${this.props.searchEventTitle.toLocaleLowerCase()}` ||
          obj.startDate === `${this.props.searchEventTitle}` ||
          obj.startYear === `${this.props.searchEventTitle}` ||
          obj.endMonth.toLocaleLowerCase() ===
            `${this.props.searchEventTitle.toLocaleLowerCase()}` ||
          obj.endDate === `${this.props.searchEventTitle}` ||
          obj.endYear === `${this.props.searchEventTitle}` ||
          obj.startHour === `${this.props.searchEventTitle}` ||
          obj.startMin === `${this.props.searchEventTitle}` ||
          obj.startMeridiem.toLocaleLowerCase() ===
            `${this.props.searchEventTitle.toLocaleLowerCase()}` ||
          obj.endHour === `${this.props.searchEventTitle}` ||
          obj.endMinute === `${this.props.searchEventTitle}` ||
          obj.endMeridiem.toLocaleLowerCase() ===
            `${this.props.searchEventTitle.toLocaleLowerCase()}`,
      );
      console.log(this.filteredArr);
      return result;
    } else {
      return this.props.eventsArray;
    }
  }

  //this method will assign a number to the month, and return the number assigned to the month
  assignNumberToMonth(startMonth) {
    this.monthNum = 0;

    if (startMonth === 'January') {
      this.monthNum = 1;
    } else if (startMonth === 'February') {
      this.monthNum = 2;
    } else if (startMonth === 'March') {
      this.monthNum = 3;
    } else if (startMonth === 'April') {
      this.monthNum = 4;
    } else if (startMonth === 'May') {
      this.monthNum = 5;
    } else if (startMonth === 'June') {
      this.monthNum = 6;
    } else if (startMonth === 'July') {
      this.monthNum = 7;
    } else if (startMonth === 'August') {
      this.monthNum = 8;
    } else if (startMonth === 'September') {
      this.monthNum = 9;
    } else if (startMonth === 'October') {
      this.monthNum = 10;
    } else if (startMonth === 'November') {
      this.monthNum = 11;
    } else if (startMonth === 'December') {
      this.monthNum = 12;
    }

    return this.monthNum;
  }

  //this method will assign a numerical value to the meridiems so they can be ordered in the array properly
  assingNumberToMeridiem(meridiem) {
    this.meridienNum = 0;

    if (meridiem === 'AM') {
      this.meridiemNum = 2;
    } else if (meridiem === 'PM') {
      this.meridiemNum = 1;
    }

    return this.meridiemNum;
  }

  /*this method sets the background color of the event card according to the date. If the event card has the same date as the
  current date, then it will become green, if the data as already been passed, then it will become gray, and if the date is
  not yet here, then the card will become green. It also updates the status of the event. The event event can be upcoming,
  active or complete.*/
  checkBackgroundColor(
    startYear,
    startMonth,
    startDate,
    key,
    status,
    endYear,
    endMonth,
    endDate,
  ) {
    const currentYear = new Date().getFullYear(); //To get the Current Year
    const currentMonth = new Date().getMonth() + 1; //To get the Current Month
    const currentDate = new Date().getDate(); //To get the Current Date

    const startMonthNum = this.assignNumberToMonth(startMonth);
    const endMonthNum = this.assignNumberToMonth(endMonth);

    if (startYear > currentYear.toString()) {
      this.props.updateEventUpcoming(key);
      return ['#0d41e1', '#07c8f9'];
    } else if (
      startYear === currentYear.toString() &&
      startMonthNum > currentMonth
    ) {
      this.props.updateEventUpcoming(key);
      return ['#0d41e1', '#07c8f9'];
    } else if (
      startYear === currentYear.toString() &&
      startMonthNum === currentMonth &&
      startDate > currentDate
    ) {
      this.props.updateEventUpcoming(key);
      return ['#0d41e1', '#07c8f9'];
    }

    ///////////////////////////////////////////////////
    else if (
      endYear === currentYear.toString() &&
      endMonthNum === currentMonth &&
      endDate < currentDate.toString()
    ) {
      this.props.updateEventComplete(key);
      return ['#2c3e50', '#bdc3c7'];
    }

    /////////////////////////////////////////////////////////
    else if (
      startYear === currentYear.toString() &&
      startMonthNum === currentMonth &&
      startDate === currentDate.toString()
    ) {
      this.props.updateEventActive(key);
      return ['#11998e', '#38ef7d'];
    } else if (
      endYear === currentYear.toString() &&
      endMonthNum === currentMonth &&
      endDate === currentDate.toString()
    ) {
      this.props.updateEventActive(key);
      return ['#11998e', '#38ef7d'];
    } else if (
      startYear <= currentYear.toString() <= endYear &&
      startMonth <= currentMonth <= endMonthNum &&
      startDate <= currentDate.toString() <= endDate
    ) {
      this.props.updateEventActive(key);
      return ['#11998e', '#38ef7d'];
    } else {
      this.props.updateEventComplete(key);
      return ['#2c3e50', '#FFFFFF'];
    }
  }

  //this method will remove all the events that are not upcoming. It will also order the array by date
  filterNonUpcomingEvents() {
    const currentArray = this.filterArray();
    const upcomingEventsArray = currentArray.filter(
      obj => obj.status.toLocaleLowerCase() === 'upcoming',
    );
    const sortedUpcomingEventsArray = upcomingEventsArray.sort(
      (a, b) =>
        b.startYear - a.startYear ||
        this.assignNumberToMonth(b.startMonth) -
          this.assignNumberToMonth(a.startMonth) ||
        b.startDate - a.startDate,
    );
    return sortedUpcomingEventsArray.reverse();
  }

  //this method will remove all the events that are not active
  filterNonActiveEvents() {
    const currentArray = this.filterArray();
    const activeEventsArray = currentArray.filter(
      obj => obj.status.toLocaleLowerCase() === 'active',
    );
    const sortedActiveEventsArray = activeEventsArray.sort(
      (a, b) =>
        b.startTime - a.startTime ||
        b.startMinute - a.startMinute ||
        this.assingNumberToMeridiem(b.startMeridiem) -
          this.assingNumberToMeridiem(a.startMeridiem),
    );
    return sortedActiveEventsArray;
  }

  //this method will remove all the events that are not complete
  filterNonCompleteEvents() {
    const currentArray = this.filterArray();
    const completeEventsArray = currentArray.filter(
      obj => obj.status.toLocaleLowerCase() === 'complete',
    );
    const sortedCompleteEventsArray = completeEventsArray.sort(
      (a, b) =>
        b.startYear - a.startYear ||
        this.assignNumberToMonth(b.startMonth) -
          this.assignNumberToMonth(a.startMonth) ||
        b.startDate - a.startDate,
    );
    return sortedCompleteEventsArray;
  }

  //this method will combine all the arrays of events that were filterd in the correct order
  combineAllStatusArrays() {
    const allUpcomingEvents = this.filterNonUpcomingEvents();
    const allActiveEvents = this.filterNonActiveEvents();
    const allCompleteEvents = this.filterNonCompleteEvents();

    const completeEventsArray = [
      ...allActiveEvents,
      ...allUpcomingEvents,
      ...allCompleteEvents,
    ];

    return completeEventsArray;
  }

  //this method will send a delete button to the card component if the user is an admin
  sendDeleteButton(eventKey) {
    this.deleteButton;
    if (this.props.admin) {
      this.deleteButton = (
        <TouchableOpacity
          style={styles.readMore}
          onPress={() =>
            firebase
              .database()
              .ref('/Events')
              .child(eventKey)
              .remove()
          }>
          <Icon name="x-circle" size={32} color="#93291E" />
        </TouchableOpacity>
      );
    } else {
      this.deleteButton = <Text />;
    }

    return this.deleteButton;
  }

  /*this method handles the rendering of the flatlist that displays the array of events. If the array is still being loaded in
  then a spinner/looding icon will be displayed to the user, and when the loading is complete, the list of events will be displayed
  to the user. */
  renderEventListSpinner() {
    if (this.props.eventLoading) {
      return <Spinner size="large" />;
    } else {
      return (
        <FlatList
          data={this.combineAllStatusArrays()}
          renderItem={({item}) => (
            <EventCard
              title={item.eventTitle}
              eventHolder={item.eventHolder}
              eventType={item.eventType}
              startMonth={item.startMonth}
              startDate={item.startDate}
              startYear={item.startYear}
              endMonth={item.endMonth}
              endDate={item.endDate}
              endYear={item.endYear}
              startHour={item.startHour}
              startMinute={item.startMinute}
              startMeridiem={item.startMeridiem}
              endHour={item.endHour}
              endMinute={item.endMinute}
              endMeridiem={item.endMeridiem}
              eventDescription={item.eventDescription}
              backgroundColor={this.checkBackgroundColor(
                item.startYear,
                item.startMonth,
                item.startDate,
                item.key,
                item.status,
                item.endYear,
                item.endMonth,
                item.endDate,
              )}
              deleteButton={this.sendDeleteButton(item.key)}
              eventKey={item.key}
            />
          )}
          keyExtractor={item => item.timeStampV5}
        />
      );
    }
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <LinearGradient
          colors={['#FFFFFF', '#FFFFFF']}
          style={styles.LinearGradient}>
          <ToMainScreen
            headerText="Upcoming Events"
            style={styles.headerStyle}
          />
          {/*reference the onEmailChanged method, to call the action creator, and call it in the onChangeText so the text prop can be passed through*/}
          <View style={styles.inputContainerStyle}>
            <View style={styles.searchBarView}>
              {/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
              <CardSection style={styles.inputStyle}>
                {/*reference the onEmailChanged method, to call the action creator, and call it in the onChangeText so the text prop can be passed through*/}
                <Icon name="search" size={24} style={styles.iconStyle} />
                <Input
                  placeholder="search event detail"
                  onChangeText={this.onSearchTitleChanged.bind(this)}
                  value={this.props.searchEventTitle}
                  inputStyle={styles.inputTextStyle}
                  labelStyle={styles.labelStyle}
                />
              </CardSection>
              {/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
            </View>
          </View>
          {this.renderEventListSpinner()}
          {this.renderCreate()}
        </LinearGradient>
      </View>
    );
  }
}

const styles = {
  inputTextStyle: {
    flex: 8,
  },
  inputContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  searchBarView: {
    backgroundColor: 'transparent',
    flex: 1,
  },
  LinearGradient: {
    flex: 1,
  },
  viewStyle: {
    flex: 1,
  },
  buttonStyle: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    marginRight: 24,
    marginLeft: 24,
    marginBottom: 16,
    borderRadius: 24,
    backgroundColor: '#ffa41b',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 5,
  },
  headerStyle: {
    backgroundColor: '#ffa41b',
    marginBottom: 16,
  },
  inputStyle: {
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
    backgroundColor: 'transparent',
    borderColor: '#0d41e1',
    borderWidth: 2,
    borderRadius: 90,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    paddingRight: 16,
    paddingLeft: 8,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#F0F0C9',
    fontSize: 18,
    //fontweight must be a number but in string form
    fontWeight: '600',
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 16,
    paddingBottom: 16,
  },
  labelStyle: {
    flex: 0,
  },
  readMore: {
    alignSelf: 'center',
    fontSize: 16,
    padding: 8,
    color: '#FFFFFF',
  },
};

const mapStateToProps = state => {
  const eventsArray = _.map(state.event.eventsObject, (val, key) => {
    return {
      ...val,
      key: key,
    };
  });

  return {
    eventsArray,
    admin: state.auth.admin,
    searchEventTitle: state.event.searchEventTitle,
    searchEventHolder: state.event.searchEventHolder,
    searchEventType: state.event.searchEventType,
    searching: state.event.searching,
    eventLoading: state.event.eventLoading,
  };
};

export default connect(
  mapStateToProps,
  {
    checkAdmin,
    checkAdminFalse,
    eventFetch,
    searchEventChanged,
    searchingEvents,
    clearSearchBar,
    updateEventActive,
    updateEventUpcoming,
    updateEventComplete,
  },
)(EventScreen);
