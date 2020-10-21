import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/store/store';
import MainNavigation from "./src/navigation/MainNavigation";
const App: React.FC = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <MainNavigation/>
            </NavigationContainer>
        </Provider>
    );
}

export default App;
