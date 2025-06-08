import { useState } from "react";

type Task = {
  id: number;
  title: string;
  done: boolean;
};

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input) return;
    setTasks([...tasks, { id: Date.now(), title: input, done: false }]);
    setInput("");
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <h1>ToDoリスト</h1>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="新しいタスク"
      />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => handleDelete(task.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
