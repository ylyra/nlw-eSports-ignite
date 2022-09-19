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
    weekDays: string[];
    useVoiceChannel: boolean;
    yearsPlaying: number;
    hourStart: string;
    hourEnd: string;
  }[];
};
