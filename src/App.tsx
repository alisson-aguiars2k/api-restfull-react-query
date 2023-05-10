import { useFetch } from "./hooks/useFetch";

type Repository = {
  full_name: string;
  description: string;
};

function App() {
  const { data: repositories, isFetching } = useFetch<Repository[]>(
    "https://api.github.com/users/alisson-aguiars2k/repos?per_page=100"
  );

  return (
    <main>
      <ul>
        { isFetching && <h1>Carrecando...</h1>}
        {repositories?.map((repo) => {
          return (
            <li key={repo.full_name}>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default App;
