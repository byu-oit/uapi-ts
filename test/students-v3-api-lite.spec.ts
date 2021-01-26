import { UAPI } from '../index'

export namespace StudentsV3API {
    export type Response = UAPI.Response.Collection<WaitlistedClass>

    export type WaitlistedClass = {
        byu_id: UAPI.Scalar.Type
        year_term: UAPI.Scalar.Type
        curriculum_id: UAPI.Scalar.Type
        title_code: UAPI.Scalar.Type
        teaching_area: UAPI.Scalar.Type
        course_number: UAPI.Scalar.Type
        section_number: UAPI.Scalar.Type
        term_code: UAPI.Scalar.Type
        class_provider: UAPI.Scalar.Type
        instruction_mode: UAPI.Scalar.Type
        percent_classroom_time: UAPI.Scalar.Type
        course_title: UAPI.Scalar.Type
        credit_hours: UAPI.Scalar.Type
        end_date: UAPI.Scalar.Type
        final_exam_schedule: UAPI.Object<RoomDetails>
        help_section: UAPI.Scalar.Type
        honors_section: UAPI.Scalar.Type
        instructors: UAPI.ObjectArray<Instructor>
        lab_section: UAPI.Scalar.Type
        lms_name: UAPI.Scalar.Type
        online_section: UAPI.Scalar.Type
        position_in_queue: UAPI.Scalar.Type
        quiz_section: UAPI.Scalar.Type
        reason_skipped: UAPI.Scalar.Type
        requested_by_byu_id: UAPI.Scalar.Type
        requested_datetime: UAPI.Scalar.Type
        start_date: UAPI.Scalar.Type
        when_taught: UAPI.ObjectArray<RoomDetails>
    }

    export type RoomDetails = {
        building: UAPI.Scalar.Type
        room: UAPI.Scalar.Type
        days: UAPI.Scalar.Type
        start_time: UAPI.Scalar.Type
        end_time: UAPI.Scalar.Type
        start_date: UAPI.Scalar.Type
        end_date: UAPI.Scalar.Type
    }

    export type Instructor = {
        instructor_byu_id: UAPI.Scalar.Type
        instructor_type: UAPI.Scalar.Type
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
                byu_id: '123456789',
                year_term: '20185',
                curriculum_id: '10314',
                title_code: '000',
                teaching_area: 'C S',
                course_number: '301R',
                section_number: '003',
                term_code: 'S',
                class_provider: 'DAY',
                instruction_mode: null,
                percent_classroom_time: null,
                course_title: 'Topics in Computer Science',
                credit_hours: '3.0',
                end_date: '2018-12-13',
                final_exam_schedule: {
                    object: {
                        building: 'RB',
                        room: '164',
                        days: 'S',
                        start_time: '11:00',
                        end_time: '14:00',
                        start_date: '2018-12-15',
                        end_date: '2018-12-15'
                    },
                    api_type: UAPI.ApiType.READONLY
                },
                help_section: false,
                honors_section: false,
                instructors: {
                    object_array: [
                        {
                            instructor_byu_id: '333333333',
                            instructor_type: 'PRIMARY'
                        },
                        {
                            instructor_byu_id: '555555555',
                            instructor_type: 'TEACHING ASSISTANT'
                        }
                    ],
                    api_type: UAPI.ApiType.READONLY
                },
                lab_section: false,
                lms_name: 'Learning Suite',
                online_section: false,
                position_in_queue: 1,
                quiz_section: false,
                reason_skipped: 'Adding class will exceed the maximum',
                requested_by_byu_id: '123456789',
                requested_datetime: '2018-07-04T11:22:33.445Z',
                start_date: '2018-09-04',
                when_taught: {
                    object_array: [
                        {
                            building: 'RB',
                            room: '206',
                            days: 'MW',
                            start_time: '12:00',
                            end_time: '12:50',
                            start_date: '2018-09-04',
                            end_date: '2018-12-13'
                        },
                        {
                            building: 'RB',
                            room: '164',
                            days: 'F',
                            start_time: '12:00',
                            end_time: '12:50',
                            start_date: '2018-09-04',
                            end_date: '2018-12-13'
                        }
                    ],
                    api_type: UAPI.ApiType.READONLY
                }
            }
        ]
    }
})()
