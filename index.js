#! /usr/bin/env node
import inquirer from "inquirer";
let todo_list = [];
let while_condition = true;
let main = async () => {
    while (while_condition === true) {
        let optionList = await inquirer.prompt([
            {
                type: "list",
                name: "userChoice",
                message: "Please select one option from the choices below: ",
                choices: ["Add Task", "Remove Task", "Update Task", "View Todo-List", "Exit"]
            }
        ]);
        if (optionList.userChoice === "Add Task") {
            await addTask();
        }
        else if (optionList.userChoice === "Remove Task") {
            await removeTask();
        }
        else if (optionList.userChoice === "Update Task") {
            await UpdateTask();
        }
        else if (optionList.userChoice === "View Todo-List") {
            await viewTask();
        }
        else if (optionList.userChoice === "Exit") {
            while_condition = false;
        }
    }
};
//     Function to addTask.
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task :"
        }
    ]);
    todo_list.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in Todo-List`);
};
//   Function to view all Todo-List Tasks.
let viewTask = () => {
    console.log("\n Your Todo.List: \n");
    todo_list.forEach((task, index) => {
        console.log(` ${index} : ${task}`);
    });
};
//   Function to delete a task from the list.
let removeTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the index no of the task you want to delete",
        }
    ]);
    let deletedTask = todo_list.splice(taskIndex.index);
    console.log(`\n ${deletedTask} This task is been deleted successfuly from your Todo-List!!`);
};
//  Function to update a Task.
let UpdateTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the index no you want to update :"
        },
        {
            name: "new_task",
            type: "input",
            message: "Now Enter new task name :",
        }
    ]);
    todo_list[update_task_index.index] = update_task_index.new_task;
    console.log(` \n Task at index no. ${update_task_index.index} updated successfully [for updated list check "View Todo-List.]`);
};
main();
