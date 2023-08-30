# Telegram ChatGPT Bot

Welcome to the Telegram ChatGPT Bot! This bot uses the OpenAI GPT model to provide responses in your Telegram chats.

## Setup

Follow the instructions below to set up your bot:

### 1. Obtain an OpenAI API Key

1. Go to the OpenAI website: https://www.openai.com/
2. Sign in to your account or create a new one.
3. Navigate to the API section and generate an API key.
4. Copy the generated API key.

### 2. Configure the OpenAI API Key

1. Open the `generate.js` file.
2. Find the line `const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY';`
3. Replace `'YOUR_OPENAI_API_KEY'` with the API key you obtained from OpenAI.

### 3. Create a Telegram Bot

1. Open the Telegram app.
2. Search for the "BotFather" bot and start a chat.
3. Use the `/newbot` command to create a new bot.
4. Follow the instructions to choose a name and username for your bot.
5. Once the bot is created, the BotFather will provide you with a token.
6. Copy the provided token.

### 4. Configure the Telegram Bot Token

1. Open the `index.js` file.
2. Find the line `const token = 'YOUR_TELEGRAM_BOT_TOKEN';`
3. Replace `'YOUR_TELEGRAM_BOT_TOKEN'` with the token you received from the BotFather.

## Running the Bot

After setting up your API key and bot token, you can run the bot using the following steps:

### 1. Install the required dependencies:
First, install the required dependencies using npm:

```bash
npm install

```
This will download and install the necessary packages.


### 2. Run the Bot
To start the bot, you can use the nodemon package, which automatically restarts the server when changes are detected

```bash
nodemon index.js

```

### Usage
## Usage

To interact with the Telegram ChatGPT Bot, follow these steps:

1. Start a chat with your bot on Telegram.

2. Use the "/ai" command followed by your question to get a response from the OpenAI GPT model. For example:


The bot will generate a response based on the question you provide.

3. Engage in a conversation by sending messages to the bot. You can ask follow-up questions or provide additional context, and the bot will respond accordingly.

Please note that the bot utilizes the power of the OpenAI GPT model to provide responses. While it aims to generate relevant and accurate answers, the responses may not always be entirely accurate or suitable for all contexts.

### Contributions
Contributions to this project are welcome! If you have any improvements or suggestions, feel free to submit a pull request.



