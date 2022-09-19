import { GameController } from "phosphor-react-native";
import { Text, TouchableOpacity, View } from "react-native";

import { THEME } from "../../theme";
import { styles } from "./styles";

type AdProps = {
  id: string;
  name: string;
  weekDays: string[];
  useVoiceChannel: boolean;
  yearsPlaying: number;
  hourStart: string;
  hourEnd: string;
};

export function Ad(props: AdProps) {
  async function onConnectClick() {}
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Nome</Text>
        <Text style={styles.text} numberOfLines={1}>
          {props.name}
        </Text>
      </View>

      {props.yearsPlaying > 0 && (
        <View>
          <Text style={styles.heading}>Tempo de jogo</Text>
          <Text style={styles.text} numberOfLines={1}>
            {props.yearsPlaying} ano(s)
          </Text>
        </View>
      )}

      <View>
        <Text style={styles.heading}>Disponibilidade</Text>
        <Text style={styles.text} numberOfLines={1}>
          {props.weekDays.length} dias {"\u2022"} {props.hourStart} -{" "}
          {props.hourEnd}
        </Text>
      </View>

      <View>
        <Text style={styles.heading}>Chamada de áudio?</Text>
        <Text
          style={{
            ...styles.text,
            color: props.useVoiceChannel
              ? THEME.COLORS.SUCCESS
              : THEME.COLORS.ALERT,
          }}
        >
          {props.useVoiceChannel ? "Sim" : "Não"}
        </Text>
      </View>

      <TouchableOpacity style={styles.connect} onPress={onConnectClick}>
        <GameController color={THEME.COLORS.TEXT} size={20} />
        <Text style={styles.connectText}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
}
