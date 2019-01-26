import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

import TextareaAutosize from 'react-textarea-autosize'

// import pallete from '../Styles/pallete'

const fontSize = 22

const ContentEditor = ({ edit, value, onChange }) => {
  return (
    <div className={css(styles.container)}>
      <TextareaAutosize
        disabled={!edit}
        className={css(styles.textarea)}
        value={value}
        onChange={onChange}
        placeholder={'Enter your post here.'}
        minRows={1}
        maxRows={100}
        autoFocus
        style={{ fontSize: fontSize }}
      />
    </div>
  )
}
ContentEditor.propTypes = {
  edit: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
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
    'font-size': fontSize + 'px',
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

