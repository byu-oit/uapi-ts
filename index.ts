export namespace UAPI {
  export namespace Response {
    export type Simple<T extends PropertyDictionary = {}> = {
      links: Links
      metadata: Metadata.Simple
    } & T
    export interface Collection<T extends PropertyDictionary> {
      links: Links
      metadata: Metadata.Collection
      values: Simple<T>[]
    }
  }

  export namespace Metadata {
    export interface ValidationResponse<T extends number = number> {
      code: T
      message: string
    }
    export type ValidationInformation = string[]
    export interface Cache {
      date_time: string
    }
    export type Restricted = boolean
    export interface Simple {
      validation_response: ValidationResponse
      validation_information?: ValidationInformation
      cache?: Cache
      restricted?: Restricted
    }
    export type CollectionSize = number
    export interface Collection extends Simple {
      collection_size?: CollectionSize
    }
  }

  export type Links = Record<string, Link>

  export interface Link {
    method: string
    rel: string
    href: string
  }

  export namespace Scalar {
    export type Type = string | number | boolean | null
    export type String = Value<string>
    export type Number = Value<number>
    export type Boolean = Value<boolean>
  }

  export type Property<T extends Scalar.Type> = Value<T> | ValueArray<T>

  export type ComplexProperty<T extends PropertyDictionary> = Object<T> | ObjectArray<T>

  export interface PropertyDictionary {
    [k: string]: Property<any> | ComplexProperty<any>
  }

  export enum ApiType {
    READONLY = 'read-only',
    MODIFIABLE = 'modifiable',
    SYSTEM = 'system',
    DERIVED = 'derived',
    UNAUTHORIZED = 'unauthorized',
    RELATED = 'related'
  }

  export interface Value<V extends Scalar.Type> {
    value: V | null
    api_type: ApiType.READONLY | ApiType.MODIFIABLE | ApiType.SYSTEM | ApiType.DERIVED | ApiType.UNAUTHORIZED | ApiType.RELATED
    key?: boolean
    description?: string
    long_description?: string
    display_label?: string
    domain?: string
    related_resource?: string
  }

  export interface ValueArray<T extends Scalar.Type> {
    value_array: Value<T>[]
    api_type: ApiType.READONLY | ApiType.MODIFIABLE | ApiType.SYSTEM | ApiType.DERIVED | ApiType.UNAUTHORIZED | ApiType.RELATED
    description?: string
    long_description?: string
    display_label?: string
    domain?: string
    related_resource?: string
  }

  export interface Object<T extends PropertyDictionary> {
    object: T | null
    api_type: ApiType.READONLY | ApiType.RELATED
    display_label?: string
    related_resource?: string
  }

  export interface ObjectArray<T extends PropertyDictionary> {
    object_array: T[]
    api_type: ApiType.READONLY | ApiType.RELATED
    display_label?: string
    related_resource?: string
  }
}
