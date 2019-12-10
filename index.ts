export namespace UAPI {
  export interface Links {
    [key: string]: Link
  }

  export interface Link {
    method: string
    rel: string
    href: string
  }

  export interface CollectionMetadata {
    cache?: string
    restricted?: boolean
    collection_size?: number
    validation_response: ValidationResponse
    validation_information?: string[]
  }

  export interface SimpleMetadata {
    validation_response: ValidationResponse
    validation_information?: string[]
  }

  export interface ValidationResponse {
    code: number
    message: string
  }

  export interface Value {
    value: string
    api_type: 'read-only' | 'modifiable' | 'system' | 'derived' | 'unauthorized' | 'related'
    key?: boolean
    description?: string
    long_description?: string
    display_label?: string
    domain?: string
    related_resource?: string
  }

  export interface ValueArray<Options> {
    value_array: Array<Value | (Value & Options)>
    api_type: 'read-only' | 'modifiable' | 'system' | 'derived' | 'unauthorized' | 'related'
    description?: string
    long_description?: string
    display_label?: string
    domain?: string
    related_resource?: string
  }

  export interface ComplexObject<Options> {
    object: { [key: string]: Value | (Value & Options)}
    api_type: 'read-only' | 'related'
    display_label?: string
    related_resource?: string
  }

  export interface ComplexObjectArray<Options> {
    object_array: { [key: string]: Value | (Value & Options)}[]
    api_type: 'read-only' | 'related'
    display_label?: string
    related_resource?: string
  }
}
