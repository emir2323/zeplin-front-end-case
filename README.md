# Zeplin Front-End Case 🚀

Bu proje, modern web teknolojileri kullanılarak geliştirilmiş, **Next.js (App Router)**, **Tailwind CSS** ve **TypeScript** tabanlı bir ön yüz uygulamasıdır. Verilen Zeplin tasarımına sadık kalınarak, pixel-perfect ve responsive bir yapı oluşturulmuştur.

![Desktop View](./public/screenshot-desktop.png)

## 🌟 Özellikler (Features)

*   **📱 Mobil Öncelikli (Mobile-First):** Tüm cihazlarda kusursuz görünen responsive tasarım.
*   **🧩 Bileşen Tabanlı Mimari:** `Button`, `Badge`, `MagazineCard` gibi yeniden kullanılabilir, atomik bileşenler.
*   **🎨 Tasarım Sistemi:** Style Guide'dan alınan renk paleti ve tipografi ayarlarının Tailwind CSS v4 ile global entegrasyonu.
*   **✨ Pixel-Perfect Uygulama:** Tasarım detaylarına (gölgeler, boşluklar, fontlar) maksimum özen.

## 🛠️ Teknolojiler

Projede kullanılan temel teknoloji ve kütüphaneler:

*   **[Next.js 15+](https://nextjs.org/):** React Framework (App Router).
*   **[TypeScript](https://www.typescriptlang.org/):** Tip güvenliği için.
*   **[Tailwind CSS v4](https://tailwindcss.com/):** Utility-first CSS framework (CSS Variables tabanlı).
*   **[Lucide React](https://lucide.dev/):** Modern ve hafif ikon seti.
*   **[clsx](https://github.com/lukeed/clsx) & [tailwind-merge](https://github.com/dcastil/tailwind-merge):** Dinamik sınıf yönetimi için.

## 🚀 Kurulum (Installation)

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1.  **Projeyi Klonlayın:**
    ```bash
    git clone https://github.com/emir2323/zeplin-front-end-case.git
    cd zeplin-front-end-case
    ```

2.  **Bağımlılıkları Yükleyin:**
    ```bash
    npm install
    # veya
    yarn install
    ```

3.  **Geliştirme Sunucusunu Başlatın:**
    ```bash
    npm run dev
    ```

4.  **Tarayıcıda Açın:**
    Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine giderek uygulamayı görüntüleyebilirsiniz.

## 📂 Klasör Yapısı

Projenin temel dizin yapısı aşağıdaki gibidir:

```
zeplin-case/
├── app/                  # Next.js App Router sayfaları (page.tsx, layout.tsx)
├── components/           # React bileşenleri
│   ├── layout/           # Header, Footer gibi düzen bileşenleri
│   ├── ui/               # Button, Badge gibi temel UI bileşenleri
│   └── ...               # MagazineCard, ArticleCard gibi feature bileşenleri
├── lib/                  # Yardımcı fonksiyonlar (utils.ts vb.)
├── public/               # Statik dosyalar ve görseller
├── styles/               # Global CSS ve Tailwind ayarları
└── ...
```

---
*Geliştirici: Emir Yıldırım*
