import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { observer, inject } from 'mobx-react'

import pallete from '../Styles/pallete';

class ProfileButton extends Component {
  render() {
    return (
      <div>
        {
          this.props.user.loaded === true
            ?
            (
              this.props.user.displayName !== null
              ?
              <div className={css(this.props.styles, styles.container)}>
                profile image
              </div>
              :
              <div className={css(this.props.styles, styles.container)}>
                Log in
              </div>
            )
            :
            null
        }
      </div>
    )
  }
}
export default inject("user")(observer(ProfileButton))

const styles = StyleSheet.create({
  container: {
    border: '2px solid ' + pallete.blue,
    display: 'inline',
  },
})
