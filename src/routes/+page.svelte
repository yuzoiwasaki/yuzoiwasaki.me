<script>
  import profile from '$lib/images/profile.jpg'
</script>

<svelte:head>
  <title>Your Name - Portfolio</title>
  <!-- Font Awesome CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-BcJBDj8eI9d0/DScRBmF1+tdIrmlr92XNTwCGiqbcHTFq9TWgz6auTLTKA7evdTZ4hj0E1o2BoWtP62j/hhXuQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</svelte:head>

<header>
  <img src={profile} alt="Your Name">
  <h1>Your Name</h1>
  <p>Web Developer</p>

  <div class="profile-icons">
    <a href="https://twitter.com/your_twitter_username" target="_blank"><i class="fab fa-twitter"></i></a>
    <a href="https://github.com/your_github_username" target="_blank"><i class="fab fa-github"></i></a>
  </div>
</header>

 <section>
  <h2>About Me</h2>
  <p>こんにちは！私は〇〇と申します。Web開発者として〇〇年の経験があります。...</p>
</section>

<section>
  <h2>Skills</h2>
  <div class="skills-container">
    <div class="skill-card">
      <h3>HTML</h3>
      <p>Webページの構造を作成するためのマークアップ言語です。</p>
      <a href="/skills/html">Read More</a>
    </div>

    <div class="skill-card">
      <h3>CSS</h3>
      <p>Webページのスタイルを管理するためのスタイルシート言語です。</p>
      <a href="/skills/css">Read More</a>
    </div>
  </div>
 </section>

 <section>
  <h2>Contact</h2>
  <p>お問い合わせは以下のメールアドレスまでお気軽にどうぞ：<a href="mailto:your.email@example.com">your.email@example.com</a></p>
 </section>

 <footer>
  &copy; 2023 Your Name. All Rights Reserved.
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

  footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 1em 0;
  }
</style>
