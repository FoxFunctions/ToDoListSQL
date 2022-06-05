using System;
using System.Collections.Generic;

namespace ToDoListSQL.Models
{
    public partial class Task
    {
        public int Id { get; set; }
        public string? TaskName { get; set; }
        public bool? IsCompleted { get; set; }
    }
}
