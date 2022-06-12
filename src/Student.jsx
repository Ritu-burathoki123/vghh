import React from "react";
import axios from 'axios';
import UserRow from "./UserRow";
import { useEffect } from "react";

function Student() {
    let [users, setUsers] = React.useState([]);
    let [page, setPage] = React.useState(1);


    useEffect(() => {
        const token = axios.get(`https://randomuser.me/api/?results=5&page=${page}`);

        token.then((response) => {
            console.log("response aa gya response aa gya");
            setUsers(response.data.results);
            console.log(response.data.results);
        });
    }, [page]);


    return (
        <div className="h-full bg-gray-200 ">
            <h1 className="text-9xl">user list</h1>
            <div>
                <button onClick={() => setPage(1)} className="p-2 bg-white rounded-md shadow-lg">1</button>
                <button onClick={() => setPage(2)} className="p-2 ml-3 bg-white rounded-md shadow-lg">2</button>
                <button onClick={() => setPage(3)} className="p-2 ml-3 bg-white rounded-md shadow-lg">3</button>
                <button onClick={() => setPage(4)} className="p-2 ml-3 bg-white rounded-md shadow-lg">4</button>
            </div>
            {users.map((u) => (<UserRow user={u} />))}
        </div>

    );
}

export default Student;