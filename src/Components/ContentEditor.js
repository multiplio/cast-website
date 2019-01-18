import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

import TextareaAutosize from 'react-autosize-textarea'

// import pallete from '../Styles/pallete'

const ContentEditor = ({ edit, text, innerRef }) => {
  return (
    <div className={css(styles.container)}>
      <TextareaAutosize
        disabled={!edit}
        className={css(styles.textarea)}
        defaultValue={text}
        placeholder={'Enter your post here.'}
        innerRef={innerRef}
        maxRows={50}
      />
    </div>
  )
}
ContentEditor.propTypes = {
  edit: PropTypes.bool,
  text: PropTypes.string,
  innerRef: PropTypes.func,
}
export default ContentEditor

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
  },
  textarea: {
    'font-size': '22px',
    'line-height': '1.5em',
    'text-align': 'center',
    'white-space': 'pre-line',
    border: 'none',
    padding: 0,
    outline: 'none',
    resize: 'none',
    overflow: 'hidden',
  },
})

