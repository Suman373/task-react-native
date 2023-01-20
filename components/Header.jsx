import { View, Text,StyleSheet, Image } from 'react-native';
import abstract from '../assets/images/abstract.jpg';

const Header = () => {
    return (
        <>
            <View>
            <Image 
            style={styles.imgStyle}
            source={abstract}/>
            <Text style={styles.heading}>Taskoid'23</Text>
            <Text style={styles.about}>
                Taskoid helps you with your task management to utilise your time better
            </Text>
            <Text style={styles.about}>
                Made with love by Suman Roy &copy; 2023
            </Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
   imgStyle:{
        marginVertical:5,
        width:"100%"
   },
    heading: {
        fontSize: 23,
        fontFamily: 'serif',
        padding: 6,
        // backgroundColor:'red',
    },
    about: {
        fontSize: 16,
        padding: 6,
        margin: 2
    },
})


export default Header;