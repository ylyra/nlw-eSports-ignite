import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import * as Clipboard from "expo-clipboard";
import { CheckCircle } from "phosphor-react-native";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Modal,
  ModalProps,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { THEME } from "../../theme";
import { Heading } from "../Heading";
import { styles } from "./styles";

interface Props extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...props }: Props) {
  const [isCopyingDiscord, setIsCopyingDiscord] = useState(false);

  async function handleCopyDiscordToClipboard() {
    setIsCopyingDiscord(true);
    await Clipboard.setStringAsync(discord);
    Alert.alert(
      "Discord Copiado!",
      "Usuário copiado para você colocar no Discord e encontrar essa pessoa."
    );
    setIsCopyingDiscord(false);
  }

  return (
    <Modal animationType="fade" transparent statusBarTranslucent {...props}>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <MaterialIcons
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>

          <CheckCircle size={64} color={THEME.COLORS.SUCCESS} weight="bold" />

          <Heading
            title="Let's play!"
            subtitle="Agora é só começar a jogar!"
            style={{
              alignItems: "center",
              marginTop: 24,
            }}
          />

          <Text style={styles.label}>Adicione no Discord</Text>
          <TouchableOpacity
            style={styles.discordButton}
            onPress={handleCopyDiscordToClipboard}
            disabled={isCopyingDiscord}
          >
            <Text style={styles.discord}>
              {isCopyingDiscord ? (
                <ActivityIndicator color={THEME.COLORS.PRIMARY} />
              ) : (
                discord
              )}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
