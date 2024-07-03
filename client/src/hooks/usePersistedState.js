import { useState } from "react";

export default function usePersistedState(key, value) {
    const [state, setState] = useState(() => {
        const persistedState = localStorage.getItem(key)
    });

    console.log(state);
}