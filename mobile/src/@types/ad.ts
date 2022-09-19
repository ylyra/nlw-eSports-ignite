export type Ad = {
  id: string;
  name: string;
  gameId: string;
  yearsPlaying: number;
  discord: string;
  weekDays: string[];
  hoursStart: string;
  hoursEnd: string;
  useVoiceChannel: Boolean;
  createdAt: string;
  game: {
    id: string;
    title: string;
    bannerUrl: string;
  };
};
