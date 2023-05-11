import "./Button.css";

function Button(props) {
    const { disabled, disableShadow, startIcon, endIcon, variant, size, color, text } = props;
    
    let className = "default-button";

    if (disabled) {
        className += " disabled";
    }

    if (disableShadow) {
        className += " disableShadow";
    }

    switch (variant) {
        case "outline":
            className += " outline";
            break;
        case "text":
            if (disabled) {
                className += " disabledText";
            } else {
                className += " text";
            }
            break;
        default:
            break;
    }

    switch (size) {
        case "sm":
            className += " sm";
            break;
        case "lg":
            className += " lg";
            break;
        default:
            className += " md";
            break;
    }  

    switch (color) {
        case "default":
            className += " default";
            break;
        case "primary":
            className += " primary";
            break;
        case "secondary":
            className += " secondary";
            break;
        case "danger":
            className += " danger";
            break;
        default:
            break;
    }

    let startIconStyle = {
        display: "none"
    }

    let endIconStyle = {
        display: "none"
    }

    if (startIcon) {
        startIconStyle.display = "flex"; 
    }

    if (endIcon) {
        endIconStyle.display = "flex";
    }

    return (
        <div className={className}>
            <img id="start-icon" style={startIconStyle} src={startIcon} />
            <p>
                {text}
            </p>
            <img id="end-icon" style={endIconStyle} src={endIcon} />
        </div>
    );
}

export default Button;
