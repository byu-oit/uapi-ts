# University API Typescript Definitions
Home of the official TypeScript definitions for
[UAPI Specification](https://github.com/byu-oit/UAPI-Specification)
elements.

### Install

> Note: Only GitHub Package Manager support offered for versions >=
> 2.2.0 as these type definitions are intended for internal use. See the
> GitHub Docs for
> [Installing a package from GitHub](https://docs.github.com/en/packages/guides/configuring-npm-for-use-with-github-packages#installing-a-package).
```
npm install @byu-oit/uapi-ts
```

### Usage

Define your models as types (*not interfaces*) and pass them into the
Simple or Collection UAPI Response types:

```ts
type MyModel = {
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
    
    type FirstModel extends UAPI.PropertyDictionary {
        foo: UAPI.Scalar.String
    }
    
    type SecondModel extends UAPI.PropertyDictionary {
        bar: UAPI.Scalar.String
    }
    
    type MultipleModels {
        first: UAPI.Object<FirstModel>
        second: UAPI.Object<SecondModel>
    }
}
```

### Contributing
Please open a Pull Request or submit an Issue.
