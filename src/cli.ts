#!/usr/bin/env node
import { copySync } from 'fs-extra'
import { join } from 'path'
import { getDest } from 'npm-init-helper'

async function main() {
  let dest = await getDest()
  let src = join(__dirname, '..', 'template', 'my-app')
  copySync(src, dest)
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
  pnpm i --shamefully-hoist
  npm start


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
