import { useState, useLayoutEffect, useRef } from "react";
import "./Sidebar.css";
import { useLocation, useNavigate } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { SiPolymerproject } from "react-icons/si";
import { AiOutlineGithub } from "react-icons/ai";
import { useLangCtx } from "../../lang/LangContext";

function Sidebar() {
    const [hoverIndex, setHoverIndex] = useState(null);
    const [highlightTop, setHighlightTop] = useState(0);
    const [showHighlight, setShowHighlight] = useState(false);
    const [activeTop, setActiveTop] = useState(0);
    const [showActiveHighlight, setShowActiveHighlight] = useState(false);
    const containerRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    const { lang, setLang } = useLangCtx();

    const items = [
        { type: "icon", element: <TiHome className="icon" />, path: "/" },
        { type: "icon", element: <SiPolymerproject className="icon" />, path: "/projects" },
        { type: "divider" },
        // ปุ่มภาษา: โชว์ "ภาษาที่จะสลับไป"
        { type: "lang", element: <span style={{ fontWeight: 700 }}>{lang === "en" ? "TH" : "EN"}</span> },
        { type: "icon", element: <AiOutlineGithub className="icon" />, href: "https://github.com/klakung122?tab=repositories" }
    ];

    const handleEnter = (idx, e) => {
        const iconHeight = e.currentTarget.offsetHeight;
        const highlightHeight = 56;
        const offset = (iconHeight - highlightHeight) / 2;
        setHighlightTop(e.currentTarget.offsetTop + offset);
        setHoverIndex(idx);
        setShowHighlight(true);
    };

    const handleLeaveSidebar = () => {
        setHoverIndex(null);
        setShowHighlight(false);
    };

    const handleClick = (item) => {
        if (item.type === "lang") {
            setLang(prev => (prev === "th" ? "en" : "th"));
            return;
        }
        if (item.href) {
            window.open(item.href, "_blank", "noopener");
        } else if (item.path && location.pathname !== item.path) {
            navigate(item.path);
        }
    };

    const isActive = (path) => {
        if (!path) return false;
        if (path === "/") return location.pathname === "/";
        return location.pathname.startsWith(path);
    };

    const updateActivePosition = () => {
        if (!containerRef.current) return;
        const wrappers = containerRef.current.querySelectorAll(".icon-wrapper[data-nav='true']");
        const navItems = items.filter((i) => i.type === "icon" && i.path);
        const activeIdx = navItems.findIndex((it) => isActive(it.path));
        if (activeIdx >= 0 && wrappers[activeIdx]) {
            const top = wrappers[activeIdx].offsetTop;
            setActiveTop(top);
            setShowActiveHighlight(true);
            sessionStorage.setItem("sb_active_top", String(top));
        } else {
            setShowActiveHighlight(false);
        }
    };

    useLayoutEffect(() => {
        const last = sessionStorage.getItem("sb_active_top");
        if (last) {
            setActiveTop(parseFloat(last));
            setShowActiveHighlight(true);
            requestAnimationFrame(() => {
                containerRef.current && containerRef.current.offsetHeight;
                requestAnimationFrame(() => updateActivePosition());
            });
        } else {
            updateActivePosition();
        }
        const onResize = () => updateActivePosition();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [location.pathname]);

    return (
        <div className="sidebar" onMouseLeave={handleLeaveSidebar} ref={containerRef}>
            <span className={`active-highlight ${showActiveHighlight ? "visible" : ""}`} style={{ top: activeTop }} aria-hidden />
            <span className={`hover-highlight ${showHighlight ? "visible" : ""}`} style={{ top: highlightTop }} aria-hidden />
            {items.map((item, idx) =>
                item.type === "divider" ? (
                    <div key={idx} className="divider-con"><div className="divider" /></div>
                ) : (
                    <div
                        key={idx}
                        role="button"
                        tabIndex={0}
                        data-nav={item.type === "icon" && !!item.path}
                        className={`icon-wrapper ${item.type === "icon" && isActive(item.path) ? "active" : ""} ${hoverIndex === idx ? "highlight" : ""
                            } ${item.type === "lang" ? "lang" : ""}`}
                        onMouseEnter={(e) => handleEnter(idx, e)}
                        onMouseLeave={() => setHoverIndex(null)}
                        onClick={() => handleClick(item)}
                        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleClick(item)}
                        aria-label={item.type === "lang" ? `toggle language (${lang.toUpperCase()})` : undefined}
                        title={item.type === "lang" ? `Language: ${lang.toUpperCase()} (click to switch)` : undefined}
                    >
                        {item.element}
                        {item.type === "icon" && <span className="dot" aria-hidden />}
                    </div>
                )
            )}
        </div>
    );
}

export default Sidebar;