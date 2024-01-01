<script>
  import profile from '$lib/images/profile.jpg'

  export let data;

  $: ({ skills, articles } = data);
</script>

<svelte:head>
  <title>Yuzo Iwasaki のポートフォリオサイト</title>
</svelte:head>

<header>
  <img src={profile} alt="プロフィール画像">
  <h1>Yuzo Iwasaki</h1>
  <p>Software Engineer / Site Reliability Engineer / Engineering Manager and Other</p>

  <div class="profile-icons">
    <a href="https://twitter.com/yuzoiwasaki" target="_blank"><i class="fa-brands fa-twitter"></i></a>
    <a href="https://github.com/yuzoiwasaki" target="_blank"><i class="fa-brands fa-github"></i></a>
  </div>
</header>

 <section>
  <h2>About Me</h2>
  <p>エンジニア歴15年程度のベテランエンジニアです。ソフトウェアエンジニアリングをはじめ、SREやマネジメント、採用、IT統制など幅広く関わってきました。HRTを大切にする優しいチームが好きで、自らがマネージャーの際はそのようなチーム作りを心掛けています。</p>
</section>

<section class="experience-container">
  <h2>Experience</h2>
  <div class="experience-card">
    <h3>株式会社CAMPFIRE</h3>
    <p>期間: 2016年 - 現在</p>
    <p>業務内容: 前職の経営悪化によりサーバーサイドエンジニアとしてジョイン、当初はCakePHPでできたアプリケーションの開発に関わっていました。Ruby/Railsでのリプレイスを経て、SREに転向、SREチームの立ち上げとリード、マネージャーを経験しました。その後開発チームのマネージャーを経てVPoE/プロダクト開発部長に就任。マネジメントや採用、IT統制など幅広く関わっています。</p>
  </div>
  <div class="experience-card">
    <h3>株式会社ワンズ</h3>
    <p>期間: 2015年 - 2016年</p>
    <p>業務内容: 新しいチャレンジを求めてWeb業界に転職し、プログラマとしておもにRailsアプリケーションの開発に従事しました。小さい会社だったためSEO担当も兼任しており、この時期にWeb開発の基礎とSEOについての深い知見を身に付けました。</p>
  </div>
  <div class="experience-card">
    <h3>日本サード・パーティ株式会社</h3>
    <p>期間: 2010年 - 2014年</p>
    <p>業務内容: おもに HP Factory Express というサービスにインフラエンジニアとして関わっていました。キッティング、ラッキングからソフトウェアのインストール及び設定、トラブルシューティング、シェルスクリプトやVBAを使った業務効率化など様々な業務を行いました。特にLinux周りに関わることが多く、最終的にはソフトウェアチームのリーダーとして現場を率いていました。また、会社が資格取得を奨励していたこともあり、LPICやCCNAなどのベンダ資格を4年間で10個以上取得しました。</p>
  </div>
</section>

<section>
  <h2>Skills</h2>
  <div class="skills-container">
    {#each skills as skill}
      <div class="skill-card">
        <h3>{skill.name}</h3>
        <p>{skill.year}</p>
        <div class="skill-rating">
          {#each {length: skill.star} as _}
            <i class="fas fa-star"></i>
          {/each}
        </div>
        <a href="/skills/{skill.id}">Read More</a>
      </div>
    {/each}
  </div>
 </section>

 <section class="article-container">
   <h2>Articles</h2>

   <div class="article-section">
     <h3>SRE</h3>
       {#each articles as article}
         {#if article.section === 'sre'}
           <a href="{article.url}" class="article-link" target="_blank">{article.title}</a>
         {/if}
       {/each}
   </div>

   <div class="article-section">
     <h3>ソフトウェアエンジニアリング</h3>
       {#each articles as article}
         {#if article.section === 'software-engineering'}
           <a href="{article.url}" class="article-link" target="_blank">{article.title}</a>
         {/if}
       {/each}
   </div>

   <div class="article-section">
     <h3>マネジメント</h3>
       {#each articles as article}
         {#if article.section === 'management'}
           <a href="{article.url}" class="article-link" target="_blank">{article.title}</a>
         {/if}
       {/each}
   </div>

   <div class="article-section">
     <h3>採用</h3>
       {#each articles as article}
         {#if article.section === 'recruitment'}
           <a href="{article.url}" class="article-link" target="_blank">{article.title}</a>
         {/if}
       {/each}
   </div>

   <div class="article-section">
     <h3>IT統制</h3>
       {#each articles as article}
         {#if article.section === 'it-control'}
           <a href="{article.url}" class="article-link" target="_blank">{article.title}</a>
         {/if}
       {/each}
   </div>

   <div class="article-section">
     <h3>その他</h3>
       {#each articles as article}
         {#if article.section === 'other'}
           <a href="{article.url}" class="article-link" target="_blank">{article.title}</a>
         {/if}
       {/each}
   </div>
 </section>

 <section>
  <h2>Contact</h2>
  <p>お問い合わせは以下のメールアドレスまでお気軽にどうぞ：<a href="mailto:yuzoiwasaki0929@gmail.com">yuzoiwasaki0929@gmail.com</a></p>
 </section>

 <footer>
  &copy; 2024 yuzoiwasaki All Rights Reserved.
</footer>
<style>
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
  }

  header {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 2em 0;
  }

  header img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin-bottom: 1em;
  }

  .profile-icons {
    display: flex;
    justify-content: center;
    gap: 1em;
  }

  .profile-icons i {
    font-size: 24px;
    color: #007BFF;
  }

  section {
    max-width: 800px;
    margin: 2em auto;
    padding: 2em;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  h2 {
    color: #333;
  }

  p {
    line-height: 1.6;
    color: #555;
  }

  a {
    color: #007BFF;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .social-links {
    margin-top: 1em;
  }

  .social-links a {
    display: inline-block;
    margin-right: 1em;
    color: #007BFF;
    text-decoration: none;
  }

  .social-links a:hover {
    text-decoration: underline;
  }

  .experience-container {
    margin-top: 2em;
  }

  .experience-card {
    border-left: 4px solid #007BFF;
    padding-left: 1em;
    margin-bottom: 1em;
  }

  .experience-card h3 {
    color: #333;
  }

  .experience-card p {
    color: #555;
  }

  .skills-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    justify-content: center;
  }

  .skill-card {
    max-width: 300px;
    padding: 1em;
    background-color: #f9f9f9;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    margin: 1em;
  }

  .skill-card h3 {
    color: #333;
  }

  .skill-card p {
    color: #555;
  }

  .skill-rating {
    margin-top: 0.5em;
  }

  .skill-rating i {
    font-size: 18px;
    color: #f8c200;
  }

  .article-container {
    margin-top: 2em;
  }

  .article-section {
    margin-top: 1em;
  }

  .article-link {
    display: block;
    margin-bottom: 0.5em;
  }

  footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 1em 0;
  }
</style>
