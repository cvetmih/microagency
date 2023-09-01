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
        <Container className="py-section">
            <div className="flex flex-col md:flex-row">
                {features.map((item, key) => {
                    return (
                        <article key={`FeatureItem: ${key}`}
                                 className="flex-1 flex flex-col items-center text-center mb-16 md:mb-0"
                        >
                            <header className="mb-3">
                                <TypoH3 Element="h3"
                                        className="max-w-[16ch] font-semibold leading-[1.1] lg:leading-[1.1]"
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