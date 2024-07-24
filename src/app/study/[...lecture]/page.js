"use client";

export default function Lecture({ params }) {
  return (
    <div>
      <h1>Lecture</h1>
      {params.lecture[0]}
      <br />
      {params.lecture[1]}
      <br />
      {params.lecture[2]}
    </div>
  );
}
