import { UAPI } from './index'

export namespace StudentsV3API {
    export type Response = UAPI.Response.Collection<WaitlistedClass>

    export interface WaitlistedClass extends UAPI.Response.Simple {
        links: UAPI.Links
        metadata: UAPI.Metadata.Simple
        byu_id: UAPI.Scalar.String
        year_term: UAPI.Scalar.String
        curriculum_id: UAPI.Scalar.String
        title_code: UAPI.Scalar.String
        teaching_area: UAPI.Scalar.String
        course_number: UAPI.Scalar.String
        section_number: UAPI.Scalar.String
        term_code: UAPI.Scalar.String
        class_provider: UAPI.Scalar.String
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

    export interface RoomDetails extends UAPI.PropertyDictionary {
        building: UAPI.Scalar.String
        room: UAPI.Scalar.String
        days: UAPI.Scalar.String
        start_time: UAPI.Scalar.String
        end_time: UAPI.Scalar.String
        start_date: UAPI.Scalar.String
        end_date: UAPI.Scalar.String
    }

    export interface Instructor extends UAPI.PropertyDictionary {
        instructor_byu_id: UAPI.Scalar.String
        instructor_type: UAPI.Scalar.String
    }
}
