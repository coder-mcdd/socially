/** @format */

async function TasksPage() {
  const response = await fetch("http://localhost:3000/api/tasks", {
    cache: "no-store",
  });
  const tasks = await response.json();

  console.log("tasks:", tasks);

  return (
    <div>
      {tasks.map((task: { id: string; title: string }) => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  );
}
export default TasksPage;
