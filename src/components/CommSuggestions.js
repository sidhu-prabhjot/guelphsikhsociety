import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {SuggestionCard, ToMainScreen} from './common';
import {connect} from 'react-redux';
import {suggestionFetch, checkAdmin} from '../actions';
import _ from 'lodash';
import LinearGradient from 'react-native-linear-gradient';

class CommSuggestions extends Component {
  componentDidMount() {
    this.props.suggestionFetch();
  }

  reverseArray() {
    return this.props.suggestionsArray.reverse();
  }

  renderHeader() {
    return (
      <ToMainScreen headerText="Community Feed" style={styles.headerStyle} />
    );
  }

  render() {
    this.reverseArray();
    return (
      <View style={styles.viewStyle}>
        {this.renderHeader()}
        <LinearGradient
          colors={['#FFFFFF', '#FFFFFF']}
          style={styles.LinearGradient}>
          <FlatList
            data={this.props.suggestionsArray}
            renderItem={({item}) => (
              <SuggestionCard
                title={item.title}
                suggestion={item.suggestion}
                fullName={item.fullName}
                suggestionEmail={item.suggestionEmail}
                timeStamp={item.timeStampV5}
              />
            )}
            keyExtractor={item => item.timeStampV5}
          />
        </LinearGradient>
      </View>
    );
  }
}

const styles = {
  containerContentStyle: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  viewStyle: {
    flex: 1,
  },
  LinearGradient: {
    flex: 1,
  },
  headerStyle: {
    backgroundColor: '#ffa41b',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 1,
    elevation: 10,
  },
};

const mapStateToProps = state => {
  const suggestionsArray = _.map(state.comm.suggestionsObject, (val, key) => {
    return {
      ...val,
      key: key,
    };
  });

  return {
    suggestionsArray,
    loading: state.comm.loading,
    admin: state.auth.admin,
  };
};

export default connect(
  mapStateToProps,
  {suggestionFetch, checkAdmin},
)(CommSuggestions);
