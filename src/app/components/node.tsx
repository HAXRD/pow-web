// @ts-ignore
import {Block, Data, Miner} from "@/app/data/data";
import {useEffect, useState} from "react";
import {convertToColor, formatTimestamp, getTextColor} from "@/app/components/utils";

export default function Node({data}: { data: Data }) {
    const [activeBlock, setActiveBlock] = useState<Block | null>(data.blockchain[0])
    const handleClickActiveBlock = (block: Block) => {
        setActiveBlock(block);
    };
    useEffect(() => {
        if (!data.blockchain.some(block => block.hash == activeBlock?.hash)) {
            setActiveBlock(data.blockchain[0]);
        }
    }, [data]);
    return (
        <div className="container">
            <div className="row-container">
                <div className="text" style={{
                    backgroundColor: convertToColor(data.hash),
                    color: getTextColor(data.hash)
                }}>
                    Node [{data.hash.substring(0, 6)}]
                </div>
                <div className="row-container no-gap">
                    <label className="text bg-blue-400">Num of Miners</label>
                    <button className="btn">-</button>
                    <div className="text">{data.miners.length}</div>
                    <button className="btn">+</button>
                </div>
            </div>

            {
                data.miners.length > 0 && (
                    <div className="row-container">
                        {
                            data.miners.map((item, index) => (
                                <Miner key={index} index={index} miner={item} difficulty={data.difficulty}/>
                            ))
                        }
                    </div>
                )
            }

            <div className="col-container no-gap">
                <div className="row-container overflow-x-auto">
                    <label className="text">Blockchain</label>
                    {
                        data.blockchain.map(block => (
                            <button key={block.hash} className="btn"
                                    onClick={() => handleClickActiveBlock(block)}
                                    style={{
                                        backgroundColor: convertToColor(block.proposer),
                                        color: getTextColor(block.proposer),
                                        borderColor: activeBlock && activeBlock.hash == block.hash ? "yellow":"white",
                                    }}
                            >
                                Block [{block.hash.substring(0, data.difficulty + 4)}]
                            </button>
                        ))
                    }
                </div>
                {
                    activeBlock != null && (
                        <div className="row-container p-2"
                            style={{
                                backgroundColor: convertToColor(activeBlock.proposer),
                                color: getTextColor(activeBlock.proposer),
                            }}
                        >
                            <div className="col-container">
                                <div className="row-container no-gap">
                                    <label className="text">Block</label>
                                    <div className="text">[{activeBlock.hash.substring(0, data.difficulty + 4)}]</div>
                                </div>
                                <div className="row-container no-gap">
                                    <label className="text">Proposer</label>
                                    <div className="text">[{activeBlock.proposer.substring(0, 6)}]</div>
                                </div>
                                <div className="row-container no-gap">
                                    <label className="text">Nonce</label>
                                    <div className="text">[{activeBlock.nonce}]</div>
                                </div>
                                <div className="row-container no-gap">
                                    <label className="text">Timestamp</label>
                                    <div className="text">[{formatTimestamp(activeBlock.timestamp)}]</div>
                                </div>
                            </div>

                            <div className="tx-container">
                                {
                                    activeBlock.txs.map((tx, index) => (
                                        <div key={tx}>
                                            <div className="text">#{index + 1}</div>
                                            <div className="text">{tx}</div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

function Miner({index, difficulty, miner}: { index: number, difficulty: number, miner: Miner }) {
    return (
        <div className="col-container no-gap">
            <label className="text">Miner #[{index + 1}]</label>
            <div className="text">{miner.hash.substring(0, difficulty + 4)}</div>
        </div>
    )
}