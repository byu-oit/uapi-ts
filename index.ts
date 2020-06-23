export namespace UAPI {
  export interface Links {
    [key: string]: Link
  }

  export interface Link {
    method: string
    rel: string
    href: string
  }

  export interface CollectionMetadata extends SimpleMetadata {
    collection_size?: number
  }

  export interface SimpleMetadata {
    validation_response: ValidationResponse
    validation_information?: string[]
    cache?: {
      date_time: string
    }
    restricted?: boolean
  }

  export interface ValidationResponse {
    code: number
    message: string
  }

  export type DefaultType = string | null

  export interface DefaultOptions {}

  export interface Value<T = DefaultType> {
    value: T
    api_type: 'read-only' | 'modifiable' | 'system' | 'derived' | 'unauthorized' | 'related'
    key?: boolean
    description?: string
    long_description?: string
    display_label?: string
    domain?: string
    related_resource?: string
  }

  export interface ValueArray<T = DefaultType, Options = DefaultOptions> {
    value_array: Array<Value<T> | (Value<T> & Options)>
    api_type: 'read-only' | 'modifiable' | 'system' | 'derived' | 'unauthorized' | 'related'
    description?: string
    long_description?: string
    display_label?: string
    domain?: string
    related_resource?: string
  }

  export interface ComplexObject<T = DefaultType, Options = DefaultOptions> {
    object: { [key: string]: Value<T> | (Value<T> & Options)}
    api_type: 'read-only' | 'related'
    display_label?: string
    related_resource?: string
  }

  export interface ComplexObjectArray<T = DefaultType, Options = DefaultOptions> {
    object_array: { [key: string]: Value<T> | (Value<T> & Options)}[]
    api_type: 'read-only' | 'related'
    display_label?: string
    related_resource?: string
  }
}
