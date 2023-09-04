import Container from "@/components/Container";
import TypoH1 from "@/components/TypoH1";
import TypoH2 from "@/components/TypoH2";
import Button from "@/components/Button";

export default function Header({className = '', children, ...rest}) {

    return (
        <Container className="pt-16 lg:py-section">
            <header className="mb-6">
                <TypoH1 className="max-w-[18ch] leading-[1.2] lg:leading-[1.2]">
                    Unaveni z předražených agentur?
                </TypoH1>
            </header>

            <TypoH2 className="max-w-[38ch] mb-12 leading-[1.25] lg:leading-[1.25]">
                Zažijte cenově dostupný a přesto efektivní marketing. Zjednodušený desetiletými zkušenostmi a pokročilou
                umělou inteligencí.
            </TypoH2>

            <ul className="mb-12 list-disc list-pushed list-outside">
                <li className="mb-2">Zjednodušené nastavení reklamy pro Facebook, Instagram a Youtube</li>
                <li className="mb-2">Řešení spolutvořené umělou inteligencí</li>
                <li>Transparentní použitelné výsledky</li>
            </ul>

            <Button href="#">
                Konzultace zdarma!
            </Button>
        </Container>
    )
}