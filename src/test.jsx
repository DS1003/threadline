
import React, { useState, useEffect } from 'react';


function fetchData(setData) {
    useEffect(function () {
        (()=>{
            fetch("https://randomuser.me/api")
            .then((res) => res.json())
            .then((dt) => {
                setData(dt.results);
            })
            .catch(console.error);
        })()
    });
}

function ChangerUser({ change }) {
    return <button onClick={change}>Change User</button>;
}

function DataFetcher() {
    const [data, setData] = useState([]);

    fetchData(setData);

    const itemList = data.map((dt, i) => <li key={i}>{dt.gender}</li>);

    return (
        <>
            <ul>{itemList}</ul>
            <ChangerUser change={() => fetchData(setData)} />
        </>
    );
}

export function App(props) {

    return (
        <div className="App">
            <DataFetcher />
        </div>
    );
}

