import Container from "@/components/Container";
import TypoH2 from "@/components/TypoH2";

export default function Lead({className = '', children, ...rest}) {

    return (
        <Container className="pt-section pb-52">
            <header className="text-center mb-6">
                <TypoH2>
                    S námi pochopíte <span className="text-blue-500">rozdíl</span>.
                </TypoH2>
            </header>

            <p className="max-w-[50ch] text-center mx-auto">
                Ušetříte peníze, energii a co je nejdůležitější, čas! Nastavujeme marketing férově a tak, aby byl
                transparentní, efektivní a dlouhodobě prospěšný pro váš podnik.
            </p>
        </Container>
    )
}