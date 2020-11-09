export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoPostParams {
  userId: number;
  title: string;
  completed: boolean;
}
