import { api, driver } from "@rocket.chat/sdk";
import dotenv from "dotenv";
dotenv.config();

const {
  ROCKETCHAT_URL,
  ROCKETCHAT_USER,
  ROCKETCHAT_PASSWORD,
  ROCKETCHAT_USE_SSL,
} = process.env;

if (!ROCKETCHAT_URL || !ROCKETCHAT_USER || !ROCKETCHAT_PASSWORD) {
  console.error("Missing required environment variables.");
  process.exit(1);
}

(async () => {
  const ssl = !!ROCKETCHAT_USE_SSL;
  await driver.connect({ host: ROCKETCHAT_URL, useSsl: ssl });
  await driver.login({
    username: ROCKETCHAT_USER,
    password: ROCKETCHAT_PASSWORD,
  });
  await api.login({ username: ROCKETCHAT_USER, password: ROCKETCHAT_PASSWORD });
  await driver.joinRooms(["general"]);
  await driver.subscribeToMessages();
  await driver.sendToRoom("I am alive!", "general");
})();
