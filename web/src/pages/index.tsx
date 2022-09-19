import { Head } from "../components/Head";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Game } from "../@types/game";
import logoImg from "../assets/logo.svg";
import { CreateAdModal } from "../components/CreateAdModal";
import { GameBanner } from "../components/GameBanner";
import { api } from "../services/api";

const MainPage = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    api
      .get<Game[]>("/games")
      .then((res) => setGames(res.data))
      .catch(console.log);
    toast.success("Anúncio criado com sucesso!");
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center py-20 px-2">
      <Head>
        <title>Home - NLW ESports Ignite</title>
      </Head>
      <img src={logoImg} alt="NLW ESports" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-clip-text bg-nlw-gradient">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => (
          <GameBanner key={game.id} {...game} />
        ))}
      </div>

      <div className="w-full bg-[#2A2634] py-6 px-8 mt-8 rounded-lg overflow-hidden game-gradient flex items-center gap-4 flex-wrap justify-between">
        <div className="flex flex-col">
          <strong className="text-2xl text-white font-black">
            Não encontrou seu duo?
          </strong>
          <span className="text-base text-zinc-400">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>

        <CreateAdModal games={games} />
      </div>
    </div>
  );
};

export default MainPage;
