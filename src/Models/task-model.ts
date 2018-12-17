export class TaskModel {
    public taskId: number;
    public taskDescription: string;
    public priority: number;
    public parentTaskModel: TaskModel|null;
    public startDate: Date;
    public endDate: Date;
    public endTask: boolean;
}
