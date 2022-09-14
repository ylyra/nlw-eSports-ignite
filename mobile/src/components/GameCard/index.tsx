import { LinearGradient } from "expo-linear-gradient";
import {
  ImageBackground,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import type { Object } from "ts-toolbelt";

import { THEME } from "../../theme";
import { styles } from "./styles";

export interface GameCardProps {
  id: string;
  name: string;
  ads: string;
  cover: ImageSourcePropType;
}

export function GameCard({
  ads,
  cover,
  id,
  name,
  ...props
}: Object.Merge<GameCardProps, TouchableOpacityProps>) {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <ImageBackground source={cover} style={styles.cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.ads}>{ads} anúncio(s)</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
