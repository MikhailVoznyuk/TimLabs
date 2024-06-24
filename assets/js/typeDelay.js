var contactTitle = new Typed("#contact-text", {
              
    typeSpeed: 50,
    backSpeed: 0,
    strings: ["Наши контакты:"],
    startDelay: 1000,
    loop: false,
    onComplete: function(self) { self.cursor.remove(); }

  });

  var contactEmail = new Typed("#contact-email", {
              
    typeSpeed: 50,
    backSpeed: 0,
    strings: ["Email: timlabs@rgaumsha.ru"],
    startDelay: 2200,
    loop: false,
    onComplete: function(self) { self.cursor.remove(); }

  });

  var contactPhone = new Typed("#contact-phone", {
              
    typeSpeed: 50,
    backSpeed: 0,
    strings: ["+79850064995"],
    startDelay: 4000,
    loop: false,
    onComplete: function(self) { self.cursor.remove(); }

  });

var adressTitle = new Typed("#adress-text", {     
    typeSpeed: 50,
    backSpeed: 0,
    strings: ["Адрес:"],
    startDelay: 1000,
    loop: false,
    onComplete: function(self) { self.cursor.remove(); }
  });

var adress = new Typed("#adress", {     
    typeSpeed: 50,
    backSpeed: 0,
    strings: ["Лиственничная аллея, 4А, Москва, 127550"],
    startDelay: 2200,
    loop: false,
    onComplete: function(self) {self.cursor.remove(); }
  });

  var mapText = new Typed("#map-text", {     
    typeSpeed: 50,
    backSpeed: 0,
    strings: ["Мы на карте"],
    startDelay: 1000,
    loop: false,
    onComplete: function(self) {self.cursor.remove() }
  });

