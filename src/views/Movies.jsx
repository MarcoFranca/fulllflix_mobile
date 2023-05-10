import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useEffect, useState} from "react";
import {getList} from "../api/api";
import {idDetail} from "../redux/slice";
import {useDispatch} from "react-redux";


export default function Movies ({navigation}) {
    const [moviesList, setMoviesList] = useState([])
    const dispatch = useDispatch();
    useEffect(()=>{
        getList(setMoviesList)
    },[])

    const GoToDetails = async(id) =>{
        await dispatch(idDetail(id))
        navigation.navigate("Details")
    }

    return (
        <View style={styles.container}>
            {!moviesList ? null :
                <FlatList data={moviesList} keyExtractor={item => item.id} renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>GoToDetails(item.id)} style={styles.cell}>
                        <View  style={styles.cellContainer}>
                            <Image style={styles.image} source={{uri:`https://image.tmdb.org/t/p/w500/${item.poster_path}`}}/>
                            <Text style={styles.title}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )}/>
            }
            <StatusBar style="dark" />
        </View>
    );
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#000',
            color: "#fff",
            alignItems: 'center',
            justifyContent: 'center',
        },
        cell:{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            backgroundColor: "#E50914",
            marginVertical: "5%",
            height: 80,
        },
        cellContainer:{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
            backgroundColor: "#000",
            color:'#fff',
            paddingHorizontal: "5%",
            height: 80,
            width: "100%",
        },
        image: {
            width: 50,
            height: 80,

        },
        title: {
            color: "#fff",
            fontSize: 16,
            width: '70%',
            marginLeft: "5%",
        }
    }
)
