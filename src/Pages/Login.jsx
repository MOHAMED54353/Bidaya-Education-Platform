import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Login = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validate = () => {
        const errs = {};
        if (!form.email.trim()) errs.email = "البريد الإلكتروني مطلوب";
        else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "بريد إلكتروني غير صالح";

        if (!form.password) errs.password = "كلمة المرور مطلوبة";
        return errs;
    };

    const handleSubmit = () => {
        const errs = validate();
        if (Object.keys(errs).length > 0) { setErrors(errs); return; }
        // مؤقتاً بدون API - بيوجهه للرئيسية علطول
        navigate("/");
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
        transition: "border-color .2s",
    });

    return (
        <>
            <Navbar minimal />
            <div dir="rtl" style={{
                minHeight: "90vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)",
                fontFamily: "'Tajawal', sans-serif",
                padding: "2rem 1rem",
            }}>
                {/* كارد اللوجين الرئيسي */}
                <div style={{
                    background: "#fff",
                    borderRadius: "24px",
                    width: "100%",
                    maxWidth: "440px", // ملموم أكتر لأن الحقول أقل
                    padding: "2.5rem 2rem",
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)",
                    border: "1px solid #E2E8F0",
                }}>

                    {/* الهيدر */}
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
                            مرحباً بك مجدداً 👋
                        </h2>
                        <p style={{ fontSize: "14px", color: "#64748B" }}>
                            سجّل دخول لمتابعة رحلتك التعليمية في بَداية
                        </p>
                    </div>

                    {/* البريد الإلكتروني */}
                    <div style={{ marginBottom: "1.25rem" }}>
                        <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#0F172A", marginBottom: "6px" }}>
                            البريد الإلكتروني <span style={{ color: "#4F9CF9" }}>*</span>
                        </label>
                        <div style={{ position: "relative" }}>
                            <i className="ti ti-mail" style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", right: "14px", fontSize: "18px", color: "#94A3B8", pointerEvents: "none" }} />
                            <input name="email" type="email" placeholder="example@gmail.com" value={form.email} onChange={handleChange} style={inputStyle("email")} />
                        </div>
                        {errors.email && <span style={{ fontSize: "12px", color: "#FF6B6B", marginTop: "4px", display: "block" }}>{errors.email}</span>}
                    </div>

                    {/* كلمة المرور */}
                    <div style={{ marginBottom: "1.25rem" }}>
                        <div style={{ display: "flex", justifyContent: "between", alignItems: "center", marginBottom: "6px" }}>
                            <label style={{ fontSize: "13px", fontWeight: 700, color: "#0F172A", flexGrow: 1 }}>
                                كلمة المرور <span style={{ color: "#4F9CF9" }}>*</span>
                            </label>
                            <span style={{ fontSize: "12px", color: "#4F9CF9", fontWeight: 700, cursor: "pointer" }}>
                                نسيت كلمة المرور؟
                            </span>
                        </div>
                        <div style={{ position: "relative" }}>
                            <i className="ti ti-lock" style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", right: "14px", fontSize: "18px", color: "#94A3B8", pointerEvents: "none" }} />
                            <input name="password" type="password" placeholder="••••••••" value={form.password} onChange={handleChange} style={inputStyle("password")} />
                        </div>
                        {errors.password && <span style={{ fontSize: "12px", color: "#FF6B6B", marginTop: "4px", display: "block" }}>{errors.password}</span>}
                    </div>

                    {/* زر تسجيل الدخول */}
                    <button
                        onClick={handleSubmit}
                        style={{
                            width: "100%", padding: "13px",
                            background: "linear-gradient(135deg, #4F9CF9, #6C63FF)",
                            color: "#fff", border: "none",
                            borderRadius: "12px", fontSize: "16px", fontWeight: 800,
                            fontFamily: "inherit", cursor: "pointer",
                            transition: "opacity .2s, transform .2s", marginTop: "1rem",
                            boxShadow: "0 10px 15px -3px rgba(108, 99, 255, 0.3)"
                        }}
                        onMouseOver={(e) => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                        onMouseOut={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
                    >
                        تسجيل الدخول
                    </button>

                    <div style={{ textAlign: "center", marginTop: "1.75rem", fontSize: "13px", color: "#64748B" }}>
                        ماعندكش حساب؟{" "}
                        <span onClick={() => navigate("/register")} style={{ color: "#4F9CF9", fontWeight: 700, cursor: "pointer" }}>
                            إنشاء حساب جديد
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;