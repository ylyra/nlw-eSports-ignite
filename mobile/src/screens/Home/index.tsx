import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Game } from "../../@types/game";
import logoImg from "../../assets/logo-nlw-esports.png";
import { Background } from "../../components/Background";
import { GameCard } from "../../components/GameCard";
import { Heading } from "../../components/Heading";
import { api } from "../../services/api";
import { styles } from "./styles";

export function Home() {
  const [games, setGames] = useState<Game[]>([]);
  const navigation = useNavigation();

  function handleOpenGame(game: Game) {
    navigation.navigate("game", {
      id: game.id,
      title: game.title,
      bannerUrl: game.bannerUrl,
    });
  }

  useEffect(() => {
    api
      .get<Game[]>("/games")
      .then((res) => setGames(res.data))
      .catch(console.log);
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />
        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />

        <FlatList
          data={games}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GameCard {...item} onPress={() => handleOpenGame(item)} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}
