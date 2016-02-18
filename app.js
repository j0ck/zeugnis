var app = angular.module('Zeugnis', []);

app.controller('BoilerplateController', function() {
    this.boilerplates = $boilerplates;
    
    this.replaceName = function(text, name) {
        return text.replace("NAME", name);
    };

    this.categories = function() {
        res = [];
        for(b of this.boilerplates) {
            if(res.indexOf(b.category) === -1) {
                res.push(b.category);
            }     
        }
        return res;
    };
});

