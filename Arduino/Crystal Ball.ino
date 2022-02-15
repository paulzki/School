#include <LiquidCrystal.h>

LiquidCrystal lcd(12,11,5,4,3,2);

const int switchPin = 6;
int switchState = 0;
int prevSwitchState = 0;
int reply;
void setup() {
  lcd.begin(16,2);
  
  pinMode(switchPin, INPUT);
  lcd.print("Preguntame");
  lcd.setCursor(0,1); 
  lcd.print("Bola de Cristal");
}
void loop() {
  switchState=digitalRead(switchPin);

  if (switchState != prevSwitchState) {
    if (switchState == LOW) {
      reply = random(8);
      lcd.clear(); 
      lcd.setCursor(0,0);
      lcd.print("La bola dice:");
      lcd.setCursor(0,1);

      switch(reply){ 
        case 0:
        lcd.print("Si");
        break;
        case 1:
        lcd.print("Es probable");
        break;
        case 2:
        lcd.print("Fortnite");
        break;
        case 3:
        lcd.print("Buenas");
        break;
        case 4:
        lcd.print("TES");
        break;
        case 5:
        lcd.print("TYE");
        break;
        case 6:
        lcd.print("Amigo");
        break;
        case 7:
        lcd.print("No");
        break;
      }
    }
  }
  

}
