const int PinInterruptor=8; 
unsigned long PreviousTime=0;
int InterruptorState=0;
int PreviousStateInterruptor=0;
int Led=2;
long TimeIntervalocadaLed=5000;
int c=0;
void setup() {
 for(int x=2;x<8;x++){
  pinMode(x,OUTPUT);
 }
 pinMode(PinInterruptor,INPUT);
}

void loop() {
 unsigned long ActualTime=millis();
 if(ActualTime-PreviousTime>TimeIntervalocadaLed){
  PreviousTime=ActualTime;
  digitalWrite(Led,HIGH);
  Led++;
  if(Led==7){ 
    delay(2500);
    c=0;
    while(c<5){
     for(int x=2;x<8;x++){
      digitalWrite(x,LOW);
     }
     delay(500);
     for(int x=2;x<8;x++){
      digitalWrite(x,HIGH);
     } 
     delay(500);
     c++;  
    }
  }
 }
 InterruptorState=digitalRead(PinInterruptor);
  if(InterruptorState !=PreviousStateInterruptor){ 
    for(int x=2;x<8;x++){
     digitalWrite(x,LOW);
    }
    Led=2;
    PreviousTime=ActualTime;
  }
  PreviousStateInterruptor=InterruptorState; 
}
