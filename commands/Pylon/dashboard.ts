let command = new discord.command.CommandGroup({
  mentionPrefix: true,
  defaultPrefix: '-',
  description: 'The dashboard command'
});

command.raw('dashboard', async (message) => {
  let id = message.guildId;
  let baselink = 'https://pylon.bot';

  let embedLink = new discord.Embed({
    description: `${baselink}/studio/deployments/${id}/editor`,
    color: 0x3db5ff
  });

  await message.reply(embedLink);
});
