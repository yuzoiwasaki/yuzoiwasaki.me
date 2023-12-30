<script>
  export let data;

  $: ({ skill } = data);
</script>

 <section>
   <h1>{skill.name}</h1>
   <p>{skill.description}</p>
 </section>

 <style>
  section {
    max-width: 800px;
    margin: 2em auto;
    padding: 2em;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  h1 {
    color: #333;
  }

  p {
    line-height: 1.6;
    color: #555;
  }
 </style>
