import axios from "axios";
import {convertToColor, getTextColor} from "@/app/components/utils";

export default function MakeTxBtn({address, hash}: {address: string, hash: string}) {
    const makeTx = async () => {
        try {
            await axios.get(`${address}/makeTx`);
        } catch (error) {
            console.error(error);
        }
    }
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