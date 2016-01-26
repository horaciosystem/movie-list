'use strict';

import React, {
  StyleSheet,
  ListView
} from 'react-native';

export default function (props, state) {
  return (
    // // if (!this.state.loaded) {
    // //   return this.renderLoadingView();
    // // }
    //
    // return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMovie}
        style={styles.listView}
        />
    // // )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 8,
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  rightContainer: {
      flex: 1
  },
  listView: {
      paddingTop: 20,
      backgroundColor: '#F5FCFF'
  },
 });
