import TaskList from './components/TaskList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="p-4 text-center text-2xl font-bold">HMCTS Task Tracker</header>
      <TaskList />
    </div>
  );
}

export default App;
