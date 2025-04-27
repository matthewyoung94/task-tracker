import TaskList from "../components/TaskList";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-6">HMCTS Task Tracker</h1>
      <TaskList />
    </div>
  );
}
