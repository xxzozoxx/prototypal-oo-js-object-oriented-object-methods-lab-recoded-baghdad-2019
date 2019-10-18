function BroadMember (name,homeState,training){
  this.name = name;
  this.homeState = homeState;
  this.training = training;
}
  BroadMember.prototype.veto = function(){return 'No, I must disagree'; }
  BroadMember.prototype.approve = function(){return 'You can do that!'}
  BroadMember.prototype.doCharity = function(){return 'I like to help people.'}
  BroadMember.prototype.releasePressStatement = function(){return 'You will see great things from Scuber.';}
  BroadMember.prototype.sayHi= function (){return `Hi, my name is ${this.name}. I am from ${this.homestate}, and I was trained in ${this.training}.`;}