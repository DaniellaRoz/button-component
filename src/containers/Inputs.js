import "./Inputs.css";

import Button from "../components/Button";

function Inputs({ id }) {
    return (
        <main id={id}>
            <h1>Buttons</h1>

            <div>
                <p>&lt;Button /&gt;</p>
                <Button text="default" color="default" size="md" />
            </div>

            <br />

            <div>
                <p>&lt;Button variant="outline" /&gt;</p>
                <Button text="default" variant="outline" size="md" />
            </div>

            <br />

            <div>
                <p>&lt;Button variant="text" /&gt;</p>
                <Button text="default" variant="text" size="md" />
            </div>

            <br />

            <div>
                <p>&lt;Button disableShadow /&gt;</p>
                <Button text="default" disableShadow color="primary" />
            </div>

            <br />

            <div>
                <p>&lt;Button disabled /&gt;</p>
                <Button text="default" size="md" disabled />
            </div>
            <div>
                <p>&lt;Button variant="text" disabled /&gt;</p>
                <Button text="default" variant="text" size="md" disabled />
            </div>

            <br />

            <div>
                <p>&lt;Button startIcon="local_grocery_store" /&gt;</p>
                <Button text="default" startIcon="local_grocery_store_white_18dp.svg" color="primary" size="md" />
            </div>
            <div>
                <p>&lt;Button endIcon="local_grocery_store" /&gt;</p>
                <Button text="default" endIcon="local_grocery_store_white_18dp.svg" color="primary" size="md" />
            </div>

            <br />

            <div>
                <p>&lt;Button size="sm" /&gt;</p>
                <Button text="default" color="primary" size="sm" />
            </div>
            <div>
                <p>&lt;Button size="md" /&gt;</p>
                <Button text="default" color="primary" size="md" />
            </div>
            <div>
                <p>&lt;Button size="lg" /&gt;</p>
                <Button text="default" color="primary" size="lg" />
            </div>

            <br />

            <div>
                <p>&lt;Button color="default" /&gt;</p>
                <Button text="default" color="default" size="md" />
            </div>
            <div>
                <p>&lt;Button color="primary" /&gt;</p>
                <Button text="default" color="primary" size="md" />
            </div>
            <div>
                <p>&lt;Button color="secondary" /&gt;</p>
                <Button text="secondary" color="secondary" size="md" />
            </div>
            <div>
                <p>&lt;Button color="danger" /&gt;</p>
                <Button text="danger" color="danger" size="md" />
            </div>
        
            <footer>
                <p>Icons: <a href="https://material.io/resources/icons/?style=round">https://material.io/resources/icons/?style=round</a></p>
                <p id="creator">created by <a href="https://github.com/DaniellaRoz">username</a> - devChallenges.io</p>
            </footer>
        </main>
    );
}

export default Inputs;