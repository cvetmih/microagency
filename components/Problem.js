import Container from "@/components/Container";
import TypoH2 from "@/components/TypoH2";

export default function Problem({className = '', children, ...rest}) {

    return (
        <Container className="py-24 lg:py-section">
            <header className="mb-6">
                <TypoH2 className="font-serif">
                    Proč si vybrat nás?
                </TypoH2>
            </header>

            <p className="max-w-[54ch]">
                Ve světě, kde si marketingové agentury často fakturují vysoké částky a výsledky jsou sice dobré, ale né
                natolik přesvědčivé, abyste vydávali desetitisíce za práci, která nebyla potřeba, jsme tu my, abychom
                Vás z toho začarovaného kruhu vysvobodili.
                <br/>
                <br/>
                S 10 lety v oboru jsme si vyladili naše metody na to, co skutečně funguje. Žádné zbytečnosti, žádné
                nepotřebné úkoly. Pouze přímé strategie v rukou umělé inteligence, které skutečně přinášejí výsledky.
                Věříme v transparentnost, férové cenovky a přímou komunikaci.
                <br/>
                <br/>
                <b>
                    Pokud si ceníte upřímnosti a výsledků více než složitého žargonu, jste na správném místě.
                </b>
            </p>
        </Container>
    )
}