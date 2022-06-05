using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ToDoListSQL.Models;
using Task = ToDoListSQL.Models.Task;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ToDoListSQL.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ToDoListController : Controller
    {
        ToDoListContext tdl = new ToDoListContext();

        [HttpGet("ShowAllTasks")]
        public List<Task> GetTasks()
        {
            return tdl.Tasks.ToList();
        }

        [HttpPut("CreateTask")]
        public string CreateTask(Task t)
        {
            tdl.Tasks.Add(t);
            tdl.SaveChanges();
            return $" {t.TaskName} was successfully added to the database";
        }

        [HttpDelete("DeleteTask/{id}")]
        public string DeleteTask(int id)
        {
            Task t = tdl.Tasks.Find(id);
            tdl.Tasks.Remove(t);
            tdl.SaveChanges();

            return $" {t.TaskName} was removed from the database";
        }

        [HttpPost("UpdateTask/{id}")]
        public string UpdateTask(int id, Task updatedTask)
        {
            Task t = tdl.Tasks.Find(id);
            t.TaskName = updatedTask.TaskName;
            t.IsCompleted = updatedTask.IsCompleted;
            tdl.Update(t);
            tdl.SaveChanges();

            return $" {t.TaskName} was updated to {updatedTask.TaskName}";

        }
    }
}

