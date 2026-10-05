export type Project = {
    id: string;
    title: string;
    description: string;
    tech: string[];
    image: string;
    link: string;
};

export const projectsData: Project[] = [
    {
        id: "erp",
        title: "Perencanaan Sumber Daya Perusahaan (ERP)",
        description: "Solusi ERP terpadu untuk mengelola proses dan operasional bisnis.",
        tech: ["Laravel", "Next.js", "PostgreSQL", "Docker"],
        image: "/assets/projects/erp.png",
        link: "#",
    },
    {
        id: "lp-ev",
        title: "Halaman Promosi Kendaraan Listrik",
        description: "Halaman promosi yang menarik untuk memperkenalkan kendaraan listrik beserta manfaatnya.",
        tech: ["HTML", "CSS", "JavaScript"],
        image: "/assets/projects/lp-ev.png",
        link: "https://radityabali.com/landing/electric-vehicle/"
    },
    {
        id: "lp-raditya",
        title: "Halaman Profil Perusahaan Raditya",
        description: "Halaman modern untuk menampilkan layanan perusahaan dan mendorong calon pelanggan mengambil tindakan.",
        tech: ["HTML", "CSS", "JavaScript"],
        image: "/assets/projects/lp-raditya.png",
        link: "#"
    }
];
