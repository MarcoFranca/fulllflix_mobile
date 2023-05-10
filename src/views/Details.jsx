import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View,} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { data, getMovieDetails, id, returnHome } from "../redux/slice";

export default function Detail({ navigation }) {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    var details = useSelector(data);
    var ids = useSelector(id);

    const start = async () => {
        await dispatch(getMovieDetails(ids));
        setIsLoading(false);
    };

    useEffect(() => {
        start();
    }, []);

    return (
        <View style={styles.container}>
            {isLoading ? null : (
                <>
                    <ImageBackground
                        style={styles.backgroundImage}
                        source={{
                            uri: `https://image.tmdb.org/t/p/w500/${details.poster_path}`,
                        }}
                    ></ImageBackground>
                    <View style={styles.card}>
                        <Text style={styles.title}>{details.title}</Text>
                        <Text style={styles.subTitle}>Sinopse</Text>
                        <Text style={styles.text}>{details.overview}</Text>
                        <Text style={styles.subTitle}>Nota</Text>
                        <Text style={styles.text}>{details.vote_average}</Text>
                        <Text style={styles.subTitle}>Data de lançamento</Text>
                        <Text style={styles.text}>{details.release_date}</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                navigation.navigate("Movies");
                                dispatch(returnHome());
                                setIsLoading(true);
                            }}
                        >
                            <Text style={styles.buttonText}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
    },
    backgroundImage: {
        flex: 1,
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#000",
        opacity: 0.3,
    },
    card: {
        flex: 4,
        backgroundColor: "#fff",
        width: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingHorizontal: 25,
    },
    title: {
        color: "#000",
        fontSize: 35,
    },
    subTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    text: {
        fontSize: 16,
    },
    button:{
        backgroundColor:'#da4343',
        borderRadius:50,
        paddingLeft: 32,
        paddingRight: 32,
        paddingTop: 12,
        paddingBottom: 12,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: 900,
    },
});
