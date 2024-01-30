import { useState } from "react";
import { Row } from "../types";

const sampleHolderSize = [4, 6];

export default function Form() {
    const [seedData, setSeedData] = useState<Row[]>([]);

    return <>
        <h2>Title area</h2>

        <form>
            <h3>form area for defaults</h3>
            <input type="radio">
                <option>T</option>
                <option>T</option>
            </input>
        </form>

        <>
            <h3>actual table</h3>
        </>
    </>
}

