const messages = [
    "Good boy...",
    "Oooh yes daddy...",
    "🫦",
    "That's right...",
    "You like that, don't you?",
    "Such a good boy...",
    "I know you want it...",
    "You can do better than that...",
    "Ooohh...",
    "So naughty...",
    "Unnnhhh...",
    "I like that you listen to me...",
    "It's getting hot in here, isn't it?",
    "Mmmhhhphhh...",
    "Be my good boy...",
    "Keep going...",
    "Good job...",
    "Ohhhh my Goooood...",
    "That felt goooood...",
    "Ooooohhh yes daddy, keep going...",
    "You can do better than that, but I love this...",
    "You impress me greatly...",
    "Faster...",
    "Harder...",
    "I'm getting numb...",
    "🥵",
    "You're turning me on like a switch...",
    "Amazing...",
    "Don't stop now...",
    "You make me feel so...",
    "Is that all you got?",
    "Give it to me...",
    "Is that it? I know you can do more than that...",
    "💦💦💦",
    "Oooh, that's tight...",
    "Keep cliking, Daddy...",
    "Click me like you mean it...",
    "This feels like heaven...",
    "Oooohhh, I'm getting close...",
    "Yes, right there...",
    "I hope this is touchsrcreen...",
    "I feel a lot more than a button today...",
    "I'm almost there...",
    "Don't stop, Daddy...",
    "I want to feel your cursor all over me...",
    "Mmphhh, Oohhh—just keep clicking Daddy...",
    "What a good boy you are...",
    "Oooohhh, yessss... Ooohh my gooood...",
    "Hold tight...",
    "I can feel it...",
    "Ohhh, what's happening...",
    "I like this... I like this a lot...",
    "Oooh, I wasn't expecting that...",
    "UUUNNNHhhhhhhhhoohhh, I wasn't ready for this...",
    "🫦🫦🫦🫦 Oh my god...Ohhhh..."
  ];
  
  let clicks = 0;
  const button = document.querySelector("#kinky-button");
  const clickCount = document.getElementById("click-count");
  
  /* --- Settings state --- */
  
  const THEME_KEY = "kinky-theme";
  const TONE_KEY = "kinky-gender-tone";
  
  function getStoredTheme() {
    return localStorage.getItem(THEME_KEY) || "dark";
  }
  
  function getStoredTone() {
    return localStorage.getItem(TONE_KEY) || "masculine";
  }
  
  function applyTheme(theme) {
    const body = document.body;
    body.classList.remove("light-theme", "dark-theme");
    body.classList.add(theme === "light" ? "light-theme" : "dark-theme");
  }
  
  function syncThemeRadios(theme) {
    const radios = document.querySelectorAll('input[name="theme"]');
    radios.forEach(r => {
      r.checked = r.value === theme;
    });
  }
  
  function syncToneRadios(tone) {
    const radios = document.querySelectorAll('input[name="gender-tone"]');
    radios.forEach(r => {
      r.checked = r.value === tone;
    });
  }
  
  function initSettings() {
    const toggle = document.getElementById("settings-toggle");
    const modal = document.getElementById("settings-modal");
    const backdrop = document.getElementById("settings-backdrop");
    const closeBtn = document.getElementById("settings-close");
  
    const storedTheme = getStoredTheme();
    const storedTone = getStoredTone();
  
    applyTheme(storedTheme);
    syncThemeRadios(storedTheme);
    syncToneRadios(storedTone);
  
    toggle.addEventListener("click", () => {
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
    });
  
    function closeModal() {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
    }
  
    backdrop.addEventListener("click", closeModal);
    closeBtn.addEventListener("click", closeModal);
  
    document
      .querySelectorAll('input[name="theme"]')
      .forEach(radio => {
        radio.addEventListener("change", () => {
          const theme = radio.value;
          applyTheme(theme);
          localStorage.setItem(THEME_KEY, theme);
        });
      });
  
    document
      .querySelectorAll('input[name="gender-tone"]')
      .forEach(radio => {
        radio.addEventListener("change", () => {
          const tone = radio.value;
          localStorage.setItem(TONE_KEY, tone);
        });
      });
  }
  
  /* --- Message gender / tone transformation --- */
  
  function transformMessage(baseText, tone) {
    if (tone === "masculine") {
      return baseText;
    }
  
    let text = baseText;
  
    const feminineReplacements = [
      [/good\s+boy/gi, "good girl"],
      [/boy/gi, "girl"],
      [/daddy/gi, "mommy"],
      [/Daddy/gi, "Mommy"],
      [/king/gi, "queen"],
      [/sir/gi, "ma'am"]
    ];
  
    const neutralReplacements = [
      [/good\s+boy/gi, "good baby"],
      [/boy/gi, "babe"],
      [/daddy/gi, "baby"],
      [/Daddy/gi, "Baby"],
      [/king/gi, "darling"],
      [/sir/gi, "love"]
    ];
  
    const table =
      tone === "feminine" ? feminineReplacements : neutralReplacements;
  
    table.forEach(([pattern, replacement]) => {
      text = text.replace(pattern, replacement);
    });
  
    return text;
  }
  
  /* --- Floating message positioning (avoid button) --- */
  
  function getSafeRandomPosition(buttonRect) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const maxOffsetX = Math.min(500, window.innerWidth / 2 - 20);
    const maxOffsetY = Math.min(500, window.innerHeight / 2 - 40);
  
    const padding = 80; // "no-go" halo around the button for readability
    let attempts = 0;
  
    while (attempts < 30) {
      const offsetX = (Math.random() - 0.5) * 2 * maxOffsetX;
      const offsetY = (Math.random() - 0.5) * 2 * maxOffsetY;
  
      let x = centerX + offsetX;
      let y = centerY + offsetY;
  
      // Constrain to viewport-ish area
      x = Math.max(40, Math.min(window.innerWidth - 40, x));
      y = Math.max(60, Math.min(window.innerHeight - 80, y));
  
      const overlapsButton =
        x > buttonRect.left - padding &&
        x < buttonRect.right + padding &&
        y > buttonRect.top - padding &&
        y < buttonRect.bottom + padding;
  
      if (!overlapsButton) {
        return { x, y };
      }
  
      attempts++;
    }
  
    // Fallback: just go near top of screen if we somehow failed
    return {
      x: centerX,
      y: 80
    };
  }
  
  function createFloatingMessage(text) {
    const message = document.createElement("div");
    message.classList.add("floating-message");
    message.textContent = text;
  
    document.body.appendChild(message);
  
    const buttonRect = button.getBoundingClientRect();
    const { x, y } = getSafeRandomPosition(buttonRect);
  
    message.style.left = `${x}px`;
    message.style.top = `${y}px`;
  
    // Trigger fade out
    setTimeout(() => {
      message.classList.add("fade-out");
    }, 50);
  
    message.addEventListener("transitionend", () => {
      message.remove();
    });
  }
  
  /* --- Main click logic --- */
  
  button.addEventListener("click", () => {
    clicks++;
    clickCount.textContent = `Clicks: ${clicks}`;
  
    const randomMessage =
      messages[Math.floor(Math.random() * messages.length)];
  
    const tone = getStoredTone();
    const transformed = transformMessage(randomMessage, tone);
  
    createFloatingMessage(transformed);
  });
  
  /* --- Init --- */
  
  document.addEventListener("DOMContentLoaded", () => {
    initSettings();
  
    // Ensure a theme is set on first load
    applyTheme(getStoredTheme());
  });