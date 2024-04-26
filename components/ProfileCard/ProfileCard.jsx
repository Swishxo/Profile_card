import { View, Text, Image, TouchableOpacity } from "react-native";
import { s } from "./ProfileCard.style"
import { FontAwesome6, AntDesign, Entypo } from '@expo/vector-icons';


export function ProfileCard(props){
   const img = require('./me.jpg');
    return(
        <View style={s.container}>
            <View style={s.header}>
                <View>
                    <Image style={s.avatar} source={img}></Image>
                </View>
                <View style={s.text}>
                    <Text style={s.name}>{props.title} MobileDev</Text>
                    <Text>{props.discription}</Text>
                </View>
            </View>
            <View style={s.social}>
                <TouchableOpacity style={s.socialBtn} onPress={props.openTwit}>
                    <FontAwesome6 name="x-twitter" size={24} color="#333" />
                </TouchableOpacity>
                <TouchableOpacity style={s.socialBtn} onPress={props.openLink}>
                    <AntDesign name="linkedin-square" size={24} color="#0A66C2" />
                </TouchableOpacity>
                <TouchableOpacity style={s.socialBtn} onPress={props.openGit}>
                    <Entypo name="github" size={24} color="#333" />
                </TouchableOpacity>
            </View>
        </View>
    );
}