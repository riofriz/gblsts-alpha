<h1>How to:</h1>

<h2>Requirements</h2>

- Node v17.3.0 (tested)
- Opensea API key (Only if you decide to use the `floor.js` file)
- Forever npm (`npm i -g forever`)

<h2>Steps</h2>
1. Create a config.json file
2. Fill it with the following (enter correct data)
```
{
  "token": "BOT_TOKEN_HERE",
  "clientId": "BOT_CLIENT_ID_HERE",
  "guildId": "GUILD_ID_HERE",
  "os_api_key": "OS_KEY_HERE",
  "os_collection": "OS_COLLECTION_SLUG",
  "sales_cooldown": "SALES_COOLDOWN_IN_MS"
}
```
3. Initialize the project (`npm install`)
4. Deploy the slash commands (`node deploy-commands.js`)
5. Start application (`forever start index.js`)