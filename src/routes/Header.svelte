<script>
  import profile from "$lib/images/profile.jpg";
</script>

<header>
  <img src={profile} alt="プロフィール画像" />
  <h1>Yuzo Iwasaki</h1>
  <p>
    Security / Internal Controls / Corporate IT and Engineering across everything !
  </p>

  <div class="profile-icons">
    <a href="https://twitter.com/yuzoiwasaki" target="_blank"
      ><i class="fa-brands fa-x-twitter"></i></a
    >
    <a href="https://github.com/yuzoiwasaki" target="_blank"
      ><i class="fa-brands fa-github"></i></a
    >
  </div>
</header>

<style>
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
    color: #007bff;
  }
</style>
