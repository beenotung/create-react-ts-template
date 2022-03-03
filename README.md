# create-react-ts-template

Create react project using typescript template, but without installing the packages.

[![npm Package Version](https://img.shields.io/npm/v/create-react-ts-template.svg?maxAge=3600)](https://www.npmjs.com/package/create-react-ts-template)

## Why?

`create-react-app` mandate installing the packages with `yarn` or `npm`, which can consume lots of disk space / download time.

This tool setup the project template without installing the packages. You can then install packages with `pnpm` or tools of your own choice.

## Usage example
```bash
> npm init react-ts-template my-app
> cd my-app
> pnpm install --shamefully-hoist
> npm start
```

## License

This project is licensed with [BSD-2-Clause](./LICENSE)

This is free, libre, and open-source software. It comes down to four essential freedoms [[ref]](https://seirdy.one/2021/01/27/whatsapp-and-the-domestication-of-users.html#fnref:2):

- The freedom to run the program as you wish, for any purpose
- The freedom to study how the program works, and change it so it does your computing as you wish
- The freedom to redistribute copies so you can help others
- The freedom to distribute copies of your modified versions to others
