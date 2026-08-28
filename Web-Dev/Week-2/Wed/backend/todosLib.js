let todosArray=[];
let nextId=1;

function addOne(task,completed,dueDate) {
  if(!task || completed===undefined || !dueDate){
    return("Missing required task information");
  }
  const newTask = {
    id:nextId++,
    task,
    completed,
    dueDate,
  };
  todosArray.push(newTask);
  return newTask;
}


let res1 = addOne("Groceries","false","2024-06-15")
let res2=addOne("Honda","true","2024-06-20")
let res3=addOne("Ford","false","2024-06-25")
console.log(res1)
console.log(res2)
console.log(res3)


function getAll() {
  return todosArray;
}

// console.log("getAll called:",getAll());


function findById(id) {
    const numericId = Number(id); // Converts the ID to a number
    const task = todosArray.find(item => item.id === numericId); // Finds the task with the matching ID
    return task || false; // Returns the task or false if not found
}
// console.log("findById called:",findById(2));

function updateOneById(id, updatedData) {
    const task = findById(id);
    if (task) {
        // Update properties only if they are provided in updatedData
        if (updatedData.task) task.task = updatedData.task;
      if (updatedData.completed !== undefined)
             task.completed = updatedData.completed;
        if (updatedData.dueDate) task.dueDate = updatedData.dueDate;
        return task; // Returns the updated task object
    }
    return false; // Returns false if the task with the provided ID is not found
}
// console.log("updateOneById called:",updateOneById(2, { task: "Updated task= Suzuki" }));


function deleteOneById(id) {
    const task = findById(id);
    if (task) {
        const initialLength = todosArray.length;
        todosArray = todosArray.filter(task => task.id !== Number(id)); // Filters out the task with the matching ID
        return todosArray.length < initialLength; // Returns true if the array length decreased, indicating successful deletion
    }
    return false; // Returns false if the task was not found
}
// console.log("deleteOneById called:",deleteOneById(2));

if (require.main === module) {
    // Add tasks
    let result = addOne("groceries", "false", "2024-06-15");
    console.log(result);
    result = addOne("dentist appointment", "true", "2024-06-20");
    console.log(result);

    console.log("getAll called:", getAll());

    console.log("findById called:", findById(1));

    console.log("updateOneById called:", updateOneById(1, { dueDate: "2024-06-25", completed: "true" }));
    console.log("findById called after item updated:", findById(1));

    console.log("deleteOneById called:", deleteOneById(1));
    console.log("findById called after item deleted:", findById(1));
}
const Car = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = Car;