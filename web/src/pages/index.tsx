import { MagnifyingGlassPlus } from "phosphor-react";

import { Head } from "../components/Head";

import logoImg from "../assets/logo.svg";

const MainPage = () => {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center py-20">
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
        {[...new Array(6)].map((_, key) => (
          <a href="" key={key} className="rounded-lg overflow-hidden relative">
            <img
              src="https://static-cdn.jtvnw.net/ttv-boxart/Fortnite.jpg"
              alt="Fortnite"
            />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient flex flex-col gap-1 absolute bottom-0 left-0 right-0">
              <strong className="text-white text-base font-bold">
                Fortnite
              </strong>
              <span className="text-sm text-zinc-300">4 anúncios</span>
            </div>
          </a>
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

        <button className="bg-violet-500 py-3 px-4 rounded-md text-white flex gap-3 items-center hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-400 text-[0px]">
          <MagnifyingGlassPlus size={24} />
          <span className="text-base font-medium">Publicar anúncio</span>
        </button>
      </div>
    </div>
  );
};

export default MainPage;
