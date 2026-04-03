let activities = new Map();

activities.set("Day1 note learning", "completed");
activities.set("Day1 assignments", "in progress");
activities.set("Day1 mcq", "todo");

function countStatus(map) {
    let completed = 0, progress = 0, todo = 0;

    for (let value of map.values()) {
        if (value === "completed") completed++;
        else if (value === "in progress") progress++;
        else if (value === "todo") todo++;
    }

    console.log("Completed:", completed);
    console.log("In Progress:", progress);
    console.log("Todo:", todo);
}

countStatus(activities);