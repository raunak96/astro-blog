# Welcome to [Astro](https://astro.build)

## 🚀 Project Structure

Inside of the Astro project, you'll see the following folders and files:

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

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/React components.

`src/layout` has elements like html,meta,header tags and things which are common to many pages.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).


## Commit History
1. Using JS inside Astro Files - Similar to React (We can also directly use React/Vue etc components inside if we download their corresponding package).

2. Astro uses a code fence (`---`) (its ) to identify the component script in Astro component. You can use the component script to write any JavaScript code that you need to render your template. This can include:
   - importing other Astro components
   - importing other framework components, like React
   - importing data, like a JSON file
   - fetching content from an API or database
   - creating variables that you will reference in your template
  (It is async by default) [refer](./src/pages/blog-api.astro#L1)

3. Making Layout component which will be common to our pages and contains the html/meta/header tags. We also learnt how {children} works here - it is called [`<slot>`](./src/layouts/Layout.astro#L32) in Astro. We also learnt how props are used and propTypes syntax in Astro [refer](./src/layouts/Layout.astro#L4).

4. Learnt how to integrate UI framework (in our case React) and use it in Astro. Refer [docs](https://docs.astro.build/en/guides/integrations-guide/react/).

5. Learnt to add JS actions in Astro. Its the same as vanilla JS. Add `<script></script>` tag and inside it write vanilla js logic. We can also attach variables to script which can also be props received ([refer](./src/components/Tabs.astro#L48))

6. Routing is similar to **NextJs**, where fileName in pages folder becomes the route name. For eg: `pages/about.astro` leads to **/about** route.

7. ## Getting Data directly from local Markdown Files
    - Simply use the following function:
 ```javascript
 Astro.glob(`<file-location> of .md file`)
 ```
 It will automatically parse the Markdown file into an object with keys like `frontmatter`. `glob()` function fetches any local files (not just .md) into our static site setup. [Refer](./src/pages/blog.astro#L7).