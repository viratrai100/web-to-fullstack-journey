// import type {NextPage} from "next";

// https://jsonplaceholder.typicode.com/todos

async function getAllTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    // cache: "no-cache",
    next: { revalidate: 10 }, // static
  });
  return await response.json();
}

// preload 
export const preloadTodos = () => {
    console.log("Preloading Data");
    void getAllTodos();
};

const TodosPage = async () => {
    // preload();
  const todos = await getAllTodos();
  return (
    <div>
      <h1 className="text-4xl font-bold">Todos</h1>
      {/* <p>{JSON.stringify(todos)}</p> */}
      {/* <pre>{JSON.stringify(todos)}</pre> */}
      <div className="grid grid-cols-3">
        {todos &&
        Array.isArray(todos) &&
        todos.map((todo: any) => (
          <div className="border p-5 shadow-lg rounded-lg" key={todo.id}>
            <h4>{todo.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodosPage;
