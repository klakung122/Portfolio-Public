import { useState, useLayoutEffect, useRef } from "react";
import './Sidebar.css';
import { useLocation, useNavigate } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { SiPolymerproject } from "react-icons/si";
import { AiOutlineGithub } from "react-icons/ai";

function Sidebar() {
    const [hoverIndex, setHoverIndex] = useState(null);
    const [highlightTop, setHighlightTop] = useState(0);
    const [showHighlight, setShowHighlight] = useState(false);
    const [activeTop, setActiveTop] = useState(0);
    const [showActiveHighlight, setShowActiveHighlight] = useState(false);
    const containerRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    const items = [
        { type: "icon", element: <TiHome className="icon" />, path: "/" },
        { type: "icon", element: <SiPolymerproject className="icon" />, path: "/projects" },
        { type: "divider" },
        { type: "icon", element: <AiOutlineGithub className="icon" />, href: "https://github.com/klakung122?tab=repositories" },
    ];

    const handleEnter = (idx, e) => {
        const iconHeight = e.currentTarget.offsetHeight; // 56px
        const highlightHeight = 56; // ให้ขนาดเท่า icon
        const offset = (iconHeight - highlightHeight) / 2; // ตรงกลางพอดี
        setHighlightTop(e.currentTarget.offsetTop + offset);
        setHoverIndex(idx);
        setShowHighlight(true);
    };

    const handleLeaveSidebar = () => {
        setHoverIndex(null);
        setShowHighlight(false);
    };

    const handleClick = (item) => {
        if (item.href) {
            window.open(item.href, "_blank", "noopener"); // เปิดลิงก์ใหม่
        } else if (item.path && location.pathname !== item.path) {
            navigate(item.path);
        }
    };

    const isActive = (path) => {
        if (!path) return false;
        // exact สำหรับ root
        if (path === "/") return location.pathname === "/";
        // อื่น ๆ ให้เช็คขึ้นต้น แต่กันเคส "/" ด้วย
        return location.pathname.startsWith(path);
    };

    const updateActivePosition = () => {
        if (!containerRef.current) return;
        const wrappers = containerRef.current.querySelectorAll(".icon-wrapper");
        const iconItems = items.filter(i => i.type === "icon");
        const activeIdx = iconItems.findIndex(it => isActive(it.path));
        if (activeIdx >= 0 && wrappers[activeIdx]) {
            const top = wrappers[activeIdx].offsetTop;
            setActiveTop(top);
            setShowActiveHighlight(true);
            sessionStorage.setItem('sb_active_top', String(top)); // บันทึกไว้ใช้ตอน mount ใหม่
        } else {
            setShowActiveHighlight(false);
        }
    };

    useLayoutEffect(() => {
        const last = sessionStorage.getItem('sb_active_top');
        if (last) {
            setActiveTop(parseFloat(last));
            setShowActiveHighlight(true);
            requestAnimationFrame(() => {
                // force reflow หน่อยกัน batch
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
            <span
                className={`active-highlight ${showActiveHighlight ? "visible" : ""}`}
                style={{ top: activeTop }}
                aria-hidden
            />
            <span
                className={`hover-highlight ${showHighlight ? "visible" : ""}`}
                style={{ top: highlightTop }}
                aria-hidden
            />
            {items.map((item, idx) =>
                item.type === "divider" ? (
                    <div key={idx} className="divider-con">
                        <div className="divider" />
                    </div>
                ) : (
                    <div
                        key={idx}
                        role="button"
                        tabIndex={0}
                        className={`icon-wrapper ${isActive(item.path) ? "active" : ""} ${hoverIndex === idx ? "highlight" : ""}`}
                        onMouseEnter={(e) => handleEnter(idx, e)}
                        onMouseLeave={() => setHoverIndex(null)}
                        onClick={() => handleClick(item)}
                        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleClick(item)}
                    >
                        {item.element}
                        <span className="dot" aria-hidden />
                    </div>
                )
            )}
        </div>
    )
}

export default Sidebar