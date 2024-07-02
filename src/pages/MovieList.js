import { Card } from "../components";
import { useTitle, useFetch } from "../hooks";

export const MovieList = ({apiPath, title}) => {
    const {data} = useFetch(apiPath);

    useTitle(title)

    return (
        <main>
            <section className="max-w-7xl mx-auto py-6">
                <div className="flex justify-start flex-wrap midScreen:justify-evenly">
                    { data.map((movie) => (
                        < Card key={movie.id} movie={movie} />
                    ))}
                </div>
            </section>
        </main>
    )
}
