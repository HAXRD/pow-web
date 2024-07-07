import axios from "axios";
import {convertToColor, getTextColor} from "@/app/components/utils";

export default function MakeTxBtn({address, hash}: {address: string, hash: string}) {
    const makeTx = async () => {
        try {
            const response = await axios.get(`${address}/makeTx`);
        } catch (error) {
            console.error(error);
        }
    }
    console.log(address, hash);
    return (
        <button className="btn"
                onClick={makeTx}
                style={{
                    backgroundColor: convertToColor(hash),
                    color: getTextColor(hash),
                }}>
            Make Tx on [{hash.substring(0, 6)}]
        </button>
    )
}