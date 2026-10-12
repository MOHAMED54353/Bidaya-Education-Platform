const HeroSection = () => {
    return (
        <section
            dir="rtl"
            style={{
                background: "linear-gradient(180deg, #F8FBFF 0%, #FFFFFF 100%)",
                minHeight: "90vh",
                display: "flex",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div style={blobStyle("#4F9CF9", "15%", "85%", "120px", "0.08")} />
            <div style={blobStyle("#FFD166", "70%", "10%", "80px", "0.12")} />
            <div style={blobStyle("#FF6B6B", "20%", "15%", "60px", "0.08")} />

            <div
                className="mx-auto w-100"
                style={{
                    maxWidth: "1400px",
                    padding: "0 60px",
                }}
            >
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h1
                            style={{
                                fontSize: "4rem",
                                fontWeight: "800",
                                color: "#1E293B",
                                lineHeight: "1.3",
                                marginBottom: "20px",
                            }}
                        >
                            تعلّم وأنت
                            <br />
                            <span style={{ color: "#4F9CF9" }}>
                                مبسوط ومتفوق
                            </span>
                        </h1>

                        <p
                            style={{
                                color: "#64748B",
                                fontSize: "18px",
                                lineHeight: "2",
                                marginBottom: "35px",
                                maxWidth: "600px",
                            }}
                        >
                            الأستاذ محمد السيد، معلم متخصص في المرحلة الابتدائية، يهدف إلى بناء
                            أساس تعليمي قوي للأطفال من خلال أساليب شرح حديثة وأنشطة تفاعلية ممتعة.
                            نساعد الطلاب على اكتساب الثقة في التعلم، تطوير مهاراتهم الأساسية،
                            وتحقيق أفضل النتائج الدراسية في بيئة تعليمية محفزة وآمنة.
                        </p>
                        <div className="d-flex flex-wrap gap-3 mb-5">
                            <button
                                style={{
                                    background: "#4F9CF9",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "12px",
                                    padding: "14px 32px",
                                    fontWeight: "600",
                                    fontSize: "16px",
                                    boxShadow:
                                        "0 10px 25px rgba(79,156,249,.25)",
                                }}
                            >
                                ابدأ التعلم الآن
                            </button>

                            <button
                                style={{
                                    background: "#fff",
                                    color: "#1E293B",
                                    border: "2px solid #E2E8F0",
                                    borderRadius: "12px",
                                    padding: "14px 32px",
                                    fontWeight: "600",
                                    fontSize: "16px",
                                }}
                            >
                                تواصل معنا
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="d-flex gap-5 flex-wrap">
                            <div>
                                <h3
                                    style={{
                                        color: "#4F9CF9",
                                        fontWeight: "800",
                                        marginBottom: "5px",
                                    }}
                                >
                                    +٣٠٠٠
                                </h3>
                                <span style={{ color: "#64748B" }}>
                                    طالب وطالبة
                                </span>
                            </div>

                            <div>
                                <h3
                                    style={{
                                        color: "#4F9CF9",
                                        fontWeight: "800",
                                        marginBottom: "5px",
                                    }}
                                >
                                    +١٢٠
                                </h3>
                                <span style={{ color: "#64748B" }}>
                                    درس تعليمي
                                </span>
                            </div>

                            <div>
                                <h3
                                    style={{
                                        color: "#4F9CF9",
                                        fontWeight: "800",
                                        marginBottom: "5px",
                                    }}
                                >
                                    ٩٥٪
                                </h3>
                                <span style={{ color: "#64748B" }}>
                                    نسبة النجاح
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="col-lg-6 d-flex justify-content-around mt-5 mt-lg-0">
                        <div
                            style={{
                                position: "relative",
                                width: "350px",
                                height: "450px",
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    width: "450px",
                                    height: "420px",
                                    background:
                                        "linear-gradient(135deg,#4F9CF9,#6FB1FF)",
                                    borderRadius: "50%",
                                    opacity: ".12",
                                    top: "-20px",
                                    left: "-100px",
                                }}
                            />

                            <div
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    overflow: "hidden",
                                    borderRadius:
                                        "30% 70% 70% 30% / 30% 30% 70% 70%",
                                    border: "8px solid #fff",
                                    boxShadow:
                                        "0 25px 50px rgba(15,23,42,.12)",
                                    position: "relative",
                                }}
                            >
                                <img
                                    src="/صورة واتساب بتاريخ 1447-01-04 في 06.50.19_76423597.jpg"
                                    alt="المستر"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        objectPosition: "center top",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const blobStyle = (
    color,
    top,
    left,
    size,
    opacity = "0.15"
) => ({
    position: "absolute",
    background: color,
    top,
    left,
    width: size,
    height: size,
    borderRadius: "50%",
    opacity,
    pointerEvents: "none",
});

export default HeroSection;