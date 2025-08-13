import { useMemo } from "react";
import { useLangCtx } from "./LangContext";
import en from "./texts/en.json";
import th from "./texts/th.json";

const bundles = { en, th };

export default function useTexts() {
    const { lang } = useLangCtx();
    const dict = bundles[lang] || bundles.en;

    const t = useMemo(() => {
        const get = (path) => {
            const parts = path.split(".");
            let cur = dict;
            for (const p of parts) {
                if (cur && Object.prototype.hasOwnProperty.call(cur, p)) {
                    cur = cur[p];
                } else {
                    return path; // fallback แสดง key ให้เห็นชัดว่าหาย
                }
            }
            return typeof cur === "string" ? cur : path;
        };
        return get;
    }, [dict]);

    return t;
}