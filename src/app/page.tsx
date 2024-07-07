"use client";
import {Data, dataSrcs} from "@/app/data/data";
import Node from "@/app/components/node";
import {useEffect, useState} from "react";

import axios from "axios";
import MakeTxBtn from "@/app/components/make_tx_btn";

export default function Home() {

    const [data, setData] = useState<Data[]>([]);
    const [difficulty, setDifficulty] = useState<number>(1);
    const fetchData = async () => {
        try {
            let newData = [];
            for (let i = 0; i < dataSrcs.length; i++) {
                const response = await axios.get<Data>(`${dataSrcs[i]}/queryNodeInfo`);
                newData.push(response.data);
            }
            setData(newData);
            setDifficulty(newData[0].difficulty);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }

    useEffect(() => {
        fetchData(); // init fetch
        const interval = setInterval(fetchData, 500);
        return () => clearInterval(interval)
    }, []);
    // console.log(data)

    const handleReset = async () => {
        try {
            let result = [];
            for (let i = 0; i < dataSrcs.length; i++) {
                const response = await axios.get<Data>(`${dataSrcs[i]}/reset`);
                result.push(response.data);
            }
            // console.log(result)
        } catch (error) {
            console.error('Error resetting: ', error);
            alert("Error occurred while resetting, try resetting again");
        }
        alert("Reset successfully!");
    }

    return (
        <main>
            <div className="container">
                <div className="row-container">
                    <button className="btn bg-red-400"
                            onClick={handleReset}>
                        Reset
                    </button>
                    <div className="row-container no-gap">
                        <label className="text bg-blue-400">Difficulty</label>
                        <div className="text">{difficulty}</div>
                    </div>
                    {
                        data.map(item => (
                            <MakeTxBtn key={item.hash}
                                       address={item.nodeAddress}
                                       hash={item.hash}/>
                        ))
                    }
                </div>
            </div>

            {
                data.length > 0 &&
                data.map(item => (
                    <Node key={item.hash} data={item}/>
                ))
            }
        </main>
    );
}
