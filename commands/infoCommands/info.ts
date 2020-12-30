const cmdInfo = new discord.command.CommandGroup({
  defaultPrefix: '!'
});

cmdInfo.raw('UserRoles', async (message) => {
  const user = message.author;
  const guild = await message.getGuild();
  const channel = await message.getChannel();
  const roles = await Promise.all(
    message.member.roles.map((roleId) => guild.getRole(roleId))
  );
  const roleNames = roles
    .map((role) => {
      if (!role) return;
      return ` - ${role.name}`;
    })
    .join('\n');
  const idk = new discord.Embed({
    description:
      'You are ' +
      user.toMention() +
      '. You have the following roles: \n' +
      roleNames
  });
  await message.reply(idk);
});
