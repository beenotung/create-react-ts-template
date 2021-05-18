#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const npm_init_helper_1 = require("npm-init-helper");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let dest = yield npm_init_helper_1.getDest();
        yield npm_init_helper_1.cloneTemplate({
            dest,
            gitSrc: 'https://github.com/beenotung/create-react-ts-template',
            srcDir: 'template/my-app',
        });
        console.log(`
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
`.trim());
    });
}
main().catch(err => console.error(err));
