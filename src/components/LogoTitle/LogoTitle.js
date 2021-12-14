import React from 'react'
import { Image } from 'react-native'
// assets
import logo from '../../assets/img/Marvel_Logo.png'
     
// **** Header Marvel Logo ***
    export default  LogoTitle = (props) => {
    return (
          <Image
        style={{ width: 99, height:37 , marginHorizontal: 120}}
        source={logo}
      />
    );
  }

