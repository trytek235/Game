// KOD JAVASCRIPT GRY PSPA - Podróż Statkiem Pośród Asteroidów
//
// wersja 0.1
//



/* >>>>>>>>>>>>>>>>>>>> OBSŁUGA CANVAS - POCZĄTEK   <<<<<<<<<<<<<<<<<<<< */
    // ustalenie zmiennych dostępu do trzech warstw canvas

 
/* >>>>>>>>>>>>>>>>>>>> OBSŁUGA CANVAS - KONIEC     <<<<<<<<<<<<<<<<<<<<< */ 
 

 
/* >>>>>>>>>>>>>>>> PARAMETRY GRY  - POCZĄTEK <<<<<<<<<<<<<<<<< */

   /*  ***********  Konstruktor klasy/obiektu ParametryGry ************ */
 	
   // utworzenie zmiennej obiektowej gra za pomocą konstruktora ParametryGry


/* >>>>>>>>>>>>>>  PARAMETRY GRY  - KONIEC <<<<<<<<<<<<<<<<<<< */



/* >>>>>>>>>>>>>> TŁO ANIMACJI - POCZATĘK <<<<<<<<<<<<<<<<<<<<<<<<< */
	
     /* ***************  Elementy grafiki tła ******************* */
 

 
    
    
    /* ***************** Konstruktor klasy ParametryTla ********* */
	
    // utworzenie zmiennej obiektowej tlo za pomocą konstruktora ParametryTla tła
    
    /* ********* funkcja RysujTlo - narysowanie / przewijanego tła */

 	
/* >>>>>>>>>>>>>>>>>  TŁO ANIMACJI - KONIEC  <<<<<<<<<<<<<<<<<<<<<<<<< */
	

	
/* >>>>>>>>>>>>>>>>>  RYSUJ REZULTATY - POCZĄTEK  <<<<<<<<<<<<<<<<<<<<< */	
    /* ******** Funkcja rysująca wyniki na canvasie rezultaty ******** */
	
/* >>>>>>>>>>>>>>>>>  RYSUJ REZULTATY - KONIEC    <<<<<<<<<<<<<<<<<<<<< */	



/* >>>>>>>>>>>>>>>>>>>>>  STATEK KOSMICZNY - POCZĄTEK <<<<<<<<<<<<<<<<<<<<< */	  
    // statek kosmiczny grafika 
    
	// wysokość i szerokośc statku
	 

     /*  ****************  Konstruktor klasy Statek  ********************** */

    // utworzenie zmiennej obiektowej statek za pomocą konstruktora klasy Statek

	
     /* ***************** funkcja RysujStatekKosmiczny  ******************* */
 
/*  >>>>>>>>>>>>>  STATEK KOSMICZNY - KONIEC   <<<<<<<<<<<<<<<<<<<<< */

// ------------------------------------------------------------------

/*  >>>>>>>>>>>>>>>>>>  STEROWANIE STATKIEM - POCZĄTEK   <<<<<<<<<<<<<<<<<<<< */


   // zmienne globalne - obsługa klawiszy!


   /* ////////////// OBSŁUGA ZDARZEŃ  ////////////////// */ 
   // dodanie wywołania metod dla zdarzeń klawiatury - key down, key up
  
    /* funkcja obsługi naciśnięcia klawiszy w dół */

    /* funkcja obsługi naciśnięcia klawiszy w górę - zwolnienie klawisza */

   /* ////////////// Funkcja sterowania statkiem za pomocą klawiatury  ///////////// */
   // zadaniem funkcji oprócz kierowaniem statku góra / dół, lewo - prawo
   // pilnowanie, aby statek nie wyleciał poza obszar głównego canvasu

/* >>>>>>>>>>>>>>>>>>> STEROWANIA STATKIEM - KONIEC <<<<<<<<<<<<<<<<<<<<<<<<<<< */


 
/* >>>>>>>>>>>>>>>>>>>>>>>>> POCISKI  - POCZĄTEK <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */ 
 
  // grafika pocisku  
 
  // Zmienne tablicowa przechowująca obiekty klasy pocisk
  
  // Konstruktor klasy Pocisk
  

  /* /////////// Funkcja WystrzeleniePociskow   //////////////////// */

   

  /* ******** Funkcja rysująca pociski statku kosmicznego  ****************** */

  /* ******** Funkcja dokonująca detekcji kolizji pociskow z asteroidami  *** */

	  
/* >>>>>>>>>>>>>>>>>>>> POCISKI - KONIEC  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */ 	  
	  


/* >>>>>>>>>>>>>>>>>>>>>>>>>>> ASTEROIDY - POCZĄTEK <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */ 
	  
    // asteroida - element graficzny  
    
    // Zmienna tablicowa przechowujące informacje o obiektach klasy Asteroida

    /* ***************** Konstruktor klasy Asteroida  ****************** */

	
    /* \\\\\\\\\\\\\\\\\\\\\ Funkcja tworząca asteroidę  //////////////////////// */
    
	
	
    /* \\\\\\\\\\\\\\\\\\\\\ Funkcja rysująca asteroidy  /////////////////////// */

    /* ***************** funkcja detekcji kolizji statku z asteroidami ******* */
	
	
	/* ************** Funkcja ZderzenieStatkuzAsteroida ************************ */


/* >>>>>>>>>>>>>>>>>>>>>>>>>>> ASTEROIDY - KONIEC <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */ 



/* >>>>>>>>>>>>>>>>>>>>>>>>>>> INNE - FUNKCJE - POCZĄTEK <<<<<<<<<<<<<<<<<<<<<<<<<<<< */ 

 
/*  \\\\\\\\\\\\\\ Funkcja KoniecGry  //////////////// */
    // Funkcja rysująca tekst z informacją
    // że gra zakończyła się oraz jak
    // rozpoczącząć ponownie


/* >>>>>>>>>>>>>>>>>>>>>>>>>>> INNE - FUNKCJE - KONIEC <<<<<<<<<<<<<<<<<<<<<<<<<<<< */ 



/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  CZAS GRY - POCZĄTEK <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */
    // konstruktor klasy CzasGry, // godzina, minuta, sekunda,
    
	
	// utworzenie nowej zmiennej obiektowej typu CzasGry
  


 
    // Funkcja przeliczająca czas trwania gry
    // w zapisie czasu w formacie HH:MM:SS

/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>  KONIEC CzasGry   <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */ 


/* >>>>>>>>>>>>>>>>>>>>>> Funkcja GlownaGra - POCZĄTEK  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */
   // odpowiedzialna za glowna aniamcję Gry


 /* >>>>>>>>>>>>>>>>>>>>>> Funkcja GlownaGra  - KONIEC <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */



/* ******************* PROGRAM GŁÓWNY GRY ***************************** */

   // Uruchom timer co 1 sekundę z przeliczeniem czasu gry na zapis cyfrowy, 

   // Tworz nową asteroidę co 1000 ms


   // wywołaj główną animację GlownaGra


/* ******************* KONIEC PROGRAMU GŁÓWNEGO GRY ***************************** */


