/* ==========================================================================
   SLICO — script.js
   ========================================================================== */

/* ---------------------------------------------------------------
   1. TRANSLATIONS
   --------------------------------------------------------------- */
const translations = {
  en: {
    nav_story: "Story",
    nav_why: "Why SLICO",
    nav_product: "Product",
    nav_ingredients: "Ingredients",
    nav_gallery: "Gallery",
    nav_faq: "FAQ",
    nav_cta: "Order Now",

    hero_eyebrow: "Indonesian Coffee, Reimagined",
    hero_title_1: "Coffee,",
    hero_title_2: "Now in a Slice.",
    hero_sub:
      "A new way to enjoy coffee — no brewing, no waiting. Just pure Indonesian coffee in a convenient slice, ready anytime.",
    hero_btn_discover: "Discover",
    hero_btn_order: "Order Now",
    hero_btn_story: "Watch Story",
    scroll_cue: "Scroll",

    story_eyebrow: "The Beginning",
    story_title: "It All Started With a Question.",
    story_p1:
      "What if enjoying great coffee didn't always require brewing? That simple question became the starting point of SLICO's journey. We believe that enjoying coffee should be more practical without losing its authentic character and aroma.",
    story_p2:
      "Driven by a spirit of innovation and love for Indonesian coffee, we created Coffee Slice—a new way to enjoy coffee that can be savored instantly, anytime, without hot water, brewing tools, or long waits.",
    story_p3:
      "SLICO is more than just a coffee product. It's a new way to experience coffee that combines the quality of Indonesian beans with modern innovation, so coffee can accompany every moment wherever you are.",
    story_quote:
      "“Because a cup of coffee isn't the only way to enjoy coffee.”",

    exp_eyebrow: "The Experience",
    exp_1_title: "No Hot Water",
    exp_1_desc: "Forget the kettle and the espresso machine.",
    exp_2_title: "No Waiting",
    exp_2_desc: "One bite, and the coffee is already there.",
    exp_3_title: "Anywhere",
    exp_3_desc: "From your desk to the mountain summit.",
    exp_4_title: "Anytime",
    exp_4_desc: "Morning, noon, night — SLICO is always ready.",

    product_eyebrow: "The Collection",
    product_title: "Product Showcase",
    product_1_name: "SLICO Original",
    product_1_desc:
      "Authentic Indonesian coffee flavor with a balanced character, easy to enjoy anytime.",
    product_2_name: "SLICO Classic",
    product_2_desc:
      "A smooth blend of coffee taste with rich aroma to accompany your daily activities.",
    product_3_name: "SLICO Signature",
    product_3_desc:
      "A premium choice with more complex flavor character for true coffee lovers.",
    product_price: "Coming Soon",
    product_btn: "View Details",

    ingredients_eyebrow: "From Bean to Slice",
    ingredients_title: "The Process",
    ing_1_title: "Handpicked Cherries",
    ing_1_desc:
      "We use only high-quality Indonesian coffee beans harvested at peak ripeness.",
    ing_2_title: "Precision Roasting",
    ing_2_desc:
      "The roasting process is done carefully to preserve the coffee's aroma and flavor character.",
    ing_3_title: "Quality Extraction",
    ing_3_desc:
      "Produces rich coffee flavor without losing the authenticity of the bean's character.",
    ing_4_title: "Coffee Slice Innovation",
    ing_4_desc:
      "Processed into practical coffee slices ready to be enjoyed anytime without brewing.",
    ing_5_title: "Modern Packaging",
    ing_5_desc:
      "Every Coffee Slice is hygienically packaged to maintain its quality and aroma.",

    enjoy_eyebrow: "A Simple Ritual",
    enjoy_title: "How To Enjoy",
    enjoy_1_title: "Open the Pack",
    enjoy_1_desc:
      "Open the SLICO package whenever you need it — it's that simple.",
    enjoy_2_title: "Take a Slice",
    enjoy_2_desc: "Take out one Coffee Slice, ready to be enjoyed.",
    enjoy_3_title: "Enjoy Directly",
    enjoy_3_desc:
      "No brewing needed. Experience coffee in a completely new way.",
    enjoy_4_title: "Take It Anywhere",
    enjoy_4_desc:
      "Keep it in your bag, pocket, or desk so coffee is always ready to accompany your activities.",

    gallery_eyebrow: "A Closer Look",
    gallery_title: "Gallery",
    gallery_1: "Selected Indonesian coffee beans",
    gallery_2: "Precision roasting process",
    gallery_3: "Coffee Slice innovation",
    gallery_4: "Ready to enjoy anytime",
    gallery_5: "Practical without brewing",
    gallery_6: "A new way to enjoy coffee",

    testi_eyebrow: "In Their Words",
    testi_title: "What People Are Saying",
    testi_1:
      "I never imagined enjoying coffee could be this easy. So practical for travel.",
    testi_1_name: "Amara L.",
    testi_1_loc: "Jakarta, Indonesia",
    testi_2:
      "The concept is truly different. It still tastes like real coffee but without the brewing.",
    testi_2_name: "Kenji T.",
    testi_2_loc: "Bandung, Indonesia",
    testi_3:
      "SLICO is always in my bag. Practical, unique, and the taste stays premium.",
    testi_3_name: "Sofia R.",
    testi_3_loc: "Surabaya, Indonesia",
    testi_4:
      "A coffee innovation that I believe will be the new way to enjoy coffee in the future.",
    testi_4_name: "Daniel K.",
    testi_4_loc: "Yogyakarta, Indonesia",

    faq_eyebrow: "Good To Know",
    faq_title: "Frequently Asked Questions",
    faq_1_q: "What is SLICO?",
    faq_1_a:
      "SLICO is an innovative Coffee Slice that allows you to enjoy coffee without needing to brew it with hot water.",
    faq_2_q: "How do I enjoy it?",
    faq_2_a:
      "Simply open the package, take a Coffee Slice, and enjoy it anytime, anywhere.",
    faq_3_q: "Does it use real coffee?",
    faq_3_a:
      "Yes. SLICO is made from high-quality Indonesian coffee beans, delivering authentic coffee taste and aroma.",
    faq_4_q: "Is it easy to carry when traveling?",
    faq_4_a:
      "Very easy. Its compact form makes it practical to carry while working, traveling, hiking, or during daily activities.",
    faq_5_q: "Who is SLICO for?",
    faq_5_a:
      "SLICO is for anyone who wants to enjoy coffee in a more practical, modern, and hassle-free way.",

    cta_title: "Ready to Experience Coffee Differently?",
    cta_sub:
      "Discover the first Coffee Slice experience from Indonesia. Practical, modern, and always ready to accompany your activities.",
    cta_btn: "Order Now",

    footer_desc:
      "SLICO presents Coffee Slice innovation — a new way to enjoy Indonesian coffee without brewing.",
    footer_explore: "Explore",
    footer_contact: "Contact",
    footer_lang: "Language",
    footer_rights: "All rights reserved.",
    footerTagline: "Enjoy Coffee, Without Brewing.",

    lightbox_close: "Close",
  },

  id: {
    nav_story: "Kisah",
    nav_why: "Kenapa SLICO",
    nav_product: "Produk",
    nav_ingredients: "Proses",
    nav_gallery: "Galeri",
    nav_faq: "FAQ",
    nav_cta: "Pesan Sekarang",

    hero_eyebrow: "Inovasi Baru Kopi Indonesia",
    hero_title_1: "Kopi,",
    hero_title_2: "Kini Dalam Bentuk Slice.",
    hero_sub:
      "Nikmati pengalaman baru menikmati kopi tanpa perlu diseduh. Praktis, modern, dan tetap menghadirkan cita rasa kopi Indonesia yang autentik.",
    hero_btn_discover: "Jelajahi",
    hero_btn_order: "Pesan Sekarang",
    hero_btn_story: "Lihat Kisah",
    scroll_cue: "Gulir",

    story_eyebrow: "Awal Mula",
    story_title: "Semua Berawal dari Sebuah Pertanyaan.",
    story_p1:
      "Bagaimana jika menikmati kopi tidak selalu harus diseduh? Pertanyaan sederhana itulah yang menjadi awal perjalanan SLICO. Kami percaya bahwa menikmati kopi seharusnya bisa lebih praktis tanpa kehilangan karakter rasa dan aroma khasnya.",
    story_p2:
      "Berbekal semangat inovasi dan kecintaan terhadap kopi Indonesia, kami menghadirkan Kopi Slice—cara baru menikmati kopi yang dapat dinikmati langsung kapan saja, tanpa perlu air panas, alat seduh, maupun waktu yang lama.",
    story_p3:
      "SLICO bukan sekadar produk kopi. SLICO adalah pengalaman baru menikmati kopi yang memadukan kualitas biji kopi Indonesia dengan inovasi modern, sehingga kopi bisa menemani setiap momen di mana pun Anda berada.",
    story_quote:
      "“Karena secangkir kopi bukan satu-satunya cara menikmati kopi.”",

    exp_eyebrow: "Kenapa Harus SLICO?",
    exp_1_title: "Tanpa Air Panas",
    exp_1_desc: "Lupakan ketel dan mesin espresso.",
    exp_2_title: "Tanpa Menunggu",
    exp_2_desc: "Satu gigitan, kopi langsung terasa.",
    exp_3_title: "Di Mana Saja",
    exp_3_desc: "Dari meja kerja hingga puncak gunung.",
    exp_4_title: "Kapan Saja",
    exp_4_desc: "Pagi, siang, malam — SLICO selalu siap.",

    product_eyebrow: "Produk",
    product_title: "Koleksi SLICO",
    product_1_name: "SLICO Original",
    product_1_desc:
      "Rasa autentik kopi Indonesia dengan karakter yang seimbang dan mudah dinikmati kapan saja.",
    product_2_name: "SLICO Classic",
    product_2_desc:
      "Perpaduan cita rasa kopi yang lembut dengan aroma yang kaya untuk menemani aktivitas sehari-hari.",
    product_3_name: "SLICO Signature",
    product_3_desc:
      "Pilihan premium dengan karakter rasa lebih kompleks untuk pecinta kopi sejati.",
    product_price: "Segera Hadir",
    product_btn: "Lihat Detail",

    ingredients_eyebrow: "Proses",
    ingredients_title: "Dari Biji Kopi Menjadi Coffee Slice",
    ing_1_title: "Biji Kopi Pilihan",
    ing_1_desc:
      "Kami hanya menggunakan biji kopi Indonesia berkualitas yang dipanen pada tingkat kematangan terbaik.",
    ing_2_title: "Disangrai Dengan Presisi",
    ing_2_desc:
      "Proses roasting dilakukan secara hati-hati untuk menjaga aroma dan karakter rasa kopi.",
    ing_3_title: "Ekstraksi Berkualitas",
    ing_3_desc:
      "Menghasilkan cita rasa kopi yang kaya tanpa menghilangkan keaslian karakter bijinya.",
    ing_4_title: "Inovasi Coffee Slice",
    ing_4_desc:
      "Diproses menjadi lembaran kopi praktis yang siap dinikmati kapan pun tanpa perlu diseduh.",
    ing_5_title: "Dikemas Modern",
    ing_5_desc:
      "Setiap Coffee Slice dikemas higienis agar kualitas rasa dan aromanya tetap terjaga.",

    enjoy_eyebrow: "Cara Menikmati",
    enjoy_title: "Semudah Ini Menikmati SLICO",
    enjoy_1_title: "Buka Kemasan",
    enjoy_1_desc:
      "Buka kemasan SLICO dengan mudah kapan pun Anda membutuhkannya.",
    enjoy_2_title: "Ambil Coffee Slice",
    enjoy_2_desc: "Keluarkan satu lembar Coffee Slice yang siap dinikmati.",
    enjoy_3_title: "Nikmati Langsung",
    enjoy_3_desc:
      "Tidak perlu diseduh. Langsung nikmati sensasi kopi dengan cara yang benar-benar baru.",
    enjoy_4_title: "Bawa Ke Mana Saja",
    enjoy_4_desc:
      "Simpan di tas, saku, atau meja kerja agar kopi selalu siap menemani aktivitas Anda.",

    gallery_eyebrow: "Lebih Dekat",
    gallery_title: "Galeri SLICO",
    gallery_1: "Biji kopi pilihan Indonesia",
    gallery_2: "Proses roasting penuh presisi",
    gallery_3: "Inovasi Coffee Slice",
    gallery_4: "Siap dinikmati kapan saja",
    gallery_5: "Praktis tanpa perlu diseduh",
    gallery_6: "Pengalaman baru menikmati kopi",

    testi_eyebrow: "Cerita Mereka",
    testi_title: "Apa Kata Mereka",
    testi_1:
      "Saya tidak pernah membayangkan menikmati kopi bisa semudah ini. Sangat praktis untuk perjalanan.",
    testi_1_name: "Amara L.",
    testi_1_loc: "Jakarta",
    testi_2:
      "Konsepnya benar-benar berbeda. Rasanya tetap seperti kopi asli tetapi tanpa perlu menyeduh.",
    testi_2_name: "Kenji T.",
    testi_2_loc: "Bandung",
    testi_3:
      "SLICO selalu ada di tas saya. Praktis, unik, dan rasanya tetap premium.",
    testi_3_name: "Sofia R.",
    testi_3_loc: "Surabaya",
    testi_4:
      "Inovasi kopi yang menurut saya akan menjadi cara baru menikmati kopi di masa depan.",
    testi_4_name: "Daniel K.",
    testi_4_loc: "Yogyakarta",

    faq_eyebrow: "FAQ",
    faq_title: "Pertanyaan Yang Sering Diajukan",
    faq_1_q: "Apa itu SLICO?",
    faq_1_a:
      "SLICO adalah inovasi Coffee Slice yang memungkinkan Anda menikmati kopi tanpa perlu diseduh menggunakan air panas.",
    faq_2_q: "Bagaimana cara menikmatinya?",
    faq_2_a:
      "Cukup buka kemasan, ambil Coffee Slice, lalu nikmati langsung kapan saja dan di mana saja.",
    faq_3_q: "Apakah tetap menggunakan kopi asli?",
    faq_3_a:
      "Ya. SLICO dibuat menggunakan biji kopi Indonesia berkualitas sehingga tetap menghadirkan cita rasa dan aroma kopi yang autentik.",
    faq_4_q: "Apakah mudah dibawa bepergian?",
    faq_4_a:
      "Sangat mudah. Bentuknya ringkas sehingga praktis dibawa saat bekerja, traveling, mendaki, maupun aktivitas sehari-hari.",
    faq_5_q: "Siapa yang cocok menikmati SLICO?",
    faq_5_a:
      "SLICO cocok bagi siapa saja yang ingin menikmati kopi dengan cara yang lebih praktis, modern, dan tanpa ribet.",

    cta_title: "Siap Merasakan Cara Baru Menikmati Kopi?",
    cta_sub:
      "Temukan pengalaman menikmati Coffee Slice pertama dari Indonesia. Praktis, modern, dan selalu siap menemani aktivitas Anda.",
    cta_btn: "Pesan Sekarang",

    footer_desc:
      "SLICO menghadirkan inovasi Coffee Slice, cara baru menikmati kopi Indonesia tanpa perlu diseduh.",
    footer_explore: "Jelajahi",
    footer_contact: "Kontak",
    footer_lang: "Bahasa",
    footer_rights: "Hak cipta dilindungi.",
    footerTagline: "Nikmati Kopi, Tanpa Diseduh.",

    lightbox_close: "Tutup",
  },
};

