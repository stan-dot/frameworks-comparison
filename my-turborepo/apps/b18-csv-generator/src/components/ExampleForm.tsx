import { useState } from "react";

export default function ExampleForm( ) {
    const [seedData, setSeedData] = useState<string>('test');

    return <>
        <h2>Title area</h2>

        <form>
            <h3>form area for defaults</h3>
            <select value={seedData} onChange={e => setSeedData(e.target.value)}>
                <option value={'r'}>r</option>
                <option value={'T'}>T</option>
                <option value={'T'}>T</option>
            </select>
        </form>

        <>
            <h3>actual table</h3>
        </>
    </>
}

