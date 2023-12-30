import { sql } from '@vercel/postgres';

interface Resource {
    id: String,
    ressource_type_id: String,
    resource_type: String,
    name: String,
    slots: Number
}

export default async function Resources() {
    const data = await sql`
    SELECT
                 r.*
                 ,T.description AS "resource_type"
    FROM 
                resource AS R
        JOIN
                resourcetype AS T on T.id = R.resource_type_id
    `
    const resources = data.rows
    const types = new Set(resources.map((r) => r.resource_type))
    const drivers = resources.filter(r => r.resource_type == "Driver")
    const constructors = resources.filter(r=>r.resource_type == "Team")
    const engines = resources.filter(r=>r.resource_type=="Engine Supplier")
    return (
        <>
            <h1> Resources </h1>
            <h2> Drivers</h2>
            <ul>
                {drivers.map(d => <li>{d.resource_type} - {d.name}</li>)}
            </ul>
            <h2> Constructors</h2>
            <ul>
                {constructors.map(c => <li>{c.resource_type} - {c.name}</li>)}
            </ul>
            <h2> Engines</h2>
            <ul>
                {engines.map(e => <li>{e.resource_type} - {e.name}</li>)}
            </ul>
        </>
    )
}