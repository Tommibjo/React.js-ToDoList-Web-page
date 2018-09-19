import React from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
    var nimi = prompt("Nimesi?", "");
    return (
        <div>
            Terve {nimi} !
        </div>
    )
}



ReactDOM.render(<App />, document.getElementById('root'));