let currentLang = "id";

function applyTranslations(lang) {
  const dict = translations[lang];
  document.body.classList.add("lang-fading");
  setTimeout(() => {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.documentElement.lang = lang;
    document.querySelectorAll(".lang-switch button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
    document.body.classList.remove("lang-fading");
  }, 180);
}

function initLangSwitch() {
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      if (lang === currentLang) return;
      currentLang = lang;
      applyTranslations(lang);
      localStorage.setItem("koples-lang", lang); // in-memory fallback below if unsupported
    });
  });
  applyTranslations(currentLang);
}

/* ---------------------------------------------------------------
   2. LOADER
   --------------------------------------------------------------- */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.classList.add("loader-hidden");
    document.body.classList.remove("no-scroll");
    animateHeroIn();
  }, 1400);
});

/* ---------------------------------------------------------------
   3. NAVBAR + SCROLL PROGRESS
   --------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const progress = document.getElementById("scroll-progress");
  const backToTop = document.getElementById("back-to-top");

  function onScroll() {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progress.style.width = pct + "%";

    navbar.classList.toggle("nav-scrolled", scrollTop > 40);
    backToTop.classList.toggle("show", scrollTop > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // mobile menu
  const menuBtn = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    menuBtn.classList.toggle("open");
  });
  mobileMenu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuBtn.classList.remove("open");
    }),
  );

  // active link highlight
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const linkObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === "#" + entry.target.id,
            );
          });
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );
  sections.forEach((sec) => linkObserver.observe(sec));
}

/* ---------------------------------------------------------------
   4. BUTTON RIPPLE
   --------------------------------------------------------------- */
function initRipple() {
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement("span");
      const size = Math.max(rect.width, rect.height);
      ripple.className = "ripple";
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = e.clientX - rect.left - size / 2 + "px";
      ripple.style.top = e.clientY - rect.top - size / 2 + "px";
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    });
  });
}

/* ---------------------------------------------------------------
   5. SCROLL REVEAL (IntersectionObserver based)
   --------------------------------------------------------------- */
function initReveal() {
  const targets = document.querySelectorAll(
    ".reveal, .reveal-scale, .reveal-line",
  );
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    { threshold: 0.15 },
  );
  targets.forEach((t) => io.observe(t));
}

/* ---------------------------------------------------------------
   6. HERO — mouse parallax, steam, beans
   --------------------------------------------------------------- */
function animateHeroIn() {
  document.querySelectorAll("#hero .hero-anim").forEach((el, i) => {
    setTimeout(() => el.classList.add("in-view"), i * 160);
  });
}

function initHeroParallax() {
  const hero = document.getElementById("hero");
  const jar = document.getElementById("hero-jar");
  const layerBack = document.querySelector(".hero-beans-back");
  if (!hero) return;
  hero.addEventListener("mousemove", (e) => {
    const { innerWidth: w, innerHeight: h } = window;
    const x = e.clientX / w - 0.5;
    const y = e.clientY / h - 0.5;
    if (jar)
      jar.style.transform = `translate(${x * 18}px, ${y * 14}px) rotate(${x * 2}deg)`;
    if (layerBack)
      layerBack.style.transform = `translate(${x * -28}px, ${y * -20}px)`;
  });
}

