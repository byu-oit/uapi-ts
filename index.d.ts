export namespace UAPI {
  export namespace Response {
    export type Simple<T extends PropertyDictionary = {}> = {
      links: Links
      metadata: Metadata.Simple
    } & T
    export type Collection<T extends PropertyDictionary = {}> = {
      links: Links
      metadata: Metadata.Collection
      values: Simple<T>[]
    }
  }

  export namespace Metadata {
    export type ValidationResponse<T extends number = number> = {
      code: T
      message: string
    }
    export type ValidationInformation = string[]
    export type Cache = {
      date_time: string
    }
    export type Restricted = boolean
    export type FieldSetsReturned = string[]
    export type FieldSetsAvailable = string[]
    export type FieldSetsDefault = string[]
    export type Simple = {
      validation_response: ValidationResponse
      validation_information?: ValidationInformation
      cache?: Cache
      restricted?: Restricted
      field_sets_returned?: FieldSetsReturned,
      field_sets_available?: FieldSetsAvailable,
      field_sets_default?: FieldSetsDefault
    }
    export type CollectionSize = number
    export type Collection = Simple & {
      collection_size?: CollectionSize
    }
  }

  export type Links = Record<string, Link>

  export type Link = {
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

  export type PropertyDictionary = Record<string, Property<any> | ComplexProperty<any>>

  export type ApiType = 'read-only' | 'modifiable' | 'system' | 'derived' | 'unauthorized' | 'related'

  export type ObjectApiType = 'read-only' | 'related'

  export type Value<T extends Scalar.Type> = {
    value: T | null
    api_type: ApiType
    key?: boolean
    description?: string
    long_description?: string
    display_label?: string
    domain?: string
    related_resource?: string
  }

  export type ValueArray<T extends Scalar.Type> = {
    value_array: Value<T>[]
    api_type: ApiType
    description?: string
    long_description?: string
    display_label?: string
    domain?: string
    related_resource?: string
  }

  export type Object<T extends PropertyDictionary> = {
    object: T | null
    api_type: ObjectApiType
    display_label?: string
    related_resource?: string
  }

  export type ObjectArray<T extends PropertyDictionary> = {
    object_array: T[]
    api_type: ObjectApiType
    display_label?: string
    related_resource?: string
  }

  export namespace Lite {
    export namespace Response {
      export type Simple<T extends PropertyDictionary = {}> = {
        links: Links
        metadata: Metadata.Simple
      } & T
      export type Collection<T extends PropertyDictionary = {}> = {
        links: Links
        metadata: Metadata.Collection
        values: Simple<T>[]
      }
    }

    export type Property<T extends Scalar.Type> = Value<T> | ValueArray<T>

    export type ComplexProperty<T extends PropertyDictionary> = Object<T> | ObjectArray<T>

    export type PropertyDictionary = Record<string, Property<any> | ComplexProperty<any>>

    export type Value<T extends Scalar.Type> = T

    export type ValueArray<T extends Scalar.Type> = Value<T>[]

    export type Object<T extends PropertyDictionary> = T | null

    export type ObjectArray<T extends PropertyDictionary> = T[]

    export namespace Scalar {
      export type Type = string | number | boolean | null
      export type String = Value<string>
      export type Number = Value<number>
      export type Boolean = Value<boolean>
    }
  }
}
