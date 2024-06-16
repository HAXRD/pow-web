export const dummy_data = [
    {
        nodeAddress: 'localhost:8090',
        hash: 'NodeHash#1',
        miners: [
            {
                hash: 'BlockHash#1',
            }
        ],
        blockchain: [
            {
                hash: 'BlockHash#1',
                proposer: 'NodeHash#1',
                nonce: 102391,
                timestamp: Date.now(),
                txs: [
                    'TxHash#1',
                    'TxHash#2',
                ],
            },
        ],
    }
]

export interface Block {
    hash: string,
    proposer: string,
    nonce: number,
    timestamp: number,
    txs: Array<string>,
}

export interface Miner {
    hash: string
}

export interface Data {
    nodeAddress: string,
    hash: string,
    miners: Array<Miner>,
    blockchain: Array<Block>,
}