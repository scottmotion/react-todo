export default function NewTodo({ title }) {
  return (
    <div>
      <input type="text" className="w-full" value={title} />
    </div>
  );
}
