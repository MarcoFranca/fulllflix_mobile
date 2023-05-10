import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

export default function Login ({navigation}) {
    return(
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={"Usuário"}/>
            <TextInput style={styles.input} placeholder={"Senha"}/>
            <View style={styles.linkContainer}>
                <TouchableOpacity onPress={()=>navigation.navigate("Movies")} style={styles.button}><Text style={styles.buttonText}>Logar</Text></TouchableOpacity>
                <View >
                    <Text onPress={()=>navigation.navigate("Register")} style={styles.link}>Ainda não tem conta?</Text>
                    <Text onPress={()=>navigation.navigate("Register")} style={styles.link}>Clique aqui!</Text>
                </View>
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
            width: '80%',
            marginBottom:15,
        },
        linkContainer:{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            width: '80%',
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