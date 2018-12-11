export class TaskModel {
    public taskId: number;
    public taskDescription: string;
    public priority: number;
    public parentId: number|null;
    public startDate: Date;
    public endDate: Date;
    public endTask: boolean;
}
