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

    const arrayTest = ["AAA", "BBB", "CCC"];

    const drawerItems = arrayTest.map((outlet) => {
        return (
            console.log("############## nav drawr ################## " + outlet),
            <DrawerItem
                {...props}
                key={outlet}
                label={outlet}
                onPress={() => {
                    console.log(outlet)
                }}
            />
        );
    });

    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                {...props}
                label="Help"
                onPress={() => {
                    console.log("help")
                }}
            />
            {drawerItems}
        </DrawerContentScrollView>
    )
}




export default CustomDrawer;