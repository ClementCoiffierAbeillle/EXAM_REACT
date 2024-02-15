import { useState } from "react";

export default function Film(props) {
    let movie = props.data;

    const [isOpen, setIsOpen] = useState(false);

    let url = "focus.html?movie_id=" + movie.id;

    return (
        <article
            key={props.index}

            onClick={() => setIsOpen(!isOpen)}
        >
            
            
        </article>
    )
}