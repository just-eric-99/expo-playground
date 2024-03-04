import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

const RootPage = () => {
  return (
    <View>
      <Text>Root Page</Text>
      <Link href="(tabs)/home">Home</Link>
    </View>
  );
};

export default RootPage;
