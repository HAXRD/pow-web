export const dataSrcs = [
    "http://localhost:18080",
    "http://localhost:18081",
    "http://localhost:18082"
]

export const dummy_data = [
    {
        difficulty: 3,
        nodeAddress: 'localhost:8090',
        hash: '101010',
        miners: [
            {
                hash: 'FFFFFF',
            },
            {
                hash: '00FF00',
            }
        ],
        blockchain: [
            {
                hash: '000001',
                proposer: '101010',
                nonce: 102391,
                timestamp: Date.now(),
                txs: [
                    'TxHash#1',
                    'TxHash#2',
                    'TxHash#3',
                    'TxHash#4',
                    'TxHash#5',
                    'TxHash#6',
                    'TxHash#7',
                    'TxHash#8',
                ],
            },
            {
                hash: '000002',
                proposer: '101010',
                nonce: 19239123,
                timestamp: Date.now(),
                txs: [
                    'TxHash#3',
                    'TxHash#4',
                ],
            },
            {
                hash: '000003',
                proposer: '101010',
                nonce: 123129,
                timestamp: Date.now(),
                txs: [
                    'TxHash#5',
                ],
            },
        ],
    }
]

export interface Block {
    hash: string,
    proposer: string,
    nonce: number,
    timestamp: string,
    txs: Array<string>,
}

export interface Miner {
    hash: string
}

export interface Data {
    difficulty: number,
    nodeAddress: string,
    hash: string,
    miners: Array<Miner>,
    blockchain: Array<Block>,
}