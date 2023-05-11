import "./NavBar.css";

function NavBar( {id} ) {
    return (
        <div id={id}>
            <p id="logo"><span>Dev</span>challenges.io</p>

            <ul>
                <li>Colors</li>
                <li>Typography</li>
                <li>Spaces</li>
                <li>Buttons</li>
                <li><strong>Inputs</strong></li>
                <li>Grid</li>
            </ul>
        </div>
    );
}

export default NavBar;