discord.interactions.commands.register(
  {
    name: 'idk',
    description: 'i dont know why i put this here really',
    options: (opt) => ({
      input: opt.string('message one'),
      input2: opt.string('message two'),
      input3: opt.string('message three')
    })
  },
  async (interaction, { input, input2, input3 }) => {
    await interaction.respond(
      `${input}\n+\n${input2}\n+\n${input3}\n=\n\n**${input} ${input2} ${input3}**`
    );
  }
);
