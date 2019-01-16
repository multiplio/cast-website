import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import { StyleSheet, css } from 'aphrodite'

import PostButton from '../Components/Login'
import ContentEditor from './ContentEditor'

// import pallete from '../Styles/pallete'

class PostInput extends Component {
  constructor (props) {
    super(props)

    this.post = this.post.bind(this)
  }

  post () {
    console.log('post')
  }

  render () {
    return (
      <div>
        <div className={css(styles.postInput)}>
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
            <div className={css(styles['name-handle'])}></div>
          </div>
          <div className={css(styles.text)}>Some title of the post... #hashtags and #stuff</div>

          <div className={css(styles.content)}>
            <div className={css(styles.contentInner)}>
              <ContentEditor
                edit={this.props.edit}
                text={
                  'Arguing that you don\'t care about the\n' +
                  'right to privacy because you have\n' +
                  'nothing to hide is no different from\n' +
                  'saying you don\'t care about free speech\n' +
                  'because you have nothing to say.\n' +
                  '- Edward Snowden'
                }
              />
            </div>
          </div>
        </div>

        {
          this.props.edit === true
            ? (
              <PostButton
                onClick={ this.post }
              >
                Post to Twitter
              </PostButton>
            )
            : null
        }

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
  postInput: {
    'font-family': '"Helvetica Neue", Helvetica, Arial, sans-serif',
    'font-size': '14px',
    display: 'grid',
    'grid-template-areas':
    `'image name name name name name'
      'image text text text text text'
      'image content content content content content'`,
    'grid-template-columns': '60px auto',
    'grid-template-rows': '20px auto',
    padding: '10px',
    border: '1px solid #bbb',
    width: '600px',
    left: '50%',
    margin: '0.5rem',
  },

  // profile picture
  image: {
    'grid-area': 'image',
    'text-align': 'left',
  },
  picture: {
    width: '48px',
    height: '48px',
    'border-radius': '50%',
  },

  // name, handle
  name: {
    'grid-area': 'name',
    'text-align': 'left',
  },
  'name-display': {
    display: 'inline',
    'font-weight': 'bold',
    'line-height': '20px',
    'margin-right': '4px',
  },
  'name-handle': {
    display: 'inline',
    'font-weight': 'normal',
    'line-height': '20px',
  },

  text: {
    'grid-area': 'text',
    'margin-top': '4px',
    'text-align': 'left',
  },

  content: {
    'grid-area': 'content',
    border: '1px solid #bbb',
    'margin-top': '10px',
    position: 'relative',
    width: '100%',
    'padding-bottom': '50%',
  },
  contentInner: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
  },

  post: {
    float: 'right',
  },
})

