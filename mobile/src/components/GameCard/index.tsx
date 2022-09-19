import { LinearGradient } from "expo-linear-gradient";
import {
  ImageBackground,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import type { Object } from "ts-toolbelt";
import { Game } from "../../@types/game";

import { THEME } from "../../theme";
import { styles } from "./styles";

export interface GameCardProps extends Game {}

export function GameCard({
  id,
  _count,
  bannerUrl,
  title,
  ...props
}: Object.Merge<GameCardProps, TouchableOpacityProps>) {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <ImageBackground
        source={{
          uri: bannerUrl,
        }}
        style={styles.cover}
      >
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{title}</Text>
          {_count.ads > 0 && (
            <Text style={styles.ads}>{_count.ads} anúncio(s)</Text>
          )}
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
