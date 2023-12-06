import { useMatches } from "react-router-dom";


const Breadcrumbs = function(){
    const matches = useMatches();
    const crumbs = matches
                    .filter( match => match.handle?.crumb)
                    .map( match => match.handle.crumb());
    return (
        <ul>
        {
            crumbs.map((crumb, index) => 
                <li key={index}>{crumb}</li>
            )
        }
        </ul>
    );
}

export default Breadcrumbs;

