import {Redirect} from "expo-router";
import {useFonts} from "expo-font";

const Index = () => {
    const [loaded] = useFonts({
        "Raleway-Regular": require("../src/assets/fonts/raleway/Raleway-Regular.ttf"),
        "Raleway-Medium": require("../src/assets/fonts/raleway/Raleway-Medium.ttf"),
        "Raleway-Bold": require("../src/assets/fonts/raleway/Raleway-Bold.ttf"),
        "Raleway-SemiBold": require("../src/assets/fonts/raleway/Raleway-SemiBold.ttf"),
    });

    return <Redirect href={"(welcome)/Welcome"} />
}

export default Index;