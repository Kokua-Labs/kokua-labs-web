![](./public/logo.png)

## 🚀 Project Structure

```
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## Prettier VSCode configuration

To setup prettier to format the files on save, go to VSCode config.json file and add the following lines. [npm repo](https://www.npmjs.com/package/prettier-plugin-astro)

```json
    "prettier.documentSelectors": ["**/*.astro"],
    "[astro]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
```

---

## Styles

To extend CSS functionality, relay on **PostCSS** Addons [](https://www.postcss.parts/)

> Please note that PostCSS it's installed by default in Vite
