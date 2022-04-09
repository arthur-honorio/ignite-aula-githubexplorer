export default function RepositoryItem (props) {
    return (
        <li>
            <p>{props.repository.name}</p>
            <p>{props.repository.description}</p>
            <a href={props.repository.html_url} target="_blank">Acessar repositório</a>
        </li>
    )
}