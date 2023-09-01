import Container from "@/components/Container";

const testimonials = [
    {
        name: 'Petr Novák',
        body: 'Tato agentura zjednodušila naše online reklamy. Férové cenové stanovení, upřímná služba a skutečné výsledky. Osvěžující změna v marketingovém světě.'
    },
    {
        name: 'Petr Novák',
        body: 'Tato agentura zjednodušila naše online reklamy. Férové cenové stanovení, upřímná služba a skutečné výsledky. Osvěžující změna v marketingovém světě.'
    },
    {
        name: 'Petr Novák',
        body: 'Tato agentura zjednodušila naše online reklamy. Férové cenové stanovení, upřímná služba a skutečné výsledky. Osvěžující změna v marketingovém světě.'
    },
    {
        name: 'Petr Novák',
        body: 'Tato agentura zjednodušila naše online reklamy. Férové cenové stanovení, upřímná služba a skutečné výsledky. Osvěžující změna v marketingovém světě.'
    },
    {
        name: 'Petr Novák',
        body: 'Tato agentura zjednodušila naše online reklamy. Férové cenové stanovení, upřímná služba a skutečné výsledky. Osvěžující změna v marketingovém světě.'
    },
    {
        name: 'Petr Novák',
        body: 'Tato agentura zjednodušila naše online reklamy. Férové cenové stanovení, upřímná služba a skutečné výsledky. Osvěžující změna v marketingovém světě.'
    }
];

export default function Testimonials({className = '', children, ...rest}) {
    return (
        <Container>
            <header>
                <h2>
                    Co říkají naši klienti
                </h2>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((item, key) => {
                    return (
                        <article key={`Testimonial: ${key}`}>
                            <div className="w-48 h-48 rounded-full bg-white/50"></div>
                            <header>
                                <h3>{item.name}</h3>
                            </header>
                            <p>
                                {item.body}
                            </p>
                        </article>
                    )
                })}
            </div>
        </Container>
    )
}