(function () {
  const data = window.PORTFOLIO_DATA;
  const app = document.querySelector("#app");

  const routeTo = (path) => `#${path}`;

  function header(active = "") {
    return `
      <header class="site-header">
        <a class="brand" href="${routeTo("/")}" aria-label="ホーム">
          <img class="brand-mark" src="${data.artist.logo}" alt="">
          <span>${data.artist.name}</span>
        </a>
        <nav class="site-nav" aria-label="主要ナビゲーション">
          <a href="${routeTo("/")}" ${active === "work" ? 'aria-current="page"' : ""}>WORK</a>
          <a href="${routeTo("/about")}" ${active === "about" ? 'aria-current="page"' : ""}>ABOUT</a>
          <a href="${routeTo("/text")}" ${active === "text" ? 'aria-current="page"' : ""}>TEXT</a>
          <a href="${routeTo("/contact")}" ${active === "contact" ? 'aria-current="page"' : ""}>CONTACT</a>
        </nav>
      </header>`;
  }

  function footer() {
    return `
      <footer class="site-footer">
        <small>© 2026 KENTARO HASHIMOTO</small>
        <nav class="footer-links" aria-label="外部リンク">
          <a href="${data.artist.vimeo}" target="_blank" rel="noreferrer">VIMEO</a>
          <a href="mailto:${data.artist.email}">EMAIL</a>
        </nav>
      </footer>`;
  }

  function pageShell(content, active) {
    return `<div class="site-shell">${header(active)}<main id="main">${content}</main>${footer()}</div>`;
  }

  function workCard(work) {
    return `
      <article class="work-card">
        <a class="work-card-link" href="${routeTo(`/works/${work.slug}`)}">
          <span class="work-card-image-wrap">
            <img class="work-card-image" src="${work.image}" alt="${work.title}" loading="lazy">
          </span>
          <span class="work-card-meta">
            <span>${work.title}</span><span>${work.year}</span>
          </span>
        </a>
      </article>`;
  }

  function sectionHeading(en, ja) {
    return `<header class="section-heading"><p class="label-en">${en}</p><p class="label-ja" lang="ja">${ja}</p></header>`;
  }

  function copyBlocks(copy) {
    return ["ja", "en"].map((lang) => {
      const value = copy && copy[lang];
      const paragraphs = Array.isArray(value) ? value : value ? [value] : [];
      return paragraphs.map((paragraph) => `<p lang="${lang}">${paragraph}</p>`).join("");
    }).join("");
  }

  function homePage() {
    const cards = data.works.map(workCard).join("");
    return pageShell(`
      <section class="works-section">
        <div class="display-heading"><h1>WORK</h1><p lang="ja">作品</p></div>
        <div class="work-grid">${cards}</div>
      </section>`, "work");
  }

  function workPage(work) {
    const related = data.works.filter((item) => item.slug !== work.slug).map(workCard).join("");
    const gallery = work.gallery.map((image, index) => `<img src="${image}" alt="${work.title}の記録写真 ${index + 1}" loading="lazy">`).join("");
    return pageShell(`
      <article class="work-detail">
        <header class="work-header">
          <div><h1>${work.title}</h1>${work.titleJa ? `<p class="work-title-ja" lang="ja">${work.titleJa}</p>` : ""}</div>
          <dl class="work-meta">
            <div><dt>YEAR</dt><dd>${work.year}</dd></div>
            <div><dt>TYPE</dt><dd>${work.category}</dd></div>
            <div><dt>DURATION</dt><dd>${work.duration}</dd></div>
          </dl>
        </header>
        <div class="video-frame">
          <iframe src="https://player.vimeo.com/video/${work.vimeoId}?title=0&amp;byline=0&amp;portrait=0&amp;dnt=1" title="${work.title}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>
        </div>
        <section class="copy-section">
          ${sectionHeading("ABOUT THE WORK", "作品について")}
          <div class="bilingual-copy">${copyBlocks(work.caption)}</div>
        </section>
        <section class="gallery-section">
          ${sectionHeading("GALLERY", "記録写真")}
          <div class="gallery-grid">${gallery}</div>
        </section>
        <section class="other-works">
          ${sectionHeading("OTHER WORKS", "他の作品")}
          <div class="related-grid">${related}</div>
        </section>
      </article>`, "work");
  }

  function aboutPage() {
    return pageShell(`
      <header class="page-heading"><h1>ABOUT</h1><p lang="ja">橋本研太郎について</p></header>
      <section class="copy-section">
        ${sectionHeading("STATEMENT", "意志表明")}
        <div class="bilingual-copy">${copyBlocks(data.statement)}</div>
      </section>
      <section class="profile-section">
        ${sectionHeading("PROFILE", "略歴")}
        <div class="profile-identity">
          <p class="profile-name-ja" lang="ja">${data.artist.nameJa}</p>
          <p>${data.artist.name}</p>
          <p class="profile-role"><span lang="ja">${data.artist.roleJa}</span><span>|</span><span>${data.artist.roleEn}</span></p>
        </div>
        <div class="bilingual-copy">${copyBlocks(data.profile)}</div>
      </section>`, "about");
  }

  const escapeText = (value) => String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character]));
  const articles = [...(window.TEXT_ARTICLES || [])].sort((a, b) => b.date.localeCompare(a.date));
  const articleDate = (date) => `<time datetime="${escapeText(date)}">${escapeText(date.replaceAll("-", "."))}</time>`;

  function textPage() {
    return pageShell(`
      <header class="page-heading"><h1>TEXT</h1><p lang="ja">思索</p></header>
      <div class="text-list">${articles.map((article) => `
        <article class="text-entry">
          <a class="text-entry-link" href="${routeTo(`/text/${article.slug}`)}">
            ${articleDate(article.date)}
            <h2 lang="ja">${escapeText(article.title)}</h2>
          </a>
        </article>`).join("")}</div>`, "text");
  }

  function textArticlePage(article) {
    return pageShell(`
      <article class="text-article">
        <header class="text-article-header">
          <a class="label-en" href="${routeTo("/text")}">TEXT</a>
          <h1 lang="ja">${escapeText(article.title)}</h1>
          ${articleDate(article.date)}
        </header>
        <div class="text-body" lang="ja">${article.sections.map((section) => `
          <section>${section.heading ? `<h2>${escapeText(section.heading)}</h2>` : ""}
            ${section.paragraphs.map((paragraph) => `<p>${escapeText(paragraph)}</p>`).join("")}
          </section>`).join("")}</div>
        <a class="text-back label-en" href="${routeTo("/text")}">BACK TO TEXT</a>
      </article>`, "text");
  }

  function field(name, en, ja, type = "text") {
    const tag = type === "textarea"
      ? `<textarea id="${name}" name="${name}" required></textarea>`
      : `<input id="${name}" name="${name}" type="${type}" required>`;
    return `<label class="form-field" for="${name}"><span>${en}</span><span lang="ja">${ja}</span>${tag}</label>`;
  }

  function contactPage() {
    return pageShell(`
      <header class="page-heading"><h1>CONTACT</h1><p lang="ja">お問い合わせ</p></header>
      <form class="contact-form" action="${data.formEndpoint || "#"}" method="post" novalidate>
        ${field("name", "NAME", "お名前")}
        ${field("email", "EMAIL", "メールアドレス", "email")}
        ${field("message", "MESSAGE", "本文", "textarea")}
        <input class="honeypot" type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">
        <button class="submit-button" type="submit">SEND</button>
        <p class="form-status" role="status" aria-live="polite"></p>
      </form>
      <section class="social-section">
        ${sectionHeading("LINKS", "外部リンク")}
        <dl class="contact-links">
          <div><dt>VIMEO</dt><dd><a href="${data.artist.vimeo}" target="_blank" rel="noreferrer">${data.artist.vimeo.replace("https://", "")}</a></dd></div>
          <div><dt>EMAIL</dt><dd><a href="mailto:${data.artist.email}">${data.artist.email}</a></dd></div>
        </dl>
      </section>`, "contact");
  }

  function notFoundPage() {
    return pageShell(`<section class="not-found"><h1>404</h1><p>ページが見つかりませんでした。</p><a href="${routeTo("/")}">ホームへ戻る</a></section>`, "");
  }

  function bindContactForm() {
    const form = document.querySelector(".contact-form");
    if (!form) return;
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const status = form.querySelector(".form-status");
      if (!form.checkValidity()) {
        form.reportValidity();
        status.textContent = "入力内容を確認してください。";
        return;
      }
      if (!data.formEndpoint) {
        status.textContent = "現在フォームを利用できません。メールリンクをご利用ください。";
        return;
      }
      const button = form.querySelector(".submit-button");
      const defaultLabel = button.textContent;
      button.disabled = true;
      button.textContent = "SENDING...";
      status.textContent = "送信しています…";
      try {
        const response = await fetch(data.formEndpoint, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        });
        if (!response.ok) throw new Error("send failed");
        form.reset();
        status.textContent = "送信しました。ありがとうございます。";
      } catch (_error) {
        status.textContent = "送信できませんでした。時間を置いてもう一度お試しください。";
      } finally {
        button.disabled = false;
        button.textContent = defaultLabel;
      }
    });
  }

  function render() {
    const path = (window.location.hash.slice(1) || "/").replace(/\/$/, "") || "/";
    if (path === "/") {
      app.innerHTML = homePage();
      document.title = "Kentaro Hashimoto";
    } else if (path === "/about") {
      app.innerHTML = aboutPage();
      document.title = "About — Kentaro Hashimoto";
    } else if (path === "/text") {
      app.innerHTML = textPage();
      document.title = "Text — Kentaro Hashimoto";
    } else if (path.startsWith("/text/")) {
      const article = articles.find((item) => path === `/text/${item.slug}`);
      app.innerHTML = article ? textArticlePage(article) : notFoundPage();
      document.title = article ? `${article.title} — Kentaro Hashimoto` : "404 — Kentaro Hashimoto";
    } else if (path === "/contact") {
      app.innerHTML = contactPage();
      document.title = "Contact — Kentaro Hashimoto";
    } else if (path.startsWith("/works/")) {
      const work = data.works.find((item) => item.slug === path.split("/").pop());
      app.innerHTML = work ? workPage(work) : notFoundPage();
      document.title = work ? `${work.title} — Kentaro Hashimoto` : "404 — Kentaro Hashimoto";
    } else {
      app.innerHTML = notFoundPage();
      document.title = "404 — Kentaro Hashimoto";
    }
    bindContactForm();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll("video[autoplay]").forEach((video) => video.pause());
    }
    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", render);
  render();
})();
