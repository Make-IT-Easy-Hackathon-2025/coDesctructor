import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-google-signin/google-signin';
class LoginApiClient {
    async login(email: string, password: string): Promise<boolean> {
        try {
            await auth().signInWithEmailAndPassword(email, password);
            return true;
        } catch (error) {
            throw new Error('Login error: ' + error);
        }
    }

    async register(email: string, password: string): Promise<boolean> {
        try {
            const userCredentials = await auth().createUserWithEmailAndPassword(
                email,
                password
            );

            return true;
        } catch (error) {
            throw new Error('Register error: ' + error);
        }
    }

    async logout(): Promise<boolean> {
        try {
            await auth().signOut();

            return true;
        } catch (error) {
            throw new Error('Logout error: ' + error);
        }
    }

}

export default LoginApiClient;