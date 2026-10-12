const videos = [
    {
        title: "الجمع بالعشرات",
        subject: "رياضيات",
        subjectBg: "#EBF5FF",
        subjectColor: "#185FA5",
        thumbBg: "#EBF5FF",
        badgeColor: "#4F9CF9",
        grade: "الصف الثاني",
        duration: "١٢:٣٤",
        isNew: true,
    },
    {
        title: "حروف المد والتنوين",
        subject: "لغة عربية",
        subjectBg: "#EAF3DE",
        subjectColor: "#3B6D11",
        thumbBg: "#EAF3DE",
        badgeColor: "#3B6D11",
        grade: "الصف الأول",
        duration: "٠٩:١٥",
        isNew: true,
    },
    {
        title: "دورة المياه في الطبيعة",
        subject: "علوم",
        subjectBg: "#FFF7E6",
        subjectColor: "#854F0B",
        thumbBg: "#FFF7E6",
        badgeColor: "#854F0B",
        grade: "الصف الثالث",
        duration: "١٥:٠٠",
        isNew: true,
    },
    {
        title: "قواعد الإملاء — همزة الوصل والقطع",
        subject: "لغة عربية",
        subjectBg: "#EEEDFE",
        subjectColor: "#534AB7",
        thumbBg: "#EEEDFE",
        badgeColor: "#534AB7",
        grade: "الصف الرابع",
        duration: "٠٧:٤٥",
        isNew: false,
    },
    {
        title: "الكسور الاعتيادية — المقدمة",
        subject: "رياضيات",
        subjectBg: "#FBEAF0",
        subjectColor: "#993556",
        thumbBg: "#FBEAF0",
        badgeColor: "#993556",
        grade: "الصف الخامس",
        duration: "١١:٢٠",
        isNew: false,
    },
    {
        title: "الجهاز الهضمي وكيف يعمل",
        subject: "علوم",
        subjectBg: "#E1F5EE",
        subjectColor: "#0F6E56",
        thumbBg: "#E1F5EE",
        badgeColor: "#0F6E56",
        grade: "الصف السادس",
        duration: "١٨:٠٠",
        isNew: false,
    },
];

const LatestVideos = () => {
    return (
        <section dir="rtl" style={{ background: "#fff", padding: "5rem 4rem" }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem" }}>
                    <div>
                        <div style={{
                            display: "inline-flex", alignItems: "center",justifyContent: "center", gap: "6px",
                            background: "#EBF5FF", color: "#185FA5", borderRadius: "20px",
                            padding: "5px 14px", fontSize: "12px", fontWeight: 700,
                            marginBottom: "10px", border: "1px solid #B5D4F4",
                        }}>
                            <i className="ti ti-sparkles" style={{ fontSize: "13px" }} />
                            جديد
                        </div>
                        <h2 style={{ fontSize: "32px", fontWeight: 900, color: "#0F172A" }}>
                            أحدث <span style={{ color: "#4F9CF9" }}>الفيديوهات</span> المضافة
                        </h2>
                    </div>
                    <button style={{
                        display: "inline-flex", alignItems: "center", gap: "6px",
                        background: "#F8FBFF", color: "#185FA5",
                        border: "1.5px solid #B5D4F4", borderRadius: "12px",
                        padding: "9px 18px", fontSize: "14px", fontWeight: 700, cursor: "pointer",
                    }}>
                        مشاهدة الكل
                        <i className="ti ti-arrow-left" style={{ fontSize: "15px" }} />
                    </button>
                </div>

                {/* Grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
                    {videos.map((v, i) => (
                        <div
                            key={i}
                            style={{
                                background: "#F8FBFF", borderRadius: "18px",
                                border: "1px solid #E2E8F0", overflow: "hidden",
                                cursor: "pointer", transition: "border-color .2s, transform .2s",
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.borderColor = "#4F9CF9";
                                e.currentTarget.style.transform = "translateY(-3px)";
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.borderColor = "#E2E8F0";
                                e.currentTarget.style.transform = "translateY(0)";
                            }}
                        >
                            {/* Thumbnail */}
                            <div style={{ position: "relative", height: "160px", background: v.thumbBg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                {v.isNew && (
                                    <span style={{
                                        position: "absolute", top: "10px", right: "10px",
                                        background: v.badgeColor, color: "#fff",
                                        fontSize: "10px", fontWeight: 700,
                                        padding: "2px 8px", borderRadius: "6px",
                                    }}>جديد</span>
                                )}
                                <div style={{
                                    width: "44px", height: "44px", background: "rgba(255,255,255,.92)",
                                    borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                                }}>
                                    <i className="ti ti-player-play" style={{ fontSize: "20px", color: "#4F9CF9", marginRight: "-2px" }} />
                                </div>
                                <span style={{
                                    position: "absolute", bottom: "10px", left: "10px",
                                    background: "rgba(0,0,0,.6)", color: "#fff",
                                    fontSize: "11px", fontWeight: 700,
                                    padding: "2px 8px", borderRadius: "6px",
                                }}>{v.duration}</span>
                            </div>

                            {/* Body */}
                            <div style={{ padding: "1rem 1.25rem" }}>
                                <span style={{
                                    fontSize: "11px", fontWeight: 700,
                                    padding: "3px 10px", borderRadius: "20px",
                                    background: v.subjectBg, color: v.subjectColor,
                                    display: "inline-block", marginBottom: "8px",
                                }}>
                                    {v.subject}
                                </span>
                                <div style={{ fontSize: "15px", fontWeight: 800, color: "#0F172A", marginBottom: "10px", lineHeight: 1.4 }}>
                                    {v.title}
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "#64748B", borderTop: "1px solid #F1F5F9", paddingTop: ".75rem" }}>
                                    <i className="ti ti-school" style={{ fontSize: "13px" }} />
                                    {v.grade}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestVideos;