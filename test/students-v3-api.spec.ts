import { UAPI } from '../index'

export namespace StudentsV3API {
    export type Response = UAPI.Response.Collection<WaitlistedClass>

    export type WaitlistedClass = {
        byu_id: UAPI.Scalar.String
        year_term: UAPI.Scalar.String
        curriculum_id: UAPI.Scalar.String
        title_code: UAPI.Scalar.String
        teaching_area: UAPI.Scalar.String
        course_number: UAPI.Scalar.String
        section_number: UAPI.Scalar.String
        term_code: UAPI.Scalar.String
        class_provider: UAPI.Scalar.String
        instruction_mode: UAPI.Scalar.String
        percent_classroom_time: UAPI.Scalar.String
        course_title: UAPI.Scalar.String
        credit_hours: UAPI.Scalar.String
        end_date: UAPI.Scalar.String
        final_exam_schedule: UAPI.Object<RoomDetails>
        help_section: UAPI.Scalar.Boolean
        honors_section: UAPI.Scalar.Boolean
        instructors: UAPI.ObjectArray<Instructor>
        lab_section: UAPI.Scalar.Boolean
        lms_name: UAPI.Scalar.String
        online_section: UAPI.Scalar.Boolean
        position_in_queue: UAPI.Scalar.Number
        quiz_section: UAPI.Scalar.Boolean
        reason_skipped: UAPI.Scalar.String
        requested_by_byu_id: UAPI.Scalar.String
        requested_datetime: UAPI.Scalar.String
        start_date: UAPI.Scalar.String
        when_taught: UAPI.ObjectArray<RoomDetails>
    }

    export type RoomDetails = {
        building: UAPI.Scalar.String
        room: UAPI.Scalar.String
        days: UAPI.Scalar.String
        start_time: UAPI.Scalar.String
        end_time: UAPI.Scalar.String
        start_date: UAPI.Scalar.String
        end_date: UAPI.Scalar.String
    }

    export type Instructor = {
        instructor_byu_id: UAPI.Scalar.String
        instructor_type: UAPI.Scalar.String
    }
}

