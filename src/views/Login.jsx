import React from "react";
import {StyleSheet, Text, TextInput, TouchableOpacity, View, ActivityIndicator, Alert} from "react-native";
import firebase from "../firebase/firebase";
import Register from "./Register";

class Login extends Register {
    constructor(props) {
        super(props);
    }

    tryLogin(){
        this.setState({isLoading: true, message:''})
        const {email , password} = this.state
        console.log(this.state)
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(user =>{
                this.setState({message: 'Sucesso!' })
                console.log('Usuario autenticado!',user)
                setTimeout(()=>{
                    this.props.navigation.navigate('Movies')
                },2000)
            })
            .catch(error =>{
                if (error.code === "auth/user-not-found"){
                    Alert.alert(
                        "Usuário não encontrado",
                        "Deseja criar um cadastro com as informações inseridas?",
                        [{
                            text: "Não",
                            style: 'cancel' //ios
                        },{
                            text:"sim",
                            onPress: ()=>{
                                this.createAccount()
                            }
                        }],
                        {cancelable: false}
                    )
                }
                this.setState({
                    message: this.getMessageErrorCode(error.code)})
                console.log(error.code)
            })
            .then(()=> this.setState({isLoading:false, email:'', password:''}))
    }

    renderButton(){
        if (this.state.isLoading)
            return <ActivityIndicator/>
        return(
            <TouchableOpacity onPress={() => this.tryLogin("Movies")} style={styles.button}><Text
                style={styles.buttonText}>Logar</Text></TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder={"user@mail.com"}
                    style={styles.input}
                    value={this.state.email}
                    onChangeText={value => this.onChangeHandler('email', value)}
                />
                <TextInput
                    style={styles.input}
                    secureTextEntry
                    placeholder={"*******"}
                    value={this.state.password}
                    onChangeText={value => this.onChangeHandler('password', value)}
                />
                <View style={styles.linkContainer}>
                    {this.renderButton()}

                    <View>
                        <Text onPress={() => navigation.navigate("Register")} style={styles.link}>Ainda não tem
                            conta?</Text>
                        <Text onPress={() => this.props.navigation.navigate("Register")} style={styles.link}>Clique aqui!</Text>
                    </View>
                </View>
                {this.renderMessage()}
            </View>
        )
    }
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
        },
    }
)

export default Login