import { h } from "preact"
import { useState, useEffect } from 'preact/hooks';

export default function Clock() {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                weekday: 'short',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
                timeZone: 'Europe/Vienna',
            };
            setTime(now.toLocaleTimeString('en-AT', options) + ' UTC+1');
        };

        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-sm text-gray-500">
            {time}
        </div>
    );
};