// Testing the implementation of the StudentsV3API types
;(function (): StudentsV3API.Response {
    return {
        links: {
            waitlisted_classes__info: {
                rel: 'self',
                href: 'https://api.byu.edu/byuapi/students/v2/123456789/waitlisted_classes',
                method: 'GET'
            }
        },
        metadata: {
            validation_response: {
                code: 200,
                message: 'Success'
            },
            restricted: false,
            collection_size: 1
        },
        values: [
            {
                links: {
                    waitlisted_class__info: {
                        rel: 'self',
                        href: 'https://api.byu.edu/byuapi/students/v2/123456789/waitlisted_classes/Fall2018,C%20S,301R,003',
                        method: 'GET'
                    },
                    modify_credit_hours: {
                        rel: 'modify_credit_hours',
                        href: 'https://api.byu.edu/byuapi/students/v2/123456789/registration_actions',
                        method: 'POST'
                    }
                },
                metadata: {
                    validation_response: {
                        code: 200,
                        message: 'Success'
                    },
                    restricted: false
                },
                byu_id: {
                    value: '123456789',
                    api_type: 'readonly',
                    key: true,
                    description: 'LastName, FirstName'
                },
                year_term: {
                    value: '20185',
                    api_type: 'readonly',
                    key: true,
                    description: 'Fall 2018',
                    long_description: 'Fall Semester 2018'
                },
                curriculum_id: {
                    value: '10314',
                    api_type: 'readonly',
                    key: true
                },
                title_code: {
                    value: '000',
                    api_type: 'readonly',
                    key: true
                },
                teaching_area: {
                    value: 'C S',
                    api_type: 'readonly',
                    description: 'Computer Science'
                },
                course_number: {
                    value: '301R',
                    api_type: 'readonly'
                },
                section_number: {
                    value: '003',
                    api_type: 'readonly',
                    key: true
                },
                term_code: {
                    value: 'S',
                    api_type: 'readonly',
                    description: 'Semester Long'
                },
                class_provider: {
                    value: 'DAY',
                    domain: 'https://api.byu.edu/byuapi/meta/registration/class_providers',
                    api_type: 'readonly'
                },
                instruction_mode: {
                    value: null,
                    api_type: 'readonly',
                    description: null
                },
                percent_classroom_time: {
                    value: null,
                    api_type: 'readonly'
                },
                course_title: {
                    value: 'Topics in Computer Science',
                    api_type: 'related',
                    related_resource: 'https://api.byu.edu/byuapi/courses/v1/Fall2018,C%20S,301R'
                },
                credit_hours: {
                    value: '3.0',
                    api_type: 'readonly'
                },
                end_date: {
                    value: '2018-12-13',
                    api_type: 'readonly'
                },
                final_exam_schedule: {
                    object: {
                        building: {
                            value: 'RB',
                            description: 'Richards Building',
                            api_type: 'related',
                            related_resource: 'https://api.byu.edu/byuapi/classes/v2/Fall2018,C%20S,301R,003/assigned_schedules/FINAL%20EXAM,1',
                            domain: 'https://api.byu.edu/byuapi/meta/classes/buildings'
                        },
                        room: {
                            value: '164',
                            api_type: 'related',
                            related_resource: 'https://api.byu.edu/byuapi/classes/v2/Fall2018,C%20S,301R,003/assigned_schedules/FINAL%20EXAM,1'
                        },
                        days: {
                            value: 'S',
                            api_type: 'related',
                            related_resource: 'https://api.byu.edu/byuapi/classes/v2/Fall2018,C%20S,301R,003/assigned_schedules/FINAL%20EXAM,1'
                        },
                        start_time: {
                            value: '11:00',
                            api_type: 'related',
                            description: '11:00am',
                            related_resource: 'https://api.byu.edu/byuapi/classes/v2/Fall2018,C%20S,301R,003/assigned_schedules/FINAL%20EXAM,1'
                        },
                        end_time: {
                            value: '14:00',
                            api_type: 'related',
                            description: '2:00pm',
                            related_resource: 'https://api.byu.edu/byuapi/classes/v2/Fall2018,C%20S,301R,003/assigned_schedules/FINAL%20EXAM,1'
                        },
                        start_date: {
                            value: '2018-12-15',
                            api_type: 'related',
                            related_resource: 'https://api.byu.edu/byuapi/classes/v2/Fall2018,C%20S,301R,003/assigned_schedules/FINAL%20EXAM,1'
                        },
                        end_date: {
                            value: '2018-12-15',
                            api_type: 'related',
                            related_resource: 'https://api.byu.edu/byuapi/classes/v2/Fall2018,C%20S,301R,003/assigned_schedules/FINAL%20EXAM,1'
                        }
                    },
                    api_type: 'readonly'
                },
                help_section: {
                    value: false,
                    api_type: 'readonly'
                },
                honors_section: {
                    value: false,
                    api_type: 'readonly'
                },
                instructors: {
                    object_array: [
                        {
                            instructor_byu_id: {
                                value: '333333333',
                                api_type: 'related',
                                description: 'Bunny, Bugs',
                                related_resource: 'https://api.byu.edu/byuapi/persons/v3/333333333'
                            },
                            instructor_type: {
                                value: 'PRIMARY',
                                api_type: 'readonly',
                                description: 'Primary Instructor'
                            }
                        },
                        {
                            instructor_byu_id: {
                                value: '555555555',
                                api_type: 'related',
                                description: 'Duck, Daffy',
                                related_resource: 'https://api.byu.edu/byuapi/persons/v3/555555555'
                            },
                            instructor_type: {
                                value: 'TEACHING ASSISTANT',
                                api_type: 'readonly',
                                description: 'Teaching Assistant'
                            }
                        }
                    ],
                    api_type: 'readonly'
                },
                lab_section: {
                    value: false,
                    api_type: 'readonly'
                },
                lms_name: {
                    value: 'Learning Suite',
                    domain: 'https://api.byu.edu/byuapi/meta/registration/lms_names',
                    api_type: 'readonly'
                },
                online_section: {
                    value: false,
                    api_type: 'readonly'
                },
                position_in_queue: {
                    value: 1,
                    api_type: 'system'
                },
                quiz_section: {
                    value: false,
                    api_type: 'readonly'
                },
                reason_skipped: {
                    value: 'Adding ACC 402  will exceed the maximum of 18.0 credit hours allowed for this semester',
                    api_type: 'system'
                },
                requested_by_byu_id: {
                    value: '123456789',
                    api_type: 'system',
                    description: 'LastName, FirstName'
                },
                requested_datetime: {
                    value: '2018-07-04T11:22:33.445Z',
                    api_type: 'system'
                },
                start_date: {
                    value: '2018-09-04',
                    api_type: 'readonly'
                },
                when_taught: {
                    object_array: [
                        {
                            building: {
                                value: 'RB',
                                description: 'Richards Building',
                                api_type: 'related',
                                related_resource: 'https://api.byu.edu/byuapi/classes/v2/Fall2018,C%20S,301R,003/assigned_schedules/CLS,3',
                                domain: 'https://api.byu.edu/byuapi/meta/classes/buildings'
                            },
                            room: {
                                value: '206',
                                api_type: 'related',
                                related_resource: 'https://api.byu.edu/byuapi/classes/v2/Fall2018,C%20S,301R,003/assigned_schedules/CLS,3'
                            },
                            days: {
                                value: 'MW',
                                api_type: 'related',
                                related_resource: 'https://api.byu.edu/byuapi/classes/v2/Fall2018,C%20S,301R,003/assigned_schedules/CLS,3'
                            },
                            start_time: {
                                value: '12:00',
                                api_type: 'related',
                                description: '12:00pm',
                                related_resource: 'https://api.byu.edu/byuapi/classes/v2/Fall2018,C%20S,301R,003/assigned_schedules/CLS,3'
                            },
                            end_time: {
                                value: '12:50',
                                api_type: 'related',
                                description: '12:50pm',
                                related_resource: 'https://api.byu.edu/byuapi/classes/v2/Fall2018,C%20S,301R,003/assigned_schedules/CLS,3'
                            },
                            start_date: {
                                value: '2018-09-04',
                                api_type: 'related',
                                related_resource: 'https://api.byu.edu/byuapi/classes/v2/Fall2018,C%20S,301R,003/assigned_schedules/CLS,3'
                            },
                            end_date: {
                                value: '2018-12-13',
                                api_type: 'related',
                                related_resource: 'https://api.byu.edu/byuapi/classes/v2/Fall2018,C%20S,301R,003/assigned_schedules/CLS,3'
                            }
                        },
                        {
                            building: {
                                value: 'RB',
                                description: 'Richards Building',
                                api_type: 'related',
                                related_resource: 'https://api.byu.edu/byuapi/classes/v2/Fall2018,C%20S,301R,003/assigned_schedules/CLS,2',
                                domain: 'https://api.byu.edu/byuapi/meta/classes/buildings'
                            },
                            room: {
                                value: '164',
                                api_type: 'related',
                                related_resource: 'https://api.byu.edu/byuapi/classes/v2/Fall2018,C%20S,301R,003/assigned_schedules/CLS,2'
                            },
                            days: {
                                value: 'F',
                                api_type: 'related',
                                related_resource: 'https://api.byu.edu/byuapi/classes/v2/Fall2018,C%20S,301R,003/assigned_schedules/CLS,2'
                            },
                            start_time: {
                                value: '12:00',
                                api_type: 'related',
                                description: '12:00pm',
                                related_resource: 'https://api.byu.edu/byuapi/classes/v2/Fall2018,C%20S,301R,003/assigned_schedules/CLS,2'
                            },
                            end_time: {
                                value: '12:50',
                                api_type: 'related',
                                description: '12:50pm',
                                related_resource: 'https://api.byu.edu/byuapi/classes/v2/Fall2018,C%20S,301R,003/assigned_schedules/CLS,2'
                            },
                            start_date: {
                                value: '2018-09-04',
                                api_type: 'related',
                                related_resource: 'https://api.byu.edu/byuapi/classes/v2/Fall2018,C%20S,301R,003/assigned_schedules/CLS,2'
                            },
                            end_date: {
                                value: '2018-12-13',
                                api_type: 'related',
                                related_resource: 'https://api.byu.edu/byuapi/classes/v2/Fall2018,C%20S,301R,003/assigned_schedules/CLS,2'
                            }
                        }
                    ],
                    api_type: 'readonly'
                }
            }
        ]
    }
})()
