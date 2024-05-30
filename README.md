# Multipurpose Discord Bot

Welcome to the Multipurpose Discord Bot! This bot is designed to handle various tasks and enhance your Discord server experience with its wide range of features.

## Features

- **Moderation**: Manage your server with commands like kick, ban, mute, and more.
- **Music**: Play music from YouTube, Spotify, and other platforms directly in your voice channels.
- **Fun Commands**: Enjoy fun commands like memes, jokes, and more to entertain your community.
- **Utility**: Use helpful utility commands like reminders, polls, and weather information.
- **Custom Commands**: Create custom commands to suit your server's needs.
- **Logging**: Keep track of server activities with detailed logs.
- **Reaction Roles**: Assign roles to users based on their reactions to messages.
- **Games**: Play mini-games with your server members.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v12 or higher)
- [Discord.js](https://discord.js.org/) library
- A Discord Bot Token (available from the [Discord Developer Portal](https://discord.com/developers/applications))

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/multipurpose-discord-bot.git
   cd multipurpose-discord-bot
   
2. Install the dependencies:
   ```sh
   npm install

3. Create a .env file in the root directory and add your bot token:
   ```sh
    BOT_TOKEN=your-bot-token-here

4. Start the bot:
   ```sh
   node src/index.js

Commands
Moderation
!kick @user [reason] - Kick a user from the server.
!ban @user [reason] - Ban a user from the server.
!mute @user [duration] - Mute a user for a specified duration.
!unmute @user - Unmute a user.

Music
!play [song name or URL] - Play a song.
!skip - Skip the current song.
!stop - Stop the music and clear the queue.
!queue - Show the current music queue.

Fun
!meme - Get a random meme.
!joke - Hear a random joke.
!8ball [question] - Ask the magic 8-ball a question.

Utility
!remindme [time] [message] - Set a reminder.
!poll [question] [option1] [option2] ... - Create a poll.
!weather [location] - Get the current weather for a location.

Custom Commands
!addcommand [command] [response] - Create a custom command.
!removecommand [command] - Remove a custom command.

Logging
!setlogchannel [#channel] - Set the channel for logs.
!log [message] - Log a message.

Reaction Roles
!reactionrole [message ID] [emoji] [role] - Set up a reaction role.

Games
!trivia - Start a trivia game.
!rps [rock/paper/scissors] - Play rock-paper-scissors.

Contributing
We welcome contributions! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

1. Fork the repository.
2. Create your feature branch (git checkout -b feature/your-feature).
3. Commit your changes (git commit -am 'Add some feature').
4. Push to the branch (git push origin feature/your-feature).
5. Create a new Pull Request.

License
This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/license/mit) file for details.

Acknowledgements
Discord.js for the awesome library.
All the contributors who have helped build and improve this bot.

