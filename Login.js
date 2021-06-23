import React from 'react';
import { Text, View, Image, TextInput, StyleSheet, Switch } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';



export default class Login extends React.Component{

    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
               <Image source={require('../images/P.png')}
                style={{ width: '60%', height: "30%", marginTop: 50}}
                
               />
                <Text
                 style={{
                    
                        fontSize: 20,
                        fontFamily: "SemiBold",
                        alignSelf: "center",
                 }}
                >WELCOME TO PARK FINDER </Text>




                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:50,
                    borderWidth:3,
                    marginTop:20,
                    paddingHorizontal:10,
                    borderColor:"#808080",
                    borderRadius:23,
                    paddingVertical:15,
                  }}>
                    <Icon name="mail" color="#FF0000" size={24}/>
                    <TextInput 
                        placeholder="Email"                   
                        style={{paddingHorizontal: 30, width: "90%", borderBottomWidth: 1}}
                    />
                </View>


                <View style={{
                     flexDirection:"row",
                     alignItems:"center",
                     marginHorizontal:50,
                     borderWidth:3,
                     marginTop:2,
                     paddingHorizontal:10,
                     borderColor:"#808080",
                     borderRadius:23,
                     paddingVertical:15,
                }}>
                    <Icon name="lock" color="#FF0000" size={24}/>
                    <TextInput 
                        
                        placeholder="Password"                   
                        style={{paddingHorizontal: 30, width: "90%", borderBottomWidth: 1,}}
                    />
                </View>


                <View style={styles.remember}>
                    <Switch style={{
                        color: "#0000CC",
                        marginLeft:-150,
                        marginTop:-30,
                        fontSize: 100,

                    }}
                    />
                    <Text style={{ 
                        marginLeft:20,
                        color: "#404040",
                        fontFamily: "SemiBold",
                        paddingVertical: 30,
                        marginTop:-30,
                        fontSize: 17,
                    }}
                        >Remember Me
                    </Text>

                  

                </View>   
                
            
                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:-10,
                    backgroundColor:"#FF0000",
                    paddingVertical:10,
                    borderRadius:10,
                    paddingHorizontal: 70,
                }}>
                    <Text 
                        onPress={() => navigate('Dashboard')}
                        style={{
                        color:"white",
                        fontFamily:"SemiBold"
                    }}>LOGING</Text>
                </View>


                <Text onPress={() => navigate('Register')}
                      style={{
                        alignSelf: "center",
                        color: "#1bacc5",
                        fontFamily: "SemiBold",
                        paddingVertical: 30,
                        alignItems:"center",
                        marginTop:-20,
                        
                       }}
                       >Forgot Password
                </Text>


                <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginHorizontal: 50,
                        marginTop: 10,
                        paddingHorizontal: 10,
                        borderRadius: 23,
                        paddingVertical: 15
                        }}>

                </View>


                <Text 
                       style={{
                        alignSelf: "center",
                        color: "#808080",
                        fontFamily: "SemiBold",
                        paddingVertical: 50,
                        marginTop: -90
                     }}>  you can also login with...

                </Text>


                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginHorizontal: 50,
                        marginLeft: 120,
                        marginTop: -30
                    }}>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('http://google.com')}>
                        <Icon> <FontAwesome name="facebook-square" size={55} color="#00008B" ></FontAwesome></Icon>
                    </Text>
                </View>
                <View
                    style={{

                        flexDirection: "row",
                        alignItems: "center",
                        marginHorizontal: 250,
                        marginRight: 330,
                        marginTop: -80
                    }}  >


                    < Text style={{ color: 'blue' }} onPress={() => Linking.openURL('http://google.com')}>
                        <Icon> <MaterialCommunityIcons name="gmail" size={65} color="#c71610" /></Icon>
                    </Text>
                </View>
                <Text
                       onPress={()=>navigate('Register')}      
                       style={{
                        alignSelf:"center",
                        color:"#1bacc5",
                        fontFamily:"SemiBold",
                        paddingVertical:30,
                        margintop:70
                       }}>  New User
                </Text>



            </View>
            
            
        )
    }   
}
const styles = StyleSheet.create({
    inputEmail: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 50,
        borderWidth: 4,
        marginTop: -30,
        paddingHorizontal: 10,
        borderColor: "#1BACC5",
        borderRadius: 23,
        paddingVertical: 15
    },
    logo: { 
        width: "90%", 
        height: "45%", 
        alignItems: "center", 
        marginLeft: "8%", 
        marginRight: "auto" 
    },
    remember:{
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
        alignContent: "center"
    }

})

