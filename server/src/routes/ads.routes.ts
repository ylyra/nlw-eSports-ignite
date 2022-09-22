import { PrismaClient } from "@prisma/client";
import { Router } from "express";

import { convertHourStringToMinutes } from "../utils/convert-hour-string-to-minutes";
import { convertMinutesToHourString } from "../utils/convert-minutes-to-hour-string";

const AdsRoutes = Router();
const prisma = new PrismaClient();

AdsRoutes.get("/", async (_, res) => {
  const ads = await prisma.ad.findMany({
    include: {
      game: true,
    },
  });
  res.json(
    ads.map((ad) => ({
      ...ad,
      weekDays: ad.weekDays.split(","),
      hourStart: convertMinutesToHourString(ad.hourStart),
      hourEnd: convertMinutesToHourString(ad.hourEnd),
    }))
  );
});

AdsRoutes.post("/", async (req, res) => {
  try {
    const {
      discord,
      hourEnd,
      hourStart,
      useVoiceChannel,
      weekDays,
      yearsPlaying,
      gameId,
      name,
    } = req.body;

    const ad = await prisma.ad.create({
      data: {
        name,
        discord,
        hourEnd: convertHourStringToMinutes(hourEnd),
        hourStart: convertHourStringToMinutes(hourStart),
        useVoiceChannel,
        weekDays: weekDays.join(","),
        yearsPlaying,
        gameId,
      },
    });

    res.status(201).json(ad);
  } catch {
    res.status(400).json({
      error: "Bad request",
    });
  }
});

AdsRoutes.get("/:id/discord", async (req, res) => {
  try {
    const adId = req.params.id;

    const adDiscord = await prisma.ad.findUniqueOrThrow({
      where: {
        id: adId,
      },
      select: {
        discord: true,
      },
    });
    res.json(adDiscord);
  } catch {
    res.status(400).json({
      error: "Bad request",
    });
  }
});

export { AdsRoutes };
