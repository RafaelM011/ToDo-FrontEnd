export type Todo = {
    id: number;
    status: "Completed" | "Pending";
    description: string;  
}

export type Todos = Todo[]