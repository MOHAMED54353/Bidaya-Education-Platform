import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

// داتا مطابقة للـ IDs والبيانات اللي بعتها في صفحة الـ Grades
const gradesData = {
    "1": { title: "الصف الأول الابتدائي", lessons: "٢٤", color: "#4F9CF9" },
    "2": { title: "الصف الثاني الابتدائي", lessons: "٣٠", color: "#3B6D11" },
    "3": { title: "الصف الثالث الابتدائي", lessons: "٣٦", color: "#854F0B" },
    "4": { title: "الصف الرابع الابتدائي", lessons: "٤٠", color: "#534AB7" },
    "5": { title: "الصف الخامس الابتدائي", lessons: "٤٥", color: "#993556" },
    "6": { title: "الصف السادس الابتدائي", lessons: "٥٠", color: "#0F6E56" },
};

const subjectsData = [
    { name: "arabic", label: "اللغة العربية", icon: "ti-book", bg: "#EBF5FF", color: "#185FA5", desc: "دروس القراءة، النصوص، والنحو المبسط" },
    { name: "math", label: "الرياضيات", icon: "ti-calculator", bg: "#EAF3DE", color: "#3B6D11", desc: "الحساب، الأرقام، والعمليات الرياضية" },
    { name: "science", label: "العلوم", icon: "ti-flask", bg: "#FFF7E6", color: "#854F0B", desc: "استكشاف الطبيعة، الكائنات الحية والكون" },
    { name: "social", label: "الدراسات الإجتماعية", icon: "ti-world", bg: "#EEEDFE", color: "#534AB7", desc: "تاريخ مصر وجغرافيتها ومعالمها" },
];

const Course = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // جلب بيانات الصف الحالي بناءً على الـ ID، أو وضع قيم افتراضية لو الـ ID مش موجود
    const currentGrade = gradesData[id] || { title: `الصف الدراسي ${id}`, lessons: "٠", color: "#4F9CF9" };

    // الصفوف 4 و 5 و 6 بياخدوا كل المواد (بما فيهم دراسات)، الصفوف 1 و 2 و 3 بياخدوا أول 3 مواد بس
    const activeSubjects = parseInt(id) >= 4 ? subjectsData : subjectsData.slice(0, 3);

    return (
        <>
            <Navbar />
            <div dir="rtl" style={{
                minHeight: "100vh",
                background: "#F8FAFC",
                fontFamily: "'Tajawal', sans-serif",
                padding: "3rem 1rem"
            }}>
                <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

                    <button
                        onClick={() => navigate(-1)}
                        style={{
                            display: "inline-flex", alignItems: "center", gap: "8px",
                            background: "#fff", border: "1px solid #E2E8F0", borderRadius: "10px",
                            padding: "8px 16px", fontSize: "14px", fontWeight: 700, color: "#64748B",
                            cursor: "pointer", marginBottom: "2rem", transition: "all .2s"
                        }}
                        onMouseOver={(e) => { e.currentTarget.style.background = "#F1F5F9"; e.currentTarget.style.color = "#0F172A"; }}
                        onMouseOut={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#64748B"; }}
                    >
                        <i className="ti ti-arrow-right" style={{ fontSize: "16px" }} />
                        رجوع للمراحل الدراسية
                    </button>

                    <div style={{
                        background: "#fff", borderRadius: "24px", padding: "2.5rem",
                        border: "1px solid #E2E8F0", boxShadow: "0 10px 25px -5px rgba(0,0,0,0.02)",
                        marginBottom: "2.5rem", display: "flex", justifyContent: "space-between",
                        alignItems: "center", flexWrap: "wrap", gap: "1.5rem"
                    }}>
                        <div>
                            <div style={{
                                display: "inline-flex", alignItems: "center", gap: "6px",
                                background: `${currentGrade.color}15`, color: currentGrade.color,
                                borderRadius: "20px", padding: "4px 14px", fontSize: "13px",
                                fontWeight: 700, marginBottom: "12px"
                            }}>
                                <i className="ti ti-bookmark" />
                                المحتوى المعتمد والجديد
                            </div>
                            <h1 style={{ fontSize: "30px", fontWeight: 900, color: "#0F172A", margin: 0 }}>
                                {currentGrade.title}
                            </h1>
                            <p style={{ fontSize: "15px", color: "#64748B", marginTop: "8px", marginHeight: 0 }}>
                                اختار المادة اللي حابب تبدأ تذاكرها النهاردة وتتابع دروسها.
                            </p>
                        </div>

                        <div style={{
                            display: "flex", gap: "1rem", background: "#F8FBFF",
                            padding: "12px 24px", borderRadius: "16px", border: "1px solid #EBF5FF"
                        }}>
                            <div style={{ textAlign: "center" }}>
                                <div style={{ fontSize: "20px", fontWeight: 900, color: "#4F9CF9" }}>{currentGrade.lessons}</div>
                                <div style={{ fontSize: "12px", color: "#64748B", marginTop: "2px" }}>درس مسجّل</div>
                            </div>
                            <div style={{ width: "1px", background: "#E2E8F0", margin: "0 8px" }} />
                            <div style={{ textAlign: "center" }}>
                                <div style={{ fontSize: "20px", fontWeight: 900, color: "#3B6D11" }}>{activeSubjects.length}</div>
                                <div style={{ fontSize: "12px", color: "#64748B", marginTop: "2px" }}>مواد أساسية</div>
                            </div>
                        </div>
                    </div>

                    <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#0F172A", marginBottom: "1.5rem" }}>
                        📚 المواد الدراسية المتاحة:
                    </h3>

                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                        gap: "20px"
                    }}>
                        {activeSubjects.map((subject, index) => (
                            <div
                                key={index}
                                onClick={() => navigate(`/grade/${id}/${subject.name}`)} // التوجيه لصفحة الدروس الخاصة بالمادة
                                style={{
                                    background: "#fff", borderRadius: "20px", padding: "1.75rem",
                                    border: "1px solid #E2E8F0", cursor: "pointer",
                                    transition: "transform .2s, box-shadow .2s",
                                    display: "flex", flexDirection: "column", justifyContent: "space-between",
                                    position: "relative", overflow: "hidden"
                                }}
                                className="subject-card"
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = "translateY(-5px)";
                                    e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0,0,0,0.05)";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "none";
                                }}
                            >
                                <div>
                                    {/* الأيقونة الدائرية للمادة بألوانها الخاصة */}
                                    <div style={{
                                        width: "48px", height: "48px", borderRadius: "14px",
                                        background: subject.bg, color: subject.color,
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        fontSize: "22px", marginBottom: "1.25rem"
                                    }}>
                                        <i className={`ti ${subject.icon}`} />
                                    </div>

                                    <h4 style={{ fontSize: "18px", fontWeight: 800, color: "#0F172A", marginBottom: "8px" }}>
                                        {subject.label}
                                    </h4>

                                    <p style={{ fontSize: "13px", color: "#64748B", lineHeight: 1.6, margin: 0 }}>
                                        {subject.desc}
                                    </p>
                                </div>

                                {/* فوتر الكارد الصغير */}
                                <div style={{
                                    display: "flex", alignItems: "center", justifyContent: "space-between",
                                    marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid #F1F5F9",
                                    fontSize: "13px", fontWeight: 700, color: subject.color
                                }}>
                                    <span>عرض الدروس</span>
                                    <i className="ti ti-arrow-left" style={{ transition: "transform .2s" }} />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
};

export default Course;