const { prompt } = require('inquirer');
const chalk = require('chalk');

const { parseAndEvaluate } = require('./parse-and-evaluate');

const repl = async () => {
  try{
    const ans = await askq()
    const {COMMAND} = ans
    if (COMMAND.trim()){
      console.log(chalk.red(parseAndEvaluate(COMMAND)))
    }
  }catch (e){
    console.error(e)
  }
  repl()
};

const askq = () => {
  const q = [{name: 'COMMAND',type:'input',message: chalk.bgCyan('>')}]
  return prompt(q)

}

if (require.main === module) {
  console.log(
    chalk.red(
      `Welcome to the ${chalk.bgYellow('Dropbear')} Programming Language`,
    ),
  );
  repl();
}

module.exports = repl;
