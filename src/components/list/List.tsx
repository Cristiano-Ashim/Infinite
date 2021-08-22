import {useState, useEffect} from 'react';
import useFetchTodo from './../../useFetchTodo';
import './listStyles.css';

const ScrollList = () => {

    const todos = useFetchTodo('https://jsonplaceholder.typicode.com/todos');
    const [index, setIndex] = useState(30);
    const handler = () => {
        setIndex(index => index+10);
    }
    document.addEventListener('scroll', () => {
        const loader = document.querySelector("#loader");
        const isLoaderVisible = isInViewport(loader!);
        if (isLoaderVisible) {
            setIndex(index => index+10);
        }
    });
    function isInViewport(el: Element) {
        const rect = el.getBoundingClientRect();
        if (rect.bottom <= window.innerHeight) {
            return true;
        }
    }
    return (
        <div className="scrollListContainer">
            <ul className="list">
                {
                    todos.slice(0, index).map((item:any) => (
                        <li className="item" key={item.id}>
                            {item.title}
                        </li>
                    ))
                }
            </ul>
            <div><p id="loader" onClick={handler} >...Loading</p></div>
            
        </div>
    )
}

export default ScrollList;

