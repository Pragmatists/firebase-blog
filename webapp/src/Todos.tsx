import React, {FormEvent, useEffect, useState} from "react";
import "firebase/firestore";
import firebase from "firebase/app";

interface Todo {
    id: string;
    name: string;
}

const firestore = firebase.firestore();

export function Todos(props: { userId: string }) {
    const {userId} = props;
    const [items, setItems] = useState<Todo[]>([]);

    useEffect(() => {
            return firestore.collection(userId)
                .orderBy('name')
                .onSnapshot(snapshot => {
                    setItems(snapshot.docs.map(doc => ({
                        id: doc.id,
                        name: doc.data().name,
                    })));
                })
        },
        [userId]
    );

    function add(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.target as any;
        const name = form.elements.name.value;
        form.reset();
        firestore.collection(userId).add({name});
    }

    return <div>
        <form onSubmit={add}>
            <input name="name"/>
        </form>
        <ul>
            {items.map(item =>
                <li key={item.id}
                    onClick={() =>
                        firestore.collection(userId).doc(item.id).delete()
                    }>
                    {item.name}
                </li>
            )}
        </ul>
    </div>
}
