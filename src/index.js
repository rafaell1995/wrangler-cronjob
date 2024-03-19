// worker.js
import { DiscordService } from "./DiscordService.js";

export default {
  async scheduled(event, env, ctx) {
    const discordService = new DiscordService(env);

    const message = {
      content: "",
      embeds: [
        discordService.createEmbed(
          {
            title: `Run cron job`,
            author: {
              name: "CloudFlare Worker",
              icon_url:
                "https://images.ctfassets.net/ee3ypdtck0rk/379B4qVIkLl222Mq8Mogsh/d94ef401f0accf53edf9f11811e62072/integrations-cloudflare-workers.png",
            },
            fields: [
              {
                name: "VAR1",
                value: env.VAR1,
              },
              {
                name: "VAR2",
                value: env.VAR2,
              },
            ],
          },
          env.DISCORD_EMBED_FOOTER_LABEL,
          env.DISCORD_EMBED_FOOTER_ICON_URL
        ),
      ],
    };

    await discordService.sendToDiscord(message);

    return new Response("ok", { status: 200 });
  },
};
