export interface Todo {
  UUID: string;
  ProjectName: string;
  Item: string;
  Description: string;
  DeadLine: string;
  Account: string;
  Status: string;
}

export enum TodoStatus {
  Unfinished = "0",
  Finished = "1",
}

export interface NewTodo {
  item: string;
  description: string;
  deadLine: string;
  projectId: string;
}

export interface ProjectOption {
  label: string;
  value: string;
}
