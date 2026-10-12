import "../Css/Footer.css";
const Footer = () => {
    return (
        <footer dir="rtl" className="footer-light" id="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="logo">
                            <i className="ti ti-school" />
                            <span>بداية</span>
                        </div>

                        <p>
                            منصة تعليمية تفاعلية تساعد الطلاب على التعلم بطريقة
                            بسيطة وممتعة وتطوير مهاراتهم خطوة بخطوة.
                        </p>
                    </div>

                    <div>
                        <h4>روابط سريعة</h4>
                        <ul>
                            <li>المراحل الدراسية</li>
                            <li>الكورسات</li>
                            <li>عن المنصة</li>
                            <li>تواصل معنا</li>
                        </ul>
                    </div>

                    <div>
                        <h4>الدعم</h4>
                        <ul>
                            <li>مركز المساعدة</li>
                            <li>الأسئلة الشائعة</li>
                            <li>سياسة الخصوصية</li>
                            <li>الشروط والأحكام</li>
                        </ul>
                    </div>

                    <div>
                        <h4>تواصل معنا</h4>
                        <ul>
                            <li>📧 support@bidaya.com</li>
                            <li>📞 0100 000 0000</li>
                            <li>📍 مصر - الإسكندرية</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 منصة بداية - جميع الحقوق محفوظة</p>
                    <div className="social">
                        <i className="ti ti-brand-facebook" />
                        <i className="ti ti-brand-instagram" />
                        <i className="ti ti-brand-youtube" />
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;