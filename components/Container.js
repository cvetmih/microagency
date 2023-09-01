export default function Container({className = '', children, ...rest}) {

    return (
        <section
            className={`w-full max-w-[1260px] px-5 lg:px-10 mx-auto ${className}`}
            {...rest}
        >
            {children}
        </section>
    )
}