import { useState, useEffect } from "react";
import Header from "../header"
import type { Denuncia } from "../../types";
import CardResult from "../../components/cardResults";
import { DenunciaAPI } from "../../api/denuncia";

function SearchPage() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<Denuncia[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (query.length > 0) {
                searchBackend(query);
            } else {
                setResults([]);
            }
        }, 500);

        return () => clearTimeout(timeout);
    }, [query]);


    async function searchBackend(text: string) {
        try {
            setLoading(true);

            const data: Denuncia[] = await DenunciaAPI.buscar(text);

            setResults(data);
        } catch (error) {
            console.error("Erro ao buscar denúncias:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <main>
            <Header />

            <section className="search-input-area">
                <input
                    type="text"
                    placeholder="Digite a chave Pix..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </section>

            <section className="search-results">

                {loading && <p>Carregando...</p>}

                {!loading && query.length > 0 && results.length === 0 && (
                    <p>Nenhuma denúncia encontrada.</p>
                )}

                {!loading &&
                    results.map((denuncia) => (
                        <CardResult key={denuncia.id} data={denuncia} />
                    ))}
            </section>
        </main>
    );
}

export default SearchPage;
