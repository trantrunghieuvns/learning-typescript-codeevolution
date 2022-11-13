import { Name, PersonX } from '../Types' //personX is being ignored here

function Person(props: Name) {
    return (
        <div>
            {`Person: ${props.name.first + ' ' + props.name.last}`}
        </div>
    )
}

export default Person