/* ---------------------------------------------------------------
   7. JAR SWIRL FILL (tied to Brand Story scroll progress)
   --------------------------------------------------------------- */
function initSwirlFill() {
  const wrap = document.getElementById("story-swirl-wrap");
  const fill = document.getElementById("jar-swirl-fill");
  if (!wrap || !fill) return;

  function update() {
    const rect = wrap.getBoundingClientRect();
    const vh = window.innerHeight;
    const total = rect.height + vh;
    const traveled = vh - rect.top;
    let pct = traveled / total;
    pct = Math.max(0, Math.min(1, pct));
    fill.style.transform = `scaleY(${pct})`;
  }
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

/* ---------------------------------------------------------------
   8. INGREDIENTS TIMELINE FILL
   --------------------------------------------------------------- */
function initTimelineFill() {
  const track = document.getElementById("ing-track");
  const fill = document.getElementById("ing-line-fill");
  const steps = document.querySelectorAll(".ing-step");
  if (!track || !fill) return;

  function update() {
    const rect = track.getBoundingClientRect();
    const vh = window.innerHeight;
    const total = rect.height;
    let traveled = vh * 0.6 - rect.top;
    let pct = traveled / total;
    pct = Math.max(0, Math.min(1, pct));
    fill.style.height = pct * 100 + "%";
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("in-view");
      });
    },
    { threshold: 0.4 },
  );
  steps.forEach((s) => io.observe(s));

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

