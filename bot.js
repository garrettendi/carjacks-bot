import { Client } from "revolt.js";
import 'dotenv/config';

let bot = new Client();

bot.on("ready", async () =>
  bot.channels.get(process.env.MOD_CHANNEL).sendMessage("Carjacks bot is now running...")
);

//client.channels.get('01K4GCSK22S3YEK6NZXE6CARYZ').on("messageCreate", async (message) => {
//  if (message.content === "hello") {
//    message.channel.sendMessage("world");
//  }
//});

bot.loginBot(process.env.BOT_KEY);