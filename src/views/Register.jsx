import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

export default function Register ({navigation}) {
    return(
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={"Insira o nome de usuário"}/>
            <TextInput style={styles.input} placeholder={"Digite a senha"}/>
            <View style={styles.linkContainer}>
                <TouchableOpacity onPress={()=>navigation.navigate("Movies")} style={styles.button}><Text style={styles.buttonText}>Enviar</Text></TouchableOpacity>
                <Text onPress={()=>navigation.navigate("Home")} style={styles.link}>Retornar</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        color:'black',
        fontWeight:'900',
        backgroundColor:'white',
        borderRadius:50,
        paddingLeft: 16,
        paddingTop: 8,
        paddingBottom: 8,
        width: '60%',
        marginBottom:15,
    },
    linkContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        width: '100%',
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
    link:{
        color:'#FFF',
    }
    }
)