// @ts-ignore
import {Block, Data, Miner} from "@/app/data/data";
import {useState} from "react";

export default function Node({data}: { data: Data }) {
    const [activeBlock, setActiveBlock] = useState<Block | null>(data.blockchain[0])

    return (
        <div className="container">
            <div className="row-container">
                <div className="text">Node [{data.hash}]</div>
                <div className="row-container">
                    <label className="text">Num of Miners</label>
                    <button className="btn-adj">-</button>
                    <div className="text">{data.miners.length}</div>
                    <button className="btn-adj">+</button>
                </div>
            </div>

            {
                data.miners.length > 0 && (
                    <div className="row-container">
                        {
                            data.miners.map((item, index) => (
                                <Miner key={index} index={index} miner={item}/>
                            ))
                        }
                    </div>
                )
            }

            <div className="col-container">
                <div className="row-container">
                    <label className="text">Blockchain</label>
                    {
                        data.blockchain.map(block => (
                            <button key={block.hash} className="btn">Block [{block.hash}]</button>
                        ))
                    }
                </div>
                {
                    activeBlock != null && (
                        <div className="col-container">
                            <div className="row-container">
                                <div className="col-container">
                                    <label className="text">Block</label>
                                    <div className="text">[{activeBlock.hash}]</div>
                                </div>
                                <div className="col-container">
                                    <label className="text">Proposer</label>
                                    <div className="text">[{activeBlock.proposer}]</div>
                                </div>
                                <div className="col-container">

                                    <label className="text">Nonce</label>
                                    <div className="text">[{activeBlock.nonce}]</div>
                                </div>
                                <div className="col-container">

                                    <label className="text">Timestamp</label>
                                    <div className="text">[{activeBlock.timestamp}]</div>
                                </div>
                            </div>

                            <div className="row-container">
                                {
                                    activeBlock.txs.map(tx => (
                                        <div key={tx} className="text">{tx}</div>
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

function Miner({index, miner}: { index: number, miner: Miner }) {
    return (
        <div className="col-container">
            <label className="text">Miner #[{index}]</label>
            <div className="text">{miner.hash}</div>
        </div>
    )
}