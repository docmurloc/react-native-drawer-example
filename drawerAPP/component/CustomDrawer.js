import React from 'react';
import {
    Text, View
} from 'react-native';

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';


function CustomDrawer(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Help"
                onPress={() => {
                    console.log("help")
                }}
            />
        </DrawerContentScrollView>
    )
}

export default CustomDrawer;