<script>
  import profile from '$lib/images/profile.jpg'

  export let data;

  $: ({ skills } = data);
</script>

<svelte:head>
  <title>Yuzo Iwasaki のポートフォリオサイト</title>
  <script src="https://kit.fontawesome.com/45ebf8b346.js" crossorigin="anonymous"></script>
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
    <h3>Web Developer at ABC Company</h3>
    <p>期間: 20XX年 - 20YY年</p>
    <p>業務内容: Webアプリケーションの開発およびメンテナンス。</p>
  </div>
</section>

<section>
  <h2>Skills</h2>
  <div class="skills-container">
    {#each skills as skill}
      <div class="skill-card">
        <h3>{skill.name}</h3>
        <p>{skill.year}</p>
        <a href="/skills/{skill.id}">Read More</a>
      </div>
    {/each}
  </div>
 </section>

 <section class="article-container">
   <h2>Articles</h2>

   <div class="article-section">
     <h3>SRE</h3>
     <a href="https://qiita.com/yuzoiwasaki/items/eb9fbcb942d6f5c6fce4" class="article-link" target="_blank">SREとDevOpsのおすすめ書籍まとめ</a>
     <a href="https://qiita.com/yuzoiwasaki/items/d8b56a98822e2b2bb6e7" class="article-link" target="_blank">CAMPFIREにSREを導入した話</a>
     <a href="https://note.com/campfire_dev/n/na9fc70a3654b" class="article-link" target="_blank">SREチームのマネージャーを引退します！</a>
     <a href="https://note.com/campfire_dev/n/n2a46e3832207" class="article-link" target="_blank">ポストモーテムとは</a>
     <a href="https://note.com/campfire_dev/n/nd34ae0bee2fa" class="article-link" target="_blank">トイルとは</a>
     <a href="https://note.com/campfire_dev/n/nd1b73ecbc17c" class="article-link" target="_blank">エラーバジェットとは</a>
     <a href="https://note.com/campfire_dev/n/n44b01a26d3d7" class="article-link" target="_blank">SREチームのインシデント対応について</a>
     <a href="https://note.com/campfire_dev/n/nfe332057001e" class="article-link" target="_blank">ポストモーテム読書会を開催しました！</a>
     <a href="https://note.com/campfire_dev/n/n9798f6d18182" class="article-link" target="_blank">プロダクションミーティングをやってみた</a>
     <a href="https://note.com/gch/n/n07ffec31d5a0" class="article-link" target="_blank">SREにおけるコンテキストの話</a>
     <a href="https://speakerdeck.com/yuzoiwasaki/xiao-saizu-zhi-deno-sre-notan-qiu" class="article-link" target="_blank">小さい組織での SRE の探求</a>
     <a href="https://speakerdeck.com/yuzoiwasaki/devopstorinfalseli-lun-toshi-jian" class="article-link" target="_blank">DevOpsとリーンの理論と実践</a>
   </div>

   <div class="article-section">
     <h3>ソフトウェアエンジニアリング</h3>
     <a href="https://qiita.com/yuzoiwasaki/items/d9b6ffa4ca1351825eee" class="article-link" target="_blank">Nuxt+Bulma+S3でライブハウス支援サイトを作った</a>
     <a href="https://qiita.com/yuzoiwasaki/items/27faa9f6b55babd783c7" class="article-link" target="_blank">imgixで遅延ロードを実装してみる</a>
     <a href="https://qiita.com/yuzoiwasaki/items/a6f03b170ca21700b969" class="article-link" target="_blank">初めてVimプラグインを自作してみた</a>
     <a href="https://zenn.dev/yuzoiwasaki/articles/e99a5a103902ba" class="article-link" target="_blank">Slack のスラッシュコマンドをサーバーレス構成で作ってみた</a>
   </div>

   <div class="article-section">
     <h3>マネジメント</h3>
     <a href="https://note.com/gch/n/ned8ffe2d19ea" class="article-link" target="_blank">エンジニアリングマネージャーとして意識していること</a>
     <a href="https://qiita.com/yuzoiwasaki/items/c37aad8b0c3aae4626e0" class="article-link" target="_blank">エンジニアリングマネージャーとしての数ヶ月を振り返る</a>
     <a href="https://note.com/gch/n/nde6c0a8d885a" class="article-link" target="_blank">VPoE評価アンケートをやってみた</a>
   </div>

   <div class="article-section">
     <h3>採用</h3>
     <a href="https://note.com/campfire_dev/n/n6d82b67a2412" class="article-link" target="_blank">SREの採用で意識していること</a>
   </div>

   <div class="article-section">
     <h3>IT統制</h3>
     <a href="https://note.com/gch/n/n218640763953" class="article-link" target="_blank">初心者のためのIT統制マニュアル</a>
     <a href="https://note.com/gch/n/nd5a5344c5fe7" class="article-link" target="_blank">2024年のIT統制はどうなるの？</a>
   </div>

   <div class="article-section">
     <h3>その他</h3>
     <a href="https://note.com/gch/n/nf6ddccf7de1e" class="article-link" target="_blank">外国人の子どもたちを対象にプログラミング教室を始めます</a>
     <a href="https://note.com/gch/n/n10b89a5b1827" class="article-link" target="_blank">プログラミングワークショップ</a>
   </div>
 </section>

 <section>
  <h2>Contact</h2>
  <p>お問い合わせは以下のメールアドレスまでお気軽にどうぞ：<a href="mailto:your.email@example.com">yuzoiwasaki0929@gmail.com</a></p>
 </section>

 <footer>
  &copy; 2023 yuzoiwasaki All Rights Reserved.
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
