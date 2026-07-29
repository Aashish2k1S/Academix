export const mockTasks = [
    {
        id: crypto.randomUUID(),

        title: "React Dashboard Assignment",

        description:
            "Build an admin dashboard using React and Redux Toolkit.",

        subject: "React",

        department: "Computer Science",

        semester: 5,

        assignedBy: "Admin",

        assignedTeacher: "Sarah Johnson",

        assignedStudents: [
            "Rahul Sharma",
            "Ananya Roy",
            "Arjun Patel",
        ],

        assignmentMode: "Semester",

        priority: "High",

        status: "Assigned",

        dueDate: "2026-08-12",

        createdAt: new Date().toISOString(),

        updatedAt: new Date().toISOString(),

        attachments: [],

        comments: [],
    },
];
