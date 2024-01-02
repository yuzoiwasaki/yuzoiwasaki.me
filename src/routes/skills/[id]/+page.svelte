<script>
  export let data;

  $: ({ skill } = data);
</script>

 <section>
   <h1>{skill.name}</h1>
   <p>{skill.description}</p>
 </section>

 <style>
  h1 {
    color: #333;
  }
 </style>
