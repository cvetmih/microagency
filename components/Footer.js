import Container from "@/components/Container";

export default function Footer({className = '', children, ...rest}) {

    return (
        <footer {...rest}>
            <Container className="flex justify-between">
                <div>
                    &copy; 2023 Microagency
                </div>
                <div>
                    ICO
                </div>
            </Container>
        </footer>
    )
}