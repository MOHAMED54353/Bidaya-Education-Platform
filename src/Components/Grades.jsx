import { useNavigate } from "react-router";
import "../Css/Grades.css";

const Grades = () => {
    const navigate = useNavigate();

    const handleGo = (path) => {
        navigate(path);
    };

    const grades = [
        {
            num: "١",
            title: "الصف الأول الابتدائي",
            color: "#4F9CF9",
            lessons: "٢٤",
            path: "/grade/1",
            subjects: [
                { label: "عربي", bg: "#EBF5FF", color: "#185FA5" },
                { label: "رياضيات", bg: "#EAF3DE", color: "#3B6D11" },
            ],
        },
        {
            num: "٢",
            title: "الصف الثاني الابتدائي",
            color: "#3B6D11",
            lessons: "٣٠",
            path: "/grade/2",
            subjects: [
                { label: "عربي", bg: "#EBF5FF", color: "#185FA5" },
                { label: "رياضيات", bg: "#EAF3DE", color: "#3B6D11" },
            ],
        },
        {
            num: "٣",
            title: "الصف الثالث الابتدائي",
            color: "#854F0B",
            lessons: "٣٦",
            path: "/grade/3",
            subjects: [
                { label: "عربي", bg: "#EBF5FF", color: "#185FA5" },
                { label: "رياضيات", bg: "#EAF3DE", color: "#3B6D11" },
            ],
        },
        {
            num: "٤",
            title: "الصف الرابع الابتدائي",
            color: "#534AB7",
            lessons: "٤٠",
            path: "/grade/4",
            subjects: [
                { label: "عربي", bg: "#EBF5FF", color: "#185FA5" },
                { label: "رياضيات", bg: "#EAF3DE", color: "#3B6D11" },
                { label: "علوم", bg: "#FFF7E6", color: "#854F0B" },
                { label: "الدراسات الإجتماعية", bg: "#EEEDFE", color: "#534AB7" },
            ],
        },
        {
            num: "٥",
            title: "الصف الخامس الابتدائي",
            color: "#993556",
            lessons: "٤٥",
            path: "/grade/5",
            subjects: [
                { label: "عربي", bg: "#EBF5FF", color: "#185FA5" },
                { label: "رياضيات", bg: "#EAF3DE", color: "#3B6D11" },
                { label: "علوم", bg: "#FFF7E6", color: "#854F0B" },
                { label: "الدراسات الإجتماعية", bg: "#EEEDFE", color: "#534AB7" },
            ],
        },
        {
            num: "٦",
            title: "الصف السادس الابتدائي",
            color: "#0F6E56",
            lessons: "٥٠",
            path: "/grade/6",
            subjects: [
                { label: "عربي", bg: "#EBF5FF", color: "#185FA5" },
                { label: "رياضيات", bg: "#EAF3DE", color: "#3B6D11" },
                { label: "علوم", bg: "#FFF7E6", color: "#854F0B" },
                { label: "الدراسات الإجتماعية", bg: "#EEEDFE", color: "#534AB7" },
            ],
        },
    ];

    return (
        <section dir="rtl" className="grades-section" id="grades">
            <div className="container">
                <div className="grades-header">
                    <span className="badge">
                        <i className="ti ti-school" />
                        المراحل الدراسية
                    </span>

                    <h2>
                        اختار <span>صفك الدراسي</span>
                    </h2>
                    <p>
                        كل صف فيه محتوى تعليمي مخصص يساعد الطالب يتطور خطوة بخطوة
                    </p>
                </div>

                <div className="grades-grid">
                    {grades.map((grade) => (
                        <div
                            key={grade.num}
                            className="grade-card"
                            onClick={() => handleGo(grade.path)}
                        >
                            <div
                                className="grade-top"
                                style={{ background: grade.color }}
                            >
                                <span className="grade-number">
                                    {grade.num}
                                </span>
                                <h3>{grade.title}</h3>
                            </div>
                            <div className="grade-body">

                                <div className="subjects">
                                    {grade.subjects.map((s, i) => (
                                        <span
                                            key={i}
                                            className="subject-pill"
                                            style={{
                                                background: s.bg,
                                                color: s.color,
                                            }}
                                        >
                                            {s.label}
                                        </span>
                                    ))}
                                </div>

                                <div className="grade-footer">
                                    <div className="lessons">
                                        <i className="ti ti-video" />
                                        {grade.lessons} درس
                                    </div>

                                    <div className="cta">
                                        ابدأ
                                        <i className="ti ti-arrow-left" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Grades;