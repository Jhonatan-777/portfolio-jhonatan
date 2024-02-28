// Scroll Reveal
setTimeout(() =>
{
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    opacity: 0,
    duration: 2500,
    delay: 200,
    // reset: true // Animations repeat
  });

  sr.reveal(`
      .home__social, .section__title, .about__img, .about__text, .resume__text, .contact__title, .contact__form, .container__others-contact
  `, { origin: 'right', interval: 100 });
  sr.reveal(`
      .home__info, .line, .resume__subtitle
  `, { origin: 'left', interval: 100 });
  sr.reveal(`
      .about__box, .line-diag, .skill, .list__skills, .project__card-reveal
  `, { interval: 100 });
  sr.reveal(`
      .portfolio__grid
  `, { origin: 'bottom', interval: 100, distance: '500px' });
}, 2000); // 5000 milliseconds = 5 seconds
