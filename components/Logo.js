export default function Logo({className = 'text-3xl', children, ...rest}) {

    return (
        <div className={`relative inline-flex font-serif ${className}`}>
            <div className="relative">
                Microagency<span
                className="text-yellow-400 font-bold">.</span>
            </div>
        </div>
    )
}