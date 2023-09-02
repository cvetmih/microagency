export default function Bubble({className = '', children, ...rest}) {

    return (
        <aside className={`absolute rounded-full text-0 flex bg-gradient-to-b from-white/30 to-white/0 pointer-events-none  ${className}`}>
            <div className="pt-[100%]"/>
            {children}
        </aside>
    )
}