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
