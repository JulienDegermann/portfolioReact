import './styles.css'

export default function Button ({text, id, className, onClick}: ButtonProps) {
    return (
        <button
            id={id}
            className={className}
            onClick={onClick ? onClick : undefined}
        >
            {text}
        </button>
    )
}

interface ButtonProps {
    text: string,
    id?: string,
    className?: string,
    onClick?: void
}