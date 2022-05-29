# Next.js Headless WordPress with MUI Getting Started Example

## Setup

See the [setup steps](https://github.com/wpengine/faustjs#quick-start).

## Run it

```shell
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000)

## Appendix

### Install Next.js app from Faust.js example

```shell
npx create-next-app \
    -e https://github.com/wpengine/faustjs/tree/main \
    --example-path examples/next/getting-started \
    --use-npm \
    .
```

### Install MUI and configuration

```shell
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled @emotion/cache @emotion/server
```

<!-- 필요할지? -->
- MUI + emotion (default)
- MUI + styled-component
- MUI + emotion + Tailwind CSS?
