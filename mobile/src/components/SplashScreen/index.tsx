import { Image, View, ViewProps } from "react-native";
import { Background } from "../Background";
import { styles } from "./styles";

import logoImg from "../../assets/logo-nlw-esports.png";

export function SplashScreen(props: ViewProps) {
  return (
    <Background>
      <View style={styles.container} {...props}>
        <Image
          source={logoImg}
          style={{
            width: 214,
            height: 120,
          }}
        />
      </View>
    </Background>
  );
}
