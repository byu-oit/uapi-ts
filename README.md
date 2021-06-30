# University API Typescript Definitions

![npm (scoped)](https://img.shields.io/npm/v/@byu-oit/uapi-ts)
[![Deployment](https://github.com/byu-oit/uapi-ts/actions/workflows/deploy.yml/badge.svg)](https://github.com/byu-oit/uapi-ts/actions/workflows/deploy.yml)

Home of the official TypeScript definitions for
[UAPI Specification](https://github.com/byu-oit/UAPI-Specification)
elements.

### Install

> Note: Only GitHub Package Manager support offered for versions >=
> 2.2.0 as these type definitions are intended for internal use. See the
> GitHub Docs for
> [Installing a package from GitHub](https://docs.github.com/en/packages/guides/configuring-npm-for-use-with-github-packages#installing-a-package).

```
npm install --save-dev @byu-oit/uapi-ts
```

### Usage

Define your models as types (**not interfaces**) and pass them into the
Simple or Collection UAPI Response types. Interfaces tend to cause
problems because of how they interact with index types in typescript.

```ts
interface MyModel extends UAPI.PropertyDictionary {
    id: UAPI.Scalar.String
}
type MyUAPICollectionResponse = UAPI.Response.Collection<MyModel>
type MyUAPISimpleResponse = UAPI.Response.Simple<MyModel>
```

For organizational purposes, you can use namespaces to organize the
different endpoints you wish to group together:

```ts
namespace MyNamespace {
    export type MultipleModelsEndpointResponse = UAPI.Response.Collection<MultipleModels>
    
    export type FirstEndpointResponse = UAPI.Response.Simple<FirstModel>
    
    export type SecondEndpointResponse = UAPI.Response.Simple<SecondModel>
    
    type FirstModel = {
        foo: UAPI.Scalar.String
    }
    
    type SecondModel = {
        bar: UAPI.Scalar.String
    }
    
    type MultipleModels = {
        first: UAPI.Object<FirstModel>
        second: UAPI.Object<SecondModel>
    }
}
```

#### UAPI Lite Support

UAPI Lite is not an official part of the UAPI Specification (yet) but
these types provide UAPI Lite support as an experimental feature. Use it
the same way you would the other UAPI types but prefix the types with
`UAPI.Lite.` instead of `UAPI.` For example:

```ts
type MyModel = {
    id: UAPI.Lite.Scalar.String
}
```

### Contributing

Please open a Pull Request or submit an Issue.
