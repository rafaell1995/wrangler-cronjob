# CloudFlare Workers + Discord send message

This CloudFlare Workers project is designed to tests with wrangler and cronjobs.

# Prerequisites

Before getting started, make sure you have the following:

- CloudFlare Workers account
- Url web hook in Discord server, Example: `https://discord.com/api/webhooks/...`

# Usage

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run start
```

Environments vars:

```lua
VAR1 = "lerolero"
VAR2 = "lerolerolero"
DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/..."
DISCORD_EMBED_FOOTER_LABEL = "<FOOTER_MESSAGE_LABEL>"
DISCORD_EMBED_FOOTER_ICON_URL = "<FOOTER_MESSAGE_IMAGE_URL>"
```

Then, visit the localhost link mentioned in the terminal.

To deploy the project, run:

```bash
npm run deploy
```
