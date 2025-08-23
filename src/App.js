import { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Hammer,
  Ruler,
  ShieldCheck,
  PhoneCall,
  Mail,
  MapPin,
  ChevronRight,
  CheckCircle2,
  HardHat,
  Briefcase,
  Timer,
  Sparkles,
} from "lucide-react";
import { Button } from "./components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Separator } from "./components/ui/separator";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const services = [
  {
    icon: Hammer,
    title: "Thi công tổng thầu",
    desc: "Từ móng đến hoàn thiện, bảo đảm tiến độ – chất lượng – an toàn.",
  },
  {
    icon: Ruler,
    title: "Thiết kế & BIM",
    desc: "Thiết kế tối ưu chi phí, mô phỏng 3D/BIM giảm rủi ro thi công.",
  },
  {
    icon: ShieldCheck,
    title: "Quản lý dự án",
    desc: "Quy trình chuẩn quốc tế, kiểm soát ngân sách minh bạch.",
  },
  {
    icon: Building2,
    title: "Xây dựng dân dụng",
    desc: "Nhà ở cao tầng, nhà xưởng, hạ tầng – đạt chuẩn quốc gia.",
  },
];

const projects = [
  {
    name: "Nhà xưởng Công nghệ cao",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop",
    tag: "Công nghiệp",
  },
  {
    name: "Khu căn hộ ",
    image:
      "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1600&auto=format&fit=crop",
    tag: "Dân dụng",
  },
  {
    name: "Trung tâm Logistics",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
    tag: "Hạ tầng",
  },
  {
    name: "Toà nhà Văn phòng",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1600&auto=format&fit=crop",
    tag: "Văn phòng",
  },
];

const growth = [
  { year: "2021", value: 38 },
  { year: "2022", value: 52 },
  { year: "2023", value: 77 },
  { year: "2024", value: 95 },
  { year: "2025", value: 124 },
];

const steps = [
  {
    title: "Khảo sát & đề xuất",
    desc: "Đo đạc hiện trạng, đề xuất giải pháp tối ưu chi phí.",
  },
  {
    title: "Thiết kế & phê duyệt",
    desc: "Triển khai hồ sơ, mô phỏng BIM, xin phép xây dựng.",
  },
  {
    title: "Thi công",
    desc: "Tổ chức thi công an toàn – đúng chuẩn, kiểm soát chất lượng 3 lớp.",
  },
  {
    title: "Bàn giao & bảo hành",
    desc: "Nghiệm thu, bàn giao vận hành, bảo hành 24–60 tháng.",
  },
];

export default function App() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      <div className="w-full bg-gradient-to-r from-yellow-500 to-yellow-300 text-black text-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="hidden md:inline-flex">
              An toàn – Chất lượng – Tiến độ
            </Badge>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <PhoneCall className="w-4 h-4" /> +84 9123
            </div>
            <div className="hidden sm:flex items-center gap-1">
              <Mail className="w-4 h-4" /> locphat@gmail.com
            </div>
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="./logo.png" alt="logo" className="w-10" />
            <span className="font-bold">Lộc Phát Asia</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-yellow-400">
              Dịch vụ
            </a>
            <a href="#projects" className="hover:text-yellow-400">
              Dự án
            </a>
            <a href="#process" className="hover:text-yellow-400">
              Quy trình
            </a>
            <a href="#about" className="hover:text-yellow-400">
              Về chúng tôi
            </a>
            <a href="#contact" className="hover:text-yellow-400">
              Liên hệ
            </a>
          </div>
          <Button className="hidden md:inline-flex bg-yellow-600 hover:bg-yellow-400">
            Báo giá nhanh
          </Button>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.15),transparent_40%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.12),transparent_40%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Kiến tạo công trình{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-300">
                bền vững
              </span>
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Đồng hành từ ý tưởng đến bàn giao. Minh bạch ngân sách – bảo hành
              dài hạn – an toàn tuyệt đối.
            </p>
            <div className="mt-6 flex gap-3">
              <Button className="bg-yellow-600 hover:bg-yellow-400">
                Xem dự án <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-3 divide-x rounded-2xl border overflow-hidden bg-white/60 backdrop-blur">
              {[
                { label: "Dự án", value: "100+" },
                { label: "Đối tác", value: "50+" },
                { label: "Hài lòng", value: "98%" },
              ].map((i, idx) => (
                <div key={idx} className="p-4 text-center">
                  <div className="text-2xl font-bold">{i.value}</div>
                  <div className="text-xs text-slate-600">{i.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="rounded-2xl shadow-xl border-slate-200/60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-600" /> Tăng trưởng
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={growth}
                      margin={{ left: 10, right: 10, top: 10, bottom: 10 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="value" dot />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
              <CardFooter className="text-sm text-slate-600">
                *Số liệu minh hoạ cho năng lực thi công & doanh thu.
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </section>

      <section id="services" className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold">Dịch vụ cốt lõi</h2>
            <p className="text-slate-600 mt-2">
              Giải pháp trọn gói – mọi quy mô công trình.
            </p>
          </div>
          <Badge variant="outline" className="hidden md:inline-flex">
            An toàn – Chất lượng – Tiến độ
          </Badge>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card className="rounded-2xl hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center">
                    <s.icon className="w-6 h-6 text-yellow-600" />
                  </div>
                  <CardTitle className="mt-3 text-xl">{s.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600">{s.desc}</CardContent>
                <CardFooter>
                  <Button variant="ghost" className="gap-1">
                    Tìm hiểu thêm <ChevronRight className="w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="bg-gradient-to-b from-white to-slate-50"
      >
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold">Dự án tiêu biểu</h2>
              <p className="text-slate-600 mt-2">
                Một vài công trình nổi bật gần đây.
              </p>
            </div>
            <Button variant="outline" className="hidden md:inline-flex">
              Tất cả dự án
            </Button>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-8">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Card className="group overflow-hidden rounded-2xl border-0 shadow-lg">
                  <div className="relative h-56">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <Badge className="absolute top-3 left-3 bg-black/60 backdrop-blur text-white">
                      {p.tag}
                    </Badge>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{p.name}</CardTitle>
                  </CardHeader>
                  <CardFooter className="pt-0">
                    <Button variant="ghost" className="gap-1">
                      Xem chi tiết <ChevronRight className="w-4 h-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold">Quy trình làm việc</h2>
        <p className="text-slate-600 mt-2">
          Chuẩn hoá theo ISO – minh bạch từng bước.
        </p>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {steps.map((st, i) => (
            <Card key={i} className="rounded-2xl">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center font-semibold text-emerald-700">
                    {i + 1}
                  </div>
                  <CardTitle className="text-lg">{st.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-slate-600">{st.desc}</CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border bg-white p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-emerald-600" /> Bảo hiểm công trình
              toàn diện
            </div>
            <div className="flex items-center gap-3">
              <Timer className="text-emerald-600" /> Cam kết tiến độ bằng hợp
              đồng
            </div>
            <div className="flex items-center gap-3">
              <Briefcase className="text-emerald-600" /> Hệ thống thầu phụ đạt
              chuẩn
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold">Về Lộc Phát Asia</h2>
            <p className="text-slate-600 mt-3">
              Chúng tôi là nhà thầu xây dựng với đội ngũ kỹ sư dày dặn kinh
              nghiệm, đã triển khai hơn 100 dự án dân dụng – công nghiệp – hạ
              tầng trên toàn quốc. Sứ mệnh của Lộc Phát Asia là kiến tạo những
              công trình bền vững, thẩm mỹ và hiệu quả vận hành.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border p-4 bg-slate-50">
                <div className="text-2xl font-bold">10 000 m²</div>
                <div className="text-sm text-slate-600">
                  Sàn xây dựng đã hoàn thành
                </div>
              </div>
              <div className="rounded-2xl border p-4 bg-slate-50">
                <div className="text-2xl font-bold">98/100</div>
                <div className="text-sm text-slate-600">
                  Mức độ hài lòng khách hàng
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop"
                alt="about"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.12),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 py-16">
          <Card className="rounded-2xl border-0 shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold">
                  Nhận báo giá trong 24 giờ
                </h3>
                <p className="text-slate-600 mt-2">
                  Điền thông tin, đội ngũ kỹ thuật sẽ liên hệ ngay.
                </p>
                <Separator className="my-6" />
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="grid gap-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        placeholder="Họ và tên"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        required
                      />
                      <Input
                        placeholder="Số điện thoại"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        required
                      />
                    </div>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                    />
                    <Textarea
                      placeholder="Mô tả nhanh nhu cầu của bạn"
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                    />
                    <Button
                      type="submit"
                      className="bg-emerald-600 hover:bg-emerald-700"
                    >
                      Gửi yêu cầu
                    </Button>
                  </form>
                ) : (
                  <div className="p-6 rounded-xl bg-emerald-50 text-emerald-700 font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> Cảm ơn bạn! Chúng tôi
                    sẽ liên hệ sớm nhất.
                  </div>
                )}
              </div>
              <div className="relative min-h-[360px]">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop"
                  alt="quote"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-lg font-semibold">
                    "An toàn là nền móng của mọi dự án."
                  </div>
                  <div className="text-sm opacity-90">
                    – Giám đốc thi công, Lộc Phát Asia
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold">Liên hệ</h2>
            <p className="text-slate-600 mt-2">Văn phòng tại TP.HCM</p>
            <div className="mt-6 space-y-3 text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5" /> 122 E Trần Đình Xu, Phường Nguyễn
                Cư Trinh, Quận 1, Thành phố Hồ Chí Minh, Việt Nam
              </div>
              <div className="flex items-start gap-3">
                <PhoneCall className="mt-0.5" /> +84 9123
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5" /> locphat@gmail.vn
              </div>
            </div>
            <div className="mt-6 rounded-2xl overflow-hidden border">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3786.9380343042258!2d106.68649947488232!3d10.762666689385304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f174cf18a9f%3A0x51d421e1604009b5!2zMTIyRSBUcuG6p24gxJDDrG5oIFh1LCBQaMaw4budbmcgTmd1eeG7hW4gQ8awIFRyaW5oLCBRdeG6rW4gMSwgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e1!3m2!1svi!2s!4v1755797369257!5m2!1svi!2s"
                className="w-full h-64"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Thông tin liên hệ</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="grid gap-4"
              >
                <Input placeholder="Họ và tên" required />
                <Input placeholder="Email" type="email" />
                <Textarea placeholder="Nội dung" rows={5} />
                <Button
                  type="submit"
                  className="bg-yellow-600 hover:bg-yellow-400"
                >
                  Gửi
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="font-bold">Lộc Phát Asia</div>
            </div>
            <p className="text-sm text-slate-600 mt-3">
              Kiến tạo giá trị bền vững cho đô thị Việt Nam.
            </p>
          </div>
          <div>
            <div className="font-semibold mb-3">Dịch vụ</div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Thi công tổng thầu</li>
              <li>Thiết kế & BIM</li>
              <li>Quản lý dự án</li>
              <li>Hạ tầng kỹ thuật</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Công ty</div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Giới thiệu</li>
              <li>Tuyển dụng</li>
              <li>Điều khoản</li>
              <li>Chính sách bảo mật</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Kết nối</div>
            <div className="text-sm text-slate-600">locphat@gmail.vn</div>
            <div className="text-sm text-slate-600">+84 9123</div>
          </div>
        </div>
        <div className="border-t py-4 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Lộc Phát Asia. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
