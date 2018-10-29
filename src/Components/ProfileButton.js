import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import pallete from '../Styles/pallete';

export default class ProfileButton extends Component {
  render() {
    return (
      <div className={css(this.props.styles, styles.image)}>
        profile image
      </div>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    backgroundColor: pallete.black,
    display: 'inline',
  },
});
