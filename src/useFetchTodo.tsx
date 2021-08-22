import {useEffect,useState} from 'react';

const useFetchTodo = (url: string) => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(json => {
            setTodos(json);
        })
    }, []);
    return todos;
}

export default useFetchTodo;