---
layout: about
title: about
permalink: /
subtitle: >
  Co-Founder &amp; Head of Technology, <a href="https://gaius.bio">Gaius Therapeutics</a> ·
  Computational biologist &amp; ML researcher ·
  <a href="mailto:adam@gaius.bio">adam@gaius.bio</a>

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  more_info: >
    <p>La Jolla, CA</p>

selected_papers: false
social: true

announcements:
  enabled: true
  scrollable: true
  limit: 5

latest_posts:
  enabled: false
  scrollable: true
  limit: 3
---

I'm the **co-founder and Head of Technology of [Gaius Therapeutics](https://gaius.bio)**, an early-stage biotech company that uses a machine learning–guided "genetic switch" discovery platform to design _in vivo_ cell therapies precise enough to treat autoimmune disease.

I completed my PhD in the [Bioinformatics and Systems Biology (BISB) program](https://bioinformatics.ucsd.edu/) at UC San Diego in 2025 in [Professor Hannah Carter's Lab](https://hannahcarterlab.org/), and continued as a [Schmidt AI Postdoctoral Fellow](https://postdoc.ucsd.edu/funding/schmidt-ai/index.html) before co-founding Gaius.

My expertise sits at the intersection of **gene regulation**, **single-cell biology**, and **deep learning** — I build machine learning models that decode how the regulatory genome shapes cell biology. Along the way I created [EUGENe](/software/) and several open-source [tools](/software/), alongside my [publications](/publications/).

Outside of work, I've lived a couple of other lives worth their own pages: a decade of competitive **[basketball](/basketball/)** — UC San Diego, professional ball in Canada and Germany, and coaching — and an ongoing life in **[music](/music/)**. I also [write](/blog/) about all of it.

## Get in touch

I'm always open to new conversations and collaborations — on science, building a company, basketball, or music. Drop me a note and it'll land straight in my inbox:

<form id="contact-form" class="contact-form">
  <input type="hidden" name="access_key" value="40185b4a-3571-4989-84d5-3dfcea59ec4c" />
  <input type="hidden" name="subject" value="New message from adamklie.github.io" />
  <input type="hidden" name="from_name" value="adamklie.github.io contact form" />
  <input type="checkbox" name="botcheck" tabindex="-1" autocomplete="off" style="display: none" aria-hidden="true" />
  <div class="mb-3">
    <input type="text" name="name" class="form-control" placeholder="Your name" required />
  </div>
  <div class="mb-3">
    <input type="email" name="email" class="form-control" placeholder="Your email" required />
  </div>
  <div class="mb-3">
    <textarea name="message" rows="4" class="form-control" placeholder="Your message" required></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Send message</button>
  <span id="contact-result" class="ms-2"></span>
</form>

<script>
  (function () {
    var form = document.getElementById("contact-form");
    if (!form) return;
    var result = document.getElementById("contact-result");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      result.textContent = "Sending…";
      fetch("https://api.web3forms.com/submit", { method: "POST", body: new FormData(form) })
        .then(function (r) { return r.json().then(function (json) { return { ok: r.ok, json: json }; }); })
        .then(function (res) {
          result.textContent = res.ok ? "Thanks — your message was sent!" : (res.json.message || "Something went wrong.");
          if (res.ok) form.reset();
        })
        .catch(function () { result.textContent = "Something went wrong — please email me directly."; });
    });
  })();
</script>

Prefer email? Reach me directly at [adamklie13@gmail.com](mailto:adamklie13@gmail.com).
