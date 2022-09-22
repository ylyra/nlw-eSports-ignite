import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { GameController, MagnifyingGlassPlus } from "phosphor-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

import { Game } from "../@types/game";
import { api } from "../services/api";

import { Checkbox } from "./Form/Checkbox";
import { Input } from "./Form/Input";
import { Select } from "./Form/Select";
import { ToggleGroup } from "./Form/ToggleGroup";

type CreateAdModalProps = {
  games: Game[];
};

const schema = z.object({
  gameId: z.string().min(1, "É necessário selecionar um jogo"),
  name: z.string().min(1, "É necessário escrever seu nome ou nickname"),
  yearsPlaying: z
    .number()
    .min(0, "É necessário colocar quantos anos joga (pode ser ZERO)"),
  discord: z
    .string()
    .regex(
      new RegExp(/^.{3,32}#[0-9]{4}$/),
      "Coloque um nick de discord valido"
    ),
  weekDays: z
    .array(z.string())
    .min(1, "É necessário selecionar pelo menos 1 dia da semana"),
  hourStart: z.string(),
  hourEnd: z.string(),
  useVoiceChannel: z.boolean(),
});

export function CreateAdModal({ games }: CreateAdModalProps) {
  const { formState, handleSubmit, register, control } = useForm<
    z.infer<typeof schema>
  >({
    resolver: zodResolver(schema),
    defaultValues: {
      gameId: "",
      name: "",
      yearsPlaying: 0,
      discord: "",
      weekDays: [],
      hourStart: "",
      hourEnd: "",
      useVoiceChannel: false,
    },
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleRegisterAd: SubmitHandler<z.infer<typeof schema>> = async (
    data
  ) => {
    try {
      await api.post("/ads", {
        ...data,
        weekDays: data.weekDays.map(Number),
      });
      toast.success("Anúncio criado com sucesso!");
      setIsDialogOpen(false);
    } catch {}
  };

  return (
    <Dialog.Root onOpenChange={setIsDialogOpen} open={isDialogOpen}>
      <Dialog.Trigger className="bg-violet-500 py-3 px-4 rounded-md text-white flex gap-3 items-center hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-400 text-[0px]">
        <MagnifyingGlassPlus size={24} />
        <span className="text-base font-medium">Publicar anúncio</span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

        <Dialog.Content className="fixed bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[600px] w-full shadow-black/25">
          <Dialog.Title className="text-3xl font-black">
            Publique um anúncio
          </Dialog.Title>

          <form
            onSubmit={handleSubmit(handleRegisterAd)}
            className="mt-8 flex flex-col gap-4"
          >
            <Select
              label="Qual o game?"
              name="gameId"
              control={control}
              options={games.map((game) => ({
                value: game.id,
                label: game.title,
              }))}
              error={formState.errors.gameId}
              placeholder="Selecione o game que deseja jogar"
            />
            <Input
              label="Seu nome (ou nickname)"
              id="name"
              placeholder="Como te chamam dentro do game?"
              error={formState.errors.name}
              {...register("name")}
            />

            <div className="grid grid-cols-2 gap-6">
              <Input
                label="Joga a quantos anos?"
                type="number"
                placeholder="Tudo bem ser ZERO"
                min={0}
                error={formState.errors.yearsPlaying}
                {...register("yearsPlaying", {
                  valueAsNumber: true,
                })}
              />
              <Input
                label="Qual seu Discord?"
                id="discord"
                placeholder="Usuario#0000"
                error={formState.errors.discord}
                {...register("discord")}
              />
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="weekDays"
                  className="font-semibold text-base -tracking-[0.18px]"
                >
                  Quando costuma jogar?
                </label>

                <ToggleGroup
                  name="weekDays"
                  control={control}
                  type="multiple"
                  className="grid grid-cols-4 gap-1"
                  options={[
                    {
                      value: "0",
                      label: "Domingo",
                    },
                    {
                      value: "1",
                      label: "Segunda",
                    },
                    {
                      value: "2",
                      label: "Terça",
                    },
                    {
                      value: "3",
                      label: "Quarta",
                    },
                    {
                      value: "4",
                      label: "Quinta",
                    },
                    {
                      value: "5",
                      label: "Sexta",
                    },
                    {
                      value: "6",
                      label: "Sábado",
                    },
                  ]}
                  error={formState.errors.weekDays}
                />
              </div>

              <div className="flex-1 flex flex-col gap-2">
                <label
                  htmlFor="hoursStart"
                  className="font-semibold text-base -tracking-[0.18px]"
                >
                  Qual horário do dia?
                </label>

                <div className="grid grid-cols-2 gap-2">
                  <Input
                    id="hoursStart"
                    type="time"
                    placeholder="De"
                    error={formState.errors.hourStart}
                    {...register("hourStart")}
                  />
                  <Input
                    id="hoursEnd"
                    type="time"
                    placeholder="Até"
                    error={formState.errors.hourEnd}
                    {...register("hourEnd")}
                  />
                </div>
              </div>
            </div>

            <Checkbox
              label="Constumo me conectar ao chat de voz"
              id="useVoiceChannel"
              name="useVoiceChannel"
              control={control}
              error={formState.errors.useVoiceChannel}
            />

            <footer className="flex justify-end gap-4 mt-4">
              <Dialog.Close
                type="button"
                className="-tracking-[0.18px] px-5 py-3 bg-zinc-500 rounded-md flex items-center justify-center font-semibold hover:bg-zinc-600 transition-colors"
              >
                Cancelar
              </Dialog.Close>

              <button className="-tracking-[0.18px] px-5 py-3 bg-violet-500 rounded-md flex items-center justify-center font-semibold gap-3 hover:bg-violet-600 transition-colors">
                <GameController size={24} /> Encontrar duo
              </button>
            </footer>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
