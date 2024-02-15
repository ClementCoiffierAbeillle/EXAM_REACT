import { useState } from "react";

export default function Film(props) {
    let movie = props.data;

    const [isOpen, setIsOpen] = useState(false);

   // let url = "focus.html?movie_id=" + movie.id;

    return (

        <a href="focus.html?movie_id=850165">
        <img src="https://image.tmdb.org/t/p/w500/nfs7DCYhgrEIgxKYbITHTzKsggf.jpg"/>
        <div className="score">
          <p>70%</p>
        </div>
        <h5>The Iron Claw</h5>
        <p>21/12/2023</p>
        </a>
            

    )
}