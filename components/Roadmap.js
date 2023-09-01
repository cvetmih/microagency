import Container from "@/components/Container";
import Button from "@/components/Button";
import TypoH2 from "@/components/TypoH2";
import TypoP1 from "@/components/TypoP1";

const roadmapItems = [
    {
        title: 'Kontaktujte nás',
        icon: 'Ikona telefonu nebo e-mailu.',
        body: 'Zavolejte nám, napište e-mail nebo vyplňte náš kontaktní formulář. Jsme tady, abychom vás vyslechli.'
    },

    {
        title: 'Zahajovací schůzka',
        icon: 'Ikona kalendáře nebo podání ruky.',
        body: 'Naplánujeme schůzku, abychom pochopili vaše potřeby a sladili naše cíle.'
    },

    {
        title: 'Příprava',
        icon: 'Ikona ozubeného kola nebo nářadí.',
        body: 'Společně nastavíme vše potřebné pro úspěšnou kampaň.'
    },

    {
        title: 'Spuštění kampaně',
        icon: 'Ikona rakety nebo tlačítka play.',
        body: 'Během několika dnů je vaše přizpůsobená kampaň spuštěna a zaměřuje se na vaše ideální publikum.'
    },

    {
        title: 'Pravidelné kontroly',
        icon: 'Ikona hodin nebo lupy.',
        body: 'Buďte informováni prostřednictvím týdenních nebo měsíčních přehledů, které zajišťují strategický vývoj reklamy.',
    }
];

export default function Roadmap({className = ''}) {
    return (
        <Container className={`py-section ${className}`}>
            <header className="text-center mb-6">
                <TypoH2 className="max-w-[23ch] mx-auto font-serif">
                    Připraveni na transparentní a efektivní marketing?
                </TypoH2>
            </header>

            <p className="max-w-[48ch] text-center mx-auto">
                Zahájení transparentní marketingové cesty je jednoduché. Zde je náš krok za krokem proces, abyste byli
                vždy v obraze a měli důvěru v náš přístup.
            </p>

            <div className="relative flex flex-col w-full max-w-[800px] mx-auto my-12">
                <div className="absolute top-[8%] left-1/2 w-0 h-[84%] border-[2px] border-dotted"></div>
                {roadmapItems.map((item, key) => {
                    return (
                        <section key={`RoadmapItem: ${key}`}
                                 className={`max-w-[400px] mb-12 last-of-type:mb-0 bg-white p-4 lg:p-6 text-black rounded-xl transition-transform duration-300 will-change-transform mouse-hover:-translate-y-2 ${key % 2 === 0 ? 'self-end md:-mr-6' : 'self-start md:-ml-6'}`}
                        >
                            <header className="mb-3">
                                <TypoP1 Element="h3"
                                        className="font-bold"
                                >
                                    {item.title}
                                </TypoP1>
                            </header>

                            <div className="mb-3 italic">
                                {item.icon}
                            </div>

                            <p>
                                {item.body}
                            </p>

                        </section>
                    )
                })}
            </div>

            <div className="text-center">
                <Button href="#">
                    Začněte svou cestu s námi
                </Button>
            </div>
        </Container>
    )
}