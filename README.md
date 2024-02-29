# frameworks-comparison



### my-turborepo setup
the five apps present ther can be split into multiple groups.
those installed from the turborepo template
- docs
- web
These contain next.js pages, which is likely not optimal for our use case.

The three others were created using vite js.
- chakra-test
- b-18-csv-generator
- vite-project
The vite-project is a template created using vite app builder. It has internally a demonstration on how to use the packages from the monorepo itself. 

The chakra-test and b-18-csv generator are example packages, with the latter built from scratch.

vite-project can be used as a template with no effort, just with `npx turbo gen workspace --copy`
https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

developing from home over ssh might cause interfernce with the headers and errors like:
`content length exceeded`

## deployment
    turbo docker deployment - standalone and `turbo prune {appname} --docker` <https://turbo.build/repo/docs/handbook/deploying-with-docker>
