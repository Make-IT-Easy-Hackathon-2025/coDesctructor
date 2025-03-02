import {Stack} from "expo-router";

const _layout = () => {
    return (
        <Stack>
            <Stack.Screen name={"LogIn"} options={{headerShown: false}}/>
        </Stack>
    )
}

export default _layout;