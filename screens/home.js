import React, { Component } from 'react'
import { View, StyleSheet, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';

const imageURL = "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg";

class Home extends Component{
    render() {
        return(
            <SafeAreaView>
                <ScrollView style={styles.main}>
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.btn} >
                            <Image source={{ uri: imageURL }} style={ styles.topImage } />
                            <View style={styles.btnInner}>
                                <Text style={styles.title}>Car Meet</Text>
                                <Text style={styles.bio}>Location: 5601 Blvd East</Text>
                                <Text style={styles.bio}>Rules: burnouts</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.btn} >
                            <Image source={{ uri: imageURL }} style={ styles.topImage } />
                                <View style={styles.btnInner}>
                                <Text style={styles.title}>Burn Out Meet</Text>
                                <Text style={styles.bio}>Location: 5601 Blvd East</Text>
                                <Text style={styles.bio}>Rules: burnouts</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.btn} >
                            <Image source={{ uri: imageURL }} style={ styles.topImage } />
                            <View style={styles.btnInner}>
                                <Text style={styles.title}>Cars and Coffee</Text>
                                <Text style={styles.bio}>Location: 5601 Blvd East</Text>
                                <Text style={styles.bio}>Rules: No revving, burnouts and...</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        height: '100%'
    },

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        marginTop: 15,
        marginRight: 15,
        marginLeft: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 1,
    },

    topImage: {
        width: '100%',
        height: 200,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        backgroundColor: 'white'
    },

    btn: {
        backgroundColor: 'transparent',
        height: '100%',
        marginBottom: 10
    },

    btnInner: {
        backgroundColor: '#003f5c',
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        paddingBottom: 15
    },

    title: {
        justifyContent: 'flex-start',
        textAlign: 'left',
        fontSize: 24,
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        width: '100%',
        color: 'white'
    },

    bio: {
        justifyContent: 'flex-start',
        textAlign: 'left',
        fontSize: 14,
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        width: '100%',
        color: 'white'
    }
});

export default Home;