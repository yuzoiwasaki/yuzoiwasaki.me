<script>
  import profile from "$lib/images/profile.jpg";
  import { page } from "$app/stores";
  import Header from "./Header.svelte";
  import AboutMe from "./AboutMe.svelte";
  import Experience from "./Experience.svelte";
  import Skill from "./Skill.svelte";
  import Article from "./Article.svelte";
  import Talk from "./Talk.svelte";
  import Contact from "./Contact.svelte";
  import Footer from "./Footer.svelte";

  export let data;

  const { skills, articles, talks } = data;

  const title = "Yuzo Iwasaki のポートフォリオサイト";
  const description =
    "エンジニア歴15年程度のベテランエンジニアです。ソフトウェアエンジニアリングをはじめ、SREやマネジメント、採用、IT統制など幅広く関わってきました。HRTを大切にする優しいチームが好きで、自らがマネージャーの際はそのようなチーム作りを心掛けています。";
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

<Skill {skills} />

<Article {articles} />

<Talk {talks} />

<Contact />

<Footer />

<style>
  :global(body) {
    font-family: "Arial", sans-serif;
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
    color: #007bff;
    text-decoration: none;
  }

  :global(a:hover) {
    text-decoration: underline;
  }
</style>
