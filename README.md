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
```
package org.loose.vvs.selenium;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import java.time.Duration;
import java.time.temporal.ChronoUnit;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
```
public class SeleniumTest2 {
    private WebDriver webDriver;

    private static WebDriverManager webDriverManager;

    @BeforeAll
    static void beforeAll() {

        if (WebDriverManager.firefoxdriver().getBrowserPath().isPresent()) {
            webDriverManager = WebDriverManager.firefoxdriver();
            return;
        }
    }

    @BeforeEach
    public void setup() {
        assertNotNull(webDriverManager);
        webDriverManager.setup();
        webDriver = webDriverManager.create();
        webDriver.manage().timeouts().implicitlyWait(Duration.of(5, ChronoUnit.SECONDS));
    }

    @AfterEach
    void tearDown() {
        webDriver.quit();
    }



    @Test
    void testSearchFunctionality()
    {
        webDriver.get("https://tutorialsninja.com/demo/index.php?route=common/home");



        WebElement input = webDriver.findElement(By.xpath("/html/body/header/div/div/div[2]/div/input"));
        assertNotNull(input);
        assertEquals("text",input.getAttribute("type"));
        assertEquals("Search",input.getAttribute("placeholder"));

        Actions actions = new Actions(webDriver);
        actions.sendKeys(input, "mac").perform();

        WebElement search = webDriver.findElement(By.xpath("/html/body/header/div/div/div[2]/div/span/button"));
        search.click();
        List<WebElement> elements = webDriver.findElements(By.className("img-responsive"));

        //assertNotNull(input);
        assertEquals(4, elements.size());

    }


    @Test
    void testLogin()
    {
        webDriver.get("https://tutorialsninja.com/demo/index.php?route=common/home");
        WebElement element = webDriver.findElement(By.xpath("/html/body/nav/div/div[2]/ul/li[2]/a"));

        element.click();

        WebElement loginPage = webDriver.findElement(By.xpath("/html/body/nav/div/div[2]/ul/li[2]/ul/li[2]/a"));
        loginPage.click();

        WebElement email = webDriver.findElement(By.xpath("/html/body/div[2]/div/div/div/div[2]/div/form/div[1]/input"));
        WebElement password = webDriver.findElement(By.xpath("/html/body/div[2]/div/div/div/div[2]/div/form/div[2]/input"));
        WebElement loginButton = webDriver.findElement(By.xpath("/html/body/div[2]/div/div/div/div[2]/div/form/input"));

        email.sendKeys("daniel@email.com");
        password.sendKeys("test");

        loginButton.click();



        assertEquals("https://tutorialsninja.com/demo/index.php?route=account/account",webDriver.getCurrentUrl());

    }

    @Test
    void ClickOnLink()
    {
        webDriver.get("https://tutorialsninja.com/demo/index.php?route=common/home");



        WebElement tabletButton = webDriver.findElement(By.xpath("/html/body/div[1]/nav/div[2]/ul/li[4]/a"));



        tabletButton.click();


        assertEquals("https://tutorialsninja.com/demo/index.php?route=product/category&path=57",webDriver.getCurrentUrl());

    }
}

@Test
    public void testTitle() {
        webDriver.get("https://hiking-around-romania.web.app");

        assertEquals("HikingAroundRomania", webDriver.getTitle());
    }

    @Test
    public void test10CardsAreVisible() {
        webDriver.get("https://hiking-around-romania.web.app");

        List<WebElement> elements = webDriver.findElements(By.className("mat-card"));
        assertEquals(10, elements.size());

        for (WebElement element : elements) {
            assertNotNull(element.findElement(By.tagName("h2")));
            assertNotNull(element.getCssValue("background-image"));
        }
    }

    @Test
    public void testFilterEventsInputExistsInFutureEventsTab() {
        webDriver.get("https://hiking-around-romania.web.app");

        WebElement futureEventsTab = webDriver.findElement(By.id("mat-tab-label-0-1"));
        futureEventsTab.click();

        WebElement input = webDriver.findElement(By.tagName("input"));

        assertNotNull(input);
        assertEquals("search", input.getAttribute("type"));
        assertEquals("Search", input.getAttribute("data-placeholder"));
    }

    @Test
    public void testMoveToAboutUsPage() {
        webDriver.get("https://hiking-around-romania.web.app");

        WebElement threeDotsButton = webDriver.findElement(By.cssSelector("button[aria-label='Icon-button with a menu']"));
        threeDotsButton.click();
        WebElement aboutUsButton = webDriver.findElement(By.xpath("//*[contains(text(), 'About Us')]"));
        aboutUsButton.click();

        assertEquals("https://hiking-around-romania.web.app/about-us", webDriver.getCurrentUrl());
    }

    @Test
    public void testAboutUsPageCardHover() throws InterruptedException {
        webDriver.get("https://hiking-around-romania.web.app/about-us");
        WebElement card = webDriver.findElement(By.cssSelector("mat-card"));


        Actions actions = new Actions(webDriver);
        actions.moveToElement(card).perform();

//        uncomment to see the hover effect
//        Thread.sleep(5000);
    }

    @Test
    public void testLoginMouseClick() {
        webDriver.get("https://hiking-around-romania.web.app");

        WebElement loginButton = webDriver.findElement(By.xpath("/html/body/app-root/mat-toolbar/div/button[2]"));

        Actions actions = new Actions(webDriver);
        actions.click(loginButton).perform();

        assertEquals("https://hiking-around-romania.web.app/login", webDriver.getCurrentUrl());
    }

    @Test
    public void testRegionFilter() {
        webDriver.get("https://hiking-around-romania.web.app");

        WebElement filterInput = webDriver.findElement(By.tagName("input"));

        Actions actions = new Actions(webDriver);
        actions.sendKeys(filterInput, "Ma").perform();

        List<WebElement> elements = webDriver.findElements(By.className("mat-card"));
        assertEquals(4, elements.size());
    }
