var Obj = {
    name: 'Bindu',
    greet: function(greeting){
        console.log(`Hello ${this.name} ${greeting}`);
    }
}

Obj.greet();
Obj.greet.call({name: 'Madhav'}, 'wassup');
Obj.greet.apply({name: 'Mounica'}, ['wassup']);          