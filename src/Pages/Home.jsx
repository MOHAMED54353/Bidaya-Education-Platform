import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import Features from "../Components/Features"
import Grades from "../Components/Grades"
import Footer from "../Components/Footer"
import LatestVideos from "../Components/LatestVideos"
import Gallery from "../Components/Gallery"
const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Features />
            <Grades />
            <LatestVideos />
            <Gallery />

            <section dir="rtl" style={{ padding: "4rem", background: "#F8FBFF", fontFamily: "'Tajawal', sans-serif" }}>
                <div style={{
                    maxWidth: "1100px", margin: "0 auto",
                    background: "linear-gradient(135deg, #4F9CF9 0%, #6C63FF 100%)",
                    borderRadius: "28px", overflow: "hidden",
                    display: "grid", gridTemplateColumns: "1fr 340px",
                    alignItems: "center", position: "relative", minHeight: "300px",
                }}>

                    {[
                        { w: "350px", h: "350px ", top: "-100px", left: "-80px" },
                        { w: "180px", h: "180px", bottom: "-60px", left: "300px" },
                    ].map((b, i) => (
                        <div key={i} style={{
                            position: "absolute", borderRadius: "50%",
                            background: "rgba(255,255,255,.07)", pointerEvents: "none",
                            width: b.w, height: b.h,
                            top: b.top, left: b.left,
                            bottom: b.bottom,
                        }} />
                    ))}

                    <div style={{ padding: "3.5rem 3rem", position: "relative", zIndex: 1 }}>
                        <p style={{ fontSize: "13px", fontWeight: 700, color: "rgba(255,255,255,.75)", marginBottom: "12px", letterSpacing: ".05em" }}>
                            ابدأ رحلتك التعليمية
                        </p>
                        <h2 style={{ fontSize: "40px", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: "14px" }}>
                            عشان يكبر صح<br />
                            <span style={{ background: "rgba(255,255,255,.18)", borderRadius: "10px", padding: "2px 12px" }}>
                                لازم يبدأ صح!
                            </span>
                        </h2>
                        <p style={{ fontSize: "15px", color: "rgba(255,255,255,.82)", lineHeight: 1.8, marginBottom: "2rem", maxWidth: "400px" }}>
                            في بَداية، بنعلّم الأساسيات بأسلوب ممتع وتفاعلي وآمن. من الحروف والأرقام، لين التفكير والإبداع — كله أونلاين ومن البيت!
                        </p>
                        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                            <button
                                style={{ background: "#fff", color: "#4F9CF9", border: "none", borderRadius: "12px", padding: "12px 28px", fontSize: "15px", fontWeight: 800, fontFamily: "inherit", cursor: "pointer", transition: ".2s" }}
                                onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,.15)"; }}
                                onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                            >
                                سجّل مجاناً الآن
                            </button>
                            <button
                                style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,.4)", borderRadius: "12px", padding: "12px 24px", fontSize: "15px", fontWeight: 700, fontFamily: "inherit", cursor: "pointer", transition: ".2s" }}
                                onMouseOver={(e) => e.currentTarget.style.background = "rgba(255,255,255,.1)"}
                                onMouseOut={(e) => e.currentTarget.style.background = "transparent"}
                            >
                                تصفح الكورسات
                            </button>
                        </div>
                    </div>

                    <div style={{ height: "300px", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
                        <img
                            src="/22.jpeg"
                            alt="طفل"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                                objectPosition: "top",
                            }}
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Home
