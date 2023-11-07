export default async function GetUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  if (!res.ok) throw Error("Error while fetching");

  return res.json();
}