/* ---------------------------------------------------------------
   9. COUNTERS
   --------------------------------------------------------------- */
function initCounters() {
  const counters = document.querySelectorAll(".counter");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.target, 10);
          const suffix = el.dataset.suffix || "";
          let cur = 0;
          const duration = 1600;
          const start = performance.now();
          function tick(now) {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            cur = Math.floor(eased * target);
            el.textContent = cur.toLocaleString() + suffix;
            if (p < 1) requestAnimationFrame(tick);
            else el.textContent = target.toLocaleString() + suffix;
          }
          requestAnimationFrame(tick);
          io.unobserve(el);
        }
      });
    },
    { threshold: 0.5 },
  );
  counters.forEach((c) => io.observe(c));
}

/* ---------------------------------------------------------------
   10. GALLERY LIGHTBOX
   --------------------------------------------------------------- */
function initLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("lightbox-close");

  document.querySelectorAll(".gallery-item img").forEach((img) => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add("open");
      document.body.classList.add("no-scroll");
    });
  });

  function close() {
    lightbox.classList.remove("open");
    document.body.classList.remove("no-scroll");
  }
  closeBtn.addEventListener("click", close);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

/* ---------------------------------------------------------------
   11. FAQ ACCORDION
   --------------------------------------------------------------- */
