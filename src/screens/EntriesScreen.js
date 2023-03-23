import { useEffect } from "react";
import HomeScreen from "./HomeScreen";

const EntriesScreen = ({entries})=>{
    useEffect(()=>{
        console.warn(entries);
    })
    return(
        <HomeScreen/>
    )
}
export default EntriesScreen;