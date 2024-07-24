import Link from "next/link";

export default function StudentList() {
  const names = ["Nihal", "Pritam", "Samrat", "Aditya"];
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {names.map((name) => (
          <li key={name}>
            <Link href={`/studentlist/${name.toLowerCase()}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