function initFAQ() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach((i) => {
        i.classList.remove("open");
        i.querySelector(".faq-answer").style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add("open");
        const answer = item.querySelector(".faq-answer");
        answer.style.maxHeight = answer.scrollHeight + 60 + "px";
      }
    });
  });
}

/* ---------------------------------------------------------------
   12. TESTIMONIAL SLIDER (Swiper)
   --------------------------------------------------------------- */
function initSwiper() {
  if (typeof Swiper === "undefined") return;
  new Swiper(".testi-swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 24,
    autoplay: { delay: 4500, disableOnInteraction: false },
    pagination: { el: ".swiper-pagination", clickable: true },
    breakpoints: {
      768: { slidesPerView: 2 },
      1100: { slidesPerView: 3 },
    },
  });
}

/* ---------------------------------------------------------------
   13. LENIS SMOOTH SCROLL
   --------------------------------------------------------------- */
function initLenis() {
  if (typeof Lenis === "undefined") return;
  const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

/* ---------------------------------------------------------------
   14. FLOATING BEANS GENERATOR (hero)
   --------------------------------------------------------------- */
function generateBeans() {
  const container = document.getElementById("floating-beans");
  if (!container) return;
  const count = window.innerWidth < 768 ? 6 : 12;
  for (let i = 0; i < count; i++) {
    const bean = document.createElement("div");
    bean.className = "bean-float";
    bean.style.left = Math.random() * 100 + "%";
    bean.style.top = Math.random() * 100 + "%";
    bean.style.width = bean.style.height = 8 + Math.random() * 10 + "px";
    bean.style.animationDuration = 5 + Math.random() * 6 + "s";
    bean.style.animationDelay = Math.random() * 4 + "s";
    bean.innerHTML = `<svg viewBox="0 0 32 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 2C8 2 2 12 2 22C2 34 8 42 16 42C24 42 30 34 30 22C30 12 24 2 16 2Z" fill="#5C3D2E"/><path d="M16 4C13 12 13 32 16 40" stroke="#C89B3C" stroke-width="1.5" stroke-linecap="round"/></svg>`;
    container.appendChild(bean);
  }
}

/* ---------------------------------------------------------------
   INIT
   --------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("no-scroll");
  initLangSwitch();
  initNavbar();
  initRipple();
  initReveal();
  initHeroParallax();
  initSwirlFill();
  initTimelineFill();
  initCounters();
  initLightbox();
  initFAQ();
  initSwiper();
  initLenis();
  generateBeans();

  // set current year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

/* =========================================================
   HORIZONTAL SCROLL EXPERIENCE SECTION
========================================================= */
function initExperienceScroll() {
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // Get track and panels
  const track = document.getElementById("experience-track");
  const panels = gsap.utils.toArray(".exp-panel");

  // Calculate total scroll distance
  const totalScroll = () => track.scrollWidth - window.innerWidth;

  // Animate track horizontally
  const tween = gsap.to(track, {
    x: () => -totalScroll(),
    ease: "none",
    scrollTrigger: {
      trigger: "#experience-pin",
      start: "top top",
      end: () => "+=" + (totalScroll() + window.innerHeight),
      scrub: 0.6,
      pin: true,
      invalidateOnRefresh: true,
    },
  });

  // Animate each panel's content (fade in + slide up)
  panels.forEach((p) => {
    gsap.fromTo(
      p.querySelectorAll("h3, p"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: p,
          containerAnimation: tween,
          start: "left 70%",
          toggleActions: "play none none reverse",
        },
      },
    );
  });
}

// Initialize on load
window.addEventListener("load", () => {
  initExperienceScroll();
  ScrollTrigger.refresh();
});

// Refresh on resize
window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});
