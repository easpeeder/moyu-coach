window.__ModuleLoader__.load({
  id: '@local/moyu-coach',
  factory(require) {
    const React = require('react');
    const h = React.createElement;

    const NS = 'moyu-coach';
    const SLOT = 'conversation.session.header.utilities';
    const STORAGE_KEY = 'dsh.moyu-coach.settings.v1';
    const DEFAULT_SETTINGS = Object.freeze({
      monthlySalary: 0,
      workDays: 22,
      dailyHours: 8,
      startTime: '09:00',
    });

    const ZH = {
      title: '摸鱼鼓励师',
      subtitle: '看着工资每秒进账，摸鱼更有底气',
      todayEarned: '今日已入账',
      liveNow: '摸鱼中',
      beforeWork: '还没上班',
      afterWork: '今日已收工',
      restDay: '休息日 · 不打卡',
      perSecond: '每秒',
      progress: '今日进度',
      remaining: '距下班',
      untilWork: '距上班',
      dailySalary: '日薪',
      hourlySalary: '时薪',
      perSecondRate: '每秒',
      monthlySalary: '月薪',
      workDays: '每月工作天数',
      dailyHours: '每天工作小时',
      startTime: '上班时间',
      daysUnit: '天',
      hoursUnit: '小时',
      hourUnit: '小时',
      minuteUnit: '分',
      secondUnit: '秒',
      config: '计算参数',
      save: '保存并应用',
      saved: '已保存',
      close: '关闭',
      settingsHint: '按周一至周五估算；数据仅保存在本机浏览器。',
      setupPill: '设置月薪，开始摸鱼',
      setupTitle: '先设置一下',
      setupBody: '填入月薪、工作天数和每天工时，右上角就会开始每秒进账。',
      invalidSalary: '月薪需大于 0。',
      invalidDays: '工作天数需在 1–31 之间。',
      invalidHours: '每天工时需在 0.5–16 之间。',
      invalidTime: '请填写有效的上班时间。',
      invalidWindow: '上班时间 + 工时不能超过 24:00。',
      phraseSetup: '工资还没开始计算，先把自己的时薪填上。',
      phraseRest: '今天休息，摸鱼不打卡，快乐不打折。',
      phraseBefore: '还没到上班时间，先给自己充个电。',
      phraseStart: '开局第一杯咖啡，工资已经在路上。',
      phraseMid: '带薪摸鱼，每一分钟都在进账。',
      phraseAfternoon: '下午最容易困，但工资没有偷懒。',
      phraseEnd: '再坚持一下，今天的工资快集齐了。',
      phraseDone: '今日工资已全部到账，明天继续摸鱼。',
    };

    const EN = {
      title: 'Slack-Off Coach',
      subtitle: 'Watch the salary land, one second at a time',
      todayEarned: 'Credited today',
      liveNow: 'Slacking',
      beforeWork: 'Not started',
      afterWork: 'Done for today',
      restDay: 'Rest day · Off the clock',
      perSecond: 'per second',
      progress: 'Today',
      remaining: 'Until clock-out',
      untilWork: 'Until clock-in',
      dailySalary: 'Daily',
      hourlySalary: 'Hourly',
      perSecondRate: 'Per second',
      monthlySalary: 'Monthly salary',
      workDays: 'Workdays per month',
      dailyHours: 'Hours per day',
      startTime: 'Start time',
      daysUnit: 'days',
      hoursUnit: 'hours',
      hourUnit: 'h',
      minuteUnit: 'm',
      secondUnit: 's',
      config: 'Calculation',
      save: 'Save and apply',
      saved: 'Saved',
      close: 'Close',
      settingsHint: 'Estimated Monday–Friday; settings stay in this browser.',
      setupPill: 'Set salary to start',
      setupTitle: 'Set it up',
      setupBody: 'Enter your salary, workdays, and daily hours. The header starts ticking right away.',
      invalidSalary: 'Monthly salary must be greater than 0.',
      invalidDays: 'Workdays must be between 1 and 31.',
      invalidHours: 'Daily hours must be between 0.5 and 16.',
      invalidTime: 'Enter a valid start time.',
      invalidWindow: 'Start time plus daily hours cannot pass 24:00.',
      phraseSetup: 'Add your salary and the per-second count begins.',
      phraseRest: 'A rest day is still a good day. No clock, no pressure.',
      phraseBefore: 'Work has not started. Charge yourself first.',
      phraseStart: 'First coffee of the day; the salary is already moving.',
      phraseMid: 'Paid slacking: every minute is on the clock.',
      phraseAfternoon: 'The afternoon drags, but your salary does not.',
      phraseEnd: 'Almost there. Today’s salary is nearly complete.',
      phraseDone: 'Today’s salary is fully credited. Same time tomorrow.',
    };

    const CSS = `
      .dsh-moyu-root {
        position: relative;
        display: inline-flex;
        align-items: center;
        font-family: inherit;
      }
      .dsh-moyu-pill {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        height: 34px;
        padding: 0 10px 0 5px;
        box-sizing: border-box;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 999px;
        background: var(--dsw-alias-bg-layer-2);
        color: var(--dsw-alias-label-primary);
        font: inherit;
        cursor: pointer;
        white-space: nowrap;
        transition: background-color .15s ease, border-color .15s ease;
      }
      .dsh-moyu-pill:hover {
        background: var(--dsw-alias-bg-layer-1);
        border-color: var(--dsw-alias-border-l2);
      }
      .dsh-moyu-pill:focus-visible,
      .dsh-moyu-close:focus-visible,
      .dsh-moyu-save:focus-visible,
      .dsh-moyu-input:focus-visible {
        outline: 2px solid var(--dsw-alias-brand-primary);
        outline-offset: 2px;
      }
      .dsh-moyu-coin {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        flex: none;
        border-radius: 50%;
        background: var(--dsw-alias-brand-primary);
        color: var(--dsw-alias-bg-base);
        font-size: 14px;
        font-weight: 700;
        line-height: 1;
      }
      .dsh-moyu-pill.is-live .dsh-moyu-coin::after {
        content: "";
        position: absolute;
        inset: -2px;
        border: 1px solid var(--dsw-alias-state-success-primary);
        border-radius: 50%;
        animation: dsh-moyu-ping 1s ease-out infinite;
      }
      .dsh-moyu-pill-copy {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1px;
        line-height: 1.15;
      }
      .dsh-moyu-pill-top {
        display: flex;
        align-items: baseline;
        gap: 4px;
      }
      .dsh-moyu-pill-label {
        font-size: 10px;
        color: var(--dsw-alias-label-secondary);
      }
      .dsh-moyu-pill-amount {
        font-size: 12px;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
        letter-spacing: -.01em;
      }
      .dsh-moyu-pill-bottom {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 10px;
        color: var(--dsw-alias-label-secondary);
        font-variant-numeric: tabular-nums;
      }
      .dsh-moyu-dot {
        width: 5px;
        height: 5px;
        flex: none;
        border-radius: 50%;
        background: var(--dsw-alias-state-success-primary);
        animation: dsh-moyu-blink 1.4s ease-in-out infinite;
      }
      .dsh-moyu-panel {
        position: fixed;
        z-index: 80;
        width: 344px;
        max-width: calc(100vw - 16px);
        max-height: calc(100vh - 24px);
        overflow: auto;
        box-sizing: border-box;
        padding: 16px;
        border: 1px solid var(--dsw-alias-border-l2);
        border-radius: 14px;
        background: var(--dsw-alias-bg-overlay);
        color: var(--dsw-alias-label-primary);
        box-shadow: 0 12px 32px var(--dsw-alias-border-l1);
        animation: dsh-moyu-rise .14s ease-out;
      }
      .dsh-moyu-head {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 10px;
      }
      .dsh-moyu-title {
        font-size: 14px;
        font-weight: 600;
        line-height: 1.3;
      }
      .dsh-moyu-subtitle {
        margin-top: 3px;
        font-size: 11px;
        line-height: 1.4;
        color: var(--dsw-alias-label-secondary);
      }
      .dsh-moyu-close {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        flex: none;
        padding: 0;
        border: 0;
        border-radius: 6px;
        background: transparent;
        color: var(--dsw-alias-label-secondary);
        font: inherit;
        font-size: 18px;
        line-height: 1;
        cursor: pointer;
      }
      .dsh-moyu-close:hover {
        background: var(--dsw-alias-bg-layer-2);
        color: var(--dsw-alias-label-primary);
      }
      .dsh-moyu-hero {
        margin-top: 12px;
        padding: 12px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 10px;
        background: var(--dsw-alias-bg-layer-2);
      }
      .dsh-moyu-hero-label {
        font-size: 11px;
        color: var(--dsw-alias-label-secondary);
      }
      .dsh-moyu-hero-amount {
        margin-top: 2px;
        font-size: 28px;
        font-weight: 650;
        line-height: 1.15;
        letter-spacing: -.02em;
        font-variant-numeric: tabular-nums;
      }
      .dsh-moyu-setup {
        margin: 6px 0 0;
        font-size: 11px;
        line-height: 1.5;
        color: var(--dsw-alias-label-secondary);
      }
      .dsh-moyu-progress {
        height: 6px;
        margin-top: 10px;
        overflow: hidden;
        border-radius: 999px;
        background: var(--dsw-alias-border-l1);
      }
      .dsh-moyu-progress-fill {
        display: block;
        height: 100%;
        border-radius: inherit;
        background: var(--dsw-alias-brand-primary);
        transition: width .4s linear;
      }
      .dsh-moyu-meta {
        display: flex;
        justify-content: space-between;
        gap: 8px;
        margin-top: 6px;
        font-size: 10px;
        color: var(--dsw-alias-label-secondary);
        font-variant-numeric: tabular-nums;
      }
      .dsh-moyu-phrase {
        display: flex;
        align-items: flex-start;
        gap: 5px;
        margin-top: 10px;
        padding-top: 9px;
        border-top: 1px dashed var(--dsw-alias-border-l1);
        font-size: 11px;
        line-height: 1.5;
        color: var(--dsw-alias-label-secondary);
      }
      .dsh-moyu-breakdown {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 8px;
        margin-top: 12px;
        padding: 10px;
        border-radius: 8px;
        background: var(--dsw-alias-bg-layer-2);
      }
      .dsh-moyu-breakdown-item {
        min-width: 0;
      }
      .dsh-moyu-breakdown-label {
        display: block;
        font-size: 10px;
        color: var(--dsw-alias-label-secondary);
      }
      .dsh-moyu-breakdown-value {
        display: block;
        margin-top: 2px;
        overflow: hidden;
        font-size: 12px;
        font-weight: 600;
        text-overflow: ellipsis;
        font-variant-numeric: tabular-nums;
      }
      .dsh-moyu-form-title {
        margin-top: 14px;
        margin-bottom: 8px;
        font-size: 11px;
        font-weight: 600;
        color: var(--dsw-alias-label-secondary);
      }
      .dsh-moyu-fields {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 9px;
      }
      .dsh-moyu-field {
        display: flex;
        flex-direction: column;
        gap: 4px;
        min-width: 0;
      }
      .dsh-moyu-field.is-wide {
        grid-column: 1 / -1;
      }
      .dsh-moyu-field-label {
        font-size: 10px;
        color: var(--dsw-alias-label-secondary);
      }
      .dsh-moyu-input {
        width: 100%;
        height: 31px;
        box-sizing: border-box;
        padding: 0 8px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 7px;
        background: var(--dsw-alias-bg-layer-2);
        color: var(--dsw-alias-label-primary);
        font: inherit;
        font-size: 12px;
        font-variant-numeric: tabular-nums;
      }
      .dsh-moyu-input:hover {
        border-color: var(--dsw-alias-border-l2);
      }
      .dsh-moyu-input:focus {
        border-color: var(--dsw-alias-brand-primary);
      }
      .dsh-moyu-error {
        margin-top: 9px;
        font-size: 11px;
        line-height: 1.4;
        color: var(--dsw-alias-state-error-primary);
      }
      .dsh-moyu-actions {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 12px;
      }
      .dsh-moyu-save {
        flex: 1;
        height: 32px;
        border: 0;
        border-radius: 7px;
        background: var(--dsw-alias-brand-primary);
        color: var(--dsw-alias-bg-base);
        font: inherit;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
      }
      .dsh-moyu-save:hover {
        opacity: .9;
      }
      .dsh-moyu-saved {
        font-size: 11px;
        color: var(--dsw-alias-state-success-primary);
        white-space: nowrap;
      }
      .dsh-moyu-foot {
        margin-top: 9px;
        font-size: 10px;
        line-height: 1.45;
        color: var(--dsw-alias-label-secondary);
      }
      @keyframes dsh-moyu-ping {
        from { opacity: .75; transform: scale(.9); }
        to { opacity: 0; transform: scale(1.4); }
      }
      @keyframes dsh-moyu-blink {
        0%, 100% { opacity: 1; }
        50% { opacity: .35; }
      }
      @keyframes dsh-moyu-rise {
        from { opacity: 0; transform: translateY(-4px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @media (prefers-reduced-motion: reduce) {
        .dsh-moyu-pill.is-live .dsh-moyu-coin::after,
        .dsh-moyu-dot,
        .dsh-moyu-panel {
          animation: none;
        }
        .dsh-moyu-progress-fill {
          transition: none;
        }
      }
    `;

    function parseClock(value) {
      const match = /^(\d{2}):(\d{2})$/.exec(String(value || ''));
      if (!match) return null;
      const hour = Number(match[1]);
      const minute = Number(match[2]);
      if (!Number.isInteger(hour) || !Number.isInteger(minute) || hour > 23 || minute > 59) return null;
      return hour * 60 + minute;
    }

    function normalizeSettings(value) {
      const source = value && typeof value === 'object' ? value : {};
      let monthlySalary = Number(source.monthlySalary);
      let workDays = Number(source.workDays);
      let dailyHours = Number(source.dailyHours);
      let startTime = typeof source.startTime === 'string' && parseClock(source.startTime) !== null
        ? source.startTime
        : DEFAULT_SETTINGS.startTime;
      if (!Number.isFinite(monthlySalary) || monthlySalary < 0) monthlySalary = 0;
      if (!Number.isFinite(workDays) || workDays < 1 || workDays > 31) workDays = DEFAULT_SETTINGS.workDays;
      if (!Number.isFinite(dailyHours) || dailyHours < 0.5 || dailyHours > 16) dailyHours = DEFAULT_SETTINGS.dailyHours;
      if (parseClock(startTime) + dailyHours * 60 > 24 * 60) {
        startTime = DEFAULT_SETTINGS.startTime;
        dailyHours = DEFAULT_SETTINGS.dailyHours;
      }
      return { monthlySalary, workDays, dailyHours, startTime };
    }

    function loadSettings() {
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (raw) return normalizeSettings(JSON.parse(raw));
      } catch (_) {
        /* Local storage can be unavailable; defaults keep the widget usable. */
      }
      return { ...DEFAULT_SETTINGS };
    }

    function saveSettings(settings) {
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
      } catch (_) {
        /* A blocked storage write must not break the live counter. */
      }
    }

    function formatMoney(value, digits) {
      const safe = Number.isFinite(value) ? value : 0;
      return '¥' + safe.toLocaleString('en-US', {
        minimumFractionDigits: digits,
        maximumFractionDigits: digits,
      });
    }

    function formatDuration(seconds, t) {
      const total = Math.max(0, Math.ceil(seconds));
      const hours = Math.floor(total / 3600);
      const minutes = Math.floor((total % 3600) / 60);
      const secs = total % 60;
      if (hours > 0) return hours + t('hourUnit') + ' ' + minutes + t('minuteUnit');
      if (minutes > 0) return minutes + t('minuteUnit') + ' ' + secs + t('secondUnit');
      return secs + t('secondUnit');
    }

    function formatClock(minutes) {
      if (minutes === 24 * 60) return '24:00';
      const hour = Math.floor(minutes / 60);
      const minute = minutes % 60;
      return String(hour).padStart(2, '0') + ':' + String(minute).padStart(2, '0');
    }

    function getStatus(nowMs, settings) {
      const dailyRate = settings.workDays > 0 ? settings.monthlySalary / settings.workDays : 0;
      const workSeconds = Math.max(1, settings.dailyHours * 3600);
      const perSecond = dailyRate / workSeconds;
      const startMinute = parseClock(settings.startTime);
      const date = new Date(nowMs);
      const dayStart = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
      const startMs = dayStart + (startMinute === null ? 9 * 60 : startMinute) * 60000;
      const endMs = startMs + workSeconds * 1000;
      const base = {
        dailyRate,
        perSecond,
        workSeconds,
        startMs,
        endMs,
        startMinute,
        earned: 0,
        progress: 0,
        remaining: workSeconds,
      };

      if (settings.monthlySalary <= 0) return { ...base, kind: 'setup' };
      if (date.getDay() === 0 || date.getDay() === 6) return { ...base, kind: 'rest' };
      if (nowMs < startMs) {
        return { ...base, kind: 'before', remaining: (startMs - nowMs) / 1000 };
      }
      if (nowMs >= endMs) {
        return { ...base, kind: 'done', earned: dailyRate, progress: 1, remaining: 0 };
      }
      const elapsed = Math.max(0, Math.min(workSeconds, (nowMs - startMs) / 1000));
      const earned = Math.min(dailyRate, perSecond * elapsed);
      return {
        ...base,
        kind: 'working',
        earned,
        progress: dailyRate > 0 ? earned / dailyRate : 0,
        remaining: workSeconds - elapsed,
      };
    }

    function phraseFor(info, t) {
      if (info.kind === 'setup') return t('phraseSetup');
      if (info.kind === 'rest') return t('phraseRest');
      if (info.kind === 'before') return t('phraseBefore');
      if (info.kind === 'done') return t('phraseDone');
      if (info.progress < 0.15) return t('phraseStart');
      if (info.progress < 0.55) return t('phraseMid');
      if (info.progress < 0.85) return t('phraseAfternoon');
      return t('phraseEnd');
    }

    function statusText(info, t) {
      if (info.kind === 'setup') return t('setupPill');
      if (info.kind === 'rest') return t('restDay');
      if (info.kind === 'before') return t('untilWork') + ' ' + formatDuration(info.remaining, t);
      if (info.kind === 'done') return t('afterWork');
      return t('liveNow') + ' · ' + t('perSecond') + ' +' + formatMoney(info.perSecond, 4);
    }

    function toDraft(settings) {
      return {
        monthlySalary: settings.monthlySalary > 0 ? String(settings.monthlySalary) : '',
        workDays: String(settings.workDays),
        dailyHours: String(settings.dailyHours),
        startTime: settings.startTime,
      };
    }

    function CoachView({ ctx }) {
      const [settings, setSettings] = React.useState(loadSettings);
      const [now, setNow] = React.useState(Date.now);
      const [open, setOpen] = React.useState(false);
      const [draft, setDraft] = React.useState(() => toDraft(settings));
      const [error, setError] = React.useState('');
      const [saved, setSaved] = React.useState(false);
      const [anchor, setAnchor] = React.useState({ top: 56, right: 12 });
      const [, setLocaleRevision] = React.useState(0);

      const rootRef = React.useRef(null);
      const buttonRef = React.useRef(null);
      const salaryRef = React.useRef(null);

      const t = ctx.locale.bind(NS);
      const info = getStatus(now, settings);

      React.useEffect(() => ctx.locale.subscribe(() => setLocaleRevision((value) => value + 1)), [ctx]);

      React.useEffect(() => {
        const id = setInterval(() => setNow(Date.now()), 1000);
        return () => clearInterval(id);
      }, []);

      React.useEffect(() => {
        const onStorage = (event) => {
          if (event.key === STORAGE_KEY) setSettings(loadSettings());
        };
        window.addEventListener('storage', onStorage);
        return () => window.removeEventListener('storage', onStorage);
      }, []);

      function computeAnchor() {
        const element = buttonRef.current;
        if (!element) return;
        const rect = element.getBoundingClientRect();
        setAnchor({
          top: Math.round(rect.bottom + 8),
          right: Math.max(8, Math.round(window.innerWidth - rect.right)),
        });
      }

      React.useEffect(() => {
        if (settings.monthlySalary > 0) return undefined;
        const id = setTimeout(() => {
          computeAnchor();
          setOpen(true);
        }, 450);
        return () => clearTimeout(id);
        // The first-run panel opens once; later closes stay closed.
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      React.useEffect(() => {
        if (!open) return undefined;
        const reposition = () => computeAnchor();
        window.addEventListener('resize', reposition);
        window.addEventListener('scroll', reposition, true);
        return () => {
          window.removeEventListener('resize', reposition);
          window.removeEventListener('scroll', reposition, true);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [open]);

      React.useEffect(() => {
        if (!open) return undefined;
        const onPointerDown = (event) => {
          if (rootRef.current && !rootRef.current.contains(event.target)) setOpen(false);
        };
        const onKeyDown = (event) => {
          if (event.key === 'Escape') {
            setOpen(false);
            if (buttonRef.current) buttonRef.current.focus();
          }
        };
        document.addEventListener('pointerdown', onPointerDown, true);
        document.addEventListener('keydown', onKeyDown);
        return () => {
          document.removeEventListener('pointerdown', onPointerDown, true);
          document.removeEventListener('keydown', onKeyDown);
        };
      }, [open]);

      React.useEffect(() => {
        if (!open) return undefined;
        const id = setTimeout(() => {
          if (salaryRef.current) salaryRef.current.focus();
        }, 30);
        return () => clearTimeout(id);
      }, [open]);

      React.useEffect(() => {
        if (!saved) return undefined;
        const id = setTimeout(() => setSaved(false), 1800);
        return () => clearTimeout(id);
      }, [saved]);

      function togglePanel() {
        if (open) {
          setOpen(false);
          return;
        }
        computeAnchor();
        setDraft(toDraft(settings));
        setError('');
        setSaved(false);
        setOpen(true);
      }

      function updateDraft(key, value) {
        setDraft((current) => ({ ...current, [key]: value }));
        setSaved(false);
        if (error) setError('');
      }

      function submit(event) {
        event.preventDefault();
        const monthlySalary = Number(draft.monthlySalary);
        const workDays = Number(draft.workDays);
        const dailyHours = Number(draft.dailyHours);
        const startMinute = parseClock(draft.startTime);

        if (!Number.isFinite(monthlySalary) || monthlySalary <= 0) {
          setError('invalidSalary');
          return;
        }
        if (!Number.isFinite(workDays) || workDays < 1 || workDays > 31) {
          setError('invalidDays');
          return;
        }
        if (!Number.isFinite(dailyHours) || dailyHours < 0.5 || dailyHours > 16) {
          setError('invalidHours');
          return;
        }
        if (startMinute === null) {
          setError('invalidTime');
          return;
        }
        if (startMinute + dailyHours * 60 > 24 * 60) {
          setError('invalidWindow');
          return;
        }

        const next = {
          monthlySalary: Math.round(monthlySalary * 100) / 100,
          workDays: Math.round(workDays * 100) / 100,
          dailyHours: Math.round(dailyHours * 100) / 100,
          startTime: draft.startTime,
        };
        saveSettings(next);
        setSettings(next);
        setDraft(toDraft(next));
        setError('');
        setSaved(true);
        setNow(Date.now());
      }

      const percent = Math.max(0, Math.min(100, info.progress * 100));
      const percentText = percent.toFixed(1);
      const live = info.kind === 'working';
      const rightMeta = info.kind === 'working'
        ? t('remaining') + ' ' + formatDuration(info.remaining, t)
        : info.kind === 'before'
          ? t('untilWork') + ' ' + formatDuration(info.remaining, t)
          : info.kind === 'done'
            ? t('afterWork')
            : info.kind === 'rest'
              ? t('restDay')
              : '';

      const field = (key, label, attrs, wide) => h('label', {
        className: 'dsh-moyu-field' + (wide ? ' is-wide' : ''),
      },
      h('span', { className: 'dsh-moyu-field-label' }, label),
      h('input', {
        className: 'dsh-moyu-input',
        value: draft[key],
        onChange: (event) => updateDraft(key, event.target.value),
        autoComplete: 'off',
        ...attrs,
      }));

      return h('div', { className: 'dsh-moyu-root', ref: rootRef },
        h('style', null, CSS),
        h('button', {
          type: 'button',
          ref: buttonRef,
          className: 'dsh-moyu-pill' + (live ? ' is-live' : ''),
          onClick: togglePanel,
          'aria-haspopup': 'dialog',
          'aria-expanded': open,
          'aria-label': t('title') + '，' + t('todayEarned') + ' ' + formatMoney(info.earned, 2),
          title: t('title') + ' · ' + statusText(info, t),
        },
        h('span', { className: 'dsh-moyu-coin', 'aria-hidden': true }, '¥'),
        h('span', { className: 'dsh-moyu-pill-copy' },
          h('span', { className: 'dsh-moyu-pill-top' },
            h('span', { className: 'dsh-moyu-pill-label' }, t('todayEarned')),
            h('span', { className: 'dsh-moyu-pill-amount' }, formatMoney(info.earned, 2))
          ),
          h('span', { className: 'dsh-moyu-pill-bottom' },
            live ? h('span', { className: 'dsh-moyu-dot', 'aria-hidden': true }) : null,
            h('span', null, statusText(info, t))
          )
        )
        ),
        open ? h('div', {
          className: 'dsh-moyu-panel',
          role: 'dialog',
          'aria-modal': 'false',
          'aria-label': t('title'),
          style: { top: anchor.top + 'px', right: anchor.right + 'px' },
        },
        h('div', { className: 'dsh-moyu-head' },
          h('div', null,
            h('div', { className: 'dsh-moyu-title' }, t('title')),
            h('div', { className: 'dsh-moyu-subtitle' }, t('subtitle'))
          ),
          h('button', {
            type: 'button',
            className: 'dsh-moyu-close',
            onClick: () => {
              setOpen(false);
              if (buttonRef.current) buttonRef.current.focus();
            },
            'aria-label': t('close'),
          }, '×')
        ),
        h('div', { className: 'dsh-moyu-hero' },
          h('div', { className: 'dsh-moyu-hero-label' },
            info.kind === 'setup' ? t('setupTitle') : t('todayEarned')),
          h('div', { className: 'dsh-moyu-hero-amount' }, formatMoney(info.earned, 4)),
          info.kind === 'setup'
            ? h('p', { className: 'dsh-moyu-setup' }, t('setupBody'))
            : h('div', null,
              h('div', {
                className: 'dsh-moyu-progress',
                role: 'progressbar',
                'aria-label': t('progress'),
                'aria-valuemin': 0,
                'aria-valuemax': 100,
                'aria-valuenow': Math.round(percent),
              },
              h('span', { className: 'dsh-moyu-progress-fill', style: { width: percent + '%' } })
              ),
              h('div', { className: 'dsh-moyu-meta' },
                h('span', null, t('progress') + ' ' + percentText + '%'),
                h('span', null, rightMeta)
              )
            ),
          info.kind === 'setup' ? null : h('div', { className: 'dsh-moyu-phrase' },
            h('span', { 'aria-hidden': true }, '🐟'),
            h('span', null, phraseFor(info, t))
          )
        ),
        h('div', { className: 'dsh-moyu-breakdown' },
          h('div', { className: 'dsh-moyu-breakdown-item' },
            h('span', { className: 'dsh-moyu-breakdown-label' }, t('dailySalary')),
            h('span', { className: 'dsh-moyu-breakdown-value' }, formatMoney(info.dailyRate, 2))
          ),
          h('div', { className: 'dsh-moyu-breakdown-item' },
            h('span', { className: 'dsh-moyu-breakdown-label' }, t('hourlySalary')),
            h('span', { className: 'dsh-moyu-breakdown-value' }, formatMoney(settings.dailyHours > 0 ? info.dailyRate / settings.dailyHours : 0, 2))
          ),
          h('div', { className: 'dsh-moyu-breakdown-item' },
            h('span', { className: 'dsh-moyu-breakdown-label' }, t('perSecondRate')),
            h('span', { className: 'dsh-moyu-breakdown-value' }, formatMoney(info.perSecond, 4))
          )
        ),
        h('form', { onSubmit: submit },
          h('div', { className: 'dsh-moyu-form-title' }, t('config')),
          h('div', { className: 'dsh-moyu-fields' },
            field('monthlySalary', t('monthlySalary'), {
              ref: salaryRef,
              type: 'number',
              min: '0.01',
              step: '0.01',
              inputMode: 'decimal',
              placeholder: '10000',
            }, true),
            field('workDays', t('workDays') + ' (' + t('daysUnit') + ')', {
              type: 'number',
              min: '1',
              max: '31',
              step: '0.5',
              inputMode: 'decimal',
            }),
            field('dailyHours', t('dailyHours') + ' (' + t('hoursUnit') + ')', {
              type: 'number',
              min: '0.5',
              max: '16',
              step: '0.5',
              inputMode: 'decimal',
            }),
            field('startTime', t('startTime'), { type: 'time', step: '60' }, true)
          ),
          error ? h('div', { className: 'dsh-moyu-error', role: 'alert' }, t(error)) : null,
          h('div', { className: 'dsh-moyu-actions' },
            h('button', { type: 'submit', className: 'dsh-moyu-save' }, t('save')),
            saved ? h('span', { className: 'dsh-moyu-saved', role: 'status' }, t('saved')) : null
          ),
          h('div', { className: 'dsh-moyu-foot' }, t('settingsHint'))
        )
        ) : null
      );
    }

    return {
      inject: ['slots', 'locale'],
      apply(ctx) {
        ctx.effect(() => {
          const disposeZh = ctx.locale.register(NS, 'zh', ZH);
          const disposeEn = ctx.locale.register(NS, 'en', EN);
          return () => {
            disposeZh();
            disposeEn();
          };
        });

        const Widget = (props) => h(CoachView, { ...props, ctx });

        ctx.slots.inject(SLOT, () => ctx.slots.register({
          name: SLOT,
          id: 'moyu-coach',
          order: 10,
          label: () => ctx.locale.bind(NS)('title'),
        }, Widget));
      },
    };
  },
});
