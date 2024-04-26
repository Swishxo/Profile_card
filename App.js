import { Linking } from "react-native";
import { ProfileCard } from "./components/ProfileCard/ProfileCard.jsx";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export default function App() {
  function openX(){
    Linking.openURL("https://twitter.com/")
   }
   function openLinkedIn(){
    Linking.openURL("https://www.linkedin.com/in/stephon-tidd-68aa54156/")
   }
   function openGithub(){
    Linking.openURL("https://github.com/Swishxo?tab=repositories")
   }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1, justifyContent: "center", padding: 20}}>
        <ProfileCard 
          title={"Steph"} 
          discription={"A Software Developer interested in Mobile Development!"} 
          openGit={openGithub}
          openLink={openLinkedIn} 
          openTwit={openX}/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


