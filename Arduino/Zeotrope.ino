const int controlPin1 = 2;
logic - direction to turn and applied to the H-Bridge
const int controlPin2 = 3;
const int enablePin = 9;
const int directionSwitchPin = 4;
of buttonSwitches
const int onOffSwitchStateSwitchPin = 5;
const int potPin = A5; 
potentiometer delivering continuous values
int onOffSwitchState = 0;
int previousOnOffSwitchState = 0;
int directionSwitchState = 0;
int previousDirectionSwitchState = 0;

int motorEnabled = 0;
int motorSpeed = 0;
int motorDirection = 1;
void setup() {
  pinMode(directionSwitchPin,INPUT);
  pinMode(onOffSwitchStateSwitchPin,INPUT);
  pinMode(controlPin1,OUTPUT);
  pinMode(controlPin2,OUTPUT);
  pinMode(enablePin,OUTPUT);
  

  digitalWrite(enablePin,LOW);
}
void loop() {
  onOffSwitchState = digitalRead(onOffSwitchStateSwitchPin);
  delay(1);
  directionSwitchState = digitalRead(directionSwitchPin);
  motorSpeed = analogRead(potPin)/4;

  if(onOffSwitchState != previousOnOffSwitchState){ 
part allows the user to have the motor spin without having to 
hold the button itself. Otherwise we should keep pressing the 
button switch to turn the motor.   
    if(onOffSwitchState ==HIGH){ 
      motorEnabled = !motorEnabled;
    }
  }
  if (directionSwitchState != previousDirectionSwitchState) { 
    if (directionSwitchState == HIGH) {
      motorDirection = !motorDirection;
    }
  }
  if(motorDirection == 1){ 
    digitalWrite(controlPin1, HIGH);
    digitalWrite(controlPin2, LOW);
  }
  else {  
    digitalWrite(controlPin1, LOW);
    digitalWrite(controlPin2, HIGH);
  }

  if(motorEnabled == 1) 
    analogWrite(enablePin, motorSpeed);
  }
  else {
    analogWrite(enablePin, 0); 
  }
  
  previousDirectionSwitchState = directionSwitchState;
  previousOnOffSwitchState = onOffSwitchState;
}
