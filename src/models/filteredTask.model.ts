import {IRootObject, ITask} from "../interfaces/filteredTask.interface";

class FilteredTaskModel implements IRootObject{
    tasks: ITask[];
}

export default FilteredTaskModel;