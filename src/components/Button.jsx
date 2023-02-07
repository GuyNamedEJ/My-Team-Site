import className from 'classnames'

export default function Button({
    children,
    primaryLight,
    primaryDark,
    ...rest
}){
    const classes = className(rest.className,'flex items-center justify-center px-8 py-3 border rounded-full border-2 text-center', {
        'border-white-500 text-white' : primaryLight,
        'border-sac-state-green' : primaryDark, 
    })

    return <button {...rest}className={classes}>
        {children}
    </button>
}