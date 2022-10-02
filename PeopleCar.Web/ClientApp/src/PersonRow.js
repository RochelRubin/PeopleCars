import React from 'react';
import { Link} from 'react-router-dom';


export default function PersonRow({person}){
const {id,firstName,lastName,age,cars}=person;
return(
    <tr>
    <td>{firstName}</td>
    <td>{lastName}</td>
    <td>{age}</td>
    <td>{cars.length}</td>
    <td>
        <Link to={`/addcar/${id}`}>
            <button className='btn btn-success btn-block'>Add Car</button>
        </Link>
    </td>
    <td>
        <Link to={`/deletecars/${id}`}>
            <button className='btn btn-danger btn-block'>Delete Car</button>
        </Link>
    </td>
</tr>

);
}
