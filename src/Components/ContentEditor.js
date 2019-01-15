import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

// import pallete from '../Styles/pallete'

const ContentEditor = ({ edit, text }) => {
  return (
    <div contentEditable={edit} className={css(styles.textarea)}>
      {text}
    </div>
  )
}
ContentEditor.propTypes = {
  edit: PropTypes.bool,
  text: PropTypes.string,
}
export default ContentEditor

const styles = StyleSheet.create({
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

