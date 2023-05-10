import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default function Home ({navigation}) {
    return(
        <View style={styles.container}>
            <ImageBackground source={require('../assets/background.png')} style={styles.container}>
                <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Login")}><Text style={styles.buttonText}>Logar</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Register")}><Text style={styles.buttonText}>Registrar</Text></TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            width:'100%',
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
    buttonContainer:{
        flexDirection:'row',
        gap:20,
        marginTop:160,
    },
    button:{
        backgroundColor:'rgb(42,51,70)',
        borderRadius:50,
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 12,
        paddingBottom: 12,

    },
    buttonText:{
        color:'#FFF',
        fontWeight:'900',
    },
    }
)