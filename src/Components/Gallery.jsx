const Gallery = () => {
    return (
        <section dir="rtl" style={{ background: "#fff", padding: "5rem 4rem" }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                    <div style={{
                        display: "inline-flex", alignItems: "center", gap: "6px",
                        background: "#EBF5FF", color: "#185FA5", borderRadius: "20px",
                        padding: "5px 14px", fontSize: "12px", fontWeight: 700,
                        marginBottom: "14px", border: "1px solid #B5D4F4",
                    }}>
                        <i className="ti ti-photo" style={{ fontSize: "13px" }} />
                        معرض الصور
                    </div>
                    <h2 style={{ fontSize: "32px", fontWeight: 900, color: "#0F172A", marginBottom: "8px" }}>
                        لحظات من <span style={{ color: "#4F9CF9" }}>داخل الفصل</span>
                    </h2>
                    <p style={{ fontSize: "14px", color: "#64748B", lineHeight: 1.8 }}>
                        لحظات حقيقية من رحلة التعلم
                    </p>
                </div>

                {/* Gallery Grid */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", height: "480px" }}>

                    {/* الصورة الكبيرة — يمين */}
                    <div style={{
                        borderRadius: "20px", overflow: "hidden", height: "100%",
                        background: "#C7DFFB", // url('/photos/main.jpg') center/cover no-repeat
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexDirection: "column", gap: "10px",
                        cursor: "pointer", transition: "transform .2s",
                    }}
                        onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.01)"}
                        onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                    >
                        <i className="ti ti-users" style={{ fontSize: "48px", color: "#185FA5" }} />
                        <span style={{ fontSize: "15px", fontWeight: 800, color: "#185FA5" }}>المدرس مع الطلاب</span>
                    </div>

                    {/* الصور الصغيرة — شمال */}
                    <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: "12px", height: "100%" }}>

                        {/* صورة أعلى */}
                        <div style={{
                            borderRadius: "20px", overflow: "hidden",
                            background: "#C8EDDA", // url('/photos/explain.jpg') center/cover no-repeat
                            display: "flex", alignItems: "center", justifyContent: "center",
                            flexDirection: "column", gap: "8px",
                            cursor: "pointer", transition: "transform .2s",
                        }}
                            onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.02)"}
                            onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                        >
                            <i className="ti ti-writing" style={{ fontSize: "28px", color: "#0F6E56" }} />
                            <span style={{ fontSize: "13px", fontWeight: 700, color: "#0F6E56" }}>وقت الشرح</span>
                        </div>

                        {/* صورتين تحت */}
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                            <div style={{
                                borderRadius: "20px", overflow: "hidden",
                                background: "#FDE8C8", // url('/photos/awards.jpg') center/cover no-repeat
                                display: "flex", alignItems: "center", justifyContent: "center",
                                flexDirection: "column", gap: "8px",
                                cursor: "pointer", transition: "transform .2s",
                            }}
                                onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.02)"}
                                onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                            >
                                <i className="ti ti-star" style={{ fontSize: "28px", color: "#854F0B" }} />
                                <span style={{ fontSize: "13px", fontWeight: 700, color: "#854F0B" }}>تكريم</span>
                            </div>
                            <div style={{
                                borderRadius: "20px", overflow: "hidden",
                                background: "#E8DFFB", // url('/photos/fun.jpg') center/cover no-repeat
                                display: "flex", alignItems: "center", justifyContent: "center",
                                flexDirection: "column", gap: "8px",
                                cursor: "pointer", transition: "transform .2s",
                            }}
                                onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.02)"}
                                onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                            >
                                <i className="ti ti-mood-happy" style={{ fontSize: "28px", color: "#534AB7" }} />
                                <span style={{ fontSize: "13px", fontWeight: 700, color: "#534AB7" }}>أجواء ممتعة</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;