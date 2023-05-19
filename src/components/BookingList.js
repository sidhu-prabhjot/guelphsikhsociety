import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {ToMainScreen, RequestEventCard} from './common';
import {connect} from 'react-redux';
import _ from 'lodash';
import {fetchEventRequests} from '../actions';

class BookingList extends Component {
  componentDidMount() {
    this.props.fetchEventRequests();
  }

  render() {
    console.log(this.props.eventRequestsArray);
    return (
      <View style={styles.containerStyle}>
        <View>
          <ToMainScreen headerText="Requested Bookings" />
        </View>
        <FlatList
          data={this.props.eventRequestsArray.reverse()}
          renderItem={({item}) => (
            <RequestEventCard
              title={item.bookingEventTitle}
              eventHolder={item.bookingEventHolder}
              eventType={item.bookingEventType}
              email={item.bookingEmail}
              phoneNumber={item.bookingPhoneNumber}
              startMonth={item.bookingStartMonth}
              startDate={item.bookingStartDate}
              startYear={item.bookingStartYear}
              endMonth={item.bookingEndMonth}
              endDate={item.bookingEndDate}
              endYear={item.bookingEndYear}
              startTime={item.startTime}
              endTime={item.endTime}
              timeStamp={item.timeStampV5}
            />
          )}
          keyExtractor={item => item.timeStampV5}
        />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
  },
};

const mapStateToProps = state => {
  const eventRequestsArray = _.map(
    state.booking.eventRequestsObject,
    (val, key) => {
      return {
        ...val,
        key: key,
      };
    },
  );

  return {
    eventRequestsArray,
  };
};

export default connect(
  mapStateToProps,
  {
    fetchEventRequests,
  },
)(BookingList);
