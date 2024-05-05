export type ButtonType = {
    title: string
    onClick?: ()=>void
    disabled?: boolean
}

export const Button = ( props: ButtonType) => {

    return (
        <button
        type='button'
        onClick={props.onClick}
        disabled={props.disabled || false}
      >
    {props.title}
      </button>
    )
}