<script>
  export let articles;
</script>

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

<style>
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
