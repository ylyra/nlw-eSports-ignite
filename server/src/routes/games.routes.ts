import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import { convertMinutesToHourString } from "../utils/convert-minutes-to-hour-string";

const GamesRoutes = Router();
const prisma = new PrismaClient();

GamesRoutes.get("/", async (_, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });

  res.json(games);
});

GamesRoutes.get("/:id/ads", async (req, res) => {
  const gameId = req.params.id;

  try {
    const game = await prisma.game.findUniqueOrThrow({
      where: {
        id: gameId,
      },
      include: {
        ads: {
          select: {
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd: true,
          },
          where: {
            gameId,
          },
          orderBy: {
            createdAt: "desc",
          },
        },
        _count: {
          select: {
            ads: true,
          },
        },
      },
    });

    res.json({
      ...game,
      ads:
        game?.ads.map((ad) => ({
          ...ad,
          weekDays: ad.weekDays.split(","),
          hourStart: convertMinutesToHourString(ad.hourStart),
          hourEnd: convertMinutesToHourString(ad.hourEnd),
        })) || [],
    });
  } catch {
    res.status(404).json({
      error: "Game not found",
    });
  }
});

export { GamesRoutes };
