import React, { useEffect, useState } from 'react'

const Logs = () => {
    useEffect(() => {
        getLogs()
    }, []);

    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    const getLogs = async () => {
        setLoading(true);
        const res = await fetch('/logs');
        const data = await res.json();

        setLogs(data);
        setLoading(false);
    }

    if (loading) {
        return <h2>Loading....</h2>
    }

    return (
        <ul className="collection-with-header">
            <li className="collection-header">
                <h3 className="center">System Logs</h3>
            </li>
            {!loading && logs.length === 0 ? (<p className="center">No Logs to Show...</p>) : (
                logs.map(log => {
                    return <li>{log.message}</li>
                })
            )}
        </ul>
    )
}

export default Logs;
