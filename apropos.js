import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';


export default class apropos extends React.Component {

    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Image source={require('../images/P.png')}
                    style={{ width: '60%', height: "30%", marginTop: 30 }}
                />


                <Text
                    style={{
                        fontSize: 25,
                        fontFamily: "SemiBold",
                        alignSelf: "center",
                    }}
                >WELCOM TO PARK FINDER</Text>



                <Text
                style={{
                    fontFamily:"SemiBold",
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4
                }}
                >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </Text>

                <View
                    
                    style={{
                        marginHorizontal: 55,
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 180,
                        backgroundColor: "#FF0000",
                        paddingVertical: 10,
                        borderRadius: 23,
                        width: '80%'

                    }}>
                    <Text
                        onPress={() => navigate('Login')}
                        style={{
                            color: "white",
                            fontFamily: "SemiBold",
                            width: "100%",
                            textAlign: 'center'
                        }}>SING IN </Text>

                </View>
                <View style={{
                    marginHorizontal: 55,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 30,
                    backgroundColor: "#FF0000",
                    paddingVertical: 10,
                    borderRadius: 23,
                    width: '80%'

                }}>
                   <Text
                        onPress={() => navigate('Register')}
                        style={{
                            color: "white",
                            fontFamily: "SemiBold",
                            width: "100%",
                            textAlign: 'center'
                        }}>SING UP</Text>
                </View>


               
                <Text
                  style={{
                      alignSelf: "center",
                      color: "#1bacc5",
                      fontFamily: "SemiBold",
                    paddingVertical: 50,
                    marginTop:50
                   }}>LET'S GO</Text>


            </View>
        )
    }
}
