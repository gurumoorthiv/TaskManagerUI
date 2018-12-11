import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'taskSearch'
})

export class TaskSearchPipe implements PipeTransform{
    transform(items: any[], nameSearch:string, parentTaskSearch:string, priorityFromSearch:Number, priorityToSearch:Number, startDateSearch:string, endDateSearch:string){
        if(items && items.length && ( nameSearch || parentTaskSearch || priorityFromSearch || priorityToSearch || startDateSearch || endDateSearch) )
        {
               
                return items.filter(item => {
                    
                    if(nameSearch && item.TaskName.toLowerCase().startsWith(nameSearch.toLowerCase())){
                        return true;
                    }
                    
                    if(parentTaskSearch && item.ParentTaskName && item.ParentTaskName.toLowerCase().startsWith(parentTaskSearch.toLowerCase())){
                        
                        return true;
                    }

                    if(item.Priority >= priorityFromSearch && item.Priority <= priorityToSearch){
                        
                        return true;
                    }

                    if(startDateSearch && item.StartDate.startsWith(startDateSearch)){
                        return true;
                    }

                    if(endDateSearch && item.EndDate.startsWith(endDateSearch)){
                        return true;
                    }
                    return false;
                })
        }
        else
        {
            return items;
        }
    }
}