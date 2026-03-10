const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const randomBtn = document.getElementById('random-btn');
const langToggle = document.getElementById('lang-toggle');
const themeToggle = document.getElementById('theme-toggle');
const titleEl = document.getElementById('title');

const copy = {
  en: {
    title: 'Quote Bloom',
    random: 'Show Random Quote',
    langBtn: '中文',
    authorsPrefix: '— ',
  },
  zh: {
    title: '语录花园',
    random: '随机一句',
    langBtn: 'EN',
    authorsPrefix: '—— ',
  },
};

const quotes = {
  en: [
    { text: 'Simplicity is the ultimate sophistication.', author: 'Leonardo da Vinci' },
    { text: 'Small steps every day become big results.', author: 'Unknown' },
    { text: 'Design is intelligence made visible.', author: 'Alina Wheeler' },
    { text: 'Do one thing every day that scares you.', author: 'Eleanor Roosevelt' },
    { text: 'The future depends on what you do today.', author: 'Mahatma Gandhi' },
  ],
  zh: [
    { text: '千里之行，始于足下。', author: '老子' },
    { text: '种一棵树最好的时间是十年前，其次是现在。', author: '谚语' },
    { text: '心有所向，日复一日，必有精进。', author: '佚名' },
    { text: '真正的光明从自律开始。', author: '佚名' },
  ],
};

let currentLang = 'en';
let currentTheme = 'light';

const pickRandomQuote = () => {
  const items = quotes[currentLang];
  const { text, author } = items[Math.floor(Math.random() * items.length)];
  quoteEl.textContent = `“${text}”`;
  authorEl.textContent = `${copy[currentLang].authorsPrefix}${author}`;
};

const applyLanguage = () => {
  titleEl.textContent = copy[currentLang].title;
  randomBtn.textContent = copy[currentLang].random;
  langToggle.textContent = copy[currentLang].langBtn;
  pickRandomQuote();
};

const applyTheme = () => {
  document.documentElement.setAttribute('data-theme', currentTheme);
  themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
};

randomBtn.addEventListener('click', pickRandomQuote);

langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'zh' : 'en';
  applyLanguage();
});

themeToggle.addEventListener('click', () => {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme();
});

applyLanguage();
applyTheme();
