import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

const governorates = [
    "القاهرة", "الجيزة", "الإسكندرية", "الشرقية", "الدقهلية",
    "البحيرة", "المنوفية", "القليوبية", "الغربية", "كفر الشيخ",
    "دمياط", "بورسعيد", "الإسماعيلية", "السويس", "شمال سيناء",
    "جنوب سيناء", "الفيوم", "بني سويف", "المنيا", "أسيوط",
    "سوهاج", "قنا", "الأقصر", "أسوان", "البحر الأحمر",
    "مطروح", "الوادي الجديد",
];

const grades = [
    "الصف الأول الابتدائي", "الصف الثاني الابتدائي",
    "الصف الثالث الابتدائي", "الصف الرابع الابتدائي",
    "الصف الخامس الابتدائي", "الصف السادس الابتدائي",
];

const Register = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "", email: "", password: "", parentPhone: "", studentPhone: "",
        governorate: "", grade: "",
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validate = () => {
        const errs = {};
        if (!form.name.trim()) errs.name = "اسم الطالب مطلوب";
        if (!form.email.trim()) errs.email = "البريد الإلكتروني مطلوب";
        else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "بريد إلكتروني غير صالح";
        if (!form.password) errs.password = "كلمة المرور مطلوبة";
        else if (form.password.length < 6) errs.password = "يجب أن لا تقل عن 6 أحرف";
        if (!form.parentPhone.trim()) errs.parentPhone = "رقم ولي الأمر مطلوب";
        if (!form.studentPhone.trim()) errs.studentPhone = "رقم الطالب مطلوب";
        if (!form.governorate) errs.governorate = "اختر المحافظة";
        if (!form.grade) errs.grade = "اختر الصف الدراسي";
        return errs;
    };

    const handleSubmit = () => {
        const errs = validate();
        if (Object.keys(errs).length > 0) { setErrors(errs); return; }
        setSubmitted(true);
    };

    const inputStyle = (name) => ({
        width: "100%",
        padding: "11px 42px 11px 14px",
        borderRadius: "12px",
        border: `1.5px solid ${errors[name] ? "#FF6B6B" : "#E2E8F0"}`,
        fontSize: "14px",
        fontFamily: "inherit",
        color: "#0F172A",
        background: "#F8FBFF",
        outline: "none",
        transition: "border-color .2s, box-shadow .2s",
    });

    if (submitted) {
        return (
            <div dir="rtl" style={{
                minHeight: "100vh", display: "flex", alignItems: "center",
                justifyContent: "center", background: "#F1F5F9",
                fontFamily: "'Tajawal', sans-serif", padding: "2rem"
            }}>
                <div style={{
                    background: "#fff", borderRadius: "24px", padding: "3rem 2.5rem",
                    textAlign: "center", maxWidth: "420px", width: "100%",
                    border: "1px solid #E2E8F0",
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05)",
                }}>
                    <div style={{
                        width: "72px", height: "72px", background: "#EAF3DE",
                        borderRadius: "50%", display: "flex", alignItems: "center",
                        justifyContent: "center", margin: "0 auto 1.5rem",
                    }}>
                        <i className="ti ti-check" style={{ fontSize: "36px", color: "#3B6D11" }} />
                    </div>
                    <h2 style={{ fontSize: "24px", fontWeight: 900, color: "#0F172A", marginBottom: "10px" }}>
                        تم التسجيل بنجاح! 🎉
                    </h2>
                    <p style={{ fontSize: "14px", color: "#64748B", lineHeight: 1.8, marginBottom: "2rem" }}>
                        أهلاً <strong>{form.name}</strong>، تم حفظ بياناتك بنجاح. هيتواصل معاك المدرس قريباً.
                    </p>
                    <button
                        onClick={() => navigate("/")}
                        style={{
                            width: "100%", padding: "12px",
                            background: "#4F9CF9", color: "#fff", border: "none",
                            borderRadius: "12px", fontSize: "15px", fontWeight: 800,
                            fontFamily: "inherit", cursor: "pointer",
                        }}
                    >
                        الرجوع للرئيسية
                    </button>
                </div>
            </div>
        );
    }

    return (
        <>
            <Navbar minimal />

            <div dir="rtl" style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)", // خلفية ناعمة ومريحة
                fontFamily: "'Tajawal', sans-serif",
                padding: "2rem 1rem",
            }}>
                {/* كارد الفورم الرئيسي الموحد */}
                <div style={{
                    background: "#fff",
                    borderRadius: "24px",
                    width: "100%",
                    maxWidth: "680px", // عرض مناسب وملموم للفورم العادية
                    padding: "2.5rem 2rem",
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)",
                    border: "1px solid #E2E8F0",
                }}>

                    {/* الهيدر الخاص بالفورم */}
                    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                        <div style={{
                            width: "54px", height: "54px",
                            background: "linear-gradient(135deg, #4F9CF9, #6C63FF)",
                            borderRadius: "16px",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            margin: "0 auto 1rem",
                            boxShadow: "0 8px 16px rgba(79, 156, 249, 0.2)"
                        }}>
                            <i className="ti ti-school" style={{ fontSize: "26px", color: "#fff" }} />
                        </div>
                        <h2 style={{ fontSize: "24px", fontWeight: 900, color: "#0F172A", marginBottom: "6px" }}>
                            إنشاء حساب جديد في بَداية
                        </h2>
                        <p style={{ fontSize: "14px", color: "#64748B" }}>
                            أدخل بيانات الطالب للبدء في الرحلة التعليمية
                        </p>
                    </div>

                    {/* الحقول الأساسية متتالية */}
                    {[
                        { label: "اسم الطالب", name: "name", type: "text", placeholder: "الاسم رباعي للطالب", icon: "ti-user" },
                        { label: "البريد الإلكتروني", name: "email", type: "email", placeholder: "example@gmail.com", icon: "ti-mail" },
                        { label: "كلمة المرور", name: "password", type: "password", placeholder: "••••••••", icon: "ti-lock" },
                    ].map((f) => (
                        <div key={f.name} style={{ marginBottom: "1.1rem" }}>
                            <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#0F172A", marginBottom: "6px" }}>
                                {f.label} <span style={{ color: "#4F9CF9" }}>*</span>
                            </label>
                            <div style={{ position: "relative" }}>
                                <i className={`ti ${f.icon}`} style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", right: "14px", fontSize: "18px", color: "#94A3B8", pointerEvents: "none" }} />
                                <input name={f.name} type={f.type} placeholder={f.placeholder} value={form[f.name]} onChange={handleChange} style={inputStyle(f.name)} />
                            </div>
                            {errors[f.name] && <span style={{ fontSize: "12px", color: "#FF6B6B", marginTop: "4px", display: "block" }}>{errors[f.name]}</span>}
                        </div>
                    ))}

                    {/* رقم ولي الأمر + رقم الطالب جنب بعض لتوفير مساحة طولية */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "1.1rem" }}>
                        {[
                            { label: "رقم ولي الأمر", name: "parentPhone", type: "tel", placeholder: "01XXXXXXXXX", icon: "ti-phone" },
                            { label: "رقم الطالب", name: "studentPhone", type: "text", placeholder: "رقم تعريفي", icon: "ti-id-badge" },
                        ].map((f) => (
                            <div key={f.name}>
                                <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#0F172A", marginBottom: "6px" }}>
                                    {f.label} <span style={{ color: "#4F9CF9" }}>*</span>
                                </label>
                                <div style={{ position: "relative" }}>
                                    <i className={`ti ${f.icon}`} style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", right: "14px", fontSize: "18px", color: "#94A3B8", pointerEvents: "none" }} />
                                    <input name={f.name} type={f.type} placeholder={f.placeholder} value={form[f.name]} onChange={handleChange} style={inputStyle(f.name)} />
                                </div>
                                {errors[f.name] && <span style={{ fontSize: "12px", color: "#FF6B6B", marginTop: "4px", display: "block" }}>{errors[f.name]}</span>}
                            </div>
                        ))}
                    </div>

                    {/* المحافظة والسنة الدراسية */}
                    {[
                        { label: "المحافظة", name: "governorate", icon: "ti-map-pin", options: governorates, placeholder: "اختر المحافظة" },
                        { label: "السنة الدراسية", name: "grade", icon: "ti-school", options: grades, placeholder: "اختر الصف الدراسي" },
                    ].map((f) => (
                        <div key={f.name} style={{ marginBottom: "1.1rem" }}>
                            <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#0F172A", marginBottom: "6px" }}>
                                {f.label} <span style={{ color: "#4F9CF9" }}>*</span>
                            </label>
                            <div style={{ position: "relative" }}>
                                <i className={`ti ${f.icon}`} style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", right: "14px", fontSize: "18px", color: "#94A3B8", pointerEvents: "none", zIndex: 1 }} />
                                <select name={f.name} value={form[f.name]} onChange={handleChange} style={{ ...inputStyle(f.name), appearance: "none", cursor: "pointer" }}>
                                    <option value="">{f.placeholder}</option>
                                    {f.options.map((o) => <option key={o}>{o}</option>)}
                                </select>
                            </div>
                            {errors[f.name] && <span style={{ fontSize: "12px", color: "#FF6B6B", marginTop: "4px", display: "block" }}>{errors[f.name]}</span>}
                        </div>
                    ))}

                    {/* زر التسجيل */}
                    <button
                        onClick={handleSubmit}
                        style={{
                            width: "100%", padding: "13px",
                            background: "linear-gradient(135deg, #4F9CF9, #6C63FF)", // إضافة لمسة جمالية للزرار
                            color: "#fff", border: "none",
                            borderRadius: "12px", fontSize: "16px", fontWeight: 800,
                            fontFamily: "inherit", cursor: "pointer",
                            transition: "opacity .2s, transform .2s", marginTop: ".75rem",
                            boxShadow: "0 10px 15px -3px rgba(108, 99, 255, 0.3)"
                        }}
                        onMouseOver={(e) => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                        onMouseOut={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
                    >
                        إنشاء الحساب
                    </button>

                    {/* التنقل لتسجيل الدخول */}
                    <div style={{ textAlign: "center", marginTop: "1.5rem", fontSize: "13px", color: "#64748B" }}>
                        عندك حساب بالفعل؟{" "}
                        <span onClick={() => navigate("/login")} style={{ color: "#4F9CF9", fontWeight: 700, cursor: "pointer" }}>
                            سجّل دخول
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;