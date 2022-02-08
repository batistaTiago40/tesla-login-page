import Logo from "./src/components/Logo/";
import {useFonts, Sanchez_400Regular} from '@expo-google-fonts/sanchez';
import AppLoading from 'expo-app-loading';
import Labels from "./src/components/Labels";
import { SignInButton } from "./src/components/SignInButton";
import { SignUpWith } from "./src/components/SignUpWith";

export default function App() {
  let [fontsLoaded] = useFonts({
    Sanchez_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <Logo />
      <Labels />
      <SignInButton />
      <SignUpWith />
    </>
  );
}