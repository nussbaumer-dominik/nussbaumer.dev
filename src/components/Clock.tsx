import {createSignal, onCleanup, onMount} from "solid-js";

export default function Clock() {
    const [time, setTime] = createSignal('');

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

    onMount(() => {
        updateClock();
        const interval = setInterval(updateClock, 1000);
        onCleanup(() => clearInterval(interval));
    });

    return <div class="text-sm text-gray-500">{time()}</div>;
}
