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
This is free and open-source software (FOSS) with
[BSD-2-Clause License](./LICENSE)
