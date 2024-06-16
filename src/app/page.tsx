"use client";
import {Data, dummy_data} from "@/app/data/data";
import Node from "@/app/components/node";
import {useState} from "react";

export default function Home() {

    const [data, useData] = useState<Data[]>(dummy_data);

    return (
        <main>
            <div className="container">
                <div className="row-container">
                    <button className="btn">Reset</button>
                    <div className="row-container">
                        <label className="text">Difficulty</label>
                        <input className="input" type="number"/>
                    </div>
                </div>

                <div className="row-container">
                    <button className="btn">Node [] Make Tx</button>
                    <button className="btn">Node [] Make Tx</button>
                    <button className="btn">Node [] Make Tx</button>
                </div>

                {
                    dummy_data.map(item => (
                        <Node key={item.hash} data={item}/>
                    ))
                }
            </div>
        </main>
    );
}
