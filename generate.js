const axios = require('axios')

const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY';

async function generateResponse(message) {
  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-3.5-turbo', // Use the appropriate model name
      messages: [{ role: 'system', content: 'You are a Telegram Bot.' }, { role: 'user', content: message }],
    },
    {
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
    }
  );

  return response.data.choices[0].message.content.trim();
}

module.exports = generateResponse
