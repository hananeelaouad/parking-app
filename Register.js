import React from 'react';
import {Text,View,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

export default class Register extends React.Component{

    render(){
        
        const {navigate} = this.props.navigation
        return(
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
               <Image source={require('../images/P.png')}
                style={{ width: '60%', height: "30%", marginTop: -111}}
                
               />
                <Text
                 style={{
                     fontSize:20,
                     fontFamily:"SemiBold",
                     alignSelf:"center",
                 }}
                >WELCOME TO PARK FINDER</Text>

                <Text
                style={{
                    fontFamily:"SemiBold",
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:50,
                    opacity:0.4
                }}
                >
                    ENTER YOUR INFORMATION HERE
                </Text>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:15,
                    borderWidth:3,
                    marginTop:10,
                    paddingHorizontal:10,
                    borderColor:"#404040",
                    borderRadius:23,
                    paddingVertical:9,
                    width: '80%'
                }}>
                    <Icon name="user" color="#FF0000" size={24} />
                  
                    <TextInput 
                        placeholder="USER NAME"
                        placeholderTextColor="#FF0000"
                        style={{paddingHorizontal:10, borderBottomWidth: 1, width: '90%', borderBottomColor: ""}}
                    />

                    

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:15,
                    borderWidth:3,
                    marginTop:10,
                    paddingHorizontal:10,
                    borderColor:"#404040",
                    borderRadius:23,
                    paddingVertical:9,
                    width: '80%'
                }}>
                    <Icon name="mail" color="#FF0000" size={24} />
                   
                   <TextInput 
                        secureTextEntry
                        placeholder=" EMAIL"
                        placeholderTextColor="#FF0000"
                        style={{paddingHorizontal:10, borderBottomWidth: 1, width: '90%', borderBottomColor: ""}}
                    />

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:15,
                    borderWidth:3,
                    marginTop:10,
                    paddingHorizontal:10,
                    borderColor:"#404040",
                    borderRadius:23,
                    paddingVertical:9,
                    width: '80%'
                }}>
                    <Icon name="phone" color="#FF0000" size={24} />
                   
                   <TextInput 
                        secureTextEntry
                        placeholder=" PHONE NUMBER"
                        placeholderTextColor="#FF0000"
                        style={{paddingHorizontal:10, borderBottomWidth: 1, width: '90%', borderBottomColor: ""}}
                    />
                    

                </View>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:15,
                    borderWidth:3,
                    marginTop:10,
                    paddingHorizontal:10,
                    borderColor:"#404040",
                    borderRadius:23,
                    paddingVertical:9,
                    width: '80%'
                }}>
                    <Icon name="lock" color="#FF0000" size={24} />
                   
                   <TextInput 
                        secureTextEntry
                        placeholder="PASSWORD "
                        placeholderTextColor="#FF0000"
                        style={{paddingHorizontal:10, borderBottomWidth: 1, width: '90%', borderBottomColor: ""}}
                    />
                    

                </View>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:15,
                    borderWidth:3,
                    marginTop:10,
                    paddingHorizontal:10,
                    borderColor:"#404040",
                    borderRadius:23,
                    paddingVertical:9,
                    width: '80%'
                }}>
                   <Icon name="lock" color="#FF0000" size={24} />
                   <TextInput 
                        secureTextEntry
                        placeholder="RETYPE PASSWORD"
                        placeholderTextColor="#FF0000"
                        style={{paddingHorizontal:10, borderBottomWidth: 1, width: '90%', borderBottomColor: ""}}
                    />
                    

                </View>

               



                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#FF0000",
                    paddingVertical:10,
                    borderRadius:23,
                    width: '80%'
                }}>
                    
                    <Text style={{
                        color:"white",
                        fontFamily:"SemiBold",
                        width: "100%",
                        textAlign: 'center'
                    }}>CONFIRM</Text>
                </View>
              
            </View>
        )
    }
}
