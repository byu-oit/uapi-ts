import { UAPI } from '../index'

export namespace StudentsV3API {
    export type Response = UAPI.Lite.Response.Collection<WaitlistedClass>

    export type WaitlistedClass = {
        byu_id: UAPI.Lite.Scalar.String
        year_term: UAPI.Lite.Scalar.String
        curriculum_id: UAPI.Lite.Scalar.String
        title_code: UAPI.Lite.Scalar.String
        teaching_area: UAPI.Lite.Scalar.String
        course_number: UAPI.Lite.Scalar.String
        section_number: UAPI.Lite.Scalar.String
        term_code: UAPI.Lite.Scalar.String
        class_provider: UAPI.Lite.Scalar.String
        instruction_mode: UAPI.Lite.Scalar.String
        percent_classroom_time: UAPI.Lite.Scalar.String
        course_title: UAPI.Lite.Scalar.String
        credit_hours: UAPI.Lite.Scalar.String
        end_date: UAPI.Lite.Scalar.String
        final_exam_schedule: UAPI.Lite.Object<RoomDetails>
        help_section: UAPI.Lite.Scalar.Boolean
        honors_section: UAPI.Lite.Scalar.Boolean
        instructors: UAPI.Lite.ObjectArray<Instructor>
        lab_section: UAPI.Lite.Scalar.Boolean
        lms_name: UAPI.Lite.Scalar.String
        online_section: UAPI.Lite.Scalar.Boolean
        position_in_queue: UAPI.Lite.Scalar.Number
        quiz_section: UAPI.Lite.Scalar.Boolean
        reason_skipped: UAPI.Lite.Scalar.String
        requested_by_byu_id: UAPI.Lite.Scalar.String
        requested_datetime: UAPI.Lite.Scalar.String
        start_date: UAPI.Lite.Scalar.String
        when_taught: UAPI.Lite.ObjectArray<RoomDetails>
    }

    export type RoomDetails = {
        building: UAPI.Lite.Scalar.String
        room: UAPI.Lite.Scalar.String
        days: UAPI.Lite.Scalar.String
        start_time: UAPI.Lite.Scalar.String
        end_time: UAPI.Lite.Scalar.String
        start_date: UAPI.Lite.Scalar.String
        end_date: UAPI.Lite.Scalar.String
    }

    export type Instructor = {
        instructor_byu_id: UAPI.Lite.Scalar.String
        instructor_type: UAPI.Lite.Scalar.String
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
                    building: 'RB',
                    room: '164',
                    days: 'S',
                    start_time: '11:00',
                    end_time: '14:00',
                    start_date: '2018-12-15',
                    end_date: '2018-12-15'
                },
                help_section: false,
                honors_section: false,
                instructors: [
                    {
                        instructor_byu_id: '333333333',
                        instructor_type: 'PRIMARY'
                    },
                    {
                        instructor_byu_id: '555555555',
                        instructor_type: 'TEACHING ASSISTANT'
                    }
                ],
                lab_section: false,
                lms_name: 'Learning Suite',
                online_section: false,
                position_in_queue: 1,
                quiz_section: false,
                reason_skipped: 'Adding class will exceed the maximum',
                requested_by_byu_id: '123456789',
                requested_datetime: '2018-07-04T11:22:33.445Z',
                start_date: '2018-09-04',
                when_taught: [
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
                ]
            }
        ]
    }
})()
