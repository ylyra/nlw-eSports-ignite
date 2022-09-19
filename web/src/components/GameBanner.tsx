import { Game } from "../@types/game";

export function GameBanner({ _count, bannerUrl, title }: Game) {
  return (
    <a href="" className="rounded-lg overflow-hidden relative">
      <img src={bannerUrl} alt={title} />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient flex flex-col gap-1 absolute bottom-0 left-0 right-0">
        <strong className="text-white text-base font-bold">{title}</strong>
        {_count.ads > 0 && (
          <span className="text-sm text-zinc-300">{_count.ads} anúncios</span>
        )}
      </div>
    </a>
  );
}
