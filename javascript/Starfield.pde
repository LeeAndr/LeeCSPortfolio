void setup(){
size(1920,1080); 
}
OddballParticle oddy = new OddballParticle();
  float val = (float)(Math.random()*25+10);
NormalParticle[] particleGroup = new NormalParticle[250];
//JumboParticle Jumbo = new JumboParticle();
JumboParticle[] JparticleGroup = new JumboParticle[15];
{
for(int i=0; i<particleGroup.length; i++)
  {
    particleGroup[i]=new NormalParticle();
  }
  for(int i=0; i<JparticleGroup.length; i++)
  {
    JparticleGroup[i]=new JumboParticle();
  }
  }
void draw(){
  background(0);
oddy.move();
oddy.display();
   for(int i=0; i<particleGroup.length; i++)
  {
particleGroup[i].move();
 particleGroup[i].display();
  }
   for(int i=0; i<JparticleGroup.length; i++)
  {
JparticleGroup[i].move();
 JparticleGroup[i].display();
  }
}
public interface Movement {
  public void display();//however you want a flake to look
  public void move();//uses Math.random() somehow...might fall in an unusual way, that's ok

}
class NormalParticle implements Movement{
  //float x = (float)(Math.random()*1920);
 // float y = (float)(Math.random()*1080); 
  float x =960;
 float y = 540;
  float factor = 50;
  float angle = 0;
void display()
{stroke(255);
 fill((float)(Math.random()*255+1),(float)(Math.random()*255+1),(float)(Math.random()*255+1));
    ellipse(x, y, 25, 25);
}
void move()
{
  float Yresult =val*sin(angle);
  float Xresult =val*cos(angle);
    y=y+Yresult;
      x+=Xresult;
       angle=angle+factor;
       if(factor>=0)
       factor=factor-(float)Math.random()*0.01-0.02;
       else
       factor=factor+(float)Math.random()*0.01-0.02;
}
}

interface Particle{
}
class OddballParticle implements Particle//uses an interface
{
  //float x = (float)(Math.random()*1920);
 // float y = (float)(Math.random()*1080); 
  float x =960;
 float y = 540;
  float factor = 50;
  float angle = 0;
  void display()
{
 stroke(255);
 fill(255);
   rect(x, y, 40, 40);
}
void move()
{
  float Yresult =val*sin(angle);
  float Xresult =val*cos(angle);
    y=y+Yresult;
      x+=Xresult;
       angle=angle+factor;
       if(factor>=0)
       factor=factor-(float)Math.random()*0.2-0.1;
       else
       factor=factor+(float)Math.random()*0.2-0.1;     
}
}
class JumboParticle implements Particle //uses inheritance
{ float factor = 50;
  float angle = 0;
// float x = (float)(Math.random()*1920);
 // float y = (float)(Math.random()*1080); 
 float x =960;
 float y = 540;
void display()
{
   stroke(255);
 fill((float)(Math.random()*255+1),(float)(Math.random()*255+1),(float)(Math.random()*255+1));
   ellipse(x, y, 100, 100);
}
void move()
{float Yresult =val*sin(angle);
  float Xresult =val*cos(angle);
    y=y+Yresult;
      x+=Xresult;
       angle=angle+factor;
       if(factor>=0)
       factor=factor-(float)Math.random()*0.01-0.02;
       else
       factor=factor+(float)Math.random()*0.01-0.02;   
  
}
}
