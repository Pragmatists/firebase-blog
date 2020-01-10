import React, {useEffect, useState} from "react";

export function ServerTime() {
    const [time, setTime] = useState();
    useEffect(() => {
        fetch("/server-time")
            .then(resp => resp.json())
            .then(json => setTime(json.serverTime))
    }, []);
    return <div>
        Server time: {time}
    </div>
}
