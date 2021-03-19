class parent{
    getMoney(){
        return this.taka;
    }
}

class child extends parent{
    taka = 500000
    getMoney(){
        console.log('Total Money : ' + (super.getMoney()+this.taka));
    }
}

var son = new child;    

console.log(son.getMoney())

