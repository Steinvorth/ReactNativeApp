import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

// since we are passing parameters from our index.js we need to add the props to the function for the icon url and dimension. later on we will handle the pressing.
const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image source={iconUrl} resizeMode='cover' style={styles.btnImg(dimension)}/>
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn