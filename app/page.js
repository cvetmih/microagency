import Header from "@/components/Header";
import Problem from "@/components/Problem";
import Lead from "@/components/Lead";
import Features from "@/components/Features";
import Roadmap from "@/components/Roadmap";

export default function Home() {
    return (
        <div>
            <Header/>
            <Problem/>
            <Features/>
            <Roadmap/>
            <Lead/>
        </div>
    )
}
