import Link from "next/link";

export default function Button({
                                   className = '',
                                   theme = 'primary',
                                   size = 'big',
                                   active = false,
                                   href,
                                   children,
                                   ...rest
                               }) {
    const classes = `cursor-pointer group button button-${theme} button-${size} ${active ? 'button-active' : ''} ${className}`;

    if (href) {
        return (
            <Link href={href}
                  className={classes}
                  {...rest}
            >
                <div className="button-fill pointer-events-none group-hover:scale-110 transition-all duration-300"/>
                <div className="relative">
                    {children}
                </div>
            </Link>
        )
    }
    return (
        <button className={classes}
                {...rest}
        >
            {children}
        </button>
    )
}