import chalk from 'chalk'

const log = console.log;

// Combine styled and normal strings
console.log("1 " + chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.italic("2 " + 'DANGER ⚔ !'));

// Pass in multiple arguments
log(chalk.blue("3 " + 'Beware', 'of', 'Dogs 🐕',));

// Nest styles
log(chalk.white("4 " + 'Welcome', chalk.underline.bgBlue('Back') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green("5 " +
  'I am a green line ' +
  chalk.blue.underline.bold('with a blue substring') +
  ' that becomes green again!'
));

// ES2015 template literal
log("6 " + `
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

// Use RGB colors in terminal emulators that support it.
log(chalk.rgb(123, 45, 67).underline("7 " + 'Underlined reddish color'));
log(chalk.hex('#DEADED').bold("8 " + 'Bold gray!'));