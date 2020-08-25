This projet was built with [Next.js](https://nextjs.org/).

## Getting Started

A TMDB API-key needs to be added in the `.env`-file. There is an `.env.example` file to show what the env-variable name. The external API is also getting tested and not mocked so for the tests to pass the API-key needs to be added in `.jest/setupEnv.js` also.

Install the dependencies:

```bash
npm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn run dev
```

For production, run:

```bash
npm run start
# or
yarn run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
