import {Tabs} from "expo-router";
import TabBar from "../../src/components/tabBar/TabBar";

const TabLayout = () => {
    return (
        <Tabs tabBar={props => <TabBar {...props} />}>
            <Tabs.Screen name="index" options={{ title: "Home", headerShown: false}} />
            <Tabs.Screen name="calendar" options={{ title: "Calendar", headerShown: false}} />
            <Tabs.Screen name="profile" options={{ title: "Profile" , headerShown: false}} />
        </Tabs>
    )
}

export default TabLayout;