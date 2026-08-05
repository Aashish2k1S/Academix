import { useFormContext } from "react-hook-form";

import AssignmentMode from "../assignment/AssignmentMode";
import DepartmentAssignment from "../assignment/DepartmentAssignment";
import SemesterAssignment from "../assignment/SemesterAssignment";
import TeacherAssignment from "../assignment/TeacherAssignment";
import StudentAssignment from "../assignment/StudentAssignment";

const AssignmentStep = () => {
    const { watch } = useFormContext();

    const assignmentMode = watch("assignmentMode");

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold">Assignment</h2>

                <p className="mt-2 opacity-70">
                    Choose how this task should be assigned.
                </p>
            </div>

            <AssignmentMode />

            {assignmentMode === "Department" && <DepartmentAssignment />}

            {assignmentMode === "Semester" && <SemesterAssignment />}

            {assignmentMode === "Teacher" && <TeacherAssignment />}

            {assignmentMode === "Students" && <StudentAssignment />}
        </div>
    );
};

export default AssignmentStep;
