export type Game = {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
};

export type GameWithAds = Game & {
  ads: {
    id: string;
    name: string;
    gameId: string;
    yearsPlaying: number;
    discord: string;
    weekDays: string[];
    hourStart: string;
    hourEnd: string;
    useVoiceChannel: Boolean;
    createdAt: string;
  }[];
};
