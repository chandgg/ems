localStorage.clear()

const employees = [
  {
    "id": "E001",
    "email": "e@e.com",
    "password": "123",
    "firstName": "Rajesh",
    "tasks": [
      {
        "task_title": "Prepare Report",
        "task_description": "Prepare the monthly financial report.",
        "task_date": "2025-01-25",
        "categories": ["Finance", "Report"],
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Team Meeting",
        "task_description": "Attend the weekly team meeting.",
        "task_date": "2025-01-26",
        "categories": ["Meeting", "Team"],
        "active": true,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "task_title": "Update Website",
        "task_description": "Update the company website with new content.",
        "task_date": "2025-01-27",
        "categories": ["Web", "Development"],
        "active": false,
        "new_task": true,
        "completed": false,
        "failed": true
      }
    ],
    "taskNo": {
      "active": 2,
      "new_task": 2,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": "E002",
    "email": "e2@e.com",
    "password": "123",
    "firstName": "Priya",
    "tasks": [
      {
        "task_title": "Client Call",
        "task_description": "Discuss the upcoming project with the client.",
        "task_date": "2025-01-23",
        "categories": ["Client", "Call"],
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Update Database",
        "task_description": "Update the internal database with recent data.",
        "task_date": "2025-01-24",
        "categories": ["Database", "Update"],
        "active": true,
        "new_task": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskNo": {
      "active": 2,
      "new_task": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": "E003",
    "email": "employee3@example.com",
    "password": "123",
    "firstName": "Amit",
    "tasks": [
      {
        "task_title": "Bug Fixing",
        "task_description": "Fix the bugs reported in the last sprint.",
        "task_date": "2025-01-23",
        "categories": ["Development", "Bug Fixing"],
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Code Review",
        "task_description": "Review the code submitted by the team.",
        "task_date": "2025-01-24",
        "categories": ["Code", "Review"],
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Client Demo",
        "task_description": "Prepare for the client demo presentation.",
        "task_date": "2025-01-25",
        "categories": ["Presentation", "Client"],
        "active": false,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNo": {
      "active": 2,
      "new_task": 2,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": "E004",
    "email": "employee4@example.com",
    "password": "123",
    "firstName": "Neha",
    "tasks": [
      {
        "task_title": "Marketing Campaign",
        "task_description": "Launch the new marketing campaign for the product.",
        "task_date": "2025-01-28",
        "categories": ["Marketing", "Campaign"],
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Social Media Update",
        "task_description": "Update social media channels with new content.",
        "task_date": "2025-01-30",
        "categories": ["Social Media", "Content"],
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskNo": {
      "active": 1,
      "new_task": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": "E005",
    "email": "employee5@example.com",
    "password": "123",
    "firstName": "Vikram",
    "tasks": [
      {
        "task_title": "Team Training",
        "task_description": "Conduct a team training session on new software.",
        "task_date": "2025-01-25",
        "categories": ["Training", "Team"],
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Research Project",
        "task_description": "Conduct research on new project requirements.",
        "task_date": "2025-01-26",
        "categories": ["Research", "Project"],
        "active": false,
        "new_task": false,
        "completed": false,
        "failed": true
      },
      {
        "task_title": "Prepare Presentation",
        "task_description": "Create a presentation for the upcoming meeting.",
        "task_date": "2025-01-27",
        "categories": ["Presentation", "Meeting"],
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNo": {
      "active": 2,
      "new_task": 2,
      "completed": 0,
      "failed": 1
    }
  }
];

const admin = [
  {
    "id": "A001",
    "email": "admin@example.com",
    "password": "123",
    "firstName": "Ravi"
  }
];

console.log(employees);
console.log(admin);

export const setToLocal = (lsName, lsData) => {
  localStorage.setItem(lsName, lsData);
}

     export const setLocalStorage = ()=>{
        localStorage.setItem('employees',JSON.stringify(employees))
        localStorage.setItem('admin',JSON.stringify(admin))
     } 

     export const getLocalStorage = ()=>{
       const employees = JSON.parse(localStorage.getItem('employees'))
       const admin = JSON.parse(localStorage.getItem('admin'))


        return {employees,admin}
     }