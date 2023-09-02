import Container from "@/components/Container";
import Button from "@/components/Button";
import TypoH2 from "@/components/TypoH2";
import TypoP1 from "@/components/TypoP1";
import SvgContact from "@/svg/SvgContact";
import SvgCoffee from "@/svg/SvgCoffee";
import SvgTools from "@/svg/SvgTools";
import SvgRocket from "@/svg/SvgRocket";
import SvgXray from "@/svg/SvgXray";
import SvgQuestion from "@/svg/SvgQuestion";

const roadmapItems = [
    {
        title: 'Kontaktujte nás',
        icon: 'contact',
        body: 'Zavolejte nám, napište e-mail nebo vyplňte náš kontaktní formulář. Jsme tady, abychom vás vyslechli.'
    },

    {
        title: 'Zahajovací schůzka',
        icon: 'coffee',
        body: 'Naplánujeme schůzku, abychom pochopili vaše potřeby a sladili naše cíle.'
    },

    {
        title: 'Příprava',
        icon: 'tools',
        body: 'Společně nastavíme vše potřebné pro úspěšnou kampaň.'
    },

    {
        title: 'Spuštění kampaně',
        icon: 'rocket',
        body: 'Během několika dnů je vaše přizpůsobená kampaň spuštěna a zaměřuje se na vaše ideální publikum.'
    },

    {
        title: 'Pravidelné kontroly',
        icon: 'xray',
        body: 'Buďte informováni prostřednictvím týdenních nebo měsíčních přehledů, které zajišťují strategický vývoj reklamy.',
    }
];

function Icon({icon, ...rest}) {
    switch (icon) {
        case 'contact':
            return <SvgQuestion {...rest}/>;
        case 'coffee':
            return <SvgCoffee {...rest}/>;
        case 'tools':
            return <SvgTools {...rest}/>;
        case 'rocket':
            return <SvgRocket {...rest}/>;
        case 'xray':
            return <SvgXray {...rest}/>;
        default:
            return `Not found: ${icon}`;
    }
}

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

            <div className="relative flex flex-col items-center w-full max-w-[800px] mx-auto my-12">
                <div className="absolute top-[8%] left-1/2 w-0 h-[84%] border-[2px] border-dashed opacity-50"></div>
                {roadmapItems.map((item, key) => {
                    return (
                        <section key={`RoadmapItem: ${key}`}
                                 className={`relative max-w-[400px] mb-12 last-of-type:mb-0 p-4 md:p-6 max-md:bg-white max-md:text-black max-md:rounded-xl ${key % 2 === 0 ? 'md:self-end md:-mr-6' : 'md:self-start md:-ml-6'}`}
                        >
                            <div className="mb-3">
                                <Icon icon={item.icon} width={24}/>
                            </div>

                            <header className="mb-3">
                                <TypoP1 Element="h3"
                                        className="font-bold"
                                >
                                    {item.title}
                                </TypoP1>
                            </header>


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