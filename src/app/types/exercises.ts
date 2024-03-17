export interface List {
    id: string,
    name: string,
    description?: string,
    exercises?: Array<Exercise>
}

export interface Exercise {
    name: string,
    force: string,
    level: string,
    mechanic: string,
    equipment: string,
    primaryMuscles: string[],
    secondaryMuscles: [],
    instructions: string[],
    category: string,
    images: string[],
    id: string
}

export interface Sets {
    listId: string,
    exerciseId: string,
    logs: Array<Reps>,
    date: Date,
    id: string,
}

export interface Reps {
    weight: number,
    reps: number,
    date: Date
}