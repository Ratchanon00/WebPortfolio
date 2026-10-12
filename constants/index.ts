export const PROJECTS = [
  {
    title: "RoboDK Robot Simulator",
    description: [
      "โมเดล 3D ของแขนหุ่นยนต์",
      "จำลองการเคลื่อนที่ของแขนหุ่นยนต์",
    ],
    link: "https://github.com/Ratchanon00/RoboDK",
  },
  {
    title: "ACE Software for Industrial Robots",
    description: [
      "ใช้ในการกำหนดตำแหน่งและเส้นทางการเคลื่อนที่",
      "ทดสอบการทำงานก่อนใช้งานจริง",
      "จำลองการเคลื่อนที่ของหุ่นยนต์",
    ],
    link: "https://github.com/Ratchanon00/ACE",
  },
  {
    title: "Object Detection",
    description: [
      "ใช้สถิติและเปรียบเทียบภาพ (Image Processing)",
      "ใช้การกรองสี (Color Segmentation) ตั้งค่าสีในระบบ HSV",
      "ส่งตำแหน่งให้ทำงานร่วมกับแขนหุ่นยนต์หยิบกล่อง",
    ],
    link: "https://github.com/Ratchanon00/Object_Detection",
    demoLink:
      "https://drive.google.com/drive/folders/19u0YAhAg3NA6U0RSNJhfNL8-zjyQs8tc",
  },
  {
    title: "PCB Defect Vision Al",
    description: [
      "ตรวจสอบรูบนบอร์ด PCB ด้วย AI",
      "รู้ว่ามีรูอยู่ที่พิกัดตำแหน่งไหน",
    ],
    link: "https://github.com/Ratchanon00/PCB_Defect_Vision_Al",
    demoLink:
      "https://drive.google.com/drive/folders/12UhEOzrzq8GE0DBSOGjeobeQB7s21O1P?usp=sharing",
  },
  {
    title: "SolidWorks Design",
    description: [
      "นำชิ้นส่วนที่ออกแบบไปใช้งาน",
      "ทดสอบชิ้นส่วนว่าส่วนไหนรับน้ำหนักมากที่สุด",
      "ออกแบบชิ้นส่วนใน SolidWorks แล้วนำมาประกอบเข้าด้วยกัน",
    ],
    link: "https://github.com/Ratchanon00/SolidWork",
    demoLink:
      "https://drive.google.com/drive/folders/1HwJh-EImwoZqknTsA8hKiyzbsrRV3fnm?usp=sharing",
  },
  {
    title: "Android Studio - SafeGuard",
    description: [
      "ระบุตำแหน่งของยามในมหาวิทยาลัย",
      "เพื่อที่จะขอความช่วยเหลือได้รวดเร็ว",
    ],
    link: "https://github.com/Ratchanon00/JavaApp",
    demoLink:
      "https://drive.google.com/drive/folders/1yPTgtkgMRojqoajJPfNFR7vwQkTFvpuJ?usp=sharing",
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Certificates",
    link: "#certificates",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;
