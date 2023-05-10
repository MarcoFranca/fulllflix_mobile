import React from "react";
import {StyleSheet, Text, TextInput, TouchableOpacity, View, ActivityIndicator} from "react-native";
import firebase from "../firebase/firebase";

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            email:'',
            password:'',
            isLoading:false,
            message:'',
        }
    }

    onChangeHandler(field, value) {
        this.setState({
            [field]:value
        })
    }

    getMessageErrorCode(errorCode){
        switch (errorCode) {
            case 'auth/wrong-password':
                return 'Senha Incorreta ou não cadastrado'
            case 'auth/user-not-found':
                return 'Usuário não encontrado'
            case 'auth/invalid-email':
                return 'e-mail inválido'
            case 'auth/missing-password':
                return 'O password não pode ser nulo!'
            case 'auth/weak-password':
                return 'A senha esta fraca!'
            default:
                return 'Erro desconhecido'
        }
    }

    createAccount (){
        this.setState({isLoading: true, message:''})
        const {email , password} = this.state
        console.log(this.state)
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(user =>{
                this.setState({message: 'Sucesso!' })
                console.log('Usuário criado com sucesso!',user)
                setTimeout(()=>{
                this.props.navigation.navigate('Movies')
                    this.setState({})
                },1000)
            })
            .catch(error =>{
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
            <TouchableOpacity onPress={() => this.createAccount("Movies")} style={styles.button}><Text
                style={styles.buttonText}>Enviar</Text></TouchableOpacity>
        )
    }

    renderMessage(){
        const {message} = this.state;
        if (!message)
            return null;
        if (message === 'Sucesso!'){
            return (
                <View style={styles.containerMessageSuccess} >
                    <Text style={styles.message}>{message}</Text>
                </View>
            )
        }
        return (
            <View style={styles.containerMessage} >
                <Text style={styles.message}>{message}</Text>
            </View>
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
                        <Text onPress={() => this.props.navigation.navigate("Home")} style={styles.link}>Retornar</Text>
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
    containerMessage:{
        marginTop:20,
        backgroundColor:'#da4343',
        borderRadius:5,
        paddingLeft:12,
        paddingRight:12,
        paddingTop:8,
        paddingBottom:8,
    },
    containerMessageSuccess:{
        marginTop:20,
        backgroundColor:'#6ed056',
        borderRadius:5,
        paddingLeft:12,
        paddingRight:12,
        paddingTop:8,
        paddingBottom:8,
    },
        message:{

            color:'#FFF'
        }
    }
)
export default Register