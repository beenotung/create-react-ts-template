#!/usr/bin/env node
import { join } from 'path'
import { copyTemplate, getDest } from 'npm-init-helper'

async function main() {
  let dest = await getDest()
  let srcDir = join(__dirname, '..', 'template', 'my-app')
  console.log('Copying react typescript template to:', dest, '...')
  copyTemplate({ srcDir, dest, updatePackageJson: true })

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
  pnpm i
  npm start


Installation Alternatives:

  pnpm i
  or
  yarn install
  or
  npm install
`.trim(),
  )
}
main().catch(err => console.error(err))
