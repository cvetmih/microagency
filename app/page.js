import Header from "@/components/Header";
import Problem from "@/components/Problem";
import Lead from "@/components/Lead";
import Features from "@/components/Features";
import Roadmap from "@/components/Roadmap";
import Bubble from "@/components/Bubble";
import Container from "@/components/Container";

export default function Home() {
    return (
        <div className="relative w-screen overflow-hidden">
            <Container className="absolute top-0 left-1/2 h-full  -translate-x-1/2 pointer-events-none">
                <Bubble className="w-[1000px] top-[10%] left-1/2"/>
                <Bubble className="w-[900px] top-[60%] -left-[60%] rotate-[-12deg]"/>
            </Container>

            <Header/>
            <Problem/>
            <Features/>
            <Roadmap/>
            <Lead/>
        </div>
    )
}
