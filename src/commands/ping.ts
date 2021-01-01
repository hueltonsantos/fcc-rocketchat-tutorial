import { driver } from "@rocket.chat/sdk";
import { CommandInt } from "../interfaces/CommandInt";

export const ping: CommandInt = {
  name: "ping",
  description: "Pings the bot.",
  command: async (message, room) => {
    await driver.sendToRoom("Pong!", room);
  },
};
