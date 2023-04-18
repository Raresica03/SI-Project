**Proiect SI** 
*Adelina Pasculescu, Rares Padure, Alexandru Pop, Ivan Savic* 

**Tema proiectului:**
**6. Monitorizarea locurilor de parcare** 
Scopul proiectului îl reprezintă monitorizarea în timp real al locurilor de parcare și afișarea acestora într-o aplicație pentru ca soferii sa găsească cel mai apropiat loc. 

**Resurse propuse spre utilizare:**
```
● Se vor utiliza senzori de distanța, lumina, ambientali (temperatura umiditate) pentru detectarea unui loc de parcare. 
● Modulul de senzori va comunica cu o unitate centrala aflata în proximitate (pe stalp). Mai multe module vor comunica cu o singura unitate. Pentru comunicare se poate folosi BLE, Wi-Fi sau alta tehnologie la alegere 
● Unitatea centrala va agrega informația și va transmite folosind LTE, LTE-M către un server care va prelua datele. (pentru simplitate se poate renunța la unitatea centrala, și testa folosind direct Wi-Fi, dar pe strada este posibil ca tehnologia Wi-Fi sa nu fie disponibilă) 
● Optional: se poate utiliza o camera pe unitatea centrala pentru a detecta parcarea ilegală, respectiv momentele de funcționare proastă a modulelor de senzori 
● O aplicație web și/sau mobila va afișa în timp real zonele cu locuri libere de parcare. 
● Optional: se pot analiza imaginile camerelor și alerta autoritățile în cazul parcărilor ilegale. 
```
**Componente folosite:** 
```● Arduino MEGA 2560 
● Senzori de distanța și lumină SAU senzor infraroșu 
● Modul de comunicare WiFi 
● Translator de nivel 
```
**Descriere:**
Parcarea va fi dotată cu un ecran care indică numărul locurilor libere de parcare și, pentru fiecare loc de parcare, un led verde și unul roșu și un senzor care va transmite informații despre loc. 
În funcție de informația transmisă, se vor întâmpla: 
**1. Dacă locul este liber:** 
```
a. LED-ul aprins va fi cel verde, semnalând locul liber pentru cei care nu au aplicația 
b. Locul de parcare reprezentat în aplicație va fi colorat cu verde
```
**2. Dacă locul este ocupat:** 
```
a. LED-ul aprins va fi cel roșu, semnalând locul ca “ocupat” pentru cei care nu au aplicația 
b. Locul de parcare reprezentat în aplicație va fi colorat cu roșu 
c. Ecranul de la intrarea în parcare care indică numărul de locuri disponibile va afișa un număr cu 1 mai mic decât cel precedent 
```
La început ecranul de la intrare va afișa numărul total de locuri, acesta scăzând pe măsura ce se ocupă
