import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import { StyleSheet, css } from 'aphrodite'

import TextareaAutosize from 'react-textarea-autosize'

import ContentEditor from './ContentEditor'

import twitter from '../Assets/social/twitter.svg'
import facebook from '../Assets/social/facebook.svg'
import reddit from '../Assets/social/reddit.svg'

// import pallete from '../Styles/pallete'

const descriptionFontSize = 14

class PostInput extends Component {
  constructor (props) {
    super(props)

    // data
    this.state = {
      content: '',
      description: '',
      sendStatus: null,
    }

    // refs
    this.contentEditor = null
    this.ContentRef = element => {
      this.contentEditor = element
    }

    // method bindings
    this.focusContent = this.focusContent.bind(this)
    this.post = this.post.bind(this)
    this.descriptionChange = this.descriptionChange.bind(this)
    this.contentChange = this.contentChange.bind(this)
  }

  focusContent () {
    if (this.contentEditor !== null) {
      this.contentEditor.focus()
    }
  }

  post () {
    if (this.postText === null) {
      return
    }

    const body = JSON.stringify({
      text: this.state.content || '',
      desc: this.state.description || '',
      fontSize: 22,
      spacing: 1.5,
    })

    fetch(process.env.REACT_APP_POST_PATH, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
    })
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.status)
        }

        this.setState({
          sendStatus: 'sent',
          description: '',
          content: '',
        })
      })
      .catch(code => {
        this.setState({
          sendStatus: code + ' : error sending post, please try again',
        })
      })
  }

  descriptionChange (e) {
    e && e.target && this.setState({ description: e.target.value })
  }
  contentChange (e) {
    e && e.target && this.setState({ content: e.target.value })
  }

  render () {
    return (
      <div className={css(styles.view)}>

        <div className={css(styles.postInput)}>
          {
            this.props.user.name ? (
              <Fragment>
                <div className={css(styles.image)}>
                  <img
                    className={css(styles.picture)}
                    src={ this.props.user.pictureLink }
                    alt="profile" />
                </div>
                <div className={css(styles.name)}>
                  <div className={css(styles['name-display'])}>
                    { this.props.user.displayName }
                  </div>
                </div>
              </Fragment>
            ) : null
          }

          <TextareaAutosize
            className={css(styles.text)}
            value={ this.state.description }
            onChange={ this.descriptionChange }
            disabled={!this.props.edit}
            placeholder={'Description'}
            minRows={1}
            maxRows={5}
            style={{ fontSize: descriptionFontSize }}
          />

          <div className={css(styles.content)} onClick={this.focusContent}>
            <ContentEditor
              value={ this.state.content }
              onChange={ this.contentChange }
              edit={ this.props.edit }
              innerRef={ this.ContentRef }
            />
          </div>
        </div>

        <div className={css(styles.services)}>
          <img alt="" src={twitter} className={css(styles.socialImage)} />
          <img alt="" src={facebook} className={css(styles.socialImage)} />
          <img alt="" src={reddit} className={css(styles.socialImage)} />
        </div>

        <div className={css(styles.buttons)}>
          {
            this.props.edit === true
              ?
              (
                <div className={css(styles.postButton)} onClick={ this.post }>
                  <div className={css(styles.postButtonText)}>
                    Post
                  </div>
                </div>
              )
              : null
          }
        </div>

        <div>
          { this.state.sendStatus }
        </div>

      </div>
    )
  }
}
PostInput.propTypes = {
  edit: PropTypes.bool,
  user: PropTypes.object,
}
export default inject('user')(observer(PostInput))

const styles = StyleSheet.create({
  view: {
    width: '100%',
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
  },
  postInput: {
    'font-family': '"Helvetica Neue", Helvetica, Arial, sans-serif',
    'font-size': '14px',

    display: 'grid',
    'grid-template-areas': `
      'image'
      'name'
      'text'
      'content'
      'services'
    `,

    'width': '100%',
    'max-width': '600px',

    margin: '0.5rem',
  },

  // profile picture
  image: {
    'grid-area': 'image',
    'text-align': 'center',
  },
  picture: {
    width: '80px',
    height: '80px',
    'border-radius': '50%',
  },

  // name, handle
  name: {
    'grid-area': 'name',
    'text-align': 'center',
  },
  'name-display': {
    display: 'inline',
    'font-weight': 'bold',
    'line-height': '20px',
  },

  text: {
    display: 'none',
    'grid-area': 'text',
    'text-align': 'left',
    'font-size': descriptionFontSize + 'px',
    border: 'none',
    margin: '4px 0 0 0',
    padding: 0,
    resize: 'none',
    outline: 'none',
    overflow: 'hidden',
  },

  content: {
    'grid-area': 'content',
    border: '5px solid black',
    'border-radius': '10px',
    'margin-top': '10px',
    position: 'relative',
    width: '100%',
    'padding-bottom': '50%',
  },

  buttons: {
    width: '100%',
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'space-around',
    'align-items': 'center',
  },

  post: {
  },

  postButton: {
    backgroundColor: 'black',
    color: 'white',

    'margin-top': '1rem',
    'margin-bottom': '1rem',

    width: '5rem',
    height: '5rem',
    'border-radius': '50%',

    cursor: 'pointer',
    'transition': '0.3s',

    ':hover': {
      'margin-top': '0.5rem',
      'margin-bottom': '0.5rem',
      width: '6rem',
      height: '6rem',
    },

    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'space-around',
  },
  postButtonText: {
  },

  services: {
    'grid-area': 'services',
    width: '100%',
    'max-width': '600px',
    'text-align': 'left',
  },
  socialImage: {
    width: '30px',
    margin: '0 1px',
    height: 'auto',
    cursor: 'pointer',
  },
})

