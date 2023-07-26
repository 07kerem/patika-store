import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
container:{
    flex:1,
    padding:10,
    width:180
    
},
row:{
 alignItems:'center'
 
},
card:{
 width:180,
 borderRadius:10,
 margin:10,
 shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
 backgroundColor:'#EAEAEA',
 height: 300,
 justifyContent:'space-between'
},
top_image:{
    padding:10,
},
image: {
    height:180,
    alignItems:'center',
    width:160,
    borderRadius:10,
},
title:{
    fontSize:16,
    color:'black',
    paddingLeft:5,
    textAlign:'left'
},
price:{
    paddingLeft:5,
    fontSize:15,
    color:'#5B5A5A',
    fontWeight:'500'
},
stoc:{
    padding:5,
    color:'red',
    fontSize:15
}   
       
        
})