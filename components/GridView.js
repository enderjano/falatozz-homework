import React from 'react';
import { useState  } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import CreateScreen from '../screens/CreateScreen';

const GridView = () => {
    const [hasRender, setRender] = useState(false);
    const onShow = React.useCallback(() => setRender(true), []);
   
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button onClick={onShow} title="Read"/>
                
            </View>
            <View style={styles.buttonContainer}>
                <Button onClick={CreateScreen} title="Create"/>
            </View>
        </View>
        );
    }

export default GridView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
    }
});