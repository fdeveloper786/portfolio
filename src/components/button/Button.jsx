function Button({text="",btnType="",link=""}) {
    return (
        <>
              <a href={link} target="_blank" rel="noreferrer" className={`btn ${btnType}`}>{text}</a>
        </>
    )
}

export default Button
