import "../Css/Featuers.css"; 
const Features = () => {
    const features = [
        {
            icon: "ti-video",
            iconBg: "#EBF5FF",
            iconColor: "#185FA5",
            title: "فيديوهات تعليمية احترافية",
            desc: "شرح واضح بجودة صوت وصورة عالية يساعد الطالب يفهم بسرعة بدون تعقيد.",
        },
        {
            icon: "ti-checklist",
            iconBg: "#EAF3DE",
            iconColor: "#3B6D11",
            title: "اختبارات بعد كل درس",
            desc: "أسئلة ذكية لتثبيت الفهم وقياس مستوى الطالب بشكل مستمر.",
        },
        {
            icon: "ti-chart-line",
            iconBg: "#FFF7E6",
            iconColor: "#854F0B",
            title: "متابعة أداء لحظية",
            desc: "لوحة تحكم لولي الأمر لمتابعة التقدم والنتائج في أي وقت.",
        },
        {
            icon: "ti-layout-list",
            iconBg: "#FBEAF0",
            iconColor: "#993556",
            title: "منهج منظم خطوة بخطوة",
            desc: "المحتوى متقسم بشكل بسيط: شرح → تدريب → تطبيق عملي.",
        },
        {
            icon: "ti-messages",
            iconBg: "#EEEDFE",
            iconColor: "#534AB7",
            title: "تواصل مباشر مع المدرس",
            desc: "إمكانية طرح الأسئلة والحصول على إجابات بسرعة داخل المنصة.",
        },
        {
            icon: "ti-certificate",
            iconBg: "#E1F5EE",
            iconColor: "#0F6E56",
            title: "شهادات إنجاز",
            desc: "يحصل الطالب على شهادة بعد إتمام الكورس لتعزيز الثقة والتحفيز.",
        },
        {
            icon: "ti-headset",
            iconBg: "#FFF0E6",
            iconColor: "#D85A30",
            title: "دعم أكاديمي سريع",
            desc: "فريق متخصص يرد على الأسئلة ويقدم مساعدة أثناء التعلم.",
        },
        {
            icon: "ti-device-mobile",
            iconBg: "#F3F0FF",
            iconColor: "#6C63FF",
            title: "تعلم من أي جهاز",
            desc: "تجربة سلسة على الموبايل أو التابلت أو الكمبيوتر بدون أي مشاكل.",
        },
        {
            icon: "ti-bolt",
            iconBg: "#FFF4D6",
            iconColor: "#E09F1F",
            title: "تجربة سريعة وسلسة",
            desc: "تنقل سريع بين الدروس بدون تقطيع أو تعقيد في الاستخدام.",
        },
    ];

    return (
        <section dir="rtl" className="features-section">
            <div className="container">
                <div className="features-header">
                    <span className="badge">
                        <i className="ti ti-medal"></i>
                        ليه تختارنا؟
                    </span>
                    <h2>
                        كل حاجة محتاجها{" "}
                        <span>في مكان واحد</span>
                    </h2>
                    <p>
                        منصة مصممة خصيصاً للمرحلة الابتدائية بأسلوب بسيط يساعد الطفل ويطمن ولي الأمر
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((f, i) => (
                        <div className="feature-card" key={i}>
                            <div
                                className="icon-box"
                                style={{
                                    background: f.iconBg,
                                    color: f.iconColor,
                                }}
                            >
                                <i className={`ti ${f.icon}`} />
                            </div>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="features-cta">
                    <div>
                        <p>ابدأ رحلة التعلم</p>
                        <h3>
                            طوّر مهارات طفلك خطوة بخطوة بطريقة ممتعة وسهلة
                        </h3>
                    </div>
                    <button>ابدأ مجاناً الآن</button>
                </div>
            </div>
        </section>
    );
};

export default Features;