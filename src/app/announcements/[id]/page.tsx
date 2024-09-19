import { PageLayout } from "@/components/PageLayout";
import AnnouncementContent from "@/features/announcements/components/Announcements/AnnouncementContent";
import AnnouncementsSection from "@/features/announcements/components/AnnouncementsSection";
import EventsSection from "@/features/announcements/components/EventsSection";
import { getRelativeTime } from "@/lib/utils";

export default function Announcements() {
  return (
    <PageLayout
      imageSrc="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
      imageAlt="test"
      title="العام الدراسي الجديد"
      description={getRelativeTime(new Date())}
    >
      {/* Here Markdown */}
      <AnnouncementContent
        content={`# السلام عليكم ورحمة الله وبركاته

نهنئ ابنائنا الطلبه بالعام الدراسى الجديد  ونتمنى لهم مزيد من التقدم و الرقى
نحيط علم الجميع من ابنائنا والساده اولياء الامور
بان التجمع يوم السبت باذن الله بجوار موقف الاسكندريه و وكذلك التجمع بمطروح الساعه الرابعه والنصف مساء والتحرك الساعه الخامسه مساء 
التعليمات
الالتزام بالمظهر الحسن والتعامل برقى مع المشرفين
لايسمح باى مخالفات فى الزى مثل ارتداء الشورت والشبشب والسلاسل والانسيالات والحظاظات والبنطلون كات ان( المقطع)
حلاقه الذقن والشعر  ولايسمح باى حلاقه غير لائقه
ممنوع تواجد الاسلحه والادوات الحاده والسخانات و الاندومى والمشروبات الغازيه والشيبسى ولن يسمح بدخولهم   المدرسه وسيتم التفتيش من قبل امن المدرسه
ممنوع طلب الماكولات والمشروبات من خارج المدرسه
الالتزام بمواعيد الصحيان والطابور والافطار
يتم النزول الساعه السادسه والنصف الى المطعم بزى المدرسه والافطار والتحرك الى ارض الطابور ولا يسمح لدخول المبنى السكنى بعد الافطار
لايسمح بدخول المبنى السكنى خلال اليوم الدراسى بدون اذن من الدكتور اوالسيد مدير المدرسه ومن يخالف ذلك يعرض نفسه للعقاب كما نصت لائحه الانظباط
الزى المدرسى:-
بنطلون اسود جينز مناسب اوكلاسيك
قميص ابيض  ساده مناسب
كرافت نبيتى
حذاء اسود
سويت شيرت نبيتى 
يجب الاتزام بمواعيد الحصص والتواجد كل فى مكانه وفى حاله حدوث اى مشكله يجب التوجه الى  المشرف العام وطاقم الاشراف لكل دور
        `}
      />
    </PageLayout>
  );
}
