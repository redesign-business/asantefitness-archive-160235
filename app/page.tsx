const instagram = "https://www.instagram.com/asante.tahoe/";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Page() {
  return (
    <main>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=DM+Sans:wght@400;500;600;700&display=swap');
        :root { --ink:#11252a; --lake:#087b91; --ice:#dceff0; --sand:#e9e0cf; --cream:#f7f3ea; --orange:#ef6b3b; }
        * { box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body { margin:0; background:var(--cream); color:var(--ink); font-family:'DM Sans',sans-serif; }
        a { color:inherit; }
        img { display:block; max-width:100%; }
        .nav { height:84px; padding:0 5vw; display:flex; align-items:center; justify-content:space-between; background:var(--cream); border-bottom:1px solid rgba(17,37,42,.16); position:relative; z-index:2; }
        .brand { display:flex; align-items:center; gap:14px; text-decoration:none; }
        .brand img { width:138px; height:54px; object-fit:contain; }
        .brand span { border-left:1px solid #9ca6a1; padding-left:14px; font-size:11px; font-weight:700; letter-spacing:.12em; text-transform:uppercase; }
        .links { display:flex; align-items:center; gap:32px; font-size:14px; font-weight:600; }
        .links a { text-decoration:none; }
        .cta { display:inline-flex; justify-content:center; align-items:center; gap:22px; padding:15px 20px; color:white!important; background:var(--orange); text-decoration:none; font-size:13px; font-weight:700; letter-spacing:.08em; text-transform:uppercase; border:0; transition:transform .2s,background .2s; }
        .cta:hover { transform:translateY(-2px); background:#d9562a; }
        .hero { min-height:710px; display:grid; grid-template-columns:1.06fr .94fr; background:var(--ink); color:white; }
        .hero-copy { padding:9vw 6vw 7vw; display:flex; flex-direction:column; justify-content:center; position:relative; overflow:hidden; }
        .hero-copy:after { content:'TAHOE'; position:absolute; left:-14px; bottom:-39px; font:140px/1 'Archivo Black'; color:rgba(255,255,255,.035); }
        .eyebrow { display:flex; align-items:center; gap:12px; margin:0 0 26px; font-size:12px; font-weight:700; letter-spacing:.18em; text-transform:uppercase; color:#7dd5df; }
        .eyebrow:before { content:''; width:38px; height:3px; background:var(--orange); }
        h1,h2,h3,p { margin-top:0; }
        h1 { max-width:770px; margin-bottom:26px; font:clamp(58px,7.5vw,122px)/.87 'Archivo Black'; letter-spacing:-.055em; text-transform:uppercase; }
        .hero-copy > p:not(.eyebrow) { max-width:580px; color:#bed0d1; font-size:18px; line-height:1.65; }
        .hero-actions { display:flex; align-items:center; gap:27px; margin-top:20px; }
        .micro { max-width:175px; font-size:12px; line-height:1.5; color:#8eaaad; }
        .hero-media { min-height:600px; position:relative; overflow:hidden; }
        .hero-media img { width:100%; height:100%; object-fit:cover; filter:saturate(.72) contrast(1.08); }
        .hero-media:after { content:''; position:absolute; inset:0; background:linear-gradient(90deg,rgba(17,37,42,.4),transparent 40%),linear-gradient(0deg,rgba(17,37,42,.7),transparent 45%); }
        .stamp { position:absolute; right:30px; top:30px; z-index:1; width:118px; aspect-ratio:1; border:1px solid rgba(255,255,255,.55); border-radius:50%; display:grid; place-content:center; text-align:center; font-size:10px; font-weight:700; line-height:1.5; letter-spacing:.14em; text-transform:uppercase; }
        .caption { position:absolute; z-index:1; right:35px; bottom:35px; text-align:right; font-size:12px; letter-spacing:.12em; text-transform:uppercase; }
        .proofbar { display:grid; grid-template-columns:repeat(4,1fr); background:var(--lake); color:white; }
        .proofbar div { padding:26px 3vw; border-right:1px solid rgba(255,255,255,.25); }
        .proofbar strong { display:block; font:27px/1 'Archivo Black'; }
        .proofbar span { font-size:11px; letter-spacing:.1em; text-transform:uppercase; color:#bce3e7; }
        .section { padding:110px 6vw; }
        .intro { display:grid; grid-template-columns:.82fr 1.18fr; gap:7vw; align-items:center; }
        .photo-frame { position:relative; padding:0 36px 36px 0; }
        .photo-frame:after { content:''; position:absolute; right:0; bottom:0; width:72%; height:76%; background:var(--sand); z-index:-1; }
        .photo-frame img { width:100%; min-height:490px; object-fit:cover; filter:saturate(.8); }
        .kicker { color:var(--lake); font-size:12px; font-weight:700; letter-spacing:.18em; text-transform:uppercase; }
        h2 { font:clamp(43px,5.5vw,82px)/.95 'Archivo Black'; letter-spacing:-.045em; text-transform:uppercase; }
        .lead { font-size:20px; line-height:1.65; color:#496064; }
        .checks { display:grid; grid-template-columns:1fr 1fr; gap:0 28px; margin:34px 0 40px; border-top:1px solid #bfc4bc; }
        .checks div { padding:15px 0; border-bottom:1px solid #bfc4bc; font-size:14px; font-weight:600; }
        .checks div:before { content:'✓'; color:var(--orange); margin-right:10px; }
        .programs { background:var(--ice); overflow:hidden; }
        .section-head { max-width:960px; margin-bottom:55px; }
        .program-grid { display:grid; grid-template-columns:1.25fr .75fr; min-height:570px; }
        .program-photo { position:relative; }
        .program-photo img { width:100%; height:100%; min-height:540px; object-fit:cover; }
        .program-photo span { position:absolute; left:25px; bottom:25px; background:var(--cream); padding:10px 13px; font-size:11px; font-weight:700; letter-spacing:.1em; text-transform:uppercase; }
        .program-list { background:var(--ink); color:white; padding:40px; }
        .program { padding:23px 0; border-bottom:1px solid #476065; }
        .program:first-child { padding-top:0; }
        .program b { display:flex; justify-content:space-between; font:24px/1.1 'Archivo Black'; text-transform:uppercase; }
        .program b span { color:var(--orange); }
        .program p { margin:9px 0 0; color:#a9bec0; line-height:1.55; font-size:14px; }
        .trainers { display:grid; grid-template-columns:1fr 1fr; gap:7vw; align-items:center; }
        .trainer-card { position:relative; background:var(--sand); padding:30px 30px 0; }
        .trainer-card img { width:100%; height:590px; object-fit:cover; object-position:top; filter:grayscale(1) contrast(1.05); }
        .trainer-label { position:absolute; right:-25px; bottom:32px; background:var(--orange); color:white; padding:19px 22px; font:18px/1.2 'Archivo Black'; text-transform:uppercase; }
        .quote { padding:22px 0 22px 25px; border-left:4px solid var(--orange); font-size:21px; font-weight:600; line-height:1.5; }
        .facts { margin:28px 0 36px; }
        .facts p { padding-bottom:14px; border-bottom:1px solid #c5c5bb; color:#496064; }
        .community { background:var(--lake); color:white; }
        .community-wrap { display:grid; grid-template-columns:.8fr 1.2fr; gap:6vw; align-items:center; }
        .community-copy .kicker { color:#a9e3e8; }
        .community-copy p { color:#c5e4e6; font-size:17px; line-height:1.65; }
        .community-image { transform:rotate(1.5deg); border:12px solid white; box-shadow:16px 16px 0 #075d6d; }
        .community-image img { width:100%; min-height:410px; object-fit:cover; }
        .faq { display:grid; grid-template-columns:.72fr 1.28fr; gap:7vw; align-items:start; }
        .faq-visual { position:sticky; top:30px; }
        .faq-visual img { width:100%; height:240px; object-fit:contain; background:white; padding:16px; }
        .faq-visual p { margin-top:22px; color:#617174; line-height:1.6; }
        details { border-top:1px solid #aeb5b0; padding:23px 0; }
        details:last-child { border-bottom:1px solid #aeb5b0; }
        summary { cursor:pointer; list-style:none; display:flex; justify-content:space-between; gap:20px; font-size:18px; font-weight:700; }
        summary:after { content:'+'; color:var(--orange); font-size:24px; }
        details[open] summary:after { content:'−'; }
        details p { max-width:650px; margin:15px 0 0; color:#5a6d70; line-height:1.65; }
        .final { margin:0 3vw 3vw; min-height:450px; position:relative; display:grid; place-items:center; text-align:center; color:white; overflow:hidden; }
        .final img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; filter:brightness(.38) saturate(.8); }
        .final-copy { position:relative; z-index:1; max-width:850px; padding:60px 25px; }
        .final h2 { margin-bottom:18px; }
        .final p { margin-bottom:30px; color:#d4e1df; }
        footer { padding:40px 6vw; display:flex; justify-content:space-between; gap:30px; background:var(--ink); color:#9bb0b2; font-size:12px; line-height:1.7; }
        footer strong { color:white; letter-spacing:.08em; text-transform:uppercase; }
        @media (max-width:900px) {
          .links a:not(.cta) { display:none; }
          .brand span { display:none; }
          .hero,.intro,.trainers,.community-wrap,.faq { grid-template-columns:1fr; }
          .hero-copy { padding:90px 7vw; }
          .hero-media { min-height:480px; }
          .proofbar { grid-template-columns:1fr 1fr; }
          .program-grid { grid-template-columns:1fr; }
          .faq-visual { position:static; }
        }
        @media (max-width:580px) {
          .nav { height:70px; }
          .brand img { width:105px; }
          .nav .cta { padding:12px; font-size:10px; }
          h1 { font-size:54px; }
          .hero-copy { padding:75px 7vw; }
          .hero-actions { align-items:flex-start; flex-direction:column; }
          .proofbar strong { font-size:21px; }
          .proofbar div { padding:20px; }
          .section { padding:75px 7vw; }
          h2 { font-size:42px; }
          .checks { grid-template-columns:1fr; }
          .photo-frame img,.trainer-card img { min-height:0; height:410px; }
          .program-list { padding:30px 24px; }
          .trainer-label { right:-8px; }
          footer { flex-direction:column; }
        }
      `}</style>

      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top">
          <img src="/images/logo-6e5558e53b.gif" alt="A Santé Lakeside Fitness" />
          <span>Tahoe City, California</span>
        </a>
        <div className="links">
          <a href="#club">The club</a><a href="#training">Training</a><a href="#faq">FAQ</a>
          <a className="cta" href={instagram} target="_blank" rel="noreferrer">Connect on Instagram <Arrow /></a>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Lakeside fitness since the early days</p>
          <h1>Train hard. Live Tahoe.</h1>
          <p>A 9,000-square-foot local gym built for the way Tahoe moves, with strength, cardio, classes, Pilates, and experienced coaches under one roof.</p>
          <div className="hero-actions">
            <a className="cta" href={instagram} target="_blank" rel="noreferrer">Connect on Instagram <Arrow /></a>
            <span className="micro">850 North Lake Blvd.<br />Just behind Safeway</span>
          </div>
        </div>
        <div className="hero-media">
          <img src="/images/asante-39aca612a6.jpg" alt="A Santé gym on the shores of Lake Tahoe" />
          <span className="stamp">North Lake<br />Local<br />Built</span>
          <span className="caption">Work out with a view<br />Tahoe City, CA</span>
        </div>
      </header>

      <aside className="proofbar" aria-label="Club highlights">
        <div><strong>9,000</strong><span>square feet</span></div>
        <div><strong>All levels</strong><span>welcome here</span></div>
        <div><strong>Since 2001</strong><span>long-tenured coaching</span></div>
        <div><strong>Daily to monthly</strong><span>flexible access</span></div>
      </aside>

      <section className="section intro" id="club">
        <div className="photo-frame"><img src="/images/entrance450x200-7f9fe30edf.jpg" alt="Entrance to A Santé Lakeside Fitness" /></div>
        <div>
          <p className="kicker">Everything you need. Nothing you don't.</p>
          <h2>Your basecamp for better.</h2>
          <p className="lead">In a town known for getting outside, A Santé is the place that keeps you ready for it. Train for the trail, the mountain, the lake, or simply a stronger everyday.</p>
          <div className="checks">
            <div>Cardio equipment</div><div>Free weights</div><div>Selectorized equipment</div><div>Pilates studio</div><div>Locker rooms + showers</div><div>Sauna</div>
          </div>
          <a className="cta" href={instagram} target="_blank" rel="noreferrer">Connect on Instagram <Arrow /></a>
        </div>
      </section>

      <section className="section programs" id="training">
        <div className="section-head">
          <p className="kicker">Move your way</p>
          <h2>More ways to find your strong.</h2>
        </div>
        <div className="program-grid">
          <div className="program-photo">
            <img src="/images/p1000473-640x279-3680bad21f.jpg" alt="The A Santé fitness community" />
            <span>Real Tahoe people. Real momentum.</span>
          </div>
          <div className="program-list">
            <div className="program"><b>Group fitness <span>01</span></b><p>High-energy classes designed to meet every fitness level. Classes have historically been included for members.</p></div>
            <div className="program"><b>Personal training <span>02</span></b><p>One-on-one or paired sessions with coaches who bring decades of practical experience.</p></div>
            <div className="program"><b>Pilates <span>03</span></b><p>A dedicated studio for focused, intelligent movement and total-body strength.</p></div>
            <div className="program"><b>Open gym <span>04</span></b><p>Cardio, free weights, and selectorized equipment to make your own program happen.</p></div>
          </div>
        </div>
      </section>

      <section className="section trainers">
        <div>
          <p className="kicker">Coaching with roots</p>
          <h2>Experience you can train on.</h2>
          <p className="lead">A Santé's coaching history runs deep: credentials across strength, physical therapy, nutrition, and conditioning, paired with a distinctly non-intimidating approach.</p>
          <blockquote className="quote">“Give 100% effort, you'll get 100% return.”</blockquote>
          <div className="facts">
            <p><strong>Nick Casini</strong> · ISSA certified since 1988</p>
            <p><strong>Linda Tripp</strong> · At A Santé since 2001</p>
            <p><strong>Sherie Schmidt</strong> · ACE certified since 1997</p>
          </div>
          <a className="cta" href={instagram} target="_blank" rel="noreferrer">Connect on Instagram <Arrow /></a>
        </div>
        <div className="trainer-card">
          <img src="/images/sherrieschmidt_th-2cfe1ba29f.jpg" alt="A Santé personal trainer" />
          <div className="trainer-label">Personal.<br />Never intimidating.</div>
        </div>
      </section>

      <section className="section community">
        <div className="community-wrap">
          <div className="community-copy">
            <p className="kicker">A club that shows up</p>
            <h2>Built into the community.</h2>
            <p>From monthly 30-day challenges to years of practical fitness advice, A Santé has always been more than equipment. It is a place for accountability, familiar faces, and steady progress.</p>
            <a className="cta" href={instagram} target="_blank" rel="noreferrer">Connect on Instagram <Arrow /></a>
          </div>
          <div className="community-image"><img src="/images/r0fbimurk8v-5fa11cf981.png" alt="A Santé Tahoe on Instagram" /></div>
        </div>
      </section>

      <section className="section faq" id="faq">
        <div className="faq-visual">
          <p className="kicker">Know before you go</p>
          <h2>Good questions.</h2>
          <img src="/images/hours-669x272-5d36cbcecc.png" alt="An archival A Santé gym hours notice" />
          <p>Schedules and access details change. Connect with the gym directly for the latest information before visiting.</p>
        </div>
        <div>
          <details open><summary>Where is the gym?</summary><p>At 850 North Lake Boulevard in downtown Tahoe City, just behind Safeway and near the shores of Lake Tahoe.</p></details>
          <details><summary>Do I need to be a member?</summary><p>A Santé has historically offered daily, weekly, and monthly memberships, plus ten-visit punch cards and drop-in day passes. Contact the gym for current options.</p></details>
          <details><summary>What facilities are available?</summary><p>The 9,000-square-foot facility includes cardio equipment, free weights, selectorized equipment, a Pilates studio, group fitness space, locker rooms, showers, and a sauna.</p></details>
          <details><summary>Are classes beginner-friendly?</summary><p>Classes have been designed for varied fitness levels. Space may be limited and group classes have historically been first come, first served.</p></details>
          <details><summary>Can I work with a trainer?</summary><p>Yes. A Santé has offered individualized one-on-one and paired personal training with experienced, credentialed coaches.</p></details>
        </div>
      </section>

      <section className="final">
        <img src="/images/asante-300x225-d4a104fa2d.jpg" alt="A Santé Lakeside Fitness facility" />
        <div className="final-copy">
          <p className="kicker">Your mountain is waiting</p>
          <h2>Get Tahoe fit.</h2>
          <p>Start where you are. Build what comes next.</p>
          <a className="cta" href={instagram} target="_blank" rel="noreferrer">Connect on Instagram <Arrow /></a>
        </div>
      </section>

      <footer>
        <div><strong>A Santé Lakeside Fitness</strong><br />850 North Lake Blvd., Tahoe City, California</div>
        <div>Archival history, current connection.<br />Follow @asante.tahoe for the latest.</div>
        <div>Strength · Cardio · Pilates · Personal Training</div>
      </footer>
    </main>
  );
}
