import { Card } from "../components";
import { useSearchParams } from "react-router-dom";
import { useTitle, useFetch } from "../hooks";

export const Search = ({apiPath}) => {
  const [ searchParams ] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const {data : movies} = useFetch(apiPath, queryTerm);

  useTitle(`Search result for ${queryTerm}`);

  return (
    <main>
      <section>
        <p className="text-3xl py-3 mx-3 text-slate-700 dark:text-slate-100">
          { movies.length === 0 ? `No results found for '${queryTerm}'` : `Search Results for '${queryTerm}'` }
        </p>
      </section>
        <section className="max-w-7xl mx-auto py-6">
            <div className="flex justify-start flex-wrap">
                { movies.map((movie) => (
                    < Card key={movie.id} movie={movie} />
                ))}
            </div>
        </section>
    </main>
)

}
