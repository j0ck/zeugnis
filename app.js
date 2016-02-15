var myApp = angular.module('App', []);

myApp.controller('AppController', ['$scope', function($inhalt) {
    
    
    $inhalt.nummer1 = function() {
        $inhalt.spice1 = 'Nummer 1';
        $inhalt.clear1 = function() {
            $inhalt.spice1 = " ";                  
        }               
    };

    $inhalt.nummer2 = function() {
        $inhalt.spice1 = 'Nummer 2';
        $inhalt.clear1 = function() {
            $inhalt.spice1 = " ";
        }
        // $inhalt.vorschau = $inhalt.spice1;   
    };
    
     $inhalt.nummer3 = function() {
        $inhalt.spice2 = 'Nummer 3';
        $inhalt.clear2 = function() {
            $inhalt.spice2 = " ";
        }
    };

    $inhalt.nummer4 = function() {
        $inhalt.spice2 = 'Nummer 4';
        $inhalt.clear2 = function() {
            $inhalt.spice2 = " ";
        }
    };
    
    $inhalt.clearAll = function() {
        $inhalt.spice1 = " ";
        $inhalt.spice2 = " ";
    }
    
}]);

