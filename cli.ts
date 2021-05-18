#!/usr/bin/env node
import { cloneTemplate, getDest } from 'npm-init-helper'
async function main() {
  let dest = await getDest()
  await cloneTemplate({
    dest,
    gitSrc: 'https://github.com/beenotung/create-react-ts-template',
    srcDir: 'template/my-app',
  })
  console.log(
    `
Done.
Inside that directory, you can run several commands:

  npm start
    Starts the react development server.

  npm run build
    Builds the react project into 'build' folder.

  npm test
    Runs jest tests.

Details refer to create-react-app (typescript template).


Get started by typing:

  cd ${dest}
  <install*>


Installation Alternatives:

  pnpm i --shamefully-hoist
  or
  yarn install
  or
  npm install
`.trim(),
  )
}
main().catch(err => console.error(err))
