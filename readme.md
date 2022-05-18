<h1>How to:</h1>

<h2>Requirements</h2>

- Node v17.3.0 (tested)
- Opensea API key (Only if you decide to use the `floor.js` file)
- Forever npm (`npm i -g forever`)

<h2>Steps</h2>
1. Create a config.json file <br>
2. Fill it with the following (enter correct data)<br>
<br>
<pre>
{
  "token": "BOT_TOKEN_HERE",
  "clientId": "BOT_CLIENT_ID_HERE",
  "guildId": "GUILD_ID_HERE",
  "os_api_key": "OS_KEY_HERE",
  "os_collection": "OS_COLLECTION_SLUG",
  "sales_cooldown": "SALES_COOLDOWN_IN_MS"
}
</pre>
<br>
3. Initialize the project (`npm install`)<br>
4. Deploy the slash commands (`node deploy-commands.js`)<br>
5. Start application (`forever start index.js`)