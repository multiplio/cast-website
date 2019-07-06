import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import { StyleSheet, css } from 'aphrodite'

import PostStorage from '../States/Post'

import TextareaAutosize from 'react-textarea-autosize'
import ContentEditor from './ContentEditor'

import twitter from '../Assets/social/twitter.svg'
import facebook from '../Assets/social/facebook.svg'
import reddit from '../Assets/social/reddit.svg'

// import pallete from '../Styles/pallete'

const descriptionFontSize = 14

const typingTimeout = 1000 // ms

class PostInput extends Component {
  constructor (props) {
    super(props)

    // data
    this.state = {
      content: PostStorage.getContent(),
      description: '',
      sendStatus: null,
      contentTypingTimeout: null,
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
    this.savePost = this.savePost.bind(this)
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

    // if not logged in -> redirect to login
    if (!this.props.user.loggedIn) {
      window.location.href = process.env.REACT_APP_LOGIN_PATH
    }

    // create post
    const body = JSON.stringify({
      text: this.state.content || '',
      desc: this.state.description || '',
      fontSize: 22,
      spacing: 1.5,
    })

    // submit post
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
    if (e && e.target) {
      // if timeout running - clear
      if (this.state.contentTypingTimeout !== null) {
        clearTimeout(this.state.contentTypingTimeout)
      }

      // update timeout + start new save timer
      this.setState({
        content: e.target.value,
        contentTypingTimeout: setTimeout(this.savePost, typingTimeout),
      })
    }
  }

  savePost () {
    PostStorage.setContent(this.state.content)

    if (this.state.contentTypingTimeout) {
      clearTimeout(this.state.contentTypingTimeout)
    }
    this.setState({
      contentTypingTimeout: null,
    })
  }

  render () {
    return (
      <div className={css(styles.view)}>

        <div className={css(styles.postInput)}>
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
      'text'
      'content'
      'services'
    `,

    'width': '100%',
    'max-width': '600px',

    margin: '0.5rem',
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
    'margin-top': '10px',
    position: 'relative',
    width: '100%',
    'padding-bottom': '50%',

    'box-shadow': '7px 5px 50px -10px rgba(0,0,0,0.63)',
    'border-radius': '15px',
  },

  buttons: {
    width: '100%',
    'margin-top': '20px',

    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'space-around',
    'align-items': 'center',
  },

  postButton: {
    background: 'linear-gradient(-90deg, #CF77F3 0%, #009BFF 47%, #2AC9DB 100%)',
    color: 'white',
    'font-weight': 'bold',

    margin: '1.5rem 0',
    padding: '1rem 2.5rem',
    'border-radius': '50px',

    cursor: 'pointer',
    'transition': '0.3s',
    ':hover': {
      margin: '1.25rem 0',
      padding: '1.25rem 3rem',
    },

    display: 'inline-block',
  },
  postButtonText: {
    'font-family': '"Helvetica Neue", Helvetica, Arial, sans-serif',
    'font-size': '16px',
    'text-align': 'center',
  },

  services: {
    'display': 'none',

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

