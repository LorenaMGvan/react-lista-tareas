export function Saludos({ title, name= ' Dos' }) {
  console.log()
  return <>
    <h1>{ title} {name}</h1>
  </>
}

export function UserCard({name, amount, edoCivil, address, greet}){
  return(<>
    <h1>{name}</h1>
    <p>{amount}</p>
    <p>{ edoCivil ? 'Casado': 'soltero' }</p>
    <ul>
      <li>City:{address.city}</li>
      <li>Address{address.street}</li>
    </ul>
  </>)
}
