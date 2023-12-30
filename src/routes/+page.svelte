<script>
  import profile from '$lib/images/profile.jpg'

  export let data;

  $: ({ skills } = data);
</script>

<svelte:head>
  <title>yuzoiwasakiのポートフォリオサイト</title>
  <script src="https://kit.fontawesome.com/45ebf8b346.js" crossorigin="anonymous"></script>
</svelte:head>

<header>
  <img src={profile} alt="Your Name">
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
   <h2>Representative Articles</h2>

   <a href="article1.html" class="article-link">Getting Started with Web Development</a>
   <a href="article2.html" class="article-link">CSS Tips for Better Layouts</a>
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

  h1, h2 {
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
