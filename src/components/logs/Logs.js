import React, { useEffect, useState } from 'react';

import Preloader from '../layout/Preloader';
import LogItem from './LogItem';

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
        // A loader will be shown to the user if fetching the data takes some time in case
        return <Preloader />
    }

    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h3 className="center">System Logs</h3>
            </li>
            {!loading && logs.length === 0 ? (<p className="center">No Logs to Show...</p>) : (
                logs.map(log => {
                    return <LogItem log={log} key={log.id} />
                })
            )}
        </ul>
    )
}

export default Logs;
