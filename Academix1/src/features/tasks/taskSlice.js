import { createSlice } from "@reduxjs/toolkit";
import { mockTasks } from "../../utils/mockTasks";

const initialDraft = {
    title: "",
    description: "",
    instructions: "",

    subject: "",
    department: "",
    semester: "",

    assignmentMode: "Department",

    assignedTeacher: "",

    assignedStudents: [],

    priority: "Medium",

    status: "Draft",

    dueDate: "",

    maxMarks: 100,

    submissionType: "File",

    allowLateSubmission: false,

    tags: [],

    attachments: [],
};

const initialState = {
    tasks: mockTasks,

    selectedTask: null,

    filters: {
        search: "",
        status: "All",
        priority: "All",
        department: "All",
        sort: "latest",
    },

    isDrawerOpen: false,

    wizard: {
        currentStep: 1,

        editingTaskId: null,

        completedSteps: [],

        draft: { ...initialDraft },
    },
};

const taskSlice = createSlice({
    name: "tasks",

    initialState,

    reducers: {
        // =========================
        // Task CRUD
        // =========================

        addTask(state, action) {
            state.tasks.unshift(action.payload);
        },

        updateTask(state, action) {
            const index = state.tasks.findIndex(
                (task) => task.id === action.payload.id,
            );

            if (index !== -1) {
                state.tasks[index] = action.payload;
            }
        },

        deleteTask(state, action) {
            state.tasks = state.tasks.filter(
                (task) => task.id !== action.payload,
            );
        },

        // =========================
        // Selected Task
        // =========================

        selectTask(state, action) {
            state.selectedTask = action.payload;
        },

        clearSelectedTask(state) {
            state.selectedTask = null;
        },

        // =========================
        // Filters
        // =========================

        setTaskFilters(state, action) {
            state.filters = {
                ...state.filters,
                ...action.payload,
            };
        },

        // =========================
        // Drawer
        // =========================

        openDrawer(state) {
            state.isDrawerOpen = true;
        },

        closeDrawer(state) {
            state.isDrawerOpen = false;
        },

        // =========================
        // Wizard Navigation
        // =========================

        nextStep(state) {
            if (state.wizard.currentStep < 4) {
                state.wizard.currentStep += 1;
            }
        },

        previousStep(state) {
            if (state.wizard.currentStep > 1) {
                state.wizard.currentStep -= 1;
            }
        },

        // =========================
        // Wizard Draft
        // =========================

        setDraft(state, action) {
            state.wizard.draft = {
                ...state.wizard.draft,
                ...action.payload,
            };
        },

        resetWizard(state) {
            state.wizard.currentStep = 1;
            state.wizard.draft = { ...initialDraft };
        },
    },
});

export const {
    // CRUD
    addTask,
    updateTask,
    deleteTask,

    // Selection
    selectTask,
    clearSelectedTask,

    // Filters
    setTaskFilters,

    // Drawer
    openDrawer,
    closeDrawer,

    // Wizard
    nextStep,
    previousStep,
    setDraft,
    resetWizard,
} = taskSlice.actions;

export default taskSlice.reducer;
