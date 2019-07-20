import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

const Spinner = ({ size, color, loading, sizeUnit }) => {
  return (loading &&
    <div
      style={{
        width: size + sizeUnit,
        height: size + sizeUnit,
        border: (size / 5) + sizeUnit + ' solid ' + color,
      }}
      className={css(styles.spinner)}>
    </div>
  )
}
export default Spinner

Spinner.defaultProps = {
  loading: true,
  size: 30,
  color: '#fff',
  sizeUnit: 'px',
}
Spinner.propTypes = {
  loading: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string,
  sizeUnit: PropTypes.string,
}

const keyframes = {
  '0%': {
    transform: 'rotate(0)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
}

const styles = StyleSheet.create({
  spinner: {
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    'border-right-color': 'transparent',
    'border-radius': '50%',

    animationName: [keyframes],
    animationDuration: '0.75s',
    animationIterationCount: 'infinite',
  },
})
