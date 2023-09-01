import Container from "@/components/Container";
import TypoH3 from "@/components/TypoH3";

const features = [
    {
        title: 'Jednoduchá nastavení reklam',
        body: 'Nezkomplikováváme věci. Naše reklamní nastavení je přímé, což zajišťuje, že dostanete to nejlepší bez zmatků.'
    },

    {
        title: 'Kreativní řešení poháněná AI',
        body: 'Využíváme sílu AI k zdokonalování Vašich reklam, které rezonují a konvertují.'
    },

    {
        title: 'Transparentní zprávy',
        body: 'Žádná kosmetika čísel. Představujeme výsledky tak, jak skutečně jsou, abyste mohli činit informovaná rozhodnutí.'
    },
];

export default function Features({className = '', children, ...rest}) {

    return (
        <Container className="p-section">
            <div className="flex">
                {features.map((item, key) => {
                    return (
                        <article key={`FeatureItem: ${key}`}
                                 className="flex-1 flex flex-col items-center text-center"
                        >
                            <header className="mb-6">
                                <TypoH3 Element="h3"
                                        className="max-w-[14ch]"
                                >
                                    {item.title}
                                </TypoH3>
                            </header>
                            <p className="max-w-[30ch]">
                                {item.body}
                            </p>
                        </article>
                    )
                })}
            </div>
        </Container>
    )
}