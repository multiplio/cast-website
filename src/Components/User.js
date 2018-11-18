import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'
import { observer, inject } from 'mobx-react'
import { Redirect } from 'react-router-dom'

import pallete from '../Styles/pallete'

class User extends Component {
  render () {
    return (
      <div>
        {this.props.user.loaded === true
          ?
          this.props.user.displayName !== null
            ?
            <div className={css(this.props.styles, styles.container)}>
              User: {this.props.user.displayName}
              ProfileImage: {this.props.user.pictureLink}
              <img alt="profile" src={ this.props.user.pictureLink } />
            </div>
            :
            <Redirect to="/login"/>
          :
          null
        }
      </div>
    )
  }
}
User.propTypes = {
  user: PropTypes.object,
  styles: PropTypes.object,
}
export default inject('user')(observer(User))

const styles = StyleSheet.create({
  container: {
    border: '2px solid ' + pallete.blue,
    display: 'inline',
  },
})

