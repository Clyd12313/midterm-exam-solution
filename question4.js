// Task Management System
class TaskManager {
    constructor() {
      this.tasks = [];
      this.nextId = 1;
    }
  
    // Create
    addTask(name, description) {
      const newTask = {
        id: this.nextId++,
        name: name,
        description: description
      };
      this.tasks.push(newTask);
      return newTask;
    }
  
    // Read
    getAllTasks() {
      return this.tasks;
    }
  
    // Read
    getTaskById(id) {
      return this.tasks.find(task => task.id === id);
    }
  
    // Update
    updateTask(id, updatedName, updatedDescription) {
      const taskIndex = this.tasks.findIndex(task => task.id === id);
      
      if (taskIndex === -1) {
        return null; // error
      }
      
      // Update
      this.tasks[taskIndex].name = updatedName || this.tasks[taskIndex].name;
      this.tasks[taskIndex].description = updatedDescription || this.tasks[taskIndex].description;
      
      return this.tasks[taskIndex];
    }
  
    // Delete
    deleteTask(id) {
      const initialLength = this.tasks.length;
      this.tasks = this.tasks.filter(task => task.id !== id);
      
      return this.tasks.length < initialLength;
    }
  }
  

  const taskManager = new TaskManager();
  
  // Add tasks
  console.log("Adding tasks:");
  console.log(taskManager.addTask("hugas plato", "finish sysarch by sunday"));
  console.log(taskManager.addTask("mangupra", "juice, nutella, pandesal"));
  
  // View tasks
  console.log("\nAll tasks:");
  console.log(taskManager.getAllTasks());
  
  // Get task
  console.log("\nGetting task with ID 1:");
  console.log(taskManager.getTaskById(1));
  
  // Update task
  console.log("\nUpdating task with ID 2:");
  console.log(taskManager.updateTask(2, "mangupra", "way kumpra kay way kwarta"));
  
  // Delete task
  console.log("\nDeleting task with ID 1:");
  console.log(taskManager.deleteTask(1) ? "Task deleted successfully" : "Task not found");
  
  // Verify delete
  console.log("\nRemaining tasks after deletion:");
  console.log(taskManager.getAllTasks());