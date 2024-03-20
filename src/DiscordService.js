import deepClean from "./utils/deepClean.js";

// DiscordService.js
export class DiscordService {
  constructor(env) {
    this.env = env;
  }

  async sendToDiscord(message) {
    if (this.env.DISCORD_WEBHOOK_URL !== undefined) {
      try {
        const response = await fetch(this.env.DISCORD_WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(message),
        });

        if (!response.ok) {
          throw new Error(
            `Erro ao enviar a notificação para o Discord: ${response.statusText}`
          );
        }

        const responseData = await response.json(); // Assumindo que a resposta é JSON
        console.log("Notificação enviada com sucesso:", responseData);
        return responseData;
      } catch (err) {
        console.error("Erro ao enviar a notificação para o Discord:", err);
        return err;
      }
    } else {
      throw new Error("DISCORD_WEBHOOK_URL is undefined!");
    }
  }

  createEmbed(options) {
    // Estrutura básica de um embed
    const embed = {
      title: options.title || "",
      description: options.description || "",
      url: options.url || "",
      /**
       *  Colors:
       *
       *  White           16777215
       *  Greyple	        10070709
       *  Black	        2303786
       *  DarkButNotBlack	2895667
       *  NotQuiteBlack	2303786
       *  Blurple	        5793266
       *  Green	        5763719
       *  Yellow	        16705372
       *  Fuchsia	        15418782
       *  Red	            15548997
       */
      color: options.color || 3106979,
      timestamp: options.timestamp || new Date().toISOString(),
      footer: options.footer
        ? {
            icon_url: options.footer.icon_url || "",
            text: options.footer.text || "",
          }
        : {
            icon_url: this.env.DISCORD_EMBED_FOOTER_ICON_URL,
            text: this.env.DISCORD_EMBED_FOOTER_LABEL,
          },
      thumbnail: options.thumbnail
        ? {
            url: options.thumbnail.url || "",
          }
        : undefined,
      image: options.image
        ? {
            url: options.image.url || "",
          }
        : undefined,
      author: options.author
        ? {
            name: options.author.name || "",
            url: options.author.url || "",
            icon_url: options.author.icon_url || "",
          }
        : undefined,
      fields: options.fields || [],
    };

    return deepClean(embed);
  }
}
