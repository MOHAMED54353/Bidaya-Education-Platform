import { useNavigate } from "react-router-dom";

const navItems = [
    {
        title: "المراحل الدراسية",
        action: () =>
            document.getElementById("grades")?.scrollIntoView({
                behavior: "smooth",
            }),
    },
    {
        title: "الكورسات",
        action: () =>
            document.getElementById("courses")?.scrollIntoView({
                behavior: "smooth",
            }),
    },
    {
        title: "تواصل معنا",
        action: () =>
            document.getElementById("footer")?.scrollIntoView({
                behavior: "smooth",
            }),
    },
];

const Navbar = ({ minimal = false }) => {
    const navigate = useNavigate();

    return (
        <nav
            className="navbar navbar-expand-lg sticky-top"
            dir="rtl"
            style={{
                height: "75px",
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(12px)",
                borderBottom: "1px solid rgba(0,0,0,0.06)",
                position: "sticky",
                top: 0,
                zIndex: 1000,
            }}
        >
            <div
                className="d-flex align-items-center justify-content-between w-100"
                style={{ padding: "0 70px" }}
            >
                <a
                    className="navbar-brand d-flex align-items-center gap-2 text-decoration-none"
                    href="#"
                    onClick={(e) => { e.preventDefault(); navigate("/"); }}
                    style={{ transition: "0.3s" }}
                >
                    <div
                        style={{
                            width: "42px",
                            height: "42px",
                            borderRadius: "12px",
                            background: "linear-gradient(135deg, #4F9CF9, #6C63FF)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 8px 20px rgba(79,156,249,0.3)",
                        }}
                    >
                        <i
                            className="ti ti-school"
                            style={{ color: "#fff", fontSize: "24px" }}
                        />
                    </div>

                    <span
                        style={{
                            fontWeight: 600,
                            fontSize: "22px",
                            color: "#1a1a1a",
                            letterSpacing: "0.5px",
                        }}
                    >
                        بَداية
                    </span>
                </a>

                {!minimal && (
                    <>
                        <ul className="navbar-nav mx-auto gap-4 mb-0">
                            {navItems.map((item, i) => (
                                <li className="nav-item" key={i}>
                                    <button
                                        onClick={item.action}
                                        className="nav-link position-relative border-0 bg-transparent"
                                        style={{
                                            fontSize: "16px",
                                            color: "#555",
                                            transition: "0.3s",
                                            cursor: "pointer",
                                        }}
                                    >
                                        {item.title}

                                        <span
                                            style={{
                                                position: "absolute",
                                                bottom: "-4px",
                                                left: "50%",
                                                transform: "translateX(-50%) scaleX(0)",
                                                width: "70%",
                                                height: "2px",
                                                background: "#4F9CF9",
                                                borderRadius: "10px",
                                                transition: "0.3s",
                                            }}
                                            className="nav-underline"
                                        />
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={() => navigate("/login")}
                            type="button"
                            style={{
                                background: "linear-gradient(135deg, #4F9CF9, #6C63FF)",
                                color: "#fff",
                                border: "none",
                                borderRadius: "10px",
                                padding: "10px 22px",
                                fontSize: "15px",
                                fontWeight: 600,
                                boxShadow: "0 10px 25px rgba(79,156,249,0.25)",
                                transition: "0.3s",
                            }}
                            onMouseOver={(e) => (e.target.style.transform = "translateY(-2px)")}
                            onMouseOut={(e) => (e.target.style.transform = "translateY(0)")}
                        >
                            تسجيل الدخول
                        </button>
                    </>
                )}
            </div>

            {!minimal && (
                <style>{`
                    .nav-link:hover {
                        color: #4F9CF9 !important;
                        transform: translateY(-2px);
                    }
                    .nav-link:hover .nav-underline {
                        transform: translateX(-50%) scaleX(1);
                    }
                `}</style>
            )}
        </nav>
    );
};

export default Navbar;