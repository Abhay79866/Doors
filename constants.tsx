
import { Product, Feature, NavItem, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Collection', href: '#collection' },
  { label: 'Craftsmanship', href: '#craftsmanship' },
  { label: 'Voices', href: '#voices' },
  { label: 'Showrooms', href: '#showrooms' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    title: 'Royal Teak Series',
    description: 'Traditional craftsmanship meet Grade-A Burma teak for a timeless entrance.',
    category: 'Classic Luxury',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCivxU5buXOeO0uX0_5NvHA2JufyN7lTDLSncpz2XnDsScOAuxD49iz8yylXwNPpb4TTjdhLaMPL-oPTJdRQIgHc_ksPCrZO8W6Nx7r_sYrr9RLPT2BsmEfsbIqELNYDexTp-6iRzzH1LGvP7v5s6UqOgM1bGYywBCGgLk61DF8URE9NXzemnQmQsyshTEdAvEMZRXPGOor8eGIxPSZYFtbRaWczfzwUEGHL_G8HO7Xm9F8OtE4jc05pNxhNvG0CddMrpCeP_i2SDg',
  },
  {
    id: 'p2',
    title: 'Modern Steel',
    description: 'Reinforced steel with architectural matte finishes. Perfect for modern minimalism.',
    category: 'Industrial Strength',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2HrxVeKIV3Lsv0Tv8bP6Nw213ZKVFVMGMOusaUfgin8p4Ew89Pe3pDYt2JWoE7LOluuXPnEcXceTqJafLAwEu3Yrvd-b7HC2JbghzkHnC6bHnU4ZT-lTs1BMWlbc8D1T7ACFdGrgqF3zwbDIkmY1Gc0njmR8bE3dLp7MjuGCP0cylto4lYgdGKNjJI7QMLySFqugIsUaHg9qrC8ghRm7tmgKxfDPLfYilGL686Wp64MwvD0ypI1XpRV18FE0WKthr4YkUiUAIvZg',
  },
  {
    id: 'p3',
    title: 'Smart Biometric',
    description: 'Seamless integration of biometric locks and IoT connectivity into solid wood.',
    category: 'Future Tech',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1XZGul54MDSZXntZJezQTgjp_Uk9k_XpXBHDDWvZ0Jw867BRXzSbYmLF9qg_Oa4CBXZVH-G9fZa7G5J6BYpUa2ZjjJLaRzqUx846l1I49DDVMQrN0l0s3q-7EtQS9t23-lL_HexESxFnszPjwvRD4OCN6xPWuTG2gomFgTMaVD_LlQfx_z3LvxA_LI4BdSFU5O8V3OQUADWxXGL6NTuoFIDdeokvIrpcjAEduEZP7FsWAQAjeG2oaqJL_tUXLHCOAQ_ucMPpxOH4',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    initials: 'AS',
    author: 'ARAVIND SUBRAMANIAN',
    project: 'KOCHI HERITAGE VILLA',
    rating: 5,
    text: '"The engineering precision of the steel core is unmatched. It provides a tactile sense of security that is both silent and formidable. A masterpiece of industrial luxury."',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMlpjOJY4nBTnVHHzL-u08GJBgZiLNRrjtbVpYr0Vheh82UWRNK7hX-vbph8WD42ACXng0oLkQG_V9MazneDsxqTVk4M8Q17KtrxIO_5tBUlWxgWv_SsW1X1QpQj6a-cU1espehjNjStShUGi01YkFCj1bkwfxnDMBtuo7jrTt2aWVK8SdNsXJR-lH4Ejy-MXPIP1JZSG_9n2BxG66iO7y8MmAjyges_Y8VPRsfOWeWJW-iXSwmrfnHzOb4hIHgpmH2K4j6nzv_bc'
  },
  {
    id: 't2',
    initials: 'SJ',
    author: 'SARAH JENKINS',
    project: 'MALIBU CLIFF RESIDENCE',
    rating: 5,
    text: '"Burma teak has a soul that no other material can replicate. MalluPur-Doors captured the exact grain pattern we envisioned for our main entrance and executed it flawlessly."',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCa3x1hYKGTQ7jtPMQTzpfSJWHZ5VKSmcWss_1OpKARWAUwIRw6ULgpL8K0_R7oUOHJTcdMUIX0Ra1el3vutTgoHBuCWd6X1klgFl3Vh4emdYFlomppIWF4l1XdWV15MstXLK9GinAWDTaTiLy9okIRft_GPGJojb7S9F-FDoYyxMddpymjFV41DtxLDyaUPup1leggvAZaJQVRiuSjZ3SvOVxY7981lZwNpq_pJiV-HxUmm-nVnnfB5mGtTGAZhAhcewBqPxYBddM'
  },
  {
    id: 't3',
    initials: 'EV',
    author: 'DR. ELIAS VANCE',
    project: 'LONDON PENTHOUSE',
    rating: 5,
    text: '"The biometric integration is incredibly seamless. It is the first time I have seen high-tech security truly respect the aesthetic of traditional, hand-carved woodwork."',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjy0ZHPoTDdofhsdAM9j2qKFN2aVHgDJ791uK2zFHdLYq5Wbx-zKVnamJD2jnrlwijmu49klbbKVb2dkuGJzNs0S2M55SQkk_Iapyms-qV0D-J8keHR-HhltLhteNgkrnX60ce4iqoND7qYOJOarjwf75FpvpEpHwO0uygjYI4JQGYq_e06FsmetNOJNPFUUJo3nZzVVfrYoDDANW4lxBATXnlgxh1JHUj-zHJ0as5itzZdSikUDz1Vx-GTeKx6uxroliWvDgUaoI'
  },
  {
    id: 't4',
    initials: 'MC',
    author: 'MARCUS CHEN',
    project: 'SINGAPORE CORPORATE HQ',
    rating: 5,
    text: '"Scale and durability were our primary concerns for the executive suite. The custom double-height steel doors they produced are nothing short of architectural marvels."',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfeE30bwLAcfuxQjm-Dz-fXqNlFm9Zzbhp2BYz14utr3EXLBPrleuVzEEQpRJHvfp8A-145Tc4phrz3_9skIdU0CdrfZbargY7i7YFWSERL9e8Z9twwDSu_4u2ysjl89WzPlLDx6lgeWepWPDkrewOlmuZfCmgs1c__PtQAhX40ui79ZfMmk-RInSsMCQXwuovvs4z35_XQdOgICoj-aiqEnuuoKt3Zj7Uq4e3vPRRLACgU8Wpq8b1zXGrBcHfUvXZZcPDWa_1QI8'
  }
];

export const FEATURES: Feature[] = [
  {
    icon: 'gpp_good',
    title: 'High Security',
    description: 'Multi-point locking systems and reinforced cores ensure your sanctuary remains safe.',
  },
  {
    icon: 'wb_sunny',
    title: 'Weather Proof',
    description: 'Specialized nano-coatings protect against humidity, UV rays, and extreme temperature shifts.',
  },
  {
    icon: 'verified_user',
    title: 'White-Glove Service',
    description: 'From digital site measurement to final installation, we handle everything with precision.',
  },
];

export const TEXTURES = [
    {
        title: "Rich Teak Grain",
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCa3x1hYKGTQ7jtPMQTzpfSJWHZ5VKSmcWss_1OpKARWAUwIRw6ULgpL8K0_R7oUOHJTcdMUIX0Ra1el3vutTgoHBuCWd6X1klgFl3Vh4emdYFlomppIWF4l1XdWV15MstXLK9GinAWDTaTiLy9okIRft_GPGJojb7S9F-FDoYyxMddpymjFV41DtxLDyaUPup1leggvAZaJQVRiuSjZ3SvOVxY7981lZwNpq_pJiV-HxUmm-nVnnfB5mGtTGAZhAhcewBqPxYBddM",
        colSpan: "md:col-span-2",
        rowSpan: ""
    },
    {
        title: "Hand-forged Steel",
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDr6QclTqsfp5i-F1VdfUxXvfRqW3qMHmw3IgDVE2UY1MHaw95xHTmkW5yAm13ZFkh0-kQdZTvj8cfmJAVjLWBu0aApVqdo7Bbzyr_BTAPHk-zuYwSeVZED-KbvD0T73aUOmdHaw40UW5J4RdkkoWOrCa7sasaGpHxo7QIjBCM44v6S0FFwl3WWcSQX6vD0mpIFbeFo_cvy2PuNhDgUT4j8bpV0LFEl93K9-Da7UCkRroj0RrVji-jc5wchgNmcWDvyLyFZ1498BBQ",
        colSpan: "",
        rowSpan: ""
    },
    {
        title: "Intricate Carvings",
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjy0ZHPoTDdofhsdAM9j2qKFN2aVHgDJ791uK2zFHdLYq5Wbx-zKVnamJD2jnrlwijmu49klbbKVb2dkuGJzNs0S2M55SQkk_Iapyms-qV0D-J8keHR-HhltLhteNgkrnX60ce4iqoND7qYOJOarjwf75FpvpEpHwO0uygjYI4JQGYq_e06FsmetNOJNPFUUJo3nZzVVfrYoDDANW4lxBATXnlgxh1JHUj-zHJ0as5itzZdSikUDz1Vx-GTeKx6uxroliWvDgUaoI",
        colSpan: "",
        rowSpan: ""
    },
    {
        title: "Smart Hardware Detail",
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfeE30bwLAcfuxQjm-Dz-fXqNlFm9Zzbhp2BYz14utr3EXLBPrleuVzEEQpRJHvfp8A-145Tc4phrz3_9skIdU0CdrfZbargY7i7YFWSERL9e8Z9twwDSu_4u2ysjl89WzPlLDx6lgeWepWPDkrewOlmuZfCmgs1c__PtQAhX40ui79ZfMmk-RInSsMCQXwuovvs4z35_XQdOgICoj-aiqEnuuoKt3Zj7Uq4e3vPRRLACgU8Wpq8b1zXGrBcHfUvXZZcPDWa_1QI8",
        colSpan: "md:col-span-4",
        rowSpan: "md:h-[280px]"
    }
];
