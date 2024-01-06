<script>
  import profile from '$lib/images/profile.jpg';
  import { page } from '$app/stores';
  import Header from './Header.svelte';
  import AboutMe from './AboutMe.svelte';
  import Experience from './Experience.svelte';
  import Talk from './Talk.svelte';
  import Contact from './Contact.svelte';
  import Footer from './Footer.svelte';

  export let data;

  $: ({ skills, articles, talks } = data);

  $: title = 'Yuzo Iwasaki のポートフォリオサイト';
  $: description = 'エンジニア歴15年程度のベテランエンジニアです。ソフトウェアエンジニアリングをはじめ、SREやマネジメント、採用、IT統制など幅広く関わってきました。HRTを大切にする優しいチームが好きで、自らがマネージャーの際はそのようなチーム作りを心掛けています。';
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={$page.url} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={profile} />
</svelte:head>

<Header />

<AboutMe />

<Experience />

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

<Talk talks={talks} />

<Contact />

<Footer />

<style>
  :global(body) {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
  }

  :global(section) {
    max-width: 800px;
    margin: 2em auto;
    padding: 2em;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  :global(h2) {
    color: #333;
  }

  :global(p) {
    line-height: 1.6;
    color: #555;
  }

  :global(a) {
    color: #007BFF;
    text-decoration: none;
  }

  :global(a:hover) {
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
</style>
