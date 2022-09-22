import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Ad as AdProps } from "../../@types/ad";
import { GameWithAds } from "../../@types/game";
import logoImg from "../../assets/logo-nlw-esports.png";
import { Ad } from "../../components/Ad";
import { Background } from "../../components/Background";
import { DuoMatch } from "../../components/DuoMatch";
import { Heading } from "../../components/Heading";
import { api } from "../../services/api";
import { THEME } from "../../theme";
import { styles } from "./styles";

interface RouteParams {
  id: string;
  title: string;
  bannerUrl: string;
}

export function Game() {
  const [ads, setAds] = useState<GameWithAds["ads"]>([]);
  const [discordDueSelected, setDiscordDueSelected] = useState("");
  const route = useRoute();
  const game = route.params as RouteParams;
  const navigation = useNavigation();

  function handleConnectDuo(discord: string) {
    setDiscordDueSelected(discord);
  }

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    console.log(`/${game.id}/ads`);
    api
      .get<GameWithAds>(`/games/${game.id}/ads`)
      .then((res) => setAds(res.data.ads))
      .catch(console.log);
  }, [game.id]);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image source={logoImg} style={styles.logo} />

          <View style={styles.right} />
        </View>

        <Image
          source={{
            uri: game.bannerUrl,
          }}
          style={styles.gameBanner}
          resizeMode="cover"
        />

        <Heading title={game.title} subtitle="Conecte-se e comece a jogar!" />

        <FlatList
          data={ads}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Ad {...item} key={item.id} onConnect={handleConnectDuo} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={styles.containerList}
          contentContainerStyle={[
            ads.length > 0
              ? styles.contentList
              : { flex: 1, alignItems: "center", justifyContent: "center" },
          ]}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              Não há anúncios publicados ainda
            </Text>
          )}
        />

        <DuoMatch
          discord="chevron"
          visible={discordDueSelected.length > 0}
          onRequestClose={() => setDiscordDueSelected("")}
          onClose={() => setDiscordDueSelected("")}
        />
      </SafeAreaView>
    </Background>
  );
}
