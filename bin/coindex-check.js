const program = require('commander');
const check = require('../commands/check');

program
    .command('price')
    .description('Check prices of coins')
    .option(
        '--coin <type>',
        'Add specefic coin types in CSV formate',
        'BTC,ETH,XRP'
    )
    .option('--cur <currncy>', 'Change the currency', 'USD')
    .action((cmd) => check.price(cmd));

program.parse(process.argv);