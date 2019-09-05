import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Logo from './assets/instagram.png';

import Feed from './Screen/Feed';

const Routes = createAppContainer(
    createStackNavigator({
        Feed
    }, {
        headerLayoutPreset: 'center',
        defaultNavigationOptions: {
            headerTitle: <Image source={Logo} />,
            headerStyle: {
                backgroundColor: '#F5F5F5'
            }
        }
    })
);

export default Routes;