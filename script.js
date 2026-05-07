// 1. Fonctions de manipulation de chaînes

// 1.1 Inverser une chaîne
function inverserChaine(str) {
    return str.split('').reverse().join('');
}

// 1.2 Compter les caractères
function compterCaracteres(str) {
    return str.length;
}

// 1.3 Mettre les mots en majuscule
function mettreMotsEnMajuscule(phrase) {
    return phrase.split(' ').map(mot => mot.charAt(0).toUpperCase() + mot.slice(1)).join(' ');
}

// 2. Fonctions de tableau

// 2.1 Rechercher le maximum
function trouverMaximum(tab) {
    return Math.max(...tab);
}

// 2.2 Rechercher le minimum
function trouverMinimum(tab) {
    return Math.min(...tab);
}

// 2.3 Somme d'un tableau
function sommeTableau(tab) {
    return tab.reduce((acc, val) => acc + val, 0);
}

// 2.4 Filtrer le tableau
function filtrerTableau(tab, condition) {
    return tab.filter(condition);
}

// 3. Fonctions mathématiques

// 3.1 Factorielle
function factorielle(n) {
    if (n === 0) return 1;
    return n * factorielle(n - 1);
}

// 3.2 Vérification des nombres premiers
function estPremier(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// 3.3 Suite de Fibonacci
function suiteFibonacci(n) {
    let fibo = [0, 1];
    for (let i = 2; i < n; i++) {
        fibo.push(fibo[i - 1] + fibo[i - 2]);
    }
    return fibo;
}

// Test des fonctions avec des exemples

// 1. Test des fonctions de manipulation de chaînes
console.log(inverserChaine("hello")); // "olleh"
console.log(compterCaracteres("hello")); // 5
console.log(mettreMotsEnMajuscule("bonjour tout le monde")); // "Bonjour Tout Le Monde"

// 2. Test des fonctions de tableau
console.log(trouverMaximum([3, 1, 7, 9])); // 9
console.log(trouverMinimum([3, 1, 7, 9])); // 1
console.log(sommeTableau([3, 1, 7, 9])); // 20
console.log(filtrerTableau([3, 1, 7, 9], x => x > 5)); // [7, 9]

// 3. Test des fonctions mathématiques
console.log(factorielle(5)); // 120
console.log(estPremier(7)); // true
console.log(estPremier(10)); // false
console.log(suiteFibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
