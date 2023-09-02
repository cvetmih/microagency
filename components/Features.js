import Container from "@/components/Container";
import TypoH3 from "@/components/TypoH3";

const features = [
    {
        title: 'Jednoduchá nastavení reklam',
        body: 'Nezkomplikováváme věci. Naše reklamní nastavení je přímé, což zajišťuje, že dostanete to nejlepší bez zmatků.',
        character: <div>&#10035;</div>
    },

    {
        title: 'Kreativní řešení poháněná AI',
        body: 'Využíváme sílu AI k zdokonalování Vašich reklam, které rezonují a konvertují.',
        character: <div>&#10043;</div>
    },

    {
        title: 'Transparentní zprávy',
        body: 'Žádná kosmetika čísel. Představujeme výsledky tak, jak skutečně jsou, abyste mohli činit informovaná rozhodnutí.',
        character: <div>&#10044;</div>
    },
];

export default function Features({className = '', children, ...rest}) {

    return (
        <Container className="py-24 lg:py-section border-y border-white/10">
            <div className="flex flex-col lg:flex-row max-lg:max-w-[600px] mx-auto">
                {features.map((item, key) => {
                    return (
                        <article key={`FeatureItem: ${key}`}
                                 className="relative lg:flex-1 flex flex-col items-center text-center mb-16 last-of-type:mb-0 lg:mb-0"
                        >
                            <div className="text-6xl font-serif mb-4 opacity-20 leading-none">{item.character}</div>
                            <header className="mb-6">
                                <TypoH3 Element="h3"
                                        className="max-w-[16ch] font-semibold leading-[1.1] lg:leading-[1.1]"
                                >
                                    {item.title}
                                </TypoH3>
                            </header>
                            <p className="max-w-[34ch]">
                                {item.body}
                            </p>
                        </article>
                    )
                })}
            </div>
        </Container>
    )
}