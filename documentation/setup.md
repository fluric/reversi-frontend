### Initialization
```
yarn create vite my-app --template react

yarn add semantic-ui-react semantic-ui-css
yarn add styled-components
yarn add -D @types/styled-components
```

### API creation
```
npx @openapitools/openapi-generator-cli generate  -i src/reversiApi.yaml  -g javascript -o src/api
```
