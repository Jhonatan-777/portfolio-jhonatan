document.addEventListener("DOMContentLoaded", function ()
{
  const projectCards = document.querySelectorAll(".project-card");
  let currentIndex = 0;
  let intervalId;

  function toggleActiveClass()
  {
    projectCards.forEach((card, index) =>
    {
      if (index === currentIndex)
      {
        card.style.order = 1; // Move o quadrado atual para o final
        card.style.opacity = 1; // Torna o quadrado atual visível
        // card.style.transitionDuration = '.5s';
      } else
      {
        card.style.order = projectCards.length; // Move os outros quadrados para a posição inicial
        card.style.opacity = 0; // Define a opacidade dos outros quadrados
        // card.style.transitionDuration = '.5s';
      }
    });
    currentIndex = (currentIndex + 1) % projectCards.length;
  }

  function startAnimation()
  {
    intervalId = setInterval(toggleActiveClass, 2000); // Troca a cada 2 segundos
  }

  function pauseAnimation()
  {
    clearInterval(intervalId);
  }

  startAnimation();

  projectCards.forEach(card =>
  {
    card.addEventListener("mouseover", pauseAnimation);
    card.addEventListener("mouseout", startAnimation);
  });
});