import { useState, useEffect } from 'react';

function useTime(apiData, key) {
    const [time, setTime] = useState(null);

    useEffect(() => {
        if (apiData && apiData.sys && apiData.sys[key]) {
            const timestamp = apiData.sys[key];
            const date = new Date(timestamp * 1000);
            const formattedTime = formatTime(date);
            setTime(formattedTime);
        } else {
            setTime(null);
        }
    }, [apiData, key]);

    function formatTime(date) {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    return time;
}

export function useSunriseTime(apiData) {
    return useTime(apiData, 'sunrise');
}

export function useMoonriseTime(apiData) {
    return useTime(apiData, 'sunset');
}
