<script>
  export let talks;
</script>

<section class="talks-container">
  <h2>Talks</h2>

  <div class="talk-card">
    {#each talks as talk}
      <h3><a href={talk.url} target="_blank">{talk.title}</a></h3>
    {/each}
  </div>
</section>

<style>
  .talks-container {
    margin-top: 2em;
  }

  .talk-card {
    color: #007bff;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .talk-card a:hover {
    color: #0056b3;
    text-decoration: underline;
  }
</style>
