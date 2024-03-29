import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import FirstPage from '../component/FirstPage';
import SecondePage from '../component/SecondePage';
import CustomDrawer from '../component/CustomDrawer';

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props) => <CustomDrawer {...props} />}
                drawerContentOptions={{ 
                    activeBackgroundColor: '#5cbbff', 
                    activeTintColor: 'orange',
                    inactiveBackgroundColor: 'green',
                    inactiveTintColor: 'red'
                }} 
            >
                <Drawer.Screen name="One" component={FirstPage} />
                <Drawer.Screen name="Two" component={SecondePage} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default MyDrawer